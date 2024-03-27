import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Investors from './components/Investors';
import LogIn from './components/LogIn';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './components/mainStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
    
    <NavBar />
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/investors" element={<Investors />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<LogIn />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
            {/* <Routes>
                <Route path="/Business/:id" element={<BusinessContent />} />
            </Routes>
            <Routes>
                <Route path="/profiledetails" element={<ProfileDetails />} />
            </Routes>
            <Routes>
                <Route path="/allbusinesses" element={<AllBusiness />} />
            </Routes> */}
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;