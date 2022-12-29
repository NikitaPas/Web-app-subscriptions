import logo from './logo.svg';
import './App.css';
import axios from '../src/axios';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about/about';
import Personal from './pages/personal/personal';
import Services from './pages/services/services';
import Home from './pages'
import Login from './pages/Login/index.jsx'
import Registration  from './pages/Registration/index';
import React from 'react';
import { fetchAuth, fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(()=>{
    dispatch(fetchAuthMe())
  }, [])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/registration' element = {<Registration/>} />
        <Route path = '/personal' element = {<Personal/>} />
        <Route path = '/services' element = {<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
