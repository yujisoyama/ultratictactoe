import React from 'react'
import './Box.css'

export const Box = ({ value, size, onClick }) => {
    let style = value === 'X' ? 'box x ' : 'box o '
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
        <button className={style} onClick={onClick}>{value}</button>
    )
}
