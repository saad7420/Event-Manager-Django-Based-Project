import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './components/NavigationBar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import FilterBar from './components/FilterBar';
import DeleteModal from './components/DeleteModal';

const App = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('upcoming');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('upcoming');
  const [editingEvent, setEditingEvent] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/events/');
      console.log("Full API response:", response.data);
      // Safely extract array whether wrapped or not
      const data = Array.isArray(response.data)
        ? response.data
        : response.data.events || [];
      setEvents(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setEvents([]); // fallback on failure
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = Array.isArray(events)
    ? events.filter(event => {
        const isPast = new Date(event.date) < new Date();
        const matchesFilter =
          filter === 'all' ||
          (filter === 'past' && isPast) ||
          (filter === 'upcoming' && !isPast);
        const matchesSearch = event.name
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
      })
    : [];

  const handleAddOrEdit = async data => {
    try {
      if (editingEvent) {
        await axios.put(`http://localhost:8000/api/events/${editingEvent.id}/`, data);
      } else {
        await axios.post('http://localhost:8000/api/events/', data);
      }
      fetchEvents();
      setEditingEvent(null);
      setView('upcoming');
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (deleteTarget) {
        await axios.delete(`http://localhost:8000/api/events/${deleteTarget.id}/`);
        fetchEvents();
        setDeleteTarget(null);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div>
      <NavigationBar onNavigate={setView} />
      {view === 'add' && (
        <EventForm
          onSubmit={handleAddOrEdit}
          initialData={editingEvent}
        />
      )}
      {view !== 'add' && (
        <>
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
          <EventList
            events={filteredEvents}
            onEdit={event => {
              setEditingEvent(event);
              setView('add');
            }}
            onDelete={setDeleteTarget}
          />
        </>
      )}
      <DeleteModal
        show={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default App;
