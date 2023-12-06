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

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('src/components/database/testi.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8000;

// server.use(middlewares);
// server.use(router);
// server.listen(port);

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


