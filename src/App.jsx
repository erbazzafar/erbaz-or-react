import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Red")
  // const getRandomColor = () =>{
  //   const letter = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i=0; i < 6; i++){
  //     color = color + letter[Math.floor(Math.random()*16)]
  //   }
  //   return color;
  // };

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor: color}}
   > 
   <div className='flex flex-row items-center mr-6 bg-white rounded-3xl justify-center '>
   <button
   onClick={()=>setColor("blue")} 
   className='bg-black text-white p-2 ml-5 mb-2 mt-4 rounded-2xl content-center'
   style = {{backgroundColor: "Blue"}}>
  Blue</button>
  <button
   onClick={()=>setColor("Purple")} 
   className='bg-black text-white p-2 ml-5 mb-2 mt-4 rounded-2xl'
   style = {{backgroundColor: "purple"}}>
  Purple</button>
  <button
   onClick={()=>setColor("Green")} 
   className='bg-black text-white p-2 ml-5 mb-2 mt-4 rounded-2xl'
   style = {{backgroundColor: "Green"}}>
  Green</button>
  <button
   onClick={()=>setColor("Olive")} 
   className='bg-black text-white p-2 ml-5 mb-2 mt-4 rounded-2xl'
   style = {{backgroundColor: "Olive"}}>
  olive</button>
  </div>
   </div>
  )
}

export default App
