import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [passData, setPassData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [updateData, setUpdateData] = useState({
    fullName: "",
    phone: "",
  });
  const changePassword = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/api/user/change-password",
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passData),
        }
      );

      if (!response.ok) {
        setLoading(false);
        console.log(response.message);
        throw new Error(response.data.message);
      }

      const result = await response.json();

      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/user/update", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      console.log(response);

      if (!response.ok) {
        setLoading(false);
        console.log(response.message);
        throw new Error(response.data.message);
      }

      const result = await response.json();

      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const doUpdate = (e) => {
    e.preventDefault();
    console.log(updateData);
    updateUser();
  };
  const doPasswordChange = (e) => {
    e.preventDefault();
    console.log(passData);
    changePassword();
  };
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateData((uData) => ({
      ...uData,
      [name]: value,
    }));
  };

  const handleChangePass = (e) => {
    const { name, value } = e.target;
    setPassData((pass) => ({
      ...pass,
      [name]: value,
    }));
  };

  const logout = async () => {
    try {
      await fetch("http://localhost:3000/api/user/logout", {
        method: "GET",
        credentials: "include",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
      // console.log(result.user);
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
          {!showUpdate ? null : (
            <div className="updateContainer">
              <form onSubmit={doUpdate}>
                <h2>Name</h2>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  name="fullName"
                  onChange={handleUpdate}
                />
                <h2>Phone</h2>
                <input
                  placeholder="Enter Your Phone"
                  type="tel"
                  name="phone"
                  onChange={handleUpdate}
                />
                <button type="submit">
                  {!loading ? "Submit" : "Updating..."}
                </button>
              </form>
            </div>
          )}
          {!showCPass ? null : (
            <div className="cPassContainer">
              <form onSubmit={doPasswordChange}>
                <h2>Old Password</h2>
                <input
                  placeholder="Enter Old Password"
                  type="password"
                  name="oldPassword"
                  onChange={handleChangePass}
                />
                <h2>New Password</h2>
                <input
                  placeholder="Enter New Password"
                  type="password"
                  name="newPassword"
                  onChange={handleChangePass}
                />
                <button type="submit">
                  {!loading ? "Submit" : "Changing..."}
                </button>
              </form>
            </div>
          )}

          <div className="profileButton">
            <button>Home</button>
            <button
              onClick={() => {
                if (!showUpdate) {
                  setShowUpdate(true);
                } else {
                  setShowUpdate(false);
                }
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                if (!showCPass) {
                  setShowCPass(true);
                } else {
                  setShowCPass(false);
                }
              }}
            >
              Change Password
            </button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
