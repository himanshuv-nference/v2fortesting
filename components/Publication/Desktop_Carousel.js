import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { Typography as T } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import clsx from 'clsx'
import Link from 'next/link'

export default function Slider(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  return (
    <>
      <div className={xx.slidercontainer}>
        <img src={item.data.paper_image.url} className={xx.sample} />
        <div>
          <T className={xx.Slidertop}>FEATURED</T>
          <T className={xx.SliderTitle}>{RichText.asText(item.data.title)}</T>
          <T className={xx.sliderDesc}>{`${item.data.abstract.substring(
            0,
            300,
          )}....`}</T>
          <div className={xx.datediv}>
            <div className={xx.authdiv}>
              <T className={xx.sliderAuth}>Authored by:</T>
              {item.data.institutional_authors.map((item, index) => {
                return (
                  <div className={xx.authcover}>
                    <T className={xx.sliderAuth}>{item.text}</T>
                  </div>
                )
              })}
            </div>
            <div className={xx.Date}>
              <T className={xx.sliderDate}>{item.data.dt_published}</T>
            </div>
          </div>
          <div className={xx.authdiv}>
            {' '}
            <T className={xx.sliderAuth}>Featured in:</T>{' '}
            <T className={clsx(xx.underline, xx.sliderAuth)}>
              {RichText.render(item.data.featured_in)}
            </T>
          </div>
          <div className={xx.authdiv}>
            {' '}
            <T className={xx.sliderAuth}>Cited by:</T>
            <T className={clsx(xx.underline, xx.sliderAuth)}>
              {RichText.render(item.data.cited_by)}
            </T>
          </div>
        </div>
      </div>
    </>
  )
}
