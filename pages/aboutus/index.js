import React from 'react'
import Medicalstyles from '../../public/styles/MedicalStyles'
import PharmaStyles from '../../public/styles/PharmaStyles'
import clsx from 'clsx'
import { Typography as T } from '@material-ui/core'

const Ceo = '/nference-web/AboutusImages/Group 3771.svg'
const Cso = '/nference-web/AboutusImages/Group 3772.svg'
const ChiefSalesofficer = '/nference-web/AboutusImages/Group 3775.svg'
const CFO = '/nference-web/AboutusImages/Mask Group.svg'
const ChiefaffairOfficer = '/nference-web/AboutusImages/image 24.svg'
const COO = '/nference-web/AboutusImages/Mask Group (1).svg'
const CPO = '/nference-web/AboutusImages/ag.svg'
const ChiefStrategyoOfficer = '/nference-web/AboutusImages/Mask Group (2).svg'
const CTO = '/nference-web/AboutusImages/ajit.svg'
const General_Counsel = '/nference-web/AboutusImages/image 22.svg'
const cambridge = '/nference-web/AboutusImages/Group 3431.svg'
const bangaluru = '/nference-web/AboutusImages/Vector 244.svg'
const Tornonto = '/nference-web/AboutusImages/Vector 245.svg'
const Rochester = '/nference-web/AboutusImages/Group 3432.svg'
const SVPsoftware = '/nference-web/AboutusImages/image 147.svg'
const SVPdatascience = '/nference-web/AboutusImages/image(11).svg'
const CPOpramana = '/nference-web/AboutusImages/image 145.svg'
const SVPenginnering = '/nference-web/AboutusImages/image 148.svg'

function Aboutus() {
  const pharmaStyles = PharmaStyles()
  const medicalStyles = Medicalstyles()

  return (
    <>
      <div className={medicalStyles.body}>
        <T
          className={clsx(
            pharmaStyles.aboutHeadDiv,
            pharmaStyles.aboutHeadText,
          )}
        >
          OUR MISSION
        </T>
        <T
          className={clsx(
            pharmaStyles.aboutHead2Text,
            pharmaStyles.aboutHead2Div,
          )}
        >
          Tranforming healthcare through science and technology
        </T>
        <T className={clsx(pharmaStyles.aboutdescDiv, pharmaStyles.aboutdesc)}>
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

        <div className={medicalStyles.desktop}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Founders
          </T>
          <T
            className={clsx(pharmaStyles.founderText, pharmaStyles.founderdev)}
          >
            nference was founded by Murali Aravamudan, CEO, and Venky
            Soundararajan, PhD, Chief Scientific Officer.
          </T>
        </div>
        <div className={medicalStyles.mobile}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Leadership Team
          </T>
          <T
            className={clsx(pharmaStyles.founderText, pharmaStyles.founderdev)}
          >
            nference develops vertically integrated solutions to digitize,
            curate, and generate insights from healthcare data
          </T>
        </div>
        <div className={pharmaStyles.imagesrow}>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={Ceo} />
            <T className={pharmaStyles.imageName}>Murali Aravamudan</T>
            <T className={pharmaStyles.imagedesc}>
              Co-Founder {'&'} Chief Executive Officer
            </T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={Cso} />
            <T className={pharmaStyles.imageName}>Venky Soundararajan, PhD</T>
            <T className={pharmaStyles.imagedesc}>
              Co-Founder {'&'} Chief Scientific Officer
            </T>
          </div>
        </div>
        <div className={medicalStyles.desktop}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Leadership Team
          </T>
          <T
            className={clsx(pharmaStyles.founderText, pharmaStyles.founderdev)}
          >
            nference’s senior leadership team boasts of experts spanning the
            technology, life sciences and data sectors.
          </T>
        </div>

        <div className={pharmaStyles.imagesrow}>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={SVPsoftware} />
            <T className={pharmaStyles.imageName}>Sankar Ardhanari</T>
            <T className={pharmaStyles.imagedesc}>SVP, Software</T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={SVPdatascience} />
            <T className={pharmaStyles.imageName}>Rakesh Barve</T>
            <T className={pharmaStyles.imagedesc}>SVP, Data Sciences</T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={CFO} />
            <T className={pharmaStyles.imageName}>Hutch Fishman</T>
            <T className={pharmaStyles.imagedesc}>Chief Financial Officer </T>
          </div>
        </div>
        <div className={pharmaStyles.imagesrow}>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img
              className={pharmaStyles.mobileimage}
              src={ChiefaffairOfficer}
            />
            <T className={pharmaStyles.imageName}>Anita Kawatra</T>
            <T className={pharmaStyles.imagedesc}>
              Chief Corporate Affairs Officer
            </T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={COO} />
            <T className={pharmaStyles.imageName}>Mike Koenig</T>
            <T className={pharmaStyles.imagedesc}>Chief Commercial Officer</T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={CPO} />
            <T className={pharmaStyles.imageName}>Agustin Lopez Marquez</T>
            <T className={pharmaStyles.imagedesc}>Chief Product Officer</T>
          </div>
        </div>
        <div className={pharmaStyles.imagesrow}>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img
              className={pharmaStyles.mobileimage}
              src={ChiefStrategyoOfficer}
            />
            <T className={pharmaStyles.imageName}>David McMullin</T>
            <T className={pharmaStyles.imagedesc}>Chief Strategy Officer</T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={CPOpramana} />
            <T className={pharmaStyles.imageName}>Prasanth Perugapalli</T>
            <T className={pharmaStyles.imagedesc}>
              Chief Product Officer, Pramana
            </T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={CTO} />
            <T className={pharmaStyles.imageName}>Ajit Rajasekharan</T>
            <T className={pharmaStyles.imagedesc}>Chief Technology Officer </T>
          </div>
        </div>
        <div className={pharmaStyles.imagesrow}>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={General_Counsel} />
            <T className={pharmaStyles.imageName}>George Shiebler</T>
            <T className={pharmaStyles.imagedesc}>
              Senior Vice President {'&'} General Counsel
            </T>
          </div>
          <div>
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={SVPenginnering} />
            <T className={pharmaStyles.imageName}>Vishy Thiagarajan</T>
            <T className={pharmaStyles.imagedesc}>SVP, Engineering</T>
          </div>
        </div>
        <div className={medicalStyles.desktop}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Board and investors
          </T>
          <T
            className={clsx(pharmaStyles.founderText, pharmaStyles.founderdev)}
          >
            To date nference has raised more than $150M capital from Matrix
            Capital Management, Matrix Partners, Mayo Clinic Ventures and NTTVC.
          </T>

          <div className={pharmaStyles.imagesrow}>
            <div>
              <T className={pharmaStyles.imageName}>Murali Aravamudan</T>
              {/* <T className={pharmaStyles.imagedesc}>Brief description here</T> */}
            </div>
            <div>
              <T className={pharmaStyles.imageName}>David Goel</T>
              {/* <T className={pharmaStyles.imagedesc}>Brief description here</T> */}
            </div>
            <div>
              <T className={pharmaStyles.imageName}>John Halamka</T>
              {/* <T className={pharmaStyles.imagedesc}>Brief description here</T> */}
            </div>
            <div>
              <T className={pharmaStyles.imageName}>Tim Barrows</T>
              {/* <T className={pharmaStyles.imagedesc}>Brief description here</T> */}
            </div>
          </div>
        </div>
        <div className={medicalStyles.mobile}>
          <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
            Contact
          </T>
          <T
            className={clsx(pharmaStyles.founderText, pharmaStyles.founderdev)}
          >
            Reach our team below.
          </T>
          <div className={pharmaStyles.imagesrow}>
            <div>
              <T className={pharmaStyles.imageName}>General inquiries</T>
              <T className={pharmaStyles.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={pharmaStyles.imageName}>Partnership inquiries</T>
              <T className={pharmaStyles.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={pharmaStyles.imageName}>Careers</T>
              <T className={pharmaStyles.imagedesc}>[address]@nference.net</T>
            </div>
            <div>
              <T className={pharmaStyles.imageName}>Media and Investors</T>
              <T className={pharmaStyles.imagedesc}>media@nference.net</T>
            </div>
          </div>
        </div>
        <T className={clsx(pharmaStyles.aboutHead2Text, pharmaStyles.found)}>
          Offices
        </T>
        <div className={pharmaStyles.offrow}>
          <div>
            <img src={cambridge} />
            <T className={pharmaStyles.imageName}>Cambridge, MA (HQ)</T>
            <T className={pharmaStyles.imagedesc}>
              One Main Street, Suite 400 East Arcade, 4th Floor Cambridge, MA
              02142
            </T>
          </div>
          <div>
            <img src={bangaluru} />
            <T className={pharmaStyles.imageName}>Bangalore</T>
            <T className={pharmaStyles.imagedesc}>
              2nd Floor, Indiqube Golf View Homes, 3rd Cross Road, S R Layout
              Wind Tunnnel Road, Murugesh Palaya Bengaluru 560017
            </T>
          </div>{' '}
          <div>
            <img src={Tornonto} />
            <T className={pharmaStyles.imageName}>Toronto</T>
            <T className={pharmaStyles.imagedesc}>
              545 King Street West Toronto, ON M5V 1M1
            </T>
          </div>
          <div>
            <img src={Rochester} />
            <T className={pharmaStyles.imageName}>Rochester</T>
            <T className={pharmaStyles.imagedesc}>
              18 3rd Street S.W. Suite #201 Rochester, MN 55902
            </T>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
