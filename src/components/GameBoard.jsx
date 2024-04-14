import React, { useState } from 'react'

export default function GameBoard({ onSelectSquare, board }) {

    // const [gameBoard, setGameBoard] = useState(intialGameBoard);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     })

    //     onSelectSquare();
    // }

    return (<ol id='game-board'>
        {board.map((row, rowIndex) => (
            <li key={rowIndex}><ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button disabled={playerSymbol !== null}
                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                        >{playerSymbol}</button>
                    </li>
                ))}
            </ol></li>
        ))}
    </ol>
    )
}
