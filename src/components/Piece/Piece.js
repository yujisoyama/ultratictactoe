import React from 'react'
import './Piece.css'

export const Piece = ({ value, size, xPlaying, onClick }) => {
    let style = value === 'X' ? 'piece x ' : 'piece o '
    style = xPlaying === true ? style + 'active ' : style + 'inactive '
    switch (size) {
        case 1:
            style = style + 'small'
            break
        case 2:
            style = style + 'medium'
            break
        case 3:
            style = style + 'big'
            break
    }
    return (
        <button disabled={!xPlaying} className={style} onClick={onClick}>{value}</button>
    )
}