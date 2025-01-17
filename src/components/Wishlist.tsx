
interface Wishlist {
  name: string;
  items: string[];
  position: React.CSSProperties;
}

function Wishlist( { name, items, position }: Wishlist) {

  return (
    <div className="WishlistContainer" style={position}>
      <h4>
        {name}
      </h4>
      <div className="ListContainer">
        <div>
          <img className="WishlistImage" src="img/scroll.png" alt="Wishlist scroll" />
        </div>
        <div className="ListTextContainer">
          {items.length === 0 && <p></p>}
          <ul className="Wishlist">
            {items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
