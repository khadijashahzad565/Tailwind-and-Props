import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

<Card heading="Khadija" title="react" paragraph="this is a paragraph lorem ipsum dolor sit amit to practise props"/>

<Card heading="Shahzad" title="props"  paragraph="this is a paragraph lorem ipsum dolor sit amit to practise props"/> 


    </>
  )
}

export default App
