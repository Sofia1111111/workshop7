import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Validation from "./MyComp";
export const instance = axios.create({
  baseURL: "http://localhost:3001/users",
});
const App = () => {
  const [users, setUsers] = useState([]);
  const [isUserUpdating, setIsUserUpdating] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const getUser = async () => {
    const { data } = await instance.get("");
    console.log(data);
    setUsers(data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const onDelete = async (id) => {
    await instance.delete(id);
    getUser();
  };

  return (
    <div>
      {/* <Validation
        setIsUserUpdating={setIsUserUpdating}
        getUser={getUser}
        isUserUpdating={isUserUpdating}
        selectedUser={selectedUser}
      />
      {users.map((user) => {
        return (
          <div key={user._id}>
            <h1>{user.firstName}</h1>
            <button
              onClick={() => {
                setIsUserUpdating(true);
                setSelectedUser(user);
              }}
            >
              edit
            </button>
            <button onClick={() => onDelete(user._id)}>delete</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default App;
