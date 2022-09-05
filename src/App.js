import React from 'react'
import Loader from './components/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
// import NotFound from './NotFound';
const NotFound = React.lazy(() => import('./components/NotFound'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {
  return (
    <BrowserRouter>
     <CustomCursor
      customClass='none'
      dimensions={60}
      fill='transparent'
      strokeColor='#fff'
      strokeWidth = {2}
      smoothness={{
        movement: 0.08,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
    />
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
          <Route path="*" element={<React.Suspense fallback={
          <Loader />}> <NotFound /> </React.Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
