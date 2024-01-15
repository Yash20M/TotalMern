import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../main";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    email: "",
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

    console.log(user);
    try {
      const resposne = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(resposne);
      const res_data = await resposne.json();
      console.log(res_data);
      if (resposne.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success(res_data.message);
        navigate("/");
      } else {
        toast.error(res_data.message);
      }
    } catch (err) {
      console.log(err);
      console.log("error>>>", err);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="sectio-registration">
            <div className="container grid grid-two-cols login_div">
              <div className="registration-image">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                  alt="trying to registration"
                  width={700}
                  height={450}
                />
              </div>
              {/* lets tackle registration form  */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      onChange={handleInput}
                      value={user.email}
                      name="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      onChange={handleInput}
                      value={user.password}
                      name="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn-btn-submit">
                    Login
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

export default Login;
