import React, { useState } from "react";
import useStore from "../store";

const Add = ({ setAdding }) => {
  const addUser = useStore((state) => state.addUser);
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    addUser(data);
    setAdding(false);
  };
  return (
    <div className="admin-modal col-8 card p-5 shadow d-flex align-items-center justify-content-center">
      <h4 className="mb-4">Add user</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="d-flex">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setAdding(false)}
        >
          cancel
        </button>
        <button className="btn btn-primary" onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Add;
