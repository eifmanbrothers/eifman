import styles from './styles.module.scss'
import { EventImagine } from 'components'
import { items } from 'constants/itemsGallery'

const Gallery = () => {
  // console.log(items)
  return (
    <ul className={styles.gallery}>
      {
        items.map((el) => <EventImagine
          key={el.id}
          href={el.path}
          imageAlt={el.imageAlt}
          name={el.name}
          image={el.image}
        />)
      }
    </ul>
  )
}

export default Gallery