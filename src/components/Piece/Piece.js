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
    let empty = value === null ? true : false
    let disable

    if (empty) {
        disable = true
    } else {
        disable = !xPlaying
    }

    return (
        <button disabled={disable} className={style} onClick={onClick}>{value}</button>
    )
}