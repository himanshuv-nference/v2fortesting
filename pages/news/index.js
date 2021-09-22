import React from 'react'
import { Typography as T } from '@material-ui/core'
import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import Prismic from '@prismicio/client'
import { Date, RichText } from 'prismic-reactjs'
import { useState, useEffect } from 'react'
const theNewYorksTimess = '/nference-web/NewsRoomImages/Group 1213.svg'
const Bloomerg = '/nference-web/NewsRoomImages/bloom.svg'
const theWashingTimess = '/nference-web/NewsRoomImages/Group 1227.svg'
const theSA = '/nference-web/NewsRoomImages/SA.svg'
import dynamic from 'next/dynamic'
const Carousel = dynamic(
  () => {
    return import('react-material-ui-carousel')
  },
  { ssr: false },
)
const Pagination = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/Pagination/Pagination')
  },
  { ssr: false },
)
const ListItem = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/ListItem/ListItem')
  },
  { ssr: false },
)
const ChipFilterSelect = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/ChipFilter/ChipFilter')
  },
  { ssr: false },
)
import _ from 'lodash'
import clsx from 'clsx'
import Link from 'next/link'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

function Slider(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  console.log('slider props', props)
  console.log('slider items', item)
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
function SliderMobile(props) {
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
function CardRender(props) {
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
            <T className={xx.newsTitle}>{RichText.asText(news.data.title)}</T>
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
function MobileCardRender(props) {
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
            <T className={xx.newsTitle}>
              {RichText.asText(news.data.title).slice(0, 96) + '...'}
            </T>
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
const defaultValue = []
const defaultValueDate = null
function NewsRoom() {
  const [allNews, setallNews] = useState(defaultValueDate)
  const [recentFilter, setRecentFilter] = useState(defaultValueDate)
  const [topicFilter, setTopicFilter] = useState(defaultValue)
  const [filteredNews, setFilteredNews] = useState(defaultValue)
  const [pageNumber, setPageNumber] = useState(1)
  const [TotalPages, setTotalPages] = useState(1)
  const [pageSize, setpageSize] = useState(5)

  useEffect(() => {
    const fetchData = async () => {
      const responseforPage = await Client.query(
        Prismic.Predicates.at('document.type', 'news_room'),
      ).then((responseforPage) => {
        // setTotalPages(responseforPage.results.length)
        setallNews(responseforPage.results)
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filterNews = []
    if (allNews) {
      filterNews = allNews.filter(
        (x) =>
          topicFilter.includes(x.data.news_category) ||
          _.isEqual(topicFilter, defaultValue),
      )
      setFilteredNews(filterNews)
    }
  }, [topicFilter, allNews, pageNumber])
  if (recentFilter) {
    allNews.sort(function (a, b) {
      if (recentFilter === 1) {
        return (
          new Date(b.data.published_date).getTime() -
          new Date(a.data.published_date).getTime()
        )
      } else {
        return (
          new Date(a.data.published_date).getTime() -
          new Date(b.data.published_date).getTime()
        )
      }
    })
  }

  const xx = PublicationListingStyles()
  const s = styles()

  console.log('news are', allNews)

  if (allNews) {
    let topicArray = []
    let filterNews = allNews
    allNews.map((li) => {
      topicArray.push(li.data.news_category)
    })
    let uniquetopics = [...new Set(topicArray)]
    if (filteredNews != []) {
      filterNews = [...filteredNews]
    }
    filterNews = filterNews.slice((pageNumber - 1) * 5, pageNumber * 5)

    return (
      <>
        <div className={s.body}>
          <T className={xx.head}>Featured News</T>
          <div className={xx.headline}></div>
        </div>
        <div className={s.desktop}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={800}
            autoPlay={true}
          >
            {allNews.map((item, index) => {
              return <Slider item={item} key={index} />
            })}
          </Carousel>
        </div>
        <div className={s.mobile}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={800}
            autoPlay={true}
          >
            {allNews.map((item, index) => {
              return <SliderMobile item={item} key={index} />
            })}
          </Carousel>
        </div>
        <div className={xx.newslabel}>
          <img src={Bloomerg} className={xx.bloom} />
          <img src={theWashingTimess} className={xx.wash} />
          <img src={theNewYorksTimess} className={xx.newsyork} />
          <img src={theSA} className={xx.SA} />
        </div>

        <div className={s.body}>
          <div className={xx.mediaDiv}>
            <div className={xx.filterDivNews}>
              <ChipFilterSelect
                label={'Sorted by Most Recent'}
                className={xx.select}
                value={recentFilter}
                onChange={setRecentFilter}
                isDefault={_.isEqual(recentFilter, defaultValueDate)}
                onDelete={() => setRecentFilter(defaultValueDate)}
              >
                <ListItem key={1} id={1} text={'Most Recent'} />
                <ListItem key={2} id={2} text={'Oldest'} />
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'All Topics'}
                className={xx.select}
                value={topicFilter}
                onChange={setTopicFilter}
                isDefault={_.isEqual(topicFilter, defaultValue)}
                onDelete={() => setTopicFilter(defaultValue)}
              >
                {uniquetopics.map((ta, index) => (
                  <ListItem key={index} id={ta} text={ta} />
                ))}
              </ChipFilterSelect>
            </div>
            <T className={xx.mediaText}>
              Media Contact {' | '} media@nference.net
            </T>
          </div>
          <div className={xx.cardconatiner}>
            {filterNews.map((news, index) => {
              return <CardRender news={news} key={index} />
            })}
          </div>
        </div>
        <div className={s.mobile}>
          {filterNews.map((news, index) => {
            return <MobileCardRender news={news} key={index} />
          })}
        </div>
        <div className={s.body}>
          <div className={clsx(xx.Pageconatiner, xx.pageButtom)}>
            <Pagination
              className={xx.pageination}
              value={pageNumber}
              totalCount={filteredNews.length}
              pageSize={pageSize}
              onChange={setPageNumber}
            />
          </div>
        </div>
      </>
    )
  } else {
    return <T>Loading....</T>
  }
}

export default NewsRoom
