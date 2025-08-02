import './App.css'
import ListofPlayers from './components/list-of-players/ListofPlayers'
import IndianPlayers from './components/indian-players/IndianPlayers'

function App() {
 
let flag = true
  return(
    <>
     {flag ?  <ListofPlayers /> : <IndianPlayers />}
    </>   
  )
}

export default App
