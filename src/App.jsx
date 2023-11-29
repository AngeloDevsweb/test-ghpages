import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import { Navigation } from './components/Navigation'

function App() {
  

  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
