import styles from '../../public/styles/MedicalStyles'
import PublicationListingStyles from '../../public/styles/PublicationListingStyles'
import { Typography as T } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import clsx from 'clsx'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReactReadMoreReadLess from 'react-read-more-read-less'
export default function CardRender(props) {
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
        <Link href={`/publications/${props.doc.id}`}>
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
