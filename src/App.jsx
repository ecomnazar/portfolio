import './App.scss'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import Mobile from './components/Mobile'
import Website from './components/Website'


function App() {
  return (
    <div className="root">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Mobile' element={<Mobile />} />
        <Route path='/Website' element={<Website />} />
      </Routes>
    </div>
  )
}

export default App
