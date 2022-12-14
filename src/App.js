import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about/about';
import Personal from './pages/personal/personal';
import Services from './pages/services/services';
import Home from './pages'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/personal' element = {<Personal/>} />
        <Route path = '/services' element = {<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
