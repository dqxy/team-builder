import React, { useState } from "react";
import ReactDOM from "react-dom";

import Team from "./components/Team";
import TeamForm from "./components/TeamForm";

import './index.css';

function App() {
  const [team, setTeam] = useState(
    [{
      id: 1,
      name: "Player One",
      email: "developer@one.com",
      role: "Developer"
    }
  ]
  );

  const addNew = player => {
    const newTeam = {
      id: Date.now(),
      name: player.name,
      email: player.email,
      role: player.role
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div className="App">
      <h1>My Teams</h1>
      {}
      <TeamForm addNew={addNew} />
      <Team team={team} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
