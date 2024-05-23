import { Flex, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import EventCard from './EventCard';
import { Event } from '../types/Event';
import { useState,useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../amplify/data/resource';

 function EventSection() {
  const [events, setEvents] = useState<Event[]>([]);
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
          zipCode: event.zipCode ?? null,
          state: event.state ?? null,
          email: event.email ?? null,
          phone: event.phone ?? null,
          date: event.date ?? null,
          time: event.time ?? null,
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
  <Flex
    gap="24px"
    direction="column"
    width="100%"
    justifyContent="flex-start"
    alignItems="center"
    overflow="hidden"
    position="relative"
    padding="48px 0px 48px 0px"
    backgroundColor="rgba(250,250,250,1)"
  >
    <Flex
      gap="12px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      position="relative"
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(169,81,123,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Workshops
      </Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Expore yoga workshops near you
      </Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Experience interactive group workouts
      </Text>
    </Flex>
    {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
  </Flex>
  )
}
export default EventSection;