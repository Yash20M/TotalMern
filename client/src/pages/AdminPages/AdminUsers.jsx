import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      console.log("Admin User data>>", data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <section className="admin-userSection">
        <div className="admin-container">
          <h2 className="admin-head">User Data</h2>
        </div>

        <div className="admin-allUsers">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser) => {
                return (
                  <>
                    <tr key={curUser._id}>
                      <td>{curUser.username}</td>
                      <td>{curUser.email}</td>
                      <td>{curUser.phone}</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
