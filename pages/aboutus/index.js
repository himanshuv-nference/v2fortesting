import React from 'react'
import Medicalstyles from '../../public/styles/MedicalStyles'
import PharmaStyles from '../../public/styles/PharmaStyles'
import clsx from 'clsx'
import { Typography as T } from '@material-ui/core'
// import murali from './AboutusImages/Group 3771.svg'
const murali = '/nference-web/AboutusImages/Group 3771.svg'
// import venky from './AboutusImages/Group 3772.svg'
const venky = '/nference-web/AboutusImages/Group 3772.svg'
// import micheal from './AboutusImages/Group 3775.svg'
const micheal = '/nference-web/AboutusImages/Group 3775.svg'
// import hutch from './AboutusImages/Mask Group.svg'
const hutch = '/nference-web/AboutusImages/Mask Group.svg'

// import anita from './AboutusImages/image 24.svg'
const anita = '/nference-web/AboutusImages/image 24.svg'
// import mike from './AboutusImages/Mask Group (1).svg'
const mike = '/nference-web/AboutusImages/Mask Group (1).svg'

// import agustin from './AboutusImages/ag.svg'
const agustin = '/nference-web/AboutusImages/ag.svg'

// import david from './AboutusImages/Mask Group (2).svg'
const david = '/nference-web/AboutusImages/Mask Group (2).svg'

// import ajit from './AboutusImages/ajit.svg'
const ajit = '/nference-web/AboutusImages/ajit.svg'

// import geogre from './AboutusImages/image 22.svg'
const geogre = '/nference-web/AboutusImages/image 22.svg'

// import cambridge from './AboutusImages/Group 3431.svg'
const cambridge = '/nference-web/AboutusImages/Group 3431.svg'

// import bangaluru from './AboutusImages/Vector 244.svg'
const bangaluru = '/nference-web/AboutusImages/Vector 244.svg'

// import Tornonto from './AboutusImages/Vector 245.svg'
const Tornonto = '/nference-web/AboutusImages/Vector 245.svg'

// import Rochester from './AboutusImages/Group 3432.svg'
const Rochester = '/nference-web/AboutusImages/Group 3432.svg'

function Aboutus() {
  const x = PharmaStyles()
  const s = Medicalstyles()

  return (
    <>
      <div className={s.body}>
        <T className={clsx(x.aboutHeadDiv, x.aboutHeadText)}>OUR MISSION</T>
        <T className={clsx(x.aboutHead2Text, x.aboutHead2Div)}>
          Tranforming healthcare through science and technology
        </T>
        <T className={clsx(x.aboutdescDiv, x.aboutdesc)}>
          The exponential growth of biomedical data, driven by the adoption of
          electronic medical records (EMRs), provides an unprecedented
          opportunity to create transformative technologies and products in
          healthcare. nference partners with medical centers to turn decades of
          rich but predominantly unstructured data captured in EMRs into
          powerful solutions that enable scientists to discover and develop the
          next-generation of personalized diagnostics and treatments for
          patients worldwide. We believe that the greatest opportunity for our
          generation to elevate human health is by developing technology to
          curate and synthesize the world’s biomedical data in order to enable
          that scientific discovery.
        </T>

        <div className={s.desktop}>
          <T className={clsx(x.aboutHead2Text, x.found)}>Founders</T>
          <T className={clsx(x.founderText, x.founderdev)}>
            nference was founded by Murali Aravamudan, CEO, and Venky
            Soundararajan, PhD, Chief Scientific Officer.
          </T>
        </div>
        <div className={s.mobile}>
          <T className={clsx(x.aboutHead2Text, x.found)}>Leadership Team</T>
          <T className={clsx(x.founderText, x.founderdev)}>
            nference develops vertically integrated solutions to digitize,
            curate, and generate insights from healthcare data
          </T>
        </div>
        <div className={x.imagesrow}>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={murali} />
            <T className={x.imageName}>Murali Aravamudan</T>
            <T className={x.imagedesc}>
              Co-Founder {'&'} Chief Executive Officer
            </T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={venky} />
            <T className={x.imageName}>Venky Soundararajan, PhD</T>
            <T className={x.imagedesc}>
              Co-Founder {'&'} Chief Scientific Officer
            </T>
          </div>
        </div>
        <div className={s.desktop}>
          <T className={clsx(x.aboutHead2Text, x.found)}>Leadership Team</T>
          <T className={clsx(x.founderText, x.founderdev)}>
            nference’s senior leadership team boasts of experts spanning the
            technology, life sciences and data sectors.
          </T>
        </div>

        <div className={x.imagesrow}>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={micheal} />
            <T className={x.imageName}>Michael Durso</T>
            <T className={x.imagedesc}>Chief Sales Officer</T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={hutch} />
            <T className={x.imageName}>Hutch Fishman</T>
            <T className={x.imagedesc}>Chief Financial Officer </T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={anita} />
            <T className={x.imageName}>Anita Kawatra</T>
            <T className={x.imagedesc}>Chief Corporate Affairs Officer</T>
          </div>
        </div>
        <div className={x.imagesrow}>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={mike} />
            <T className={x.imageName}>Mike Koenig</T>
            <T className={x.imagedesc}>SVP of Strategic Partnerships</T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={agustin} />
            <T className={x.imageName}>Agustin Lopez Marquez</T>
            <T className={x.imagedesc}>Chief Product Officer</T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={david} />
            <T className={x.imageName}>David McMullin</T>
            <T className={x.imagedesc}>Chief Strategy Officer</T>
          </div>
        </div>
        <div className={x.imagesrow}>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={ajit} />
            <T className={x.imageName}>Ajit Rajasekharan</T>
            <T className={x.imagedesc}>Chief Technology Officer </T>
          </div>
          <div>
            <div className={x.imageLine} />
            <img className={x.mobileimage} src={geogre} />
            <T className={x.imageName}>George Shiebler</T>
            <T className={x.imagedesc}>
              Senior Vice President {'&'} General Counsel
            </T>
          </div>
        </div>
        <div className={s.desktop}>
          <T className={clsx(x.aboutHead2Text, x.found)}>Board and investors</T>
          <T className={clsx(x.founderText, x.founderdev)}>
            To date nference has raised more than $150M capital from Matrix
            Capital Management, Matrix Partners, Mayo Clinic Ventures and NTTVC.
          </T>

          <div className={x.imagesrow}>
            <div>
              <T className={x.imageName}>Murali Aravamudan</T>
              <T className={x.imagedesc}>Brief description here</T>
            </div>
            <div>
              <T className={x.imageName}>David Goel</T>
              <T className={x.imagedesc}>Brief description here</T>
            </div>
            <div>
              <T className={x.imageName}>John Halamka</T>
              <T className={x.imagedesc}>Brief description here</T>
            </div>
            <div>
              <T className={x.imageName}>Tim Barrows</T>
              <T className={x.imagedesc}>Brief description here</T>
            </div>
          </div>
        </div>
        <div className={s.mobile}>
          <T className={clsx(x.aboutHead2Text, x.found)}>Contact</T>
          <T className={clsx(x.founderText, x.founderdev)}>
            Reach our team below.
          </T>
          <div className={x.imagesrow}>
            <div>
              <T className={x.imageName}>General inquiries</T>
              <T className={x.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={x.imageName}>Partnership inquiries</T>
              <T className={x.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={x.imageName}>Careers</T>
              <T className={x.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={x.imageName}>Media and Investors</T>
              <T className={x.imagedesc}>media@nference.net</T>
            </div>
          </div>
        </div>
        <T className={clsx(x.aboutHead2Text, x.found)}>Offices</T>
        <div className={x.offrow}>
          <div>
            <img src={cambridge} />
            <T className={x.imageName}>Cambridge, MA (HQ)</T>
            <T className={x.imagedesc}>
              One Main Street, Suite 400 East Arcade, 4th Floor Cambridge, MA
              02142
            </T>
          </div>
          <div>
            <img src={bangaluru} />
            <T className={x.imageName}>Bangalore</T>
            <T className={x.imagedesc}>
              2nd Floor, Indiqube Golf View Homes, 3rd Cross Road, S R Layout
              Wind Tunnnel Road, Murugesh Palaya Bengaluru 560017
            </T>
          </div>{' '}
          <div>
            <img src={Tornonto} />
            <T className={x.imageName}>Toronto</T>
            <T className={x.imagedesc}>
              545 King Street West Toronto, ON M5V 1M1
            </T>
          </div>{' '}
          <div>
            <img src={Rochester} />
            <T className={x.imageName}>Rochester</T>
            <T className={x.imagedesc}>
              18 3rd Street S.W. Suite #201 Rochester, MN 55902
            </T>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
