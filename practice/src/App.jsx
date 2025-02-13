import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrememt = () => {
    setCount(count + 1);
    if (count >= 5){
      alert('You have reached the maximum value');
      setCount(5);
    }
  }

  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => {
    setIsToggle(!isToggle);
  }

  const [name, setName] = useState(''); 
  const nameFunc = (e) => {
    setName(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    setName('');
    
  }

  return (
  //  <>
  //  <h1> {count} </h1>
  //  {isToggle && <p>  TEXT VISIBLE </p>}
  //  <br />
  //   <button
  //     onClick={incrememt}> Increment </button>
  //   <button
  //     onClick={() => setCount(count - 1)}> Decrement </button>
  //   <button
  //     onClick={() => setCount(0)}> Reset </button>

  //     <br />
  //     <br />
  //   <button 
  //     onClick={toggle}> click to view the text </button>
  //  </>

  <>
    <form 
      onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='enter your name'
        onChange={nameFunc}
        value={name} />

        <button 
          type='submit'> 
          Submit </button>
    </form>
  </>
  )
}

export default App
