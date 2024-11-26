import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const AddCounter = () => {
    if(counter >= 20)
      setCounter(20);
    else
    setCounter(counter + 1); 
  }
 const MinusCounter = () => {
  if (counter <= 0)
     setCounter(0);
  else  
  setCounter(counter - 1); 
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={AddCounter}>Increase Counter</button>
     <button onClick={MinusCounter}>Decrease Counter</button>
    </>
  )
}

export default App
