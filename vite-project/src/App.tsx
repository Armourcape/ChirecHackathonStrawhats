import './App.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import One from './components/One'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

function App() {
  return (
    
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/1' element={<One />} />
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />

    </Routes> 

  )
}

export default App
