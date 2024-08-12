import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'
import ContentDiv from './components/ContentDiv'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <ImageSlider/>
      <ImageGrid/>
      <ContentDiv/>
    </div>
  )
}

export default App
