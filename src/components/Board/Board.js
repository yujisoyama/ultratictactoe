import React from 'react'
import './Board.css'
import { Box } from '../Box/Box'

export const Board = ({ board, gameOver, onClick }) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
            return <Box value={value} onClick={() => value === null && gameOver === false && onClick(idx)} />
        })}
    </div>
  )
}
