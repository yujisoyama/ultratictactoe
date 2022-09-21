import React from 'react'
import './Info.css'
import Modal from 'react-modal'
import { useState } from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import img from './win.png'

Modal.setAppElement('#root')

export const Info = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleOpenModal = (() => {
    setModalIsOpen(true)
  })

  const handleCloseModal = (() => {
    setModalIsOpen(false)
  })

  const customStyle = {
    overlay: {
        backgroundColor: 'rgb(46, 46, 46, 0.8)',
    },
    content: {
      top: '10%',
      left: '10%',
      bottom: '10%',
      right: '10%',
      backgroundColor: 'rgb(95, 95, 95)',
      border: 'none',
    },
  }

  return (
    <div className='info'>
        <p onClick={handleOpenModal}><AiOutlineInfoCircle /></p>
          <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={customStyle}>
            <div className='how-to-play'>
                <h1>How to play</h1>
                <p>Each player has 9 pieces with different strengths (3 - Large, 3 - Medium, 3 - Small). In your turn, put a piece (of your choice) in the central board to make your move.</p>
                <p>In your move, you have three possibilities: put any piece in a empty cell, pass your turn or <span>overwrite</span> a piece in the central board accordingly to their strengths:</p>
                <div className="content-info">
                    <div className="right">
                        <ul className='overwrite-list'>
                            <li>Large can overwrite Medium and Small pieces</li>
                            <li>Medium can overwrite Small pieces</li>
                            <li>Small cannot overwrite any piece</li>
                        </ul>
                        <p>You can overwrite your own piece in the board to increase its strength, to prevent its replacement by your opponent.</p>
                        <p>If the central board no longer has empty cells and your leftover pieces cannot overwrite anymore, your only choice is to pass the turn.</p>
                    </div>
                    <div className="left">
                        <p>And finally, just like a normal tic-tac-toe, the first to line up three elements wins! Have fun!!</p>
                        <img src={img} className='img' alt='win'/>
                    </div>
                </div>
            </div>
          </Modal>
      </div>
  )
}
