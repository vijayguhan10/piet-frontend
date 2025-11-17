import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
