import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Pages/Homepage'
import { ProductPage } from './components/Pages/Product'

function App() {

  return (
    <Routes>
      <Route  path="/" Component={Homepage} />  
      <Route  path="/" Component={ProductPage} />  
    </Routes>
  )
}

export default App
