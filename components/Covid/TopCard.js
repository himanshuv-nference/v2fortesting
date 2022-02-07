import { Typography as T } from '@material-ui/core'
import CovidStyles from '../../public/styles/CovidpageStyles'

export default function TopCard(props) {
  const style = CovidStyles()
  const { cardData } = props
  return (
    <div className={style.box2}>
      <img src={cardData.data.image.url} className={style.box2Image} />
      <div>
        <T className={style.box2date}>{cardData.data.date}</T>
        <div className={style.tag1}>
          <T className={style.tag1Text}>{cardData.data.tag}</T>
        </div>
        <T className={style.cardHead}>{cardData.data.heading}</T>
        <T className={style.carddesc}>{cardData.data.abstract}</T>
        <div className={style.linkandimageDiv}>
          <img
            className={style.pubImages}
            src={cardData.data.body[0].items[0].image1.url}
          />
        </div>
      </div>
    </div>
  )
}
