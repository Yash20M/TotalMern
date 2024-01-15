import React, { useState } from "react";
import { useAuth } from "../main";

const About = () => {
  
  const { user } = useAuth();
  // setName(user.username);

  console.log("Abput us page", user.username);

  return (
    <>
      <div className="about_container">
        <h2>Hii {user.username} </h2>
      </div>
    </>
  );
};

export default About;
