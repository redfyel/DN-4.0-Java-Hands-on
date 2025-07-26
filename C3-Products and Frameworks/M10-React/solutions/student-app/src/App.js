// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import './App.css'
import  CohortDetails  from "./components/cohort-details/CohortDetails";

function App() {
  const cohorts = [
    {
      ID: "INTADMDF10 - .NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
    },
    {
      ID: "ADM21JF014 - Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
    },
    {
      ID: "CDBJF21025 - Java FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe",
    },
  ];

  return (
    <div className="App">
      {/* <Home/>
      <About />
      <Contact /> */}
       <h1>Cohort Details</h1>
      <div className="cohort-grid">
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
