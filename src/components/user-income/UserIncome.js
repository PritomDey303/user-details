import React from "react";

const UserIncome = (props) => {
  const users = props.users;
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total = total + parseFloat(users[i].salary);
  }
  return (
    <div>
      <h1 style={{ color: "#2196f3" }}>User Income</h1>
      <h2>Total Added:{users.length}</h2>
      <h2>
        Total Income: <br />${total}
      </h2>
    </div>
  );
};

export default UserIncome;
