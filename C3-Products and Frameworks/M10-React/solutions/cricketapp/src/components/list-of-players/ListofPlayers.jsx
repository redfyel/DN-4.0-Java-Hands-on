import "./ListofPlayers.css";

function ListofPlayers() {
  const players = [
    { name: "Athena", score: 88 },
    { name: "Calliope", score: 92 },
    { name: "Selene", score: 65 },
    { name: "Thalia", score: 74 },
    { name: "Daphne", score: 58 },
    { name: "Iris", score: 79 },
    { name: "Lyra", score: 85 },
    { name: "Phoebe", score: 63 },
    { name: "Elektra", score: 95 },
    { name: "Theia", score: 70 },
    { name: "Chloe", score: 61 },
  ];

  const playersBelow70 = players.filter((player) => player.score <= 70);

  return (
    <div className="players">
      <div className="all-players">
        <h1>List of Players</h1>

        <ul>
          {players.map((player, i) => {
            return (
              <li key={i}>
                Ms. {player.name} <span>{player.score}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="scored">
        <h1>List of Players having Scores Less than 70</h1>
        <ul>
          {playersBelow70.map((player, index) => {
            return (
              <li key={index}>
                Ms. {player.name} <span>{player.score}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListofPlayers;
