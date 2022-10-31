import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/layout';
import Login from './feature/login/login';
import PrivatedRoute from './router/privatedRoute';
import PublicRoute from './router/publicRoute';



function App() {
  return (
    <div className="App">
      
          {/* <Route path= "*" element={<Navigate to="home" replace/>}  />
          <Route element={<PrivatedRoute/>} />
            <Route path='home/*' element={<Layout />}  />
        <Route element={<PublicRoute  />}>
          <Route path='/account/login' element={<Login />} />
        </Route>   */}
        <Layout/>
    </div>
  );
}

export default App;
