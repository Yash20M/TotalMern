import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../main";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user>>", user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("resDat>>>", res_data);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success(res_data.message)
        navigate("/login");
      } else {
        toast.error(res_data.message);
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="sectio-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="https://st3.depositphotos.com/35530942/37682/v/450/depositphotos_376824262-stock-illustration-online-registration-sign-concept-young.jpg"
                  alt="trying to registration"
                />
              </div>
              {/* lets tackle registration form  */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Register form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                      maxLength={10}
                      min={10}
                      max={10}
                      minLength={10}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn-btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
