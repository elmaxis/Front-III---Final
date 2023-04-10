import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const Footer = () => {
  const { isModeDark } = useContext(DarkModeContext);

    return (
      <footer className={isModeDark? "dark" : null}>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
      </footer>
    )
 }

export default Footer
