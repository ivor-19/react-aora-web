import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Support from './pages/support';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import './App.css';


function App() {

  return (
   <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/support' element={<Support />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>

        </Routes>
   </Router>
  )
}

export default App
