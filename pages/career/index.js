import React from 'react'
import { Typography as T } from '@material-ui/core'
import clsx from 'clsx'
import CareersStyle from '../../public/styles/CarrersStyle'
import PharmaStyles from '../../public/styles/PharmaStyles'
const cambridge = '/nference-web/AboutusImages/Group 3431.svg'
const bangaluru = '/nference-web/AboutusImages/Vector 244.svg'
const Tornonto = '/nference-web/AboutusImages/Vector 245.svg'
const Rochester = '/nference-web/AboutusImages/Group 3432.svg'
const NC = '/nference-web/AboutusImages/trNC.svg'

function career() {
  const styles = CareersStyle()
  const pharmaStyles = PharmaStyles()

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
      <div className={styles.locationDiv}>
        <div className={styles.locationWidth}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Apply to a location
          </T>
          <T className={styles.locationsubText}>
            Email your resume and ideal role to us.
          </T>
          <div className={styles.offrow}>
            <div>
              <img src={cambridge} />
              <T className={pharmaStyles.imageName}>
                Cambridge, MA (Headquarters)
              </T>
              <T className={pharmaStyles.abouthead}>careers-USA@nference.net</T>
              <T className={pharmaStyles.imagedesc}>
                One Main Street, Suite 400 East Arcade, 4th Floor Cambridge, MA
                02142
              </T>
              <T className={pharmaStyles.imagedesc}>USA</T>
            </div>
            <div>
              <img src={bangaluru} />
              <T className={pharmaStyles.imageName}>Bangalore</T>
              <T className={styles.email}>careers@nference.net</T>
              <T className={pharmaStyles.imagedesc}>
                2nd Floor, Indiqube Golf View Homes, 3rd Cross Road, S R Layout
                Wind Tunnnel Road, Murugesh Palaya Bengaluru 560017
              </T>
              <T className={pharmaStyles.imagedesc}>India</T>
            </div>{' '}
            <div>
              <img src={NC} />
              <T className={pharmaStyles.imageName}>Research Triangle, NC</T>
              <T className={pharmaStyles.imagedesc}>Coming soon!</T>
              {/* <T className={pharmaStyles.imagedesc}>Canada</T> */}
            </div>
            <div>
              <img src={Tornonto} />
              <T className={pharmaStyles.imageName}>Toronto</T>
              <T className={styles.email}>careers-Canada@nference.net</T>
              <T className={pharmaStyles.imagedesc}>
                545 King Street West Toronto, ON M5V 1M1
              </T>
              <T className={pharmaStyles.imagedesc}>Canada</T>
            </div>
            <div>
              <img src={Rochester} />
              <T className={pharmaStyles.imageName}>Rochester</T>
              <T className={styles.email}>careers-USA@nference.net</T>
              <T className={pharmaStyles.imagedesc}>
                18 3rd Street S.W. Suite #201 Rochester, MN 55902
              </T>
              <T className={pharmaStyles.imagedesc}>USA</T>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default career
