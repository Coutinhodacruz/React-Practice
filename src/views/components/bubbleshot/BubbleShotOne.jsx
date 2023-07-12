// import React, { Component } from 'react';
// import './BubbleShot.css';

// type Bubble = {
//     id: number;
//     color: string;
//     fallen: boolean;
// };

// type BubbleShotState = {
//     bubbles: Bubble[];
//     gunColor: string;
//     score: number;
//     result: string;
// };

// class BubbleShot extends Component<{}, BubbleShotState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             bubbles: [],
//             gunColor: '',
//             score: 0,
//             result: '',
//         };
//     }

//     componentDidMount() {
//         this.generateBubbles();
//         this.generateGunColor();
//     }

//     generateBubbles = () => {
//         const bubbles: Bubble[] = Array.from({ length: 60 }, (_, index) => ({
//             id: index,
//             color: this.getRandomColor(),
//             fallen: false,
//         }));

//         this.setState({ bubbles });
//     };

//     getRandomColor = (): string => {
//     const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
//     return colors[Math.floor(Math.random() * colors.length)];
// };

// generateGunColor = () => {
//     const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
//     const gunColor = colors[Math.floor(Math.random() * colors.length)];
//     this.setState({ gunColor });
// };

// handleBubbleClick = (id: number) => {
//     const { bubbles, gunColor, score } = this.state;

//     if (bubbles[id].color === gunColor) {
//         const updatedBubbles = [...bubbles];
//         updatedBubbles[id].fallen = true;
//         this.setState(
//             (prevState) => ({
//                 bubbles: updatedBubbles,
//                 score: prevState.score + 1,
//             }),
//             () => {
//                 this.checkGameResult();
//             }
//         );
//     }
// };

// checkGameResult = () => {
//     const { bubbles, score } = this.state;

//     if (bubbles.every((bubble) => bubble.fallen)) {
//         this.setState({ result: 'You win!' });
//     }

//     if (score >= 10) {
//         this.setState({ result: 'Game over! You lose.' });
//     }
// };

// render() {
//     const { bubbles, gunColor, result } = this.state;

//     return (
//         <div className="bubble-shot-container">
//             <h1>Bubble Shot Game</h1>
//             <div className="result">{result}</div>
//             <div className="bubble-area">
//                 {bubbles.map((bubble) => (
//                     <div
//                         key={bubble.id}
//                         className={`bubble ${bubble.color} ${bubble.fallen ? 'fallen' : ''}`}
//                         onClick={() => this.handleBubbleClick(bubble.id)}
//                     />
//                 ))}
//             </div>
//             <div className="gun">
//                 <div className={`gun-bubble ${gunColor}`} />
//             </div>
//         </div>
//     );
// }
// }

// export default BubbleShot;
