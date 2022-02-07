import { Typography as T } from '@material-ui/core'
import CovidStyles from '../../public/styles/CovidpageStyles'
import Link from 'next/link'

const covidImage = '/CovidPageImages/Group 4065.svg'
const linkicon = '/CovidPageImages/Frame 3077.svg'

export default function DesktopCard(props) {
  const style = CovidStyles()
  const { Covid } = props

  return (
    <div className={style.card}>
      <div className={style.lineDiv}>
        <div className={style.dateContainer}>
          <T className={style.date} align={'right'}>
            {Covid.data.date_day}
          </T>
          <T className={style.date} align={'right'}>
            {Covid.data.time}
          </T>
        </div>
        <div className={style.line} />
        <div className={style.circleDiv}>
          <div className={style.circle} />
          <div className={style.standingLine} />
        </div>
      </div>
      <div className={style.newsContainer}>
        <div className={style.tagDiv}>
          <div className={style.tag1}>
            <T className={style.tag1Text}>{Covid.data.tag1}</T>
          </div>
          {Covid.data.tag2 ? (
            <div className={style.tag2}>
              <T className={style.tag2Text}>{Covid.data.tag2}</T>
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className={style.titleDiv}>
          <img src={covidImage} />
          <T className={style.cardTitle}>{Covid.data.heading}</T>
        </div>
        <T className={style.desc}>{Covid.data.description}</T>
        <img src={Covid.data.image.url} className={style.cardImage} />
        <div className={style.linkandimageDiv}>
          {Covid.data.body[0].items.map((imagedata) => {
            return <img src={imagedata.publication_image.url} />
          })}
          {Covid.data.link ? (
            <Link href={Covid.data.link}>
              <a>
                <div className={style.linkDiv}>
                  <T className={style.linkText}>publink</T>
                  <img src={linkicon} />
                </div>
              </a>
            </Link>
          ) : (
            <div className={style.linkDiv}>
              <div />
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        a {
          text-decoration: none !important;
        }
      `}</style>
    </div>
  )
}
