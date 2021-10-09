import axios from "axios";
import create from "zustand";

const useStore = create((set) => ({
  users: [],
  getUsers: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => set({ users: res.data }))
      .catch((err) => console.log(err));
  },
  addUser: (user) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => set((state) => ({ users: [...state.users, res.data] })))
      .catch((err) => console.log(err));
  },
  editUser: (id, editedUser) => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/users/${id}`, editedUser)
      .then((res) =>
        set((state) => ({
          users: [...state.users.filter((el) => el.id !== id), res.data],
        }))
      )
      .catch((err) => console.log(err));
  },
  deleteUser: (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() =>
        set((state) => ({
          users: [...state.users.filter((el) => el.id !== id)],
        }))
      )
      .catch((err) => console.log(err));
  },
}));

export default useStore;
