import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function SliderMobile(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  return (
    <>
      <div className={xx.newsmobileContaniner}>
        <div className={xx.newsmobileDatediv}>
          <T className={xx.Slidertop}>{item.data.source_name}</T>
          <T className={xx.sliderDate}>{item.data.published_date}</T>
        </div>
        <T className={xx.SliderTitle}>{RichText.asText(item.data.title)}</T>
        <T className={xx.sliderDesc}>{`${item.data.description.substring(
          0,
          150,
        )}....`}</T>
        <div className={xx.Newsdatediv}>
          <div className={xx.authdiv}>
            <div className={xx.mobileauthcover}>
              <T className={xx.sliderAuth}>{item.data.news_category}</T>
            </div>
          </div>
          <Link href={item.data.news_url}>
            <a className={styles.nav}>
              <T className={xx.readmore}>Read more -{'>'} </T>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
