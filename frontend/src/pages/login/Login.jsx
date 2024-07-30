import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setUser({
        name: result?.user.fullName,
        email: result?.user.email,
        phone: result?.user.phone,
      });

      setLoading(false);
      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <main className="login">
      <section className="loginContainer">
        <div className="loginForm">
          <h1>
            {user.name !== "" ? `Welcome ${user.name}` : "Login To Romato"}
          </h1>
          <form onSubmit={handleSubmit}>
            <h3>
              Email<span>*</span>
            </h3>
            <input
              placeholder="ex. email@example.com"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <h3>
              Password<span>*</span>
            </h3>
            <input
              placeholder="ex. ********"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit">{!loading ? "Login" : "Logging..."}</button>
            <p>
              Don&apos;t Have Account - <a href="/signup">Signup</a>
            </p>
            <p>
              Forget Password - <a href="/">Click Here</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
