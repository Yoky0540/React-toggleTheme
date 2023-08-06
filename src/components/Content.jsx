import React, { useContext } from 'react'
import dark from '../images/dark.svg'
import light from '../images/light.svg'
import { themeContext } from '../App'



const Content = () => {
    const {theme} = useContext(themeContext)
    return (
        <main className={theme==='dark'?'dark':'light'}>
            <div>
                <h1>Learning React by Yok</h1>
                <p>DarkMode Workshop</p>
            </div>
            <img src={theme==='dark'?dark:light} alt="Logo" />
        </main>
  )
}

export default Content