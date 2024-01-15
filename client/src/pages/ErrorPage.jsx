import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="erro_container">
        <h2 className="eerorHead">404 Eror</h2>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </>
  );
};

export default ErrorPage;
