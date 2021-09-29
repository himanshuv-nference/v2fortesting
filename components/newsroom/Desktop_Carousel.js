import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { RichText } from 'prismic-reactjs'

export default function Slider(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  return (
    <>
      <div className={xx.slidercontainer}>
        <img src={item.data.news_image.url} className={xx.sample} />
        <div>
          <T className={xx.Slidertop}>{item.data.source_name}</T>
          <T className={xx.SliderTitle}>{RichText.asText(item.data.title)}</T>
          <T className={xx.sliderDesc}>{`${item.data.description.substring(
            0,
            300,
          )}....`}</T>

          <T className={xx.sliderDate}>{item.data.published_date}</T>
        </div>
      </div>
    </>
  )
}
