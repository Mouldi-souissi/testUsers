import React, { useEffect, useState } from "react";
import useStore from "../store";
import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";

const Admin = () => {
  const users = useStore((state) => state.users).sort((a, b) => a.id - b.id);
  const getUsers = useStore((state) => state.getUsers);
  const [isEditing, setEditing] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);
  return (
    <div className="admin container mt-2">
      <div className="d-flex justify-content-between justify-content-center my-5">
        <h1 className="display4">Admin</h1>
        <button
          className="btn btn-primary"
          onClick={() => setAdding(!isAdding)}
        >
          <i className="fa fa-plus me-2" aria-hidden="true" />
          Add User
        </button>
      </div>

      {isEditing && <Edit user={user} setEditing={setEditing} />}
      {isDeleting && <Delete user={user} setDeleting={setDeleting} />}
      {isAdding && <Add setAdding={setAdding} />}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <button
                  className="btn btn-transparent"
                  onClick={() => {
                    setDeleting(!isDeleting);
                    setUser(user);
                  }}
                >
                  <i className="fa fa-trash-o text-danger" aria-hidden="true" />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-transparent"
                  onClick={() => {
                    setEditing(!isEditing);
                    setUser(user);
                  }}
                >
                  <i
                    className="fa fa-pencil-square-o text-warning"
                    aria-hidden="true"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
