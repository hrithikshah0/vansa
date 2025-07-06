import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Layout from './Layouts/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App
