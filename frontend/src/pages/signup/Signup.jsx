import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData((pData) => ({
      ...pData,
      [name]: value,
    }));
  };

  const signupUser = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        setLoading(false);
        console.log(response.message);
        throw new Error(response.data.message);
      }

      const result = await response.json();

      console.log(result);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      throw new Error(error);
    }
  };

  const doSubmit = (e) => {
    e.preventDefault();
    signupUser();
  };

  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupForm">
          <h1>Signup To Romato</h1>
          <form onSubmit={doSubmit}>
            <h3>
              Name<span>*</span>
            </h3>
            <input
              placeholder="ex. Harshit Kumar"
              type="text"
              name="fullName"
              onChange={handleChange}
            />
            <h3>
              Phone<span>*</span>
            </h3>
            <input
              placeholder="ex. 9876543210"
              type="tel"
              name="phone"
              onChange={handleChange}
            />
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
            <h3>
              Confirm Password<span>*</span>
            </h3>
            <input placeholder="ex. ********" type="password" />
            <button type="submit">{!loading ? "Signup" : "Signing..."}</button>
            <p>
              Already Have Account - <a href="/login">login</a>
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

export default Signup;
