import React from "react";

import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (!items.length) {
    return (
      <div className="center">
        <h2>No User found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
