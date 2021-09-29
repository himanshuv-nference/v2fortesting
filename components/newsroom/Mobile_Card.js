import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function MobileCardRender(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { news } = props
  return (
    <>
      <div className={s.mobile}>
        <div className={xx.newsCard}>
          <div className={xx.mobileLeft}>
            {/* <T className={xx.newsSource}>{news.data.news_category}</T> */}
            <T className={xx.newsSource}>{news.data.source_name}</T>
            <Link href={news.data.news_url.url}>
              <a className={xx.nav}>
                <T className={xx.newsTitle}>
                  {RichText.asText(news.data.title).slice(0, 96) + '...'}
                </T>
              </a>
            </Link>
            <div className={xx.Carddatediv}>
              <div className={xx.mobileauthcover}>
                <T className={xx.sliderAuth}>{news.data.news_category}</T>
              </div>
              <T className={xx.newsDate}>{news.data.published_date}</T>
            </div>
          </div>
          <div className={xx.mobileRight}>
            <img className={xx.newsCardImage} src={news.data.news_image.url} />
          </div>
        </div>
      </div>
    </>
  )
}
