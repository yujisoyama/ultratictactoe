import React from 'react'
import './Board.css'
import { Box } from '../Box/Box'

export const Board = ({ board, gameOver, selectedPiece, onClick }) => {
  return (
    <div className='board'>
        {board.map((board) => {
            return <Box value={board.element} size={board.size} onClick={() => selectedPiece !== null && gameOver === false && onClick(board.id)} />
        })}
    </div>
  )
}
