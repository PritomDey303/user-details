import React from "react";
import "./SingleUser.css";
const SingleUser = (props) => {
  //console.log(props.incomeHandler("namw"));
  const user = props.info;
  return (
    <div className="card">
      <img src={user.image} alt="" className="card-img" />
      <h1>{user.name}</h1>
      <p className="title">Salary:${user.salary}</p>
      <p>{user.address}</p>
      <p style={{ width: "100%" }}>
        <strong>Contact:</strong> <br />
        {user.email} <br />
        {user.phone}
      </p>
      <p>
        <button onClick={() => props.incomeHandler(user)}>Add</button>
      </p>
    </div>
  );
};

export default SingleUser;
