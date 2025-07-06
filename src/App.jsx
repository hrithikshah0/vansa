import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Layout from './Layouts/Layout'
import Offer from './Pages/Offer'
import Cart from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
