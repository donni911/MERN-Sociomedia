import React from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rodion Voinarovskyi",
      image: "https://picsum.photos/200/300",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
