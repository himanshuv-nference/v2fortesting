import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function CardRender(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { news } = props
  return (
    <>
      <div className={s.desktop}>
        <div className={xx.newsCard}>
          <div className={xx.newsleft}>
            <div className={xx.newscardhead}>
              <T className={xx.newsSource}>{news.data.news_category}</T>
              {news.data.source_name ? (
                <T className={xx.newsSource}> · {news.data.source_name}</T>
              ) : (
                <div></div>
              )}
            </div>
            <Link href={news.data.news_url.url}>
              <a className={xx.nav}>
                <T className={xx.newsTitle}>
                  {RichText.asText(news.data.title)}
                </T>
              </a>
            </Link>
            <T className={xx.newsDesc}>{news.data.description}</T>
            <T className={xx.newsDate}>{news.data.published_date}</T>
          </div>
          <div className={xx.newsright}>
            <img className={xx.newsCardImage} src={news.data.news_image.url} />
          </div>
        </div>
      </div>
    </>
  )
}
