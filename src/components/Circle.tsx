
import Wishlist from './Wishlist';

function Circle() {
  var items = ["load", "of", "rubbish"];
  var users = ["a", "b", "c", "d", "e", "f"];

  var radius = 350;
  var centerX = window.innerWidth/2;
  var centerY = window.innerHeight/2;

  return (
    <div className="CircleBackground">
      {users.map((user, index) => {
        const angle = (2 * Math.PI * index) / users.length;
        const x = centerX + radius * Math.cos(angle) - window.innerWidth/14 // x = r cos theta
        const y = centerY + radius * Math.sin(angle) + window.innerHeight/8 // y = r sin theta
        const styles = { left: `${x}px`, top: `${y}px`};

        return (
          <Wishlist 
            key={index} 
            name={user} 
            items={items}
            position={styles} 
          />
        )})}
    </div>
  )
}

export default Circle;
