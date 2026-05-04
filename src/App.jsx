import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Home from './pages/Home'
import Browse from './pages/Browse'
import Details from './pages/Details'
import Post from './pages/Post'

function App() {

  

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </main>
      
      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Campus Lost & Found. Built for students, by students.</p>
      </footer>
    </div>
  )
}

export default App;