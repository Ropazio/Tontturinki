import React from 'react';
import './App.css';

// Import components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Circle from './components/Circle';

function App() {

  var subPages = ["Tontturinki", "Nyyttäririnki"];

  return (
    <div className="App">
      <Header subPages={subPages}/>
      <Circle />
      <Footer />
    </div>
  );
}

export default App;
