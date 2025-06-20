const FilterBar = ({ filter, setFilter, search, setSearch }) => (
  <div className="container mt-4">
    <div className="row g-2 align-items-center">
      <div className="col-md-4">
        <select
          className="form-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>
      <div className="col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Search events"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </div>
  </div>
);
export default FilterBar;
