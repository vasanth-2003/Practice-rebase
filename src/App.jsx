import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Welcome To React World</h1>
      <Home/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <h1>New freature Added +1</h1>
        <p>new pragraph line added</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
