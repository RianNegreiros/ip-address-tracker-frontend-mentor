import React, { useState } from 'react'
import Map from './components/map/map'
import Header from './components/header/header'
import Informations from './components/informations/informations'

const App = () => {
  const [inputText, setInputText] = useState<String>('')


  return (
    <>
    <Header inputText={inputText} setInputText={setInputText} />
    <Informations />
    <Map />
    </>
  )
}

export default App