import HomePage from './pages/HomePage.tsx'
import CaesarCipherPage from './pages/CaesarCipherPage'
import AffineCipherPage from './pages/AffineCipherPage.tsx'
import TranspositionCipherPage from './pages/TranspositionCipherPage.tsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ciphers/caesar" element={<CaesarCipherPage />} />
      <Route path="/ciphers/affine" element={<AffineCipherPage />} />
      <Route path="/ciphers/transposition" element={<TranspositionCipherPage />} />
      <Route path="/ciphers/rail-fence" element={<TranspositionCipherPage />} />
    </Routes>
  )
}

export default App
