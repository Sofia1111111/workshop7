import React, { useEffect, useState } from "react";
import { instance } from "./App";

const Validation = ({
  getUser,
  setIsUserUpdating,
  isUserUpdating,
  selectedUser,
}) => {
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    if (isUserUpdating) {
      await instance.put(selectedUser._id, {
        firstName: "nika",
        lastName: "mikava",
        age: "20",
        email: "demadna@gmail.com",
        sex: "mail",
      });
    } else {
      await instance.post("", {
        firstName: "demna22212",
        lastName: "mikava",
        age: "20",
        email: "demadna@gmail.com",
        sex: "mail",
      });
    }
    setIsUserUpdating(false);
    getUser();
  };

  return (
    <div className="app-container">
      <form onSubmit={hanldeSubmit}>
        <button type="">Add</button>
      </form>
    </div>
  );
};

export default Validation;
