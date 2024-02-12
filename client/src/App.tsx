import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features'
import AvailableTests from './components/AvailableTests'

function App() {

  return (
    <div className='app-div'>
      <div>
        <Navbar />
      </div>
     <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/available-tests' element={<AvailableTests />} />
        <Route path='/features' element={<Features />} />
      </Routes>
    </div>
  )
}

export default App
