import React from 'react'
import './ResetButton.css'

export const ResetButton = ({ gameOver, roundWinner, resetBoard }) => {
  const style = roundWinner === 'X' ? 'xwinner' : 'owinner'
  return (
    <div className='result'>
      {roundWinner ? (
        <h1>Round Winner: <span className={style}>{roundWinner}</span></h1>) : null}
      {!roundWinner && gameOver ? (<h1>Draw!!</h1>) : null}
      {gameOver ? (
        <button className="reset-btn" onClick={resetBoard}>New Round!</button>
        ) : null}
    </div>
  )
}
