import HomePage from './pages/HomePage.tsx'
import CaesarCipherPage from './pages/CaesarCipherPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ciphers/caesar" element={<CaesarCipherPage />} />
    </Routes>
  )
}

export default App
