const NavigationBar = ({ onNavigate }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <div className="container-fluid">
      <span className="navbar-brand fw-bold">Event Manager</span>
      <div>
        <button className="btn btn-outline-light me-2" onClick={() => onNavigate('upcoming')}>
          Upcoming Events
        </button>
        <button className="btn btn-outline-light me-2" onClick={() => onNavigate('past')}>
          Past Events
        </button>
        <button className="btn btn-light text-primary" onClick={() => onNavigate('add')}>
          Add Event
        </button>
      </div>
    </div>
  </nav>
);
export default NavigationBar;
