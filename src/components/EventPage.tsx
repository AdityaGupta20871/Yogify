import { useState, useEffect } from 'react';
import { Flex } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import EventCard from './EventCard';
import { Event } from '../types/Event';  // Import the Event type

const EventPage = () => {
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
  );
};

export default EventPage;
