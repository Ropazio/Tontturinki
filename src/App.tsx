import React from 'react';
import './assets/styles/App.css';
import useSize from './helpers/viewport'

// Import components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Circle from './components/Circle';

function App() {

  const viewport = useSize();
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
