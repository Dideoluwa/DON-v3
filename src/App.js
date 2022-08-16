import React from 'react'
import Loader from './components/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={
          <Loader />}> <Home /> </React.Suspense>
        } />
        <Route path="/about" element={<React.Suspense fallback={
          <Loader />}> <About /> </React.Suspense>
        } />
        <Route path="/portfolio" element={<React.Suspense fallback={
          <Loader />}> <Portfolio /> </React.Suspense>
        } />
        <Route path="/contact" element={<React.Suspense fallback={
          <Loader />}> <Contact /> </React.Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
