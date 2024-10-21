import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users/api/users"); // Make sure the endpoint is correct
      setUsers(response.data); // Assuming the response is an array of users
      setError(null);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleFetchData}>Fetch Data from Express</button>
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                Name: {user.name}, Email: {user.email}, Age: {user.age}
              </li>
            ))}
          </ul>
        ) : (
          <div>No users found</div>
        )}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
