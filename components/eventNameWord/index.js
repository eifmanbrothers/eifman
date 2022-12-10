import styles from './styles.module.scss'
import cn from 'classnames'
import { EventNameLetter } from 'components'

const EventNameWord = ({ word, place, index, isOver }) => {
  // console.log(place)
  const letters = word.split('')
  return (
    <ul className={
      cn(styles.eventNameWord,
        { [styles.chayka]: index === 1 && place === 'chayka' },
        { [styles.chayka]: index === 2 && place === 'chayka' }
      )
    }>
      {
        letters.map((el, index) => <EventNameLetter
          key={index}
          letter={el}
          isOver={isOver}
        />)
      }
    </ul>
  )
}

export default EventNameWord