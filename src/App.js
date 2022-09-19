import { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board'
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard'
import { ResetButton } from './components/ResetButton/ResetButton'
import { AllPieces } from './components/AllPieces/AllPieces'


function App() {

  const [xPlaying, setXPlaying] = useState(true)
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
  const initialBoard = [
    {id: 0, element: null, size: 0},
    {id: 1, element: null, size: 0},
    {id: 2, element: null, size: 0},
    {id: 3, element: null, size: 0},
    {id: 4, element: null, size: 0},
    {id: 5, element: null, size: 0},
    {id: 6, element: null, size: 0},
    {id: 7, element: null, size: 0},
    {id: 8, element: null, size: 0}
  ]
  const xInitialState = [
    {id: 0, element: 'X', size: 3},
    {id: 1, element: 'X', size: 3},
    {id: 2, element: 'X', size: 3},
    {id: 3, element: 'X', size: 2},
    {id: 4, element: 'X', size: 2},
    {id: 5, element: 'X', size: 2},
    {id: 6, element: 'X', size: 1},
    {id: 7, element: 'X', size: 1},
    {id: 8, element: 'X', size: 1}
  ]
  const oInitialState = [
    {id: 0, element: 'O', size: 3},
    {id: 1, element: 'O', size: 3},
    {id: 2, element: 'O', size: 3},
    {id: 3, element: 'O', size: 2},
    {id: 4, element: 'O', size: 2},
    {id: 5, element: 'O', size: 2},
    {id: 6, element: 'O', size: 1},
    {id: 7, element: 'O', size: 1},
    {id: 8, element: 'O', size: 1}
  ]
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [board, setBoard] = useState(initialBoard)
  const [xPieces, setXPieces] = useState(xInitialState)
  const [oPieces, setOPieces] = useState(oInitialState)
  const [playableLargestSize, setPlayableLargestSize] = useState(null)

  const handlePieceClick = (boxIdx) => {
    setSelectedPiece(boxIdx)
    switch (true) {
      case boxIdx < 3:
        setSelectedSize(3)
        break
      case boxIdx >= 3 && boxIdx <= 5:
        setSelectedSize(2)
        break
      case boxIdx >= 6:
        setSelectedSize(1)
        break
    }
  }

  const handleBoxClick = (boxIdx) => {
    if (selectedSize > board[boxIdx].size) {
      if (xPlaying) {
        const updatedPieces = xPieces.map((obj) => {
          if (obj.id === selectedPiece) {
            return {...obj, element: null}
          } else {
            return obj
          }
        })
        setXPieces(updatedPieces)
      } else {
        const updatedPieces = oPieces.map((obj) => {
          if (obj.id === selectedPiece) {
            return {...obj, element: null}
          } else {
            return obj
          }
        })
        setOPieces(updatedPieces)
      }
  
      const updatedBoard = board.map((board) => {
        if (board.id === boxIdx) {
          return xPlaying === true ? {...board, element: 'X', size: selectedSize} : {...board, element: 'O', size: selectedSize}
        } else {
          return board
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
      setXPlaying(!xPlaying)
      setSelectedPiece(null)
    }
  }

  const checkWinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i]
      if (board[x].element && board[x].element === board[y].element && board[y].element === board[z].element) {
        setGameOver(true)
        setRoundWinner(board[x].element)
        return board[x].element;
      }
    }
  }

  const checkDraw = (board) => {
    const tableSizes = board.map((obj) => {
        return obj.size
    })

    const xSizes = xPieces.map((obj) => {
      return obj.size
    })

    const oSizes = oPieces.map((obj) => {
      return obj.size
    })

    const tableMinSize = Math.min(...tableSizes)
    const xMaxSize = Math.min(...xSizes)
    const oMaxSize = Math.min(...oSizes)

    if (tableMinSize >= xMaxSize && tableMinSize >= oMaxSize) {
      setGameOver(true)
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setRoundWinner(null)
    setBoard(initialBoard)
    setXPieces(xInitialState)
    setOPieces(oInitialState)
  } 

  return (
      <div>
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <div className='game'>
          <AllPieces pieces={xPieces} gameOver={gameOver} xPlaying={xPlaying} onClick={handlePieceClick} />
          <Board board={board} gameOver={gameOver} selectedPiece={selectedPiece} onClick={handleBoxClick} />
          <AllPieces pieces={oPieces} gameOver={gameOver} xPlaying={!xPlaying} onClick={handlePieceClick} />
        </div>
        <ResetButton gameOver={gameOver} roundWinner={roundWinner} resetBoard={resetBoard} />
      </div>
  );
}

export default App;
