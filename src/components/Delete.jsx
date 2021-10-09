import React from "react";
import useStore from "../store";

const Delete = ({ user, setDeleting }) => {
  const deleteUser = useStore((state) => state.deleteUser);
  const handleDelete = () => {
    deleteUser(user.id);
    setDeleting(false);
  };
  return (
    <div className="admin-modal col-8 card p-5 shadow d-flex align-items-center justify-content-center">
      <h4 className="mb-4">Are you sure you want to delte {user.name}</h4>
      <div className="d-flex">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setDeleting(false)}
        >
          No
        </button>
        <button className="btn btn-primary" onClick={handleDelete}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Delete;
