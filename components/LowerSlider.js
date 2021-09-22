import Carousel from 'react-material-ui-carousel'
import styles from '../public/styles/MedicalStyles'
import useStyles from '../public/styles/HomepageStyles'
import { Typography as T } from '@material-ui/core'
import React from 'react'
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'
import clsx from 'clsx'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

function Slider2(props) {
  const styles = useStyles()

  const { item } = props
  return (
    <>
      <div className={styles.slider2container}>
        {item.map((item, index) => (
          <div className={styles.slider2}>
            <T className={styles.slider2Top}>{item.data.published_in.text}</T>
            <T className={styles.slider2head}>
              {RichText.asText(item.data.title)}
            </T>
            <T className={styles.slider2disc}>{`${item.data.abstract.substring(
              0,
              300,
            )}....`}</T>
            {/* <NavLink className={styles.nav} to={`publications/${item.id}`}>
              <T className={styles.slider2read}>Read more -{'>'}</T>
            </NavLink> */}
          </div>
        ))}
      </div>
    </>
  )
}
function Slider2mobile(props) {
  const styles = useStyles()

  const { item } = props

  return (
    <>
      <div className={styles.slider2container}>
        <div className={styles.slider2}>
          <T className={styles.slider2Top}>{item.data.published_in.text}</T>
          <T className={styles.slider2head}>
            {' '}
            {RichText.asText(item.data.title)}
          </T>
          <T className={styles.slider2disc}>{`${item.data.abstract.substring(
            0,
            200,
          )}....`}</T>
          {/* <NavLink className={styles.nav} to={`publications/${item.id}`}>*/}
          <T className={styles.slider2read}>Read more -{'>'}</T>
          {/*</NavLink> */}
        </div>
      </div>
    </>
  )
}

function LowerSlider() {
  const s = styles()
  const [doc, setDocData] = useState(null)
  const location = useRouter()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'publications'),
      ).then((response) => {
        setDocData(response.results)
      })
    }
    fetchData()
  }, [])
  console.log('doc is')

  if (doc) {
    let filteredPublication = []
    if (splitLocation[1] === '') {
      filteredPublication = doc.filter((x) =>
        x.data.publication_types.some((us) => us.text === 'co-auth'),
      )
    }
    if (splitLocation[1] === 'pharma') {
      filteredPublication = doc.filter((x) =>
        x.data.publication_types.some((us) => us.text === 'peer-reviewed'),
      )
    }
    if (splitLocation[1] === 'medical') {
      filteredPublication = doc.filter((x) =>
        x.data.publication_types.some((us) => us.text === 'peer-reviewed'),
      )
      filteredPublication = doc.filter((x) =>
        x.data.publication_types.some((us) => us.text === 'co-auth'),
      )
    }

    let customItems2 = []
    let sliderItems = []
    filteredPublication.map((item, index) => {
      sliderItems.push(item)
      if (sliderItems.length === 3) {
        customItems2.push(sliderItems)
        sliderItems = []
      }
    })
    if (sliderItems.length !== 0) {
      customItems2.push(sliderItems)
    }
    console.log('custom items', customItems2)
    return (
      <>
        <div className={s.desktop}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={900}
            autoPlay={true}
          >
            {customItems2.map((item, index) => {
              return <Slider2 item={item} key={index} />
            })}
          </Carousel>
        </div>
        <div className={clsx(s.mobile, s.mobileSLider)}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={700}
            autoPlay={true}
          >
            {filteredPublication.map((item, index) => {
              return <Slider2mobile item={item} key={index} />
            })}
          </Carousel>
        </div>
      </>
    )
  } else {
    return <T>Loading....</T>
  }
}

export default LowerSlider
