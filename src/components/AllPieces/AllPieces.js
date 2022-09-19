import React from 'react'
import './AllPieces.css'
import { Piece } from '../Piece/Piece'

export const AllPieces = ({ pieces, gameOver, xPlaying, onClick }) => {
  return (
    <div className='allpieces'>
        {pieces.map((piece) => {
            return <Piece value={piece.element} size={piece.size} xPlaying={xPlaying} onClick={() => gameOver === false && onClick(piece.id)} />
        })}
    </div>
  )
}