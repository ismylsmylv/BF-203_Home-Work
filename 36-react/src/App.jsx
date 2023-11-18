import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import SignForm from './components/signForm';
import TableMain from './components/table';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import AppC from "./pages/App copy"

function App() {
  const [isAdmin, setisAdmin] = useState(false);
  const [isLogged, setisLogged] = useState(false);
  const [check, setCheck] = useState(false);

  if (isLogged) {
    return (
      <Router>
        <Routes>
          <Route path="/index" element={<TableMain isAdmin={isAdmin} />} />
          <Route index element={<Layout />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/login"
            element={<LoginForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
          />
          <Route
            path="/sign-up"
            element={<SignForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
          />
        </Routes>
      </Router>
    );
  } else {
    if (!check) {
      return <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} setisAdmin={setisAdmin} isAdmin={isAdmin} />;
    } else {
      return <SignForm setCheck={setCheck} />;
    }
  }
}

export default App;
