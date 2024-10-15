
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL) // to get access
                                    // for the .env file 
  return (
   <>
    <h1>this is a blog with appwrite as a backend</h1>
   </>
  )
}

export default App
