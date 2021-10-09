import React, { useState } from "react";
import useStore from "../store";

const Edit = ({ user, setEditing }) => {
  const editUser = useStore((state) => state.editUser);
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    editUser(user.id, data);
    setData("");
    setEditing(false);
  };
  return (
    <div className="admin-modal col-8 card p-5 shadow d-flex align-items-center justify-content-center">
      <h4 className="mb-4">Edit User</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          defaultValue={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          defaultValue={user.email}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setEditing(false)}
        >
          cancel
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
