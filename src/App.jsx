import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { React, Suspense, lazy } from "react";
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Services = lazy(() => import('./pages/Services/Services'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
import ScrollToTop from './components/ScrollToTop';


function Loading() {
  return (
    // <div className='bg-[#181918] h-screen w-screen fixed top-0 left-0 z-1000 flex items-center justify-center'>
    //   <div className=''>
    //     <p className='text-white text-2xl'>Loading...</p>
    //   </div>
    // </div>
    <div className="loader__container">
      <div className="loader"></div>
    </div>
  )
}

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path='/' element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />

        <Route path='/about' element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        } />

        <Route path='/services' element={
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        } />

        <Route path='/contact' element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        } />
      </Routes>
    </Layout>
  )
}

export default App
