import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Main from './pages/Main';
import About from './pages/About';
import ShitpostOfTheWeek from './pages/ShitpostOfTheWeek';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Cabin } from './styles/Fonts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Cabin />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="shitpost-of-the-week" element={<ShitpostOfTheWeek />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
