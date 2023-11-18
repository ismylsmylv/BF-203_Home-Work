import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import SignForm from './components/signForm';
import TableMain from './components/table';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  const [isAdmin, setisAdmin] = useState(false);
  const [isLogged, setisLogged] = useState(false);
  setisLogged(true)
  // return (
  //   <Router>
  //     {/* <Routes>
  //       <Route
  //         path="*"
  //         element={
  //           isLogged ? (
  //             <Layout>
  //               <Route index element={<TableMain isAdmin={isAdmin} />} />
  //               <Route path="Cart" element={<Cart />} />
  //               <Route path="Wishlist" element={<Wishlist />} />
  //             </Layout>
  //           ) : (
  //             <Routes>
  //               <Route
  //                 path="/login"
  //                 element={<LoginForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
  //               />
  //               <Route
  //                 path="/sign-up"
  //                 element={<SignForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
  //               />
  //             </Routes>
  //           )
  //         }
  //       />
  //     </Routes> */}
  //     <Routes>
  //       <Route path="/" element={<Layout />} />
  //       <Route path="/login" element={<LoginForm />} />
  //       <Route path="/sign-up" element={<SignForm />} />
  //     </Routes>

  //   </Router>
  // );
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            isLogged ? (
              <Layout>
                <Route index element={<TableMain isAdmin={isAdmin} />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="Wishlist" element={<Wishlist />} />
              </Layout>
            ) : (
              <Routes>
                <Route
                  path="/login"
                  element={<LoginForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
                />
                <Route
                  path="/sign-up"
                  element={<SignForm setisLogged={setisLogged} setisAdmin={setisAdmin} />}
                />
              </Routes>
            )
          }
        />
      </Routes>
    </Router>
  );

}

export default App;
