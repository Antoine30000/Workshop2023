import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Pages/Homepage'

function App() {

  return (
    <Routes>
      <Route  path="/" Component={Homepage} />  
    </Routes>
  )
}

export default App
