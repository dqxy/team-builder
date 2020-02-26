import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.team.map(team => (
        <div className="team" key={team.id}>
          <h2>Name: {team.name}</h2>
          <h2>Email: {team.email}</h2>
          <h2>Role: {team.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Team;
