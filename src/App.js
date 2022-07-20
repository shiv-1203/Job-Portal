import './App.css';
import React from 'react';
import Theme from './components/theme.js';
import Navbar from './components/Navbar';
import Content from './components/content';
import $ from 'jquery';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Content/>
    </div>
  );
}
export default App;


