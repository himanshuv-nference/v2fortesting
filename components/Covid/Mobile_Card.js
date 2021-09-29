import { Typography as T } from '@material-ui/core'
import CovidStyles from '../../public/styles/CovidpageStyles'
const linkicon = '/nference-web/CovidPageImages/Frame 3077.svg'

export default function MobileCard(props) {
  const style = CovidStyles()
  const { Covid } = props
  return (
    <>
      <div className={style.mobileCard}>
        <div className={style.mobileDivdate}>
          <T className={style.date}>{Covid.data.date_day}</T>
          <T className={style.date}>{Covid.data.time}</T>
        </div>
        <div className={style.tagDiv}>
          <div className={style.tag1}>
            <T className={style.tag1Text}>{Covid.data.tag1}</T>
          </div>
          <div className={style.tag2}>
            <T className={style.tag2Text}>{Covid.data.tag2}</T>
          </div>
        </div>
        <T className={style.cardTitle}>{Covid.data.heading}</T>
        <T className={style.desc}>{Covid.data.description}</T>
        {Covid.data.image.url ? (
          <img src={Covid.data.image.url} className={style.cardImage} />
        ) : (
          <div></div>
        )}
        <div className={style.mobileLinkandImages}>
          <div className={style.mobilepubImages}>
            {Covid.data.body[0].items.map((imagedata) => {
              return (
                <img
                  className={style.pubImages}
                  src={imagedata.publication_image.url}
                />
              )
            })}
          </div>
          <div className={style.linkDiv}>
            <T className={style.linkText}>publink</T>
            <img src={linkicon} />
          </div>
        </div>
      </div>
    </>
  )
}
