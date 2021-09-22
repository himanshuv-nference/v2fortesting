import React from 'react'
import { Typography as T } from '@material-ui/core'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
const Llogo = '/nference-web/PublicationPageImages/The_Lancet_logo 1.svg'
const Nlogo = '/nference-web/PublicationPageImages/Vector.svg'
const SAlogo =
  '/nference-web/PublicationPageImages/Scientific_American_logo 1.svg'
import clsx from 'clsx'
import styles from '../../public/styles/MedicalStyles'
import Prismic from '@prismicio/client'
import { Date, RichText } from 'prismic-reactjs'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const HorizontalScroll = dynamic(
  () => {
    return import('nferx-core-ui/src/widgets/HorizontalScroll/HorizontalScroll')
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
    return import(
      'nferx-core-ui/src/widgets/ChipFilter/ChipFilterSelect/ChipFilterSelect'
    )
  },
  { ssr: false },
)
import _ from 'lodash'

import Link from 'next/link'

const ReactReadMoreReadLess = dynamic(
  () => {
    return import('react-read-more-read-less')
  },
  { ssr: false },
)
const Carousel = dynamic(
  () => {
    return import('react-material-ui-carousel')
  },
  { ssr: false },
)
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
function SliderMobile(props) {
  const xx = PublicationListingStyles()
  const s = styles()
  const { item } = props
  return (
    <>
      <div className={xx.mobileContaniner}>
        <div className={xx.mobileDatediv}>
          <T className={xx.Slidertop}>FEATURED</T>
          <T className={xx.sliderDate}>{item.data.dt_published}</T>
        </div>
        <T className={xx.SliderTitle}>{RichText.asText(item.data.title)}</T>
        <T className={xx.sliderDesc}>{`${item.data.abstract.substring(
          0,
          150,
        )}....`}</T>
        <div className={xx.datediv}>
          <div className={xx.authdiv}>
            {item.data.institutional_authors.map((item, index) => {
              return (
                <div className={xx.mobileauthcover}>
                  <T className={xx.sliderAuth}>{item.text}</T>
                </div>
              )
            })}
          </div>
          <Link href={`publications/${item.id}`}>
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
  const [show, setShow] = useState(false)
  const seeMore = () => {
    setShow(true)
  }
  const seeLess = () => {
    setShow(false)
  }

  const s = styles()
  const a = String(props.doc.data.abstract)
  console.log(RichText.render(props.doc.data.featured_in))
  const xx = PublicationListingStyles()
  return (
    <div className={xx.card}>
      <div className={xx.cardLeft}>
        <Link href={`publications/${props.doc.id}`}>
          <a className={xx.nav}>
            <T className={xx.cardTitle}>
              {RichText.asText(props.doc.data.title)}
            </T>
          </a>
        </Link>
        <div className={xx.mobilePosted}>
          {' '}
          <div className={xx.postedIndiv}>
            <T className={xx.postedIn}>Posted in</T>
            <T className={clsx(xx.postedIn, xx.underline)}>
              {RichText.render(props.doc.data.published_in)}
            </T>
          </div>
          <div className={xx.postedIndiv}>
            <T className={clsx(xx.postedIn, xx.pubflex)}>Featured in: </T>

            <T className={clsx(xx.postedIn, xx.underline)}>
              {RichText.render(props.doc.data.featured_in)}
            </T>
          </div>
        </div>
        <div className={s.desktop}>
          <div className={xx.postedIndiv}>
            <T className={clsx(xx.postedIn, xx.pubflex)}>Cited by: </T>
            <T className={clsx(xx.postedIn, xx.underline)}>
              {RichText.render(props.doc.data.cited_by)}
            </T>
          </div>
        </div>
        <T className={xx.authors}>
          <ReactReadMoreReadLess
            charLimit={60}
            readMoreText={'more'}
            readLessText={'less'}
            readMoreClassName={xx.authormore}
            readLessClassName={xx.authormore}
          >
            {props.doc.data.authors}
          </ReactReadMoreReadLess>
        </T>

        <T className={xx.cardesc}>
          {`${props.doc.data.abstract.substring(0, 300)}....`}
        </T>
        <T className={clsx(xx.cardesc, xx.desktop)}>
          Correspondence to: {props.doc.data.correspondence_to}
        </T>
      </div>
      <div className={s.desktop}>
        <div className={xx.cardRight}>
          <div>
            <T className={xx.postedIn}>Use Cases</T>
            {props.doc.data.usecase.map((item, index) => {
              return (
                <div className={xx.usecaseboxes}>
                  <T className={xx.usecaseText}>{item.text}</T>
                </div>
              )
            })}
          </div>
          <div>
            <T className={xx.postedIn}>Therapeutic Area</T>
            {props.doc.data.therapeutic_area.map((item, index) => {
              return (
                <div className={xx.areaboxes}>
                  <T className={xx.usecaseText}>{item.text}</T>
                </div>
              )
            })}
          </div>
          <div>
            <T className={xx.postedIn}>Institutional Authors</T>
            {props.doc.data.institutional_authors.map((item, index) => {
              return (
                <div className={xx.authboxes}>
                  <T className={xx.usecaseText}>{item.text}</T>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={s.mobile}>
        <div className={xx.grid}>
          {props.doc.data.usecase.map((item, index) => {
            return (
              <div className={xx.usecaseboxes}>
                <T className={xx.usecaseText}>{item.text}</T>
              </div>
            )
          })}
        </div>
        <div
          className={clsx({ [xx.show]: !show, [xx.hide]: show })}
          onClick={seeMore}
        >
          <T className={xx.SeeMoreText}>more</T>
        </div>

        <div className={clsx({ [xx.show]: show, [xx.hide]: !show })}>
          <div className={xx.grid2}>
            {props.doc.data.therapeutic_area.map((item, index) => {
              return (
                <div className={xx.areaboxes}>
                  <T className={xx.usecaseText}>{item.text}</T>
                </div>
              )
            })}
            {props.doc.data.institutional_authors.map((item, index) => {
              return (
                <div className={xx.authboxes}>
                  <T className={xx.usecaseText}>{item.text}</T>
                </div>
              )
            })}
          </div>
          <div onClick={seeLess}>
            <T className={xx.SeeMoreText}>less</T>
          </div>
        </div>
      </div>
    </div>
  )
}
const defaultValue = []
const deafaultDatevalue = null
function PublicationListing() {
  const [allPublications, setallPublications] = useState(null)
  const [doc, setDocData] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [TotalPages, setTotalPages] = useState(1)
  const [pageSize, setpageSize] = useState(5)

  const [usecasesFilter, setUsecasesFilter] = useState(defaultValue)
  const [thAreaFilter, setthAreaFilter] = useState(defaultValue)
  const [InstAuthFilter, setInstAuthFilter] = useState(defaultValue)
  const [typeFilter, settypeFilter] = useState(defaultValue)
  const [DateFilter, setDateFilter] = useState(defaultValue)
  const [filteredData, setfilteredData] = useState(defaultValue)

  const [recentFilter, setRecentFilter] = useState(deafaultDatevalue)

  useEffect(() => {
    const fetchData = async () => {
      const responseforPage = await Client.query(
        Prismic.Predicates.at('document.type', 'publications'),
      ).then((responseforPage) => {
        setTotalPages(responseforPage.results.length)
        setallPublications(responseforPage.results)
      })
    }
    fetchData()
  }, [pageNumber])

  useEffect(() => {
    let filterPublications = []
    if (allPublications) {
      filterPublications = allPublications.filter(
        (x) =>
          x.data.usecase.some((us) => usecasesFilter.includes(us.text)) ||
          _.isEqual(usecasesFilter, defaultValue),
      )

      filterPublications = filterPublications.filter(
        (x) =>
          x.data.therapeutic_area.some((us) =>
            thAreaFilter.includes(us.text),
          ) || _.isEqual(thAreaFilter, defaultValue),
      )
      filterPublications = filterPublications.filter((x) =>
        x.data.institutional_authors.some(
          (us) =>
            InstAuthFilter.includes(us.text) ||
            _.isEqual(InstAuthFilter, defaultValue),
        ),
      )
      filterPublications = filterPublications.filter(
        (x) =>
          x.data.publication_types.some((us) => typeFilter.includes(us.text)) ||
          _.isEqual(typeFilter, defaultValue),
      )
      filterPublications = filterPublications.filter(
        (x) =>
          x.data.dt_published.slice(6, 11) == DateFilter ||
          _.isEqual(DateFilter, defaultValue),
      )
      setfilteredData(filterPublications)
      console.log('the data is ', filteredData)
      setPageNumber(1)
    }
  }, [
    allPublications,
    TotalPages,
    usecasesFilter,
    thAreaFilter,
    InstAuthFilter,
    typeFilter,
    DateFilter,
    recentFilter,
  ])

  console.log('pagenumber', pageNumber)
  console.log('total pages are', TotalPages)

  console.log('doc is')
  console.log(doc)
  const s = styles()
  const xx = PublicationListingStyles()
  if (doc || allPublications) {
    let usecaseArray = []
    let therepeuticAreaArray = []
    let instituteAuthArray = []
    let TypeArray = []

    allPublications.map((li) => {
      li.data.usecase.map((usecases, index) => {
        usecaseArray.push(usecases.text)
      })
      li.data.therapeutic_area.map((Tharea, index) => {
        therepeuticAreaArray.push(Tharea.text)
      })
      li.data.institutional_authors.map((Ia, index) => {
        instituteAuthArray.push(Ia.text)
      })
      li.data.publication_types.map((Ia, index) => {
        TypeArray.push(Ia.text)
      })
    })
    allPublications.map((li) => {})
    let unique = [...new Set(usecaseArray)]
    let uniqueThArea = [...new Set(therepeuticAreaArray)]
    let uniqueInstAr = [...new Set(instituteAuthArray)]
    let uniqueType = [...new Set(TypeArray)]

    let filterPublications = [...filteredData]
    if (recentFilter) {
      filterPublications.sort(function (a, b) {
        if (recentFilter === 1) {
          return (
            new Date(b.data.dt_published).getTime() -
            new Date(a.data.dt_published).getTime()
          )
        } else {
          return (
            new Date(a.data.dt_published).getTime() -
            new Date(b.data.dt_published).getTime()
          )
        }
      })
    }
    filterPublications = filterPublications.slice(
      (pageNumber - 1) * 5,
      pageNumber * 5,
    )
    console.log('filter are', usecasesFilter)
    console.log('filter page is', filterPublications.length)

    return (
      <>
        <div className={xx.body}>
          <T className={xx.head}>Featured Publications</T>
          <div className={xx.headline}></div>
        </div>
        <div className={s.desktop}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={800}
            autoPlay={true}
          >
            {allPublications.map((item, index) => {
              return <Slider item={item} key={index} />
            })}
          </Carousel>
        </div>
        <div className={clsx(s.mobile)}>
          <Carousel
            indicators={true}
            animation={'slide'}
            timeout={800}
            autoPlay={true}
          >
            {allPublications.map((item, index) => {
              return <SliderMobile item={item} key={index} />
            })}
          </Carousel>
        </div>

        <div className={xx.label} id="publicationTop">
          <img src={Nlogo} className={xx.labelImages} />
          <img src={Llogo} className={xx.labelImages} />
          <img src={SAlogo} className={xx.labelImages} />
        </div>

        <div className={xx.body}>
          <T className={xx.head2}>All Publications</T>
          <div className={s.desktop}>
            <div className={xx.filterDiv}>
              <ChipFilterSelect
                label={'Use case'}
                className={xx.select}
                value={usecasesFilter}
                onChange={setUsecasesFilter}
                isDefault={_.isEqual(usecasesFilter, defaultValue)}
                onDelete={() => setUsecasesFilter(defaultValue)}
              >
                {unique.map((ta, index) => (
                  <ListItem key={index} id={ta} text={ta} />
                ))}
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'Therapeutic Area'}
                className={xx.select}
                value={thAreaFilter}
                onChange={setthAreaFilter}
                isDefault={_.isEqual(thAreaFilter, defaultValue)}
                onDelete={() => setthAreaFilter(defaultValue)}
              >
                {uniqueThArea.map((ta, index) => (
                  <ListItem key={index} id={ta} text={ta} />
                ))}
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'Institutional Authors'}
                className={xx.select}
                value={InstAuthFilter}
                onChange={setInstAuthFilter}
                isDefault={_.isEqual(InstAuthFilter, defaultValue)}
                onDelete={() => setInstAuthFilter(defaultValue)}
              >
                {uniqueInstAr.map((ta, index) => (
                  <ListItem key={index} id={ta} text={ta} />
                ))}
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'Publication Type'}
                className={xx.select}
                value={typeFilter}
                onChange={settypeFilter}
                isDefault={_.isEqual(typeFilter, defaultValue)}
                onDelete={() => settypeFilter(defaultValue)}
              >
                {uniqueType.map((ta, index) => (
                  <ListItem key={index} id={ta} text={ta} />
                ))}
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'Sorted by Most Recent'}
                className={xx.select}
                value={recentFilter}
                onChange={setRecentFilter}
                isDefault={_.isEqual(recentFilter, deafaultDatevalue)}
                onDelete={() => setRecentFilter(deafaultDatevalue)}
              >
                <ListItem key={1} id={1} text={'Most Recent'} />
                <ListItem key={2} id={2} text={'Oldest'} />
              </ChipFilterSelect>
              <ChipFilterSelect
                label={'Date'}
                className={xx.select}
                value={DateFilter}
                onChange={setDateFilter}
                isDefault={_.isEqual(DateFilter, defaultValue)}
                onDelete={() => setDateFilter(defaultValue)}
              >
                <ListItem key={1} id={'2020'} text={2020} />
                <ListItem key={2} id={'2021'} text={2021} />
                <ListItem key={3} id={'2022'} text={2022} />
              </ChipFilterSelect>
            </div>
          </div>
          {/* 

          Mobile filters

           */}
          <div className={s.mobile}>
            <div className={xx.filterDiv}>
              <HorizontalScroll>
                <ChipFilterSelect
                  label={'Use case'}
                  className={xx.select}
                  value={usecasesFilter}
                  onChange={setUsecasesFilter}
                  isDefault={_.isEqual(usecasesFilter, defaultValue)}
                  onDelete={() => setUsecasesFilter(defaultValue)}
                >
                  {unique.map((ta, index) => (
                    <ListItem key={index} id={ta} text={ta} />
                  ))}
                </ChipFilterSelect>
                <ChipFilterSelect
                  label={'Therapeutic Area'}
                  className={xx.select}
                  value={thAreaFilter}
                  onChange={setthAreaFilter}
                  isDefault={_.isEqual(thAreaFilter, defaultValue)}
                  onDelete={() => setthAreaFilter(defaultValue)}
                >
                  {uniqueThArea.map((ta, index) => (
                    <ListItem key={index} id={ta} text={ta} />
                  ))}
                </ChipFilterSelect>
                <ChipFilterSelect
                  label={'Institutional Authors'}
                  className={xx.select}
                  value={InstAuthFilter}
                  onChange={setInstAuthFilter}
                  isDefault={_.isEqual(InstAuthFilter, defaultValue)}
                  onDelete={() => setInstAuthFilter(defaultValue)}
                >
                  {uniqueInstAr.map((ta, index) => (
                    <ListItem key={index} id={ta} text={ta} />
                  ))}
                </ChipFilterSelect>
                <ChipFilterSelect
                  label={'Publication Type'}
                  className={xx.select}
                  value={typeFilter}
                  onChange={settypeFilter}
                  isDefault={_.isEqual(typeFilter, defaultValue)}
                  onDelete={() => settypeFilter(defaultValue)}
                >
                  {uniqueType.map((ta, index) => (
                    <ListItem key={index} id={ta} text={ta} />
                  ))}
                </ChipFilterSelect>
                <ChipFilterSelect
                  label={'Sorted by Most Recent'}
                  className={xx.select}
                  value={recentFilter}
                  onChange={setRecentFilter}
                  isDefault={_.isEqual(recentFilter, deafaultDatevalue)}
                  onDelete={() => setRecentFilter(deafaultDatevalue)}
                >
                  <ListItem key={1} id={1} text={'Most Recent'} />
                  <ListItem key={2} id={2} text={'Oldest'} />
                </ChipFilterSelect>
                <ChipFilterSelect
                  label={'Date'}
                  className={xx.select}
                  value={DateFilter}
                  onChange={setDateFilter}
                  isDefault={_.isEqual(DateFilter, defaultValue)}
                  onDelete={() => setDateFilter(defaultValue)}
                >
                  <ListItem key={1} id={'2020'} text={2020} />
                  <ListItem key={2} id={'2021'} text={2021} />
                  <ListItem key={3} id={'2022'} text={2022} />
                </ChipFilterSelect>
              </HorizontalScroll>
            </div>
          </div>

          <div className={xx.cardconatiner}>
            {filterPublications.map((filterPublications, index) => {
              return <CardRender doc={filterPublications} key={index} />
            })}
          </div>

          <div className={xx.Pageconatiner}>
            <Pagination
              className={xx.pageination}
              value={pageNumber}
              totalCount={filteredData.length}
              pageSize={pageSize}
              onChange={setPageNumber}
            />
          </div>
        </div>
        <style jsx global>{`
          p {
            margin-top: 0px;
            margin-bottom: 0px;
          }

          a {
            color: #1c2329 !important;
          }
        `}</style>
      </>
    )
  } else {
    return <div>Loading</div>
  }
}

export default PublicationListing
