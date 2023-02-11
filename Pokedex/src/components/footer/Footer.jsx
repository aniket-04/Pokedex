import React from 'react'

import './footer.css'

const Footer = ({color}) => {
  return (
    <footer className={color}>
    <p id="footer-text-1">Make with ❤️ for the PokéSpartans team Platzi Master</p>
    <p id="footer-text-2">Ours Team</p>
    </footer>
  )
}

export default Footer