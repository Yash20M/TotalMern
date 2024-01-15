import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import Logout from "./pages/Logout";
import AdminLayout from "./components/Layouts/AdminLayout";
import AdminUsers from "./pages/AdminPages/AdminUsers";
import AdminContacts from "./pages/AdminPages/AdminContacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Admin Routed */}

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
