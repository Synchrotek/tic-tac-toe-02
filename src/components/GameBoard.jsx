const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onsSelectSqaure }) {


    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}><ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={onsSelectSqaure}>
                            {playerSymbol}
                        </button>
                    </li>
                ))}
            </ol></li>
        ))}
    </ol>
    )
}