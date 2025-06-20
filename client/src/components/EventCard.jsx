const EventCard = ({ event, onEdit, onDelete }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{event.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {event.date} at {event.time} — {event.location}
      </h6>
      <p className="card-text">{event.description}</p>
      <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(event)}>Edit</button>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(event)}>Delete</button>
    </div>
  </div>
);
export default EventCard;
