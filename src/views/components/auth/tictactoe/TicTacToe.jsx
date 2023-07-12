import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    checkWinner(newBoard, player);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board, currentPlayer) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
        setWinner(currentPlayer);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        className={`cell ${board[index]}`}
        onClick={() => handleCellClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => renderCell(index, cell))}
      </div>
      {winner && (
        <div className="message">
          {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;

































// import React, { useState } from 'react';
// import './TicTacToe.css';

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [player, setPlayer] = useState('X');
//   const [winner, setWinner] = useState(null);

//   const handleCellClick = (index) => {
//     if (winner || board[index]) {
//       return;
//     }

//     const newBoard = [...board];
//     newBoard[index] = player;
//     setBoard(newBoard);

//     checkWinner(newBoard, player);
//     setPlayer(player === 'X' ? 'O' : 'X');
//   };

//   const checkWinner = (board, player) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];

//     for (let combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         setWinner(player);
//         break;
//       }
//     }

//     if (!board.includes(null) && !winner) {
//       setWinner('Draw');
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setPlayer('X');
//     setWinner(null);
//   };

//   const renderCell = (index) => {
//     return (
//       <div
//         className={`cell ${board[index]}`}
//         onClick={() => handleCellClick(index)}
//       >
//         {board[index]}
//       </div>
//     );
//   };

//   return (
//     <div className="tic-tac-toe">
//       <div className="board">
//         {board.map((cell, index) => renderCell(index))}
//       </div>
//       {winner && (
//         <div className="message">
//           {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
//           <button onClick={resetGame}>Restart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TicTacToe;
