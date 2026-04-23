import HomePage from './pages/HomePage.tsx'
import CaesarCipherPage from './pages/CaesarCipherPage'
import AffineCipherPage from './pages/AffineCipherPage.tsx'
import TranspositionCipherPage from './pages/TranspositionCipherPage.tsx'
import ColumnarCipherPage from './pages/ColumnarCipherPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ciphers/caesar" element={<CaesarCipherPage />} />
        <Route path="/ciphers/affine" element={<AffineCipherPage />} />
        <Route path="/ciphers/columnar" element={<ColumnarCipherPage />} />
        <Route path="/ciphers/transposition" element={<TranspositionCipherPage />} />
        <Route path="/ciphers/rail-fence" element={<TranspositionCipherPage />} />
      </Routes>
    </>
  )
}

export default App
