import React, { useEffect, useState } from "react";
import { useAuth } from "../main";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const contact_data = await response.json();
        console.log("contact>>>", contact_data);
        setContact({
          username: user.username,
          email: user.email,
          message: "",
        });
        alert(contact_data.message);
      }
    } catch (err) {
      console.log(err);
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
                <h1 className="main-heading mb-3">Contact Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      placeholder="enter your email"
                      id="username"
                      required
                      autoComplete="off"
                      name="username"
                      value={contact.username}
                      onChange={handleInput}
                      readOnly
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Email</label>
                    <input
                      type="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      name="email"
                      value={contact.email}
                      onChange={handleInput}
                      readOnly
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Message:</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      className="textarea"
                      placeholder="Enter Your Message here..."
                      name="message"
                      onChange={handleInput}
                      value={contact.message}
                    ></textarea>
                  </div>

                  <br />
                  <button type="submit" className="btn-btn-submit">
                    Submit
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

export default Contact;
