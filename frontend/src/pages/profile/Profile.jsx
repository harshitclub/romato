import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/profile", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result.user);
      setUser({
        name: result.user.fullName,
        email: result.user.email,
        phone: result.user.phone,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <main className="profile">
        <div className="profileContainer">
          <h1>Welcome {user.name}</h1>

          <div className="profileCard">
            <h2>
              Name: <span>{user.name}</span>
            </h2>
            <h2>
              Email: <span>{user.email}</span>
            </h2>
            <h2>
              Phone: <span>{user.phone}</span>
            </h2>
          </div>
          <div className="profileButton">
            <button>Home</button>
            <button>Update</button>
            <button>Change Password</button>
            <button>Logout</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
