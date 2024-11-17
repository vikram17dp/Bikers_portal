import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Sigin from './Components/Sigin'
import Contact from './Components/Contact'
import AllBikes from './Components/AllBikes'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'
import Particularitem from './Components/pages/Particularitem'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './Components/ProfilePage'
import ProtectedRoute from './Components/ProtectedRoute'
import PublicRoute from './Components/PublicRoute'


function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route 
          path='/Signin' 
          element={
            <PublicRoute>
              <Sigin />
            </PublicRoute>
          } 
        />
        <Route 
          path='/SignUp' 
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } 
        />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/all-bikes' element={<AllBikes/>}/>
        <Route path='/all-bikes/:category' element={<AllBikes />} />
        <Route path='/item-details/:id' element={<Particularitem/>}/>
        <Route 
          path='/my-profile' 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
