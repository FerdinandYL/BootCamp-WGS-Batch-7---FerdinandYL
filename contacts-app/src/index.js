import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contacts from './pages/contacts';
import Navbar from './navbar';
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function App(){
//   return(
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path='/' exact element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contacts' element={<Contacts/>}/>
//       </Routes>
//     </Router>
//   )
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
