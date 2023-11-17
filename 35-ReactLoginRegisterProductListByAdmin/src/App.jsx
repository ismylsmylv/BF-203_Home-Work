import { useState } from 'react'
import './App.css'
import LoginForm from './components/loginForm'
import SignForm from './components/signForm'
import TableMain from './components/table'
import TableUsers from "./components/tableUsers"
let isAdmin = true
function App() {
  const [check, setCheck] = useState(true)
  const [isLogged, setisLogged] = useState(false);
  return (
    <>
      {
        (isLogged ? <TableMain isAdmin={isAdmin} /> : check ? <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} /> : <SignForm setCheck={setCheck} />)
      }



    </>
  )
}

export default App
