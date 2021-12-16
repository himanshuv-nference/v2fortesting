import useStyles from '../public/styles/HomepageStyles'
import { Typography as T } from '@material-ui/core'
import Link from 'next/link'

function Slider(props) {
  const styles = useStyles()
  const { item } = props
  return (
    <>
      {item.data.linkout ? (
        <Link href={item.data.linkout}>
          <a className={styles.link}>
            <div className={styles.slider}>
              <div className={styles.carouselImage}>
                <img src={item.data.image.url} className={styles.slideImage} />
              </div>
              <div className={styles.dateDiv}>
                <T className={styles.date}>{item.data.post_info}</T>
                <T className={styles.date}>· {item.data.date}</T>
              </div>
              <div>
                <T className={styles.imgDesciption}>{item.data.summary}</T>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <div className={styles.slider}>
          <div className={styles.carouselImage}>
            <img src={item.data.image.url} className={styles.slideImage} />
          </div>
          <div className={styles.dateDiv}>
            <T className={styles.date}>{item.data.post_info}</T>
            <T className={styles.date}>· {item.data.date}</T>
          </div>
          <div>
            <T className={styles.imgDesciption}>{item.data.summary}</T>
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
