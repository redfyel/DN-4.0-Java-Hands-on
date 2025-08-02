import './App.css';
import office from './image.png'

function App() {
  const element = "Office Space"

  const jsxatt = <img src={office} width = "25%" height = "25%" alt = "Office Space"/>

  const itemName = [
    {Name : "DBS", Rent : 50000, Address : "Chennai"}, 
    {Name : "GHI", Rent : 70000, Address : "Bangalore"},
    {Name : "ABC", Rent : 60000, Address : "Hyderabad"},
    {Name : "DEF", Rent : 80000, Address : "Pune"},
  ]

 

  return (
    <>
      <h1 style={{textAlign: "center", color : "#898AC4"}}>{element}, at afforadable range</h1>

      <div style ={{textAlign: "center"}}>
      {jsxatt}
      </div>

      <div className='cards'>
      {
        itemName.map((item, index) => {
           let colorRent = item.Rent<=60000 ? "red" : "green"
  let colorRentBG = item.Rent<=60000 ? "#FF6961" : "#77DD77"
          return (
            <div className = 'office-card'>
            <h1>Name: {item.Name}</h1>
      <h3 style={{color : colorRent, backgroundColor : colorRentBG, width: "140px", borderRadius : "30px", padding: "5px"}}>Rent: Rs. {item.Rent}</h3>
      <h3>Address: {item.Address}</h3>
          </div>
          )
        })
      }
      </div>
      
    </>
  );
}

export default App;
