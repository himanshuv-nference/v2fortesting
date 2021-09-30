import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function CardRender(props) {
  const listingStyles = PublicationListingStyles()
  const medicalStyles = styles()
  const { news } = props
  return (
    <>
      <div className={medicalStyles.desktop}>
        <div className={listingStyles.newsCard}>
          <div className={listingStyles.newsleft}>
            <div className={listingStyles.newscardhead}>
              <T className={listingStyles.newsSource}>
                {news.data.news_category}
              </T>
              {news.data.source_name ? (
                <T className={listingStyles.newsSource}>
                  ·{news.data.source_name}
                </T>
              ) : (
                <div></div>
              )}
            </div>
            <Link href={news.data.news_url.url}>
              <a className={listingStyles.nav}>
                <T className={listingStyles.newsTitle}>
                  {RichText.asText(news.data.title)}
                </T>
              </a>
            </Link>
            <T className={listingStyles.newsDesc}>{news.data.description}</T>
            <T className={listingStyles.newsDate}>{news.data.published_date}</T>
          </div>
          <div className={listingStyles.newsright}>
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
