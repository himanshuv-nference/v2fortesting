import React from 'react'
import { Typography as T } from '@material-ui/core'
import clsx from 'clsx'
import CareersStyle from '../../public/styles/CarrersStyle'

function career() {
  const styles = CareersStyle()
  return (
    <>
      <div className={styles.headDiv}>
        <T className={styles.head}>Careers at nference</T>
        <div className={styles.subHeadDiv}>
          <T className={styles.subHead}>
            We're always looking for talented people to join our team. Reach out
            to learn more about open roles!
          </T>
        </div>
      </div>
      <div className={styles.box2div}>
        <div className={styles.box2}>
          <div className={styles.box2part1}>
            <div>
              <T className={styles.hiringText}>WE’RE HIRING!</T>
              <T className={styles.box2head}>One of the best places to work</T>
              <T className={styles.box2subHead}>
                According to the Tech Tribune 2021 list of Best Tech Startups in
                Cambridge!
              </T>
            </div>

            <div className={clsx(styles.standingLine, styles.desktop)} />
            <div className={clsx(styles.line, styles.mobile)} />

            <div>
              <div className={styles.aboutDiv}>
                <T className={styles.abouthead}>About Us</T>
                <T className={styles.aboutsubHead}>
                  nference is looking for individuals passionate about unlocking
                  biomedical and healthcare data with the goal of impacting our
                  understanding of human health.{' '}
                </T>
              </div>
              <T className={styles.abouthead}>Location</T>
              <T className={styles.aboutsubHead}>
                We are a global company headquartered in Cambridge, MA with
                offices in Bangalore, India, Toronto, Canada and Rochester, MN.
              </T>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default career
