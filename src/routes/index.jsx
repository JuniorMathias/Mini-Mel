import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './../pages/Home';


//components
// import Header from '../components/Header';



function RoutesApp() {


  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
