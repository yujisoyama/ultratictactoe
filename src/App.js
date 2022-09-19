import { useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board'
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard'
import { ResetButton } from './components/ResetButton/ResetButton'
import { AllPieces } from './components/AllPieces/AllPieces'


function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlating] = useState(true)
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [roundWinner, setRoundWinner] = useState()
  const [gameOver, setGameOver] = useState(false)
  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [xPieces, setXPieces] = useState([
    {id: 0, element: 'X', size: 3},
    {id: 1, element: 'X', size: 3},
    {id: 2, element: 'X', size: 3},
    {id: 3, element: 'X', size: 2},
    {id: 4, element: 'X', size: 2},
    {id: 5, element: 'X', size: 2},
    {id: 6, element: 'X', size: 1},
    {id: 7, element: 'X', size: 1},
    {id: 8, element: 'X', size: 1}
  ])

  const [oPieces, setOPieces] = useState([
    {id: 0, element: 'O', size: 3},
    {id: 1, element: 'O', size: 3},
    {id: 2, element: 'O', size: 3},
    {id: 3, element: 'O', size: 2},
    {id: 4, element: 'O', size: 2},
    {id: 5, element: 'O', size: 2},
    {id: 6, element: 'O', size: 1},
    {id: 7, element: 'O', size: 1},
    {id: 8, element: 'O', size: 1}
  ])

  const handlePieceClick = (boxIdx) => {
    const updatedPiece = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O'
      } else {
        return value
      }
    })
  }

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    const winner = checkWinner(updatedBoard)
    checkDraw(updatedBoard)

    if (winner) {
      if (winner === 'O') {
        let {oScore} = scores
        oScore += 1
        setScores({...scores, oScore})
      } else {
        let {xScore} = scores
        xScore += 1
        setScores({...scores, xScore})
      }
    }
    setBoard(updatedBoard)
    setXPlating(!xPlaying)

    /*
    const newArr = xElements.map((obj) => {
      if (obj.id === 1) {
        return {...obj, element: null}
      } else {
        return obj
      }
    })
    console.log(newArr)
    setXElements(newArr)
    console.log(xElements)
    */
  }

  const checkWinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i]
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        setRoundWinner(board[x])
        return board[x];
      }
    }
  }

  const checkDraw = (board) => {
    const draw = board.includes(null)
    if (draw) {
    } else {
      setGameOver(true)
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setRoundWinner(null)
    setBoard(Array(9).fill(null))
  } 


  return (
      <div>
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <div className='game'>
          <AllPieces pieces={xPieces} gameOver={gameOver} xPlaying={xPlaying} onClick={handlePieceClick} />
          <Board board={board} gameOver={gameOver} onClick={handleBoxClick} />
          <AllPieces pieces={oPieces} gameOver={gameOver} xPlaying={!xPlaying} onClick={handlePieceClick} />
        </div>
        <ResetButton gameOver={gameOver} roundWinner={roundWinner} resetBoard={resetBoard} />
      </div>
  );
}

export default App;
