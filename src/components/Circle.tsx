
import Wishlist from './Wishlist';

function Circle() {
  var items = ["load", "of", "rubbish"];
  var users = ["a", "b", "c", "d", "e", "f", "g"];

  var radius = window.innerWidth/5.5;
  var centerX = window.innerWidth/2;
  var centerY = window.innerHeight/2.7;

  return (
    <div className="CircleBackground">
      {/* Image made with the help of https://www.canva.com/ai-image-generator/ */}
      <img style={{ left: `${centerX}px`, top: `${centerY - 20}px`}} src="img/tonttu.png" id="ChristmasCircle"/>

      {users.map((user, index) => {
        let angle;
        if (users.length % 2 == 0) {
          angle = (2 * Math.PI * index) / users.length;
        } else {
          angle = (2 * Math.PI * index) / users.length + Math.PI / 2 * users.length;
        }
        const x = centerX + radius * Math.cos(angle) // x = r cos theta
        const y = centerY + radius * Math.sin(angle) // y = r sin theta
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
