import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [amount,setAmount] = useState('')
  const [currency, setCurrency] = useState('')

  const sayWelcome = (message) => {
    alert( message + " First time with Shelian?")
  }

  const handleClick = () => {
    alert("I was clicked!!")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (amount) * 101.01; 
    alert(`${amount} euros is equal to ${converted} rupees`)
  }
  return (
    <>
    <div className="butons">
      
    <div className="counter">
      <h2>Count is <span>{count}</span></h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
</div>
      <div className='right'>
      <button onClick={() => sayWelcome("Welcome!")}> Say Welcome</button>
      <button onClick={handleClick}> Click on me </button>
      </div>
      </div>

      <div className='currency'>

      <h1>Currency Converter</h1>
      
      <form onSubmit={handleSubmit}>
        <label> Amount </label>
        <input type="text" value = {amount} onChange={(e) => setAmount(e.target.value)} />

        <br/>

         <label> Currency </label>
        <input type="text" value = {currency} onChange={(e) =>setCurrency(e.target.value)}/>

        <br/>

        <button type="submit">Convert Euros to Rupees</button>
      </form>
      </div>

    </>
  );
}

export default App;
