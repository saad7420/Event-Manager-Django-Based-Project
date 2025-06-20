import React, { useState, useEffect } from 'react';

const EventForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        date: initialData.date || '',
        time: initialData.time || '',
        location: initialData.location || '',
        description: initialData.description || ''
      });
    } else {
      setFormData({
        name: '',
        date: '',
        time: '',
        location: '',
        description: ''
      });
    }
  }, [
    initialData?.name,
    initialData?.date,
    initialData?.time,
    initialData?.location,
    initialData?.description
  ]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isEditMode = initialData && Object.keys(initialData).length > 0;

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">
            {isEditMode ? 'Update Event' : 'Add Event'}
          </h3>

          <div className="mb-3">
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Event Name"
            />
          </div>

          <div className="mb-3">
            <input
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              name="time"
              type="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              className="form-control"
              placeholder="Location"
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Description"
            />
          </div>

          <button type="submit" className={`btn ${isEditMode ? 'btn-warning' : 'btn-success'} w-100`}>
            {isEditMode ? 'Update' : 'Add'} Event
          </button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;
