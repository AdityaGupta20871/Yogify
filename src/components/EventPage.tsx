import { useState, useEffect } from 'react';
import { Flex,Heading,Button,Text } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import EventCard from './EventCard';
import { Event } from '../types/Event';  // Import the Event type
import { useNavigate } from 'react-router-dom';
const EventPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/form');
  };
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const client = generateClient<Schema>();
        const { data: eventData } = await client.models.Event.list();
        // Ensure the data matches the Event interface
        const formattedEventData = eventData.map((event: any) => ({
          id: event.id,
          title: event.title ?? null,
          description: event.description ?? null,
          city: event.city ?? null,
          state: event.state ?? null,
          email: event.email ?? null,
          phone: event.phone ?? null,
          time: event.time ?? null,
          date: event.date ?? null,
          venue: event.venue ?? null,
        }));
        setEvents(formattedEventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
    <Flex
    gap="750px"
    direction="row"
    width="1440px"
    justifyContent="flex-start"
    alignItems="flex-start"
    position="relative"
    padding="48px 48px 48px 48px"
    backgroundColor="rgba(250,250,250,1)"
  >
    <Flex
      width="363px"
      height="106px"
      shrink="0"
      position="relative"
    >
      <Heading
        position="absolute"
        top="0px"
        left="0px"
      >
        Workshops
      </Heading>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        position="absolute"
        top="70px"
        left="0px"
        whiteSpace="pre-wrap"
      >
        Join us for interactive workshop
      </Text>
    </Flex>
    <Button onClick={handleCreateEvent}
    >
      Create Workshop
    </Button>
  </Flex>
    <Flex
      gap="48px"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="48px 48px 48px 48px"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Flex>
    </>
  );
};

export default EventPage;
