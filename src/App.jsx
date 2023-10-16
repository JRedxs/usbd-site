import { useState } from 'react'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>
    <Nav></Nav>
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Accueil/>}/>
      </Routes>
    </ChakraProvider>
    <Footer></Footer>
    </div>
  )
}

export default App
