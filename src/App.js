import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {userInputs,productInputs} from './formSource'
import './style/dark.scss'
import { DarkModeContext } from './context/darkModeContext';

const App = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title='Add new user' />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs} title='Add new product' />} />
        </Route>
      </Route>
    </Routes>
    </div>
  );
};

export default App;
