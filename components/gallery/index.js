import styles from './styles.module.scss'
import { useRef, useEffect, useState } from 'react'
import { EventImagine } from 'components'
import { items } from 'constants/itemsGallery'
import useWindowSize from 'helpers/windowsWidth'

const Gallery = () => {
  const container = useRef(null)
  const containerFront = useRef(null)
  // full width gallery
  const [widthGallery, setWidthGallery] = useState(0)
  const [widthGalleryFront, setWidthGalleryFront] = useState(0)
  // current left value  
  const [value, setValue] = useState(0)
  const [valueFront, setValueFront] = useState(0)
  // dynamic move cursor value 
  const [moveValue, setMoveValue] = useState(0)

  const currentUserWidth = useWindowSize()

  const widthHandle = (evt) => {
    setMoveValue(evt.clientX)
    setValue(moveValue * ((widthGallery - currentUserWidth) / currentUserWidth))
    setValueFront(moveValue * ((widthGalleryFront - currentUserWidth) / currentUserWidth))
  }

  useEffect(() => {
    setWidthGallery(container.current.scrollWidth)
    setWidthGalleryFront(containerFront.current.scrollWidth)
  }, [])

  return (
    <div className={styles.gallery}>
      <ul className={styles.gallery__list}
        ref={container}
        onMouseMove={widthHandle}
        style={{ left: `-${value}px` }}>
        {
          items.slice(7).map((el) => <EventImagine
            id={el.id}
            key={el.id.ru}
            href={el.path}
            imageAlt={el.imageAlt}
            name={el.name}
            image={el.image}
            place={el.place}
          />)
        }
      </ul>
      <ul className={styles.gallery__list_front}
        ref={containerFront}
        onMouseMove={widthHandle}
        style={{ left: `-${valueFront}px` }}>
        {
          items.slice(0, 7).map((el) => <EventImagine
            id={el.id}
            key={el.id.ru}
            href={el.path}
            imageAlt={el.imageAlt}
            name={el.name}
            image={el.image}
            place={el.place}
          />)
        }
      </ul>
      {/* <p>{useWindowSize()}</p> */}
      {/* <p>{widthGallery}</p>
      <p>{widthGalleryFront}</p> */}
    </div>

  )
}

export default Gallery