import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import SideBar from './components/SideBar';
import Stack from './components/Stack';
import Project from './components/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
     <SideBar />
     <App />
     <Stack />
     <Project />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
