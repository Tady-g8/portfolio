import { useState } from 'react'
import Header from './header.jsx'
import Desc from './desc.jsx'
import About from './about.jsx'
import PrevButton from './prevButton.jsx'
import ArrowNavigation from './arrowNavigation.jsx'

function App() {
  return (
    <>

      <ArrowNavigation />

      <Header />
      <Desc />
      <About />
          
      <PrevButton part="header" />
    </>
  )
}

export default App
