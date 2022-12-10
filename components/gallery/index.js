import styles from './styles.module.scss'
import { useRef, useEffect, useState } from 'react'
import { EventImagine } from 'components'
import { items } from 'constants/itemsGallery'
import useWindowSize from 'helpers/windowsWidth'
// import usePosMouseX from 'helpers/windowMouseMove'

const Gallery = () => {
  const container = useRef(null)
  // full width gallery
  const [widthGallery, setWidthGallery] = useState(0)
  // current left value  
  const [value, setValue] = useState(0)
  // dynamic move cursor value 
  const [moveValue, setMoveValue] = useState(0)

  const currentUserWidth = useWindowSize()

  const widthHandle = (evt) => {
    setMoveValue(evt.clientX)
    setValue(moveValue * ((widthGallery - currentUserWidth) / currentUserWidth))
  }

  useEffect(() => {
    setWidthGallery(container.current.scrollWidth)
  }, [])

  return (
    <div className={styles.gallery}>
      <ul className={styles.gallery__list}
        ref={container}
        onMouseMove={widthHandle}
        style={{ left: `-${value}px` }}
      >
        {
          items.map((el) => <EventImagine
            key={el.id}
            href={el.path}
            imageAlt={el.imageAlt}
            name={el.name}
            image={el.image}
            place={el.place}
          />)
        }
      </ul>
      <p>{useWindowSize()}</p>
      <p>{widthGallery}</p>
    </div>

  )
}

export default Gallery