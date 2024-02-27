import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[[0].player === 'X']) {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSqaure = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">

        <ol id="players" className="highlight-player">
          <Player initialName={'Player 1'} symbol={'X'}
            isActive={activePlayer === 'X'}
          />
          <Player initialName={'Player 2'} symbol={'O'}
            isActive={activePlayer === 'O'}
          />
        </ol>

        <GameBoard
          onsSelectSqaure={handleSelectSqaure}
          turns={gameTurns}
        />
      </div>

      LOG
    </main>
  )
}

export default App