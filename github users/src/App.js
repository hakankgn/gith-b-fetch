import { useState } from "react";
import "./styles.css";

function App() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (value) => {
    const url = `https://api.github.com/search/users?q=${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers((prev) => [...prev, ...data.items]);
        setValue("");
      });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1>GitHub User Search</h1>
        <div className="form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(value);
            }}
          >
            <input
              type="text"
              placeholder="Search by name or e-mail"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {users.length > 0 && (
          <div className="users">
            <h2 style={{ color: "#6161df" }}>Results</h2>
            {users.map((user) => {
              return (
                <div key={user.id} className="user">
                  <div>
                    <img src={user.avatar_url} alt="avatar" />
                  </div>
                  <div>
                    <a href={user.html_url} target="_blank">
                      {user.login}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
