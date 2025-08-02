import "./IndianPlayers.css";

function OddPlayers({ players: [first, , third, , fifth] }) {
  return (
    <div className="odd-players">
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </div>
  );
}

function EvenPlayers({ players: [, second, , fourth, , sixth] }) {
  return (
    <div className="even-players">
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </div>
  );
}

const T20Players = ["Ian 1", "Ira 2"];
const RanjiTrophyPlayers = ["Amanda 3", "Chacelseoa 4", "Buck 5", "Prayaya 6"];

function IndianPlayers() {
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <>
      <div className="ind-players">
        <div className="left">
        <h1>Odd Players</h1>
        <OddPlayers players={allPlayers} />
        </div>

        <div className="right">
        <h1>Even Players</h1>
        <EvenPlayers players={allPlayers} />
        </div>
      </div>
     
    <br /><br /><br />
      
      <div className="indian-players">
      <h1>List of Indian Players Merged</h1>
      <ul>
        {allPlayers.map((player, index) => {
          return <li key={index}>{player}</li>;
        })}
      </ul>
       </div>
    </>
  );
}

export default IndianPlayers;
