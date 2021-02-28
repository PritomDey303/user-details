import React from "react";
import UserData from "../../fakeData/UserData";
import SingleUser from "./singleUser/SingleUser";
import "./UserDetails.css";
const UserDetails = (props) => {
  //console.log(UserData);
  return (
    <div className="user-main-details">
      <h1 style={{ color: "#2196f3" }}>User Information:</h1>
      <div className="user-details">
        {UserData.map((user) => (
          <SingleUser
            info={user}
            incomeHandler={props.incomeHandler}
          ></SingleUser>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
