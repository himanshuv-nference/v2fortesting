import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { Typography as T } from '@material-ui/core'
import { Date, RichText } from 'prismic-reactjs'
import clsx from 'clsx'
import Link from 'next/link'

export default function SliderMobile(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  return (
    <>
      <div className={xx.mobileContaniner}>
        <div className={xx.mobileDatediv}>
          <T className={xx.Slidertop}>FEATURED</T>
          <T className={xx.sliderDate}>{item.data.dt_published}</T>
        </div>
        <T className={xx.SliderTitle}>{RichText.asText(item.data.title)}</T>
        <T className={xx.sliderDesc}>{`${item.data.abstract.substring(
          0,
          150,
        )}....`}</T>
        <div className={xx.datediv}>
          <div className={xx.authdiv}>
            {item.data.institutional_authors.map((item, index) => {
              return (
                <div className={xx.mobileauthcover}>
                  <T className={xx.sliderAuth}>{item.text}</T>
                </div>
              )
            })}
          </div>
          <Link href={`publications/${item.id}`}>
            <a className={styles.nav}>
              <T className={xx.readmore}>Read more -{'>'} </T>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
