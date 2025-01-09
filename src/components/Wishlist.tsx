
interface Wishlist {
  name: string;
  items: string[];
}

function Wishlist( { name, items }: Wishlist) {
  return (
    <>
      <header>
        {name}
      </header>
      <div className="ScrollContainer">
        <div>
          <img className="WishlistImage" src="img/scroll.png" alt="Wishlist scroll" />
        </div>
        <div className="ScrollTextContainer">
          {items.length === 0 && <p></p>}
          <ul className="Wishlist">
            {items.map((item, id) => (
            <li key={id}>
              {item}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
