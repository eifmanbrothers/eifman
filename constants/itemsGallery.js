import seagull from '../images/events/seagull.png'
import upAndDown from '../images/events/upAndDown.png'

export const items = [
  {
    id: 1,
    name: {
      en: "Rodin, Her Eternal Idol",
      ru: "Роден, ее вечный идол"
    },
    path: '/repertoire/rodin',
    imageAlt: {
      en: "Photo ballet Rodin, Her Eternal Idol",
      ru: "Фотография спектакля Роден, ее вечный идол"
    },
    image: seagull
  },
  {
    id: 2,
    name: {
      en: "Up & Down",
      ru: "Вверх и вниз"
    },
    path: '/repertoire/up-and-down',
    imageAlt: {
      en: "Photo ballet up-and-down",
      ru: "Фотография спектакля Вверх и вниз"
    },
    image: upAndDown
  }
]