import React from "react";
import './App.css';
import Top from './Top.js';
import Middle from './Middle.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Top />
        <Middle />
        <Footer />
      </div>
    </div>
  )
}
