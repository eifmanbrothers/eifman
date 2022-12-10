import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import cn from 'classnames'

const EventNameLetter = ({ letter, isOver }) => {
  const [isServer, setIsServer] = useState(false)
  // console.log(letter)
  let delay = 0
  if (isServer) { delay = Math.floor(Math.random() * 450) }
  // const delay = Math.floor(Math.random() * 450)
  // console.log(delay)
  useEffect(() => {
    setIsServer(true)
  }, [])
  return (
    <li
      className={
        cn(styles.letter,
          { [styles.letter_over]: isOver }
        )
      }
      style={{ transitionDelay: `${delay}ms` }}
    >{letter}</li>

  )
}

export default EventNameLetter