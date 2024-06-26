import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import SignForm from './components/signForm';
import TableMain from './components/table';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import AppC from "./pages/App copy"
import axios from 'axios'

function App() {
  const [isadmin, setisadmin] = useState(false);//"false" gives admin to everyone
  const [isLogged, setisLogged] = useState(false);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    let loginId = localStorage.getItem("loginId")
    axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
      if (res.data.isadmin == "true") {
        setisadmin(true)
      }
    })
    setisLogged(loginId)
  }, []);
  if (isLogged) {
    return (
      <Router>
        <Routes>
          <Route index element={<TableMain isadmin={isadmin} />} />
          <Route element={<Layout />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/login"
            element={<LoginForm setisLogged={setisLogged} setisadmin={setisadmin} />}
          />
          <Route
            path="/sign-up"
            element={<SignForm setisLogged={setisLogged} setisadmin={setisadmin} />}
          />
        </Routes>
      </Router>
    );
  } else {
    if (!check) {
      return <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} setisadmin={setisadmin} isadmin={isadmin} />;
    } else {
      return <SignForm setCheck={setCheck} />;
    }
  }
}

export default App;
