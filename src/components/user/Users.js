import React, { useState } from "react";
import UserDetails from "../user-details/UserDetails";
import UserIncome from "../user-income/UserIncome";
import "./Users.css";
const Users = () => {
  const [users, setusers] = useState([]);
  const incomeHandler = (userInfo) => {
    setusers([...users, userInfo]);
  };
  console.log(users);
  return (
    <div className="container users">
      <UserDetails incomeHandler={incomeHandler}></UserDetails>
      <UserIncome users={users}></UserIncome>
    </div>
  );
};

export default Users;
