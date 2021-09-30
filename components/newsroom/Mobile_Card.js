import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function MobileCardRender(props) {
  const listingStyles = PublicationListingStyles()
  const medicalStyles = styles()
  const { news } = props
  return (
    <>
      <div className={medicalStyles.mobile}>
        <div className={listingStyles.newsCard}>
          <div className={listingStyles.mobileLeft}>
            {/* <T className={listingStyles.newsSource}>{news.data.news_category}</T> */}
            <T className={listingStyles.newsSource}>{news.data.source_name}</T>
            <Link href={news.data.news_url.url}>
              <a className={listingStyles.nav}>
                <T className={listingStyles.newsTitle}>
                  {RichText.asText(news.data.title).slice(0, 96) + '...'}
                </T>
              </a>
            </Link>
            <div className={listingStyles.Carddatediv}>
              <div className={listingStyles.mobileauthcover}>
                <T className={listingStyles.sliderAuth}>
                  {news.data.news_category}
                </T>
              </div>
              <T className={listingStyles.newsDate}>
                {news.data.published_date}
              </T>
            </div>
          </div>
          <div className={listingStyles.mobileRight}>
            <img
              className={listingStyles.newsCardImage}
              src={news.data.news_image.url}
            />
          </div>
        </div>
      </div>
    </>
  )
}
