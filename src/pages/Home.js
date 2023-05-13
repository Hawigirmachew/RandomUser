import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
function Home({ users, isLoading }) {
  const [username, setUserName] = useState("");
//   loading
 

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <section className="home">
      <div className="search-user">
        <label htmlFor="user-input">
        <FaSearch color="white" pa/>
        <input
          type="text"
          className="search-user-input"
          onChange={handleChange}
          placeholder="Search user"
          id="user-id"
        />
        </label>
      
       
        
      </div>
     <div className="container">
     {
        isLoading ? <Spinner />:
        users
            .filter(user => {
              if (username === "") return user;
              else if (
                user.name.first.toLowerCase().includes(username.toLocaleLowerCase())
              ) {
                return user;
              }
              
            })
            .map((user) => (
              <div className="user">
                <img src={user.picture.thumbnail} alt="" className="user-img"/>
                <div className="user-info">
                    <h2>{user.name.first}</h2>
                    <p>{user.email}</p>
                    <Link className="btn user-btn-info" to={`/user/${user.login.uuid}`}>More Info</Link>
                </div>
              </div>
            ))
     }
     </div>
    </section>
  );
}

export default Home;
