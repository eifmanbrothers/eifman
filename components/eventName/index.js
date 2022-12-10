import styles from './styles.module.scss'
import cn from 'classnames'
import { EventNameWord } from 'components'

const EventName = ({ name, place, isOver }) => {
  const words = name.split(' ')

  return (
    <div
      className={
        cn(styles.eventName, styles[place],
          // { [styles.eventName_over]: isOver }
        )
      }
    >
      {
        words.map((el, index) =>
          <EventNameWord
            word={el}
            key={el}
            place={place}
            index={index}
            isOver={isOver}
          />)
      }
    </div>
  )
}

export default EventName