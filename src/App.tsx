import React from 'react';
import './App.css';
import scroll from './img/scroll.png';

interface Name {
  name: string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WishListFrame name="user"/>
      </header>
    </div>
  );
}

function WishList() {
  return (
    <div className="Wishlist">
      <ul>
        <li>
          <p>load of rubbish</p>
        </li>
      </ul>
    </div>
  );
}

function WishListScroll() {
  return (
    <div className="ScrollContainer">
      <div>
        <img className="WishlistImage" src={scroll} alt="Wishlist scroll" />
      </div>
      <div className="ScrollTextContainer">
        <WishList />
      </div>
    </div>
  );
}

function WishListFrame(props: Name) {
  return (
    <div>
      <div>
        { props.name }
      </div>
      <div>
        <WishListScroll />
      </div>
    </div>
  );
}

export default App;
