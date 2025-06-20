const DeleteModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center z-3">
      <div className="bg-white p-4 rounded shadow-sm" style={{ minWidth: '300px' }}>
        <h5 className="mb-3">Confirm Deletion</h5>
        <p>Are you sure you want to delete this event?</p>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-danger" onClick={onConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
