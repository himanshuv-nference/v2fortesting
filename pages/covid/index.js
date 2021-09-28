import React from 'react'
import styles from '../../public/styles/MedicalStyles'
import PharmaStyles from '../../public/styles/PharmaStyles'
import CovidStyles from '../../public/styles/CovidpageStyles'
import clsx from 'clsx'
const logo = '/nference-web/CovidPageImages/Group 4221.svg'
const covidImage = '/nference-web/CovidPageImages/Group 4065.svg'
const linkicon = '/nference-web/CovidPageImages/Frame 3077.svg'
import { Typography as T } from '@material-ui/core'
import Prismic from '@prismicio/client'
import { Date, RichText } from 'prismic-reactjs'
import { useState, useEffect } from 'react'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

function DesktopCard(props) {
  const style = CovidStyles()
  const { Covid } = props

  return (
    <div className={style.card}>
      <div className={style.lineDiv}>
        <div>
          <T className={style.date}>{Covid.data.date_day}</T>
          <div className={style.time}>
            <T className={style.date}>{Covid.data.time}</T>
          </div>
        </div>
        <div className={style.line} />
        <div className={style.circleDiv}>
          <div className={style.circle} />
          <div className={style.standingLine} />
        </div>
      </div>
      <div>
        <div className={style.tagDiv}>
          <div className={style.tag1}>
            <T className={style.tag1Text}>{Covid.data.tag1}</T>
          </div>
          <div className={style.tag2}>
            <T className={style.tag2Text}>{Covid.data.tag2}</T>
          </div>
        </div>
        <div className={style.titleDiv}>
          <img src={covidImage} />
          <T className={style.cardTitle}>{Covid.data.heading}</T>
        </div>
        <T className={style.desc}>{Covid.data.description}</T>
        <img src={Covid.data.image.url} className={style.cardImage} />
        <div className={style.linkandimageDiv}>
          {Covid.data.body[0].items.map((imagedata) => {
            return <img src={imagedata.publication_image.url} />
          })}
          <div className={style.linkDiv}>
            <T className={style.linkText}>publink</T>
            <img src={linkicon} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileCard(props) {
  const style = CovidStyles()
  const { Covid } = props
  return (
    <>
      <div className={style.mobileCard}>
        <div className={style.mobileDivdate}>
          <T className={style.date}>{Covid.data.date_day}</T>
          <T className={style.date}>{Covid.data.time}</T>
        </div>
        <div className={style.tagDiv}>
          <div className={style.tag1}>
            <T className={style.tag1Text}>{Covid.data.tag1}</T>
          </div>
          <div className={style.tag2}>
            <T className={style.tag2Text}>{Covid.data.tag2}</T>
          </div>
        </div>
        <T className={style.cardTitle}>{Covid.data.heading}</T>
        <T className={style.desc}>{Covid.data.description}</T>
        {Covid.data.image.url ? (
          <img src={Covid.data.image.url} className={style.cardImage} />
        ) : (
          <div></div>
        )}
        <div className={style.mobileLinkandImages}>
          <div className={style.mobilepubImages}>
            {Covid.data.body[0].items.map((imagedata) => {
              return (
                <img
                  className={style.pubImages}
                  src={imagedata.publication_image.url}
                />
              )
            })}
          </div>
          <div className={style.linkDiv}>
            <T className={style.linkText}>publink</T>
            <img src={linkicon} />
          </div>
        </div>
      </div>
    </>
  )
}

function TopCard(props) {
  const style = CovidStyles()
  const { cardData } = props
  return (
    <div className={style.box2}>
      <img src={cardData.data.image.url} className={style.box2Image} />
      <div>
        <T className={style.box2date}>{cardData.data.date}</T>
        <div className={style.tag1}>
          <T className={style.tag1Text}>{cardData.data.tag}</T>
        </div>
        <T className={style.cardHead}>{cardData.data.heading}</T>
        <T className={style.carddesc}>{cardData.data.abstract}</T>
        <div className={style.linkandimageDiv}>
          <img
            className={style.pubImages}
            src={cardData.data.body[0].items[0].image1.url}
          />
        </div>
      </div>
    </div>
  )
}
function Covid() {
  const s = styles()
  const x = PharmaStyles()
  const style = CovidStyles()
  const [data, setData] = useState([])
  const [cardData, setcardData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responseforPage = await Client.query(
        Prismic.Predicates.at('document.type', 'covid_page'),
      ).then((responseforPage) => {
        setData(responseforPage.results)
      })
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const responseforPage = await Client.query(
        Prismic.Predicates.at('document.type', 'covid_page_card'),
      ).then((responseforPage) => {
        setcardData(responseforPage.results)
      })
    }
    fetchData()
  }, [])

  data.sort(function (a, b) {
    return (
      new Date(b.data.date_and_time).getTime() -
      new Date(a.data.date_and_time).getTime()
    )
  })
  return (
    <>
      <div className={s.body}>
        <div className={x.box1}>
          <img src={logo} />
          <T className={style.Tophead}>
            FROM SCIENTIFIC DISCOVERY TO PUBLIC HEALTH POLICY IN 25 DAYS
          </T>
          <T className={style.TopSub}>
            Monitoring Real-world Evidence in Real-time
          </T>
        </div>
      </div>
      <div className={clsx(s.body, s.desktop)}>
        {cardData.map((data, index) => {
          return <TopCard cardData={data} key={index} />
        })}
      </div>
      <div className={clsx(s.mobile)}>
        {cardData.map((data, index) => {
          return <TopCard cardData={data} key={index} />
        })}
      </div>

      <div className={clsx(s.desktop, s.body)}>
        <div className={style.cardContainer}>
          {data.map((data, index) => {
            return <DesktopCard Covid={data} key={index} />
          })}
        </div>
      </div>
      <div className={clsx(s.mobile, style.mobileCardConatiner)}>
        {data.map((data, index) => {
          return <MobileCard Covid={data} key={index} />
        })}
      </div>
    </>
  )
}

export default Covid
