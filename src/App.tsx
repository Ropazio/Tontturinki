import React from 'react';
import './App.css';

// Import components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Circle from './components/Circle';

function App() {

  return (
    <div className="App">
      <Header />
      <Circle />
      <Footer />
    </div>
  );
}

export default App;
