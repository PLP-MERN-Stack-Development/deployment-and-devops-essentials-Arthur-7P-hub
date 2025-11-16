import React, { useEffect, useState } from "react";

function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bugs from your Render backend using the environment variable
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bugs`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bugs");
        }
        return res.json();
      })
      .then((data) => {
        setBugs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>MERN Bug Tracker Frontend</h1>
      {loading && <p>Loading bugs…</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {bugs.length > 0 ? (
            bugs.map((bug, index) => <li key={index}>{bug.title}</li>)
          ) : (
            <p>No bugs found</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
