import React, { Component } from 'react';
import './BubbleShot.css';

class BubbleShot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [],      // Array to store bubbles
      gunColor: '',     // Color of the bubble to be shot from the gun
      score: 0,
      result: '',
    };
  }

  componentDidMount() {
    this.generateBubbles();
    this.generateGunColor();
    this.moveBubbles();
  }

  generateBubbles = () => {
    const bubbles = Array(20)    // Generate 20 bubbles
      .fill()
      .map((_, index) => ({
        id: index,
        color: this.getRandomColor(),
        position: Math.floor(Math.random() * 80), // Random starting position (0-80)
      }));

    this.setState({ bubbles });
  };

  getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];  // Array of available colors
    return colors[Math.floor(Math.random() * colors.length)];
  };

  generateGunColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];  // Array of available colors
    const gunColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ gunColor });
  };

  moveBubbles = () => {
    setInterval(() => {
      this.setState((prevState) => {
        const updatedBubbles = prevState.bubbles.map((bubble) => {
          const newPosition = bubble.position - 1;
          if (newPosition < 0) {
            bubble.position = Math.floor(Math.random() * 80); // Reset position if bubble reaches the left edge
          } else {
            bubble.position = newPosition;
          }
          return bubble;
        });
        return { bubbles: updatedBubbles };
      });
    }, 100);
  };

  handleBubbleClick = (id) => {
    const { bubbles, gunColor, score } = this.state;

    // Check if clicked bubble matches the gun color
    if (bubbles[id].color === gunColor) {
      const updatedBubbles = [...bubbles];
      updatedBubbles.splice(id, 1); // Remove the matched bubble
      this.setState(
        (prevState) => ({
          bubbles: updatedBubbles,
          score: prevState.score + 1,
        }),
        () => {
          this.checkGameResult();
        }
      );
    }

    this.generateGunColor();  // Generate new gun color after each shot
  };

  checkGameResult = () => {
    const { score } = this.state;
    if (score >= 10) { // Customize the win condition as needed
      this.setState({ result: 'You win!' });
    }
  };

  render() {
    const { bubbles, gunColor, score, result } = this.state;

    return (
      <div className="bubble-shot-container">
        <h1>Bubble Shot Game</h1>
        <div className="score">Score: {score}</div>
        <div className="result">{result}</div>
        <div className="bubble-area">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={`bubble ${bubble.color}`}
              style={{ left: `${bubble.position}vw` }}
            />
          ))}
        </div>
        <div className="gun">
          <div className={`gun-bubble ${gunColor}`} onClick={() => this.handleBubbleClick(0)} />
        </div>
      </div>
    );
  }
}

export default BubbleShot;
;


















// import React, { useState } from 'react';
// import './BubbleShot.css';

// const BubbleShot = () => {
//   const [score, setScore] = useState(0);
//   const [result, setResult] = useState('');

//   const handleBubbleClick = () => {
//     setScore(score + 1);
//     checkGameResult();
//   };

//   const checkGameResult = () => {
//     if (score >= 10) {
//       setResult('You win!');
//     } else if (score <= -10) {
//       setResult('You lose!');
//     }
//   };
  

//   return (
//     <div className="bubble-shot-container">
//       <h1>Bubble Shot Game</h1>
//       <div className="score">Score: {score}</div>
//       <div className="result">{result}</div>
//       <div className="bubble-area">
//         {/* Render bubbles here */}
//       </div>
//     </div>
//   );
// };

// export default BubbleShot;
