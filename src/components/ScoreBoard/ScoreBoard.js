import React from 'react'
import './ScoreBoard.css'

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && 'inactive'}`}><span className='red'>X</span> - {xScore}</span>
        <span className={`score o-score ${xPlaying && 'inactive'}`}><span className="blue">O</span> - {oScore}</span>
    </div>
  )
}
