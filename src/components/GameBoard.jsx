import React, { useState } from 'react'

const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = intialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

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
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}><ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button
                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                        >{playerSymbol}</button>
                    </li>
                ))}
            </ol></li>
        ))}
    </ol>
    )
}
