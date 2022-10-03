import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './layout'
import { Home, HousePoint, Behaviour} from './pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housepoint" element={<HousePoint />} />
        <Route path="/behaviour" element={<Behaviour />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
