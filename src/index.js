import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

// const nama="Riki"
// let kerjaan=' a Software Engineer'
// function boboiboy() {
//   return  nama + kerjaan
// }
// const aku=function(){
//   return ' I am '
// }
// const greet =()=>{
//   return 'Holaa terbaikk'
// }
// const terbaik=<h3>{greet()}{aku()}{boboiboy()} kereen kaann</h3>
// ReactDOM.render(terbaik,document.getElementById("fay"));


