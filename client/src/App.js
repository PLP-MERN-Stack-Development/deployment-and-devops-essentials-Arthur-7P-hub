import React, { useEffect, useState } from "react";

function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this with your deployed backend URL
  const BACKEND_URL = "https://arthur-backend-deployment-file.onrender.com";

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/bugs`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBugs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBugs();
  }, []);

  if (loading) return <p>Loading bugs…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>MERN Bug Tracker Frontend</h1>
      {bugs.length === 0 ? (
        <p>No bugs found.</p>
      ) : (
        <ul>
          {bugs.map((bug) => (
            <li key={bug._id}>
              <strong>{bug.title}</strong>: {bug.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
