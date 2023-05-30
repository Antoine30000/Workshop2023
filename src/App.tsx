import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Pages/Homepage'
import { ProductPage } from './components/Pages/ProductInformation'

function App() {

  return (
    <Routes>
    <Route path="/" Component={Homepage} />
    <Route path="/product/:productId" Component={ProductPage} />
  </Routes>
  )
}

export default App
