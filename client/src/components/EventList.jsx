import EventCard from './EventCard';

const EventList = ({ events, onEdit, onDelete }) => (
  <div className="container mt-4">
    {events.length === 0 ? (
      <p className="text-center text-muted">No events found.</p>
    ) : (
      events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))
    )}
  </div>
);
export default EventList;
