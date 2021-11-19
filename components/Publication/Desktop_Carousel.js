import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { Typography as T } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import clsx from 'clsx'
import Link from 'next/link'

export default function Slider(props) {
  const listingStyles = PublicationListingStyles()
  const { item } = props
  var x = RichText.asText(item.data.title)
  if (
    (x =
      'Building a best-in-class de-identification tool for electronic medical records through ensemble learning')
  )
    console.log('images', item.data.body[0])
  return (
    <>
      <div className={listingStyles.slidercontainer}>
        {item.data.paper_image.url ? (
          <img
            src={item.data.paper_image.url}
            className={listingStyles.sample}
          />
        ) : (
          <div />
        )}

        <div>
          <T className={listingStyles.Slidertop}>FEATURED</T>
          <T className={listingStyles.SliderTitle}>
            {RichText.asText(item.data.title)}
          </T>
          {item.data.abstract ? (
            <T
              className={listingStyles.sliderDesc}
            >{`${item.data.abstract.substring(0, 300)}....`}</T>
          ) : (
            <div />
          )}

          <div className={listingStyles.datediv}>
            <div className={listingStyles.authdiv}>
              <T className={listingStyles.sliderAuth}>Authored by:</T>
              {item.data.institutional_authors.map((item, index) => {
                return (
                  <div className={listingStyles.authcover}>
                    <T className={listingStyles.sliderAuth}>{item.text}</T>
                  </div>
                )
              })}
            </div>
            <div className={listingStyles.Date}>
              <T className={listingStyles.sliderDate}>
                {item.data.dt_published}
              </T>
            </div>
          </div>
          <div className={listingStyles.logosDiv}>
            {item.data.body[0] ? (
              item.data.body[0].items.map((logo, index) => {
                return (
                  <div className={listingStyles.logoMargin}>
                    <img
                      src={logo.image_carousel.url}
                      className={listingStyles.logos}
                    />
                  </div>
                )
              })
            ) : (
              <div />
            )}
          </div>
          <div className={listingStyles.authdiv}>
            {' '}
            <T className={listingStyles.sliderAuth}>Featured in:</T>{' '}
            <T className={clsx(listingStyles.sliderAuth)}>
              {RichText.render(item.data.featured_in)}
            </T>
          </div>
          {/* <div className={listingStyles.authdiv}>
            {' '}
            <T className={listingStyles.sliderAuth}>Cited by:</T>
            <T
              className={clsx(
                listingStyles.underline,
                listingStyles.sliderAuth,
              )}
            >
              {RichText.render(item.data.cited_by)}
            </T>
          </div> */}
        </div>
      </div>
    </>
  )
}
