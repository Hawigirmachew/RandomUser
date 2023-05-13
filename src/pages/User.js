import React from "react";
import { useParams, Link } from "react-router-dom";

function User({ users }) {
  let { userId } = useParams();

  const userInfo = users.find((user) => userId === user.login.uuid);
  console.log(userInfo.login.uuid);
  return (
    <section className="userInfo">
      <div className="userInfo-img">
        <img src={userInfo.picture.large} alt="user figure" />
      </div>
      <div className="information">
        <div className="name">
          <h2>
            {userInfo.name.first + "  "}
            {userInfo.name.last}
          </h2>
         
        </div>
        <div className="location">
        <h3>Country: {userInfo.location.country}</h3>
        <p>City: {userInfo.location.city}</p>
        <p>State: {userInfo.location.state}</p>
        </div>
      </div>
    </section>
  );
}

export default User;
