import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Sigin from './Components/Sigin'
import Contact from './Components/Contact'
import AllBikes from './Components/AllBikes'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Signin' element={<Sigin/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/all-bikes' element={<AllBikes/>}/>
        <Route path='/all-bikes/:category' element={<AllBikes />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
