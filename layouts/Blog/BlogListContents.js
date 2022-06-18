import React from 'react'
import { Typography as T } from '@material-ui/core'
import BlogListingStyles from '../../public/styles/BlogListingStyles'
import { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import CardRender from '../../components/Blog/Card'

const person1 = '/BlogImages/Group3927.svg' 
const person2 = '/BlogImages/Group1254.svg'

const pageSize = 5

function BlogListContents({ blogs: allPublications }) {
  const [pageNumber, setPageNumber] = useState(1)
  
  const listingStyles = BlogListingStyles()

  const filteredPublications  =  allPublications.sort(function (a, b) {
    return (
      new Date(b.data.blog_date_published).getTime() -
      new Date(a.data.blog_date_published).getTime()
    )
  })

  const currentPage = filteredPublications.slice((pageNumber - 1) * 5, pageNumber * 5)

  return (
    <>
      <div className={listingStyles.box1}>
        <T className={listingStyles.nferenceBlog}>nference blog</T>
        <T className={listingStyles.blogWith}>With Ajit Rajasekharan + Venky Soundararajan</T>
        <div style={{display: 'flex', gap: '30px'}}>
          <div className={listingStyles.imageContainer1}>
          <T className={listingStyles.imageContainerText}>Chief Technology Officer</T>
          <img src={person1} className={listingStyles.imageContainerImage}/>
          </div>
          <div className={listingStyles.imageContainer2}>
          <T className={listingStyles.imageContainerText}>Founder, Chief Scientific Officer</T>
          <img src={person2} className={listingStyles.imageContainerImage}/>
          </div>
        </div>
      </div>
      <div className={listingStyles.body}>
        <div className={listingStyles.cardconatiner}>
          {currentPage.map((allPublications, index) => {
            return <CardRender doc={allPublications} key={index} />
          })}
        </div>

        <div className={listingStyles.Pageconatiner}>
          <Pagination
            className={listingStyles.pageination}
            value={pageNumber}
            totalCount={filteredPublications.length}
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
export default BlogListContents
