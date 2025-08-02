import { useState } from "react";
import Greeting from "./components/Greeting";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClick =() => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <>
    <Greeting isLoggedIn={isLoggedIn} />
    {isLoggedIn ? (<LogoutButton onClick={onClick}/>) : (<LoginButton onClick={onClick}/>)}
    </>
  );
}

export default App;
