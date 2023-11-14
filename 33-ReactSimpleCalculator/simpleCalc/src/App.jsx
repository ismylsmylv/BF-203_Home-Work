import { useState } from 'react'
import './App.css'
import FirstInp from './components/firstInput'
import SecondInp from './components/secondInput'
import Add from './components/addition'
import Sub from './components/subtraction'
import Mult from './components/multiply'
import Divi from './components/division'
import Result from './components/result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <FirstInp className="inp1" />
        <SecondInp className="inp2" />
        <div className="buttons">
          <Add className="add button" />
          <Sub className="sub button" />
          <Mult className="mult button" />
          <Divi className="divi button" />
        </div>
        <div className="result">
          <Result />
        </div>
      </div>
    </>
  )
}

export default App
