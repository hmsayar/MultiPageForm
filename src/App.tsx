import { Routes, Route } from "react-router-dom"
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'



function App() {
  return (

    <div className="app">
      <div className="background--image" />
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/2" element={<SecondPage />} />
          <Route path="/3" element={<ThirdPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
