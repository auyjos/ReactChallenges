/**
 * Connect Four Game Challenge
 * Author: Jose Auyon
 * 
 * Create the classic Connect Four board game with player turns and win detection
 */

import {useState} from 'react'

const RED = 1;
const BLUE =2;
const EMPTY = undefined;

type Piece = typeof RED | typeof BLUE | typeof EMPTY;

const ROWS = 6;
const  COLUMNS = 7


const ConnectFourApp = () => {
const [isRedTurn, setIsRedTurn] = useState(true)
const [board, setBoard] = useState(() => 
  Array.from({ length: ROWS }, () => Array(COLUMNS).fill(EMPTY))
)
console.log(board)

  function handleCellClicked(columnIndex: number){
  for(let rowIndex= ROWS -1; rowIndex >= 0; rowIndex--){
    const cell = board[rowIndex][columnIndex]
    if(cell === EMPTY){
      const newBoard = [...board.map((row) => [...row])]
      newBoard[rowIndex][columnIndex] = isRedTurn? RED: BLUE
      setIsRedTurn(!isRedTurn)
      setBoard(newBoard)
      checkForWin(newBoard, rowIndex, columnIndex);
      break;
    }
  }
}

function checkForWin(currentBoard: Piece[][], row: number, column:number){
 if (
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r, c + 1],
          [r, c - 1],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r + 1, c],
          [r - 1, c],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r + 1, c + 1],
          [r - 1, c - 1],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r - 1, c + 1],
          [r + 1, c - 1],
        ],
        row,
        column
      ) >= 4
    ) {
      setTimeout(() => {
        alert(isRedTurn ? "Red wins" : "Blue wins");
        reset();
      }, 1);
    }
}


function reset(){
  setBoard(Array.from({ length: ROWS }, () => Array(COLUMNS).fill(EMPTY)))
  setIsRedTurn(true)
}

  function checkForDirectionalWin(
    currentBoard: Piece[][],
    getDirections: (
      row: number,
      column: number
    ) => [[number, number], [number, number]],
    row: number,
    column: number,
    seen: Set<string> = new Set()
  ) {
    let sum = 0;

    if (row < 0 || row >= ROWS || column < 0 || column >= COLUMNS) {
      return 0;
    }

    if (seen.has(`${row} ${column}`)) {
      return 0;
    }

    seen.add(`${row} ${column}`);

    if (currentBoard[row][column] === (isRedTurn ? RED : BLUE)) {
      sum++;
    }

    const directions = getDirections(row, column);

    sum +=
      checkForDirectionalWin(
        currentBoard,
        getDirections,
        directions[0][0],
        directions[0][1],
        seen
      ) +
      checkForDirectionalWin(
        currentBoard,
        getDirections,
        directions[1][0],
        directions[1][1],
        seen
      );

    return sum;
  }



  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Connect Four Game
          </h1>
          <p className="text-gray-600">
            Create the classic Connect Four board game with player turns and win detection
          </p>
        </div>

        {/* Game Status */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-lg">
            <div className={`w-6 h-6 rounded-full ${isRedTurn ? 'bg-red-500' : 'bg-blue-500'}`}></div>
            <span className="text-lg font-semibold">
              {isRedTurn ? 'Red Player' : 'Blue Player'}'s Turn
            </span>
          </div>
        </div>

        {/* Game Board */}
        <div className="flex justify-center">
          <div className="inline-block bg-blue-800 p-4 rounded-lg shadow-2xl">
            {board.map((row: Piece[], rowIndex: number) => (
              <div key={`row-${rowIndex}`} className="flex gap-2 mb-2 last:mb-0">
                {row.map((cell: Piece, columnIndex: number) => (
                  <button
                    disabled={cell !== EMPTY}
                    key={`cell-${rowIndex}-${columnIndex}`}
                    className="w-16 h-16 bg-blue-800 border-4 border-blue-700 rounded-full p-1 hover:bg-blue-700 transition-colors disabled:cursor-not-allowed"
                    onClick={() => handleCellClicked(columnIndex)}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      {cell === RED && (
                        <div className="w-12 h-12 rounded-full bg-red-500 shadow-lg border-2 border-red-600"></div>
                      )}
                      {cell === BLUE && (
                        <div className="w-12 h-12 rounded-full bg-blue-500 shadow-lg border-2 border-blue-600"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center mt-6">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectFourApp
