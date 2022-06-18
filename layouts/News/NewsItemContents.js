import React from 'react'
import { Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import * as prismicH from '@prismicio/helpers'

const NewStyles = makeStyles({
  body: {
    marginLeft: '8.43%',
    marginRight: '8.43%',
    marginBottom: '50px',
    ['@media (max-width:780px)']: {
      marginRight: '16px',
      marginLeft: '16px',
    },
    // ['@media (min-width:2000px)']: {
    //   marginRight: '1200px',
    //   marginLeft: '1200px',
    // },
  },
  back: {
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '200%',
    marginTop: '40px',
    // marginBottom:'14px',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '11px',
      marginTop: '30px',
    },
  },
  title: {
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#000000',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      marginTop: '30px',
    },
  },
  nav: {
    textDecoration: 'none',
  },
})

export default function NewsItemContents({ news }) {
  const style = NewStyles()

  return (
    <>
      <div className={style.body}>
        <Link href="/news">
          <a className={style.nav}>
            <T className={style.back}>{'<'} Back to All News</T>
          </a>
        </Link>
        <T className={style.title}>{prismicH.asText(news.data.title)}</T>

        <T>
          <PrismicRichText field={news.data.internal_article_richtext} />
        </T>
      </div>
      <style jsx global>{`
        a {
          color: #1c2329 !important;
        }
      `}</style>
    </>
  )
}
