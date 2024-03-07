import React from 'react';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

// const CollegeBasketballTeams = require('./CollegeBasketballTeams.json')
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}
// these hav eto be contained in something
function Welcome() {
  return (
    <div>
      <p>March Madness Is Upon Us</p>
      <h1>Let's take a look at our teams.</h1>
    </div>
  );
}

class TeamCard extends React.Component<Team> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>School Name: {oneTeam.school}</h2>
        <h2>Mascot: {oneTeam.name}</h2>
        <h2>City: {oneTeam.city}</h2>
        <h2>State: {oneTeam.state}</h2>
      </div>
    );
  }
}

function TeamList() {
  return (
    // go out and get one band and return these things
    <div>
      {CollegeBasketballTeams.teams.map((team: Team) => (
        <TeamCard key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  // nothing is enforced by default so we have
  // to install ESLint to make consis

  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
