import React from 'react'
import './Pass.css'

export const Pass = ({ gameOver, passTurn }) => {
  return (
    <div>
        {!gameOver ? (
        <button className="pass-btn" onClick={passTurn}>Pass your turn</button>
        ) : null}
    </div>
  )
}
