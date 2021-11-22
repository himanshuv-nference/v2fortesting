import React from 'react'
import { Typography as T } from '@material-ui/core'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
const Llogo = '/nference-web/PublicationPageImages/The_Lancet_logo 1.svg'
const Nlogo = '/nference-web/PublicationPageImages/Vector.svg'
const SAlogo =
  '/nference-web/PublicationPageImages/Scientific_American_logo 1.svg'
const SRlogo = '/nference-web/PublicationPageImages/Group33.svg'
const elifelogo = '/nference-web/PublicationPageImages/Group44.svg'
const npjlogo = '/nference-web/PublicationPageImages/Group55.svg'
const jamalogo = '/nference-web/PublicationPageImages/Group83.svg'
const CPlogo = '/nference-web/PublicationPageImages/Group4325.svg'

import clsx from 'clsx'
import styles from '../../public/styles/MedicalStyles'
import Prismic from '@prismicio/client'
import { Date } from 'prismic-reactjs'
import { useState, useEffect } from 'react'
import {
  HorizontalScroll,
  Pagination,
  ListItem,
  ChipFilterSelect,
} from 'nferx-core-ui'

import _ from 'lodash'
import Slider from '../../components/Publication/Desktop_Carousel'
import SliderMobile from '../../components/Publication/Mobile_Carousel'
import CardRender from '../../components/Publication/Card'
import Carousel from 'react-material-ui-carousel'
const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps() {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'publications'),
    { pageSize: 100 },
  )

  const pubInfo = response.results
  const pubInfoFilter = pubInfo.filter((el) => {
    return el != null && el != ''
  })
  return {
    props: {
      pubInfo: pubInfoFilter,
    },
  }
}

function PublicationListing({ pubInfo }) {
  const defaultValue = []
  const deafaultDatevalue = null
  const [allPublications, setallPublications] = useState(pubInfo)
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
    setTotalPages(pubInfo.length)
    setallPublications(pubInfo)
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
      filterPublications.sort(function (a, b) {
        return (
          new Date(b.data.dt_published).getTime() -
          new Date(a.data.dt_published).getTime()
        )
      })
      setfilteredData(filterPublications)

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

  const medicalStyles = styles()
  const listingStyles = PublicationListingStyles()

  let usecaseArray = []
  let therepeuticAreaArray = []
  let instituteAuthArray = []
  let TypeArray = []

  allPublications.map((li) => {
    li.data.usecase.map((usecases, index) => {
      usecaseArray.push(usecases.text)
    })
    li.data.therapeutic_area.map((Tharea, index) => {
      if (Tharea.text !== '') {
        therepeuticAreaArray.push(Tharea.text)
      }
    })
    li.data.institutional_authors.map((Ia, index) => {
      instituteAuthArray.push(Ia.text)
    })
    li.data.publication_types.map((Ia, index) => {
      if (Ia.text !== '') {
        TypeArray.push(Ia.text)
      }
    })
  })

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
  let sliderPublication = allPublications.filter((x) =>
    x.data.publication_types.some((us) => us.text === 'featured'),
  )

  return (
    <>
      <div className={listingStyles.body}>
        <T className={listingStyles.head}>Featured Publications</T>
        <div className={listingStyles.headline}></div>
      </div>
      <div className={medicalStyles.desktop}>
        <Carousel
          indicators={true}
          animation={'slide'}
          timeout={1000}
          autoPlay={true}
        >
          {sliderPublication.map((item, index) => {
            return <Slider item={item} key={index} />
          })}
        </Carousel>
      </div>
      <div className={clsx(medicalStyles.mobile)}>
        <Carousel
          indicators={true}
          animation={'slide'}
          timeout={2000}
          autoPlay={true}
        >
          {sliderPublication.map((item, index) => {
            return <SliderMobile item={item} key={index} />
          })}
        </Carousel>
      </div>

      <div className={listingStyles.label} id="publicationTop">
        <img src={SRlogo} className={listingStyles.labelImages} />
        <img src={Llogo} className={listingStyles.labelImages} />
        <img src={SAlogo} className={listingStyles.labelImages} />
        <img src={Nlogo} className={listingStyles.labelImages} />
        <img src={elifelogo} className={listingStyles.labelImages} />
        <img src={CPlogo} className={listingStyles.labelImages} />
        <img src={jamalogo} className={listingStyles.labelImages} />
        <img src={npjlogo} className={listingStyles.labelImages} />
      </div>

      <div className={listingStyles.body}>
        <T className={listingStyles.head2}>All Publications</T>
        <div className={medicalStyles.desktop}>
          <div className={listingStyles.filterDiv}>
            <ChipFilterSelect
              label={'Use case'}
              className={listingStyles.select}
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
              className={listingStyles.select}
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
              className={listingStyles.select}
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
              className={listingStyles.select}
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
              className={listingStyles.select}
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
              className={listingStyles.select}
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
        <div className={medicalStyles.mobile}>
          <div className={listingStyles.filterDiv}>
            <HorizontalScroll>
              <ChipFilterSelect
                label={'Use case'}
                className={listingStyles.select}
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
                className={listingStyles.select}
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
                className={listingStyles.select}
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
                className={listingStyles.select}
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
                className={listingStyles.select}
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
                className={listingStyles.select}
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

        <div className={listingStyles.cardconatiner}>
          {filterPublications.map((filterPublications, index) => {
            return <CardRender doc={filterPublications} key={index} />
          })}
        </div>

        <div className={listingStyles.Pageconatiner}>
          <Pagination
            className={listingStyles.pageination}
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
}
export default PublicationListing
