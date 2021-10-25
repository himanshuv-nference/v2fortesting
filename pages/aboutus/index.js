import React from 'react'
import Medicalstyles from '../../public/styles/MedicalStyles'
import PharmaStyles from '../../public/styles/PharmaStyles'
import AboutusStyle from '../../public/styles/AboutusStyle'
import { Icon } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'

import clsx from 'clsx'
import { Typography as T } from '@material-ui/core'
import { NferxModal } from 'nferx-core-ui'
import Prismic from '@prismicio/client'
const Ceo = '/AboutusImages/Group 3771.svg'
const Cso = '/AboutusImages/Group 3772.svg'
const ChiefSalesofficer = '/AboutusImages/Group 3775.svg'
const CFO = '/AboutusImages/Mask Group.svg'
const ChiefaffairOfficer = '/AboutusImages/image 24.svg'
const COO = '/AboutusImages/Mask Group (1).svg'
const CPO = '/AboutusImages/ag.svg'
const ChiefStrategyoOfficer = '/AboutusImages/Mask Group (2).svg'
const CTO = '/AboutusImages/ajit.svg'
const General_Counsel = '/AboutusImages/image 22.svg'
const cambridge = '/AboutusImages/Group 3431.svg'
const bangaluru = '/AboutusImages/Vector 244.svg'
const Tornonto = '/AboutusImages/Vector 245.svg'
const Rochester = '/AboutusImages/Group 3432.svg'
const SVPsoftware = '/AboutusImages/image 147.svg'
const SVPdatascience = '/AboutusImages/image(11).svg'
const CPOpramana = '/AboutusImages/image 145.svg'
const SVPenginnering = '/AboutusImages/image 148.svg'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps() {
  const responseforBios = await Client.query(
    Prismic.Predicates.at('document.type', 'bios_nference'),
  )

  const data = responseforBios.results
  return {
    props: {
      data: data,
    },
  }
}
function Aboutus({ data }) {
  const [open, setOpen] = React.useState(false)
  const [bios, setbios] = React.useState('')
  const pharmaStyles = PharmaStyles()
  const medicalStyles = Medicalstyles()
  const aboutusStyles = AboutusStyle()
  const modalClose = () => setOpen(false)
  const ModalOpen = (e) => {
    setOpen(true)
    const value = e.currentTarget.getAttribute('Name')
    let singleBio = data.filter((x) => x.data.name === value)
    setbios(singleBio)
  }

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
          Powering quantum leaps in human health
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
          <div
            onClick={ModalOpen}
            Name="Murali Aravamudan"
            className={aboutusStyles.cursor}
          >
            <div className={pharmaStyles.imageLine} />
            <img className={pharmaStyles.mobileimage} src={Ceo} />
            <T className={pharmaStyles.imageName}>Murali Aravamudan</T>
            <T className={pharmaStyles.imagedesc}>
              Co-Founder {'&'} Chief Executive Officer
            </T>
          </div>
          <div
            onClick={ModalOpen}
            Name="Venky Soundararajan, PhD"
            className={aboutusStyles.cursor}
          >
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
      <NferxModal
        contentPad
        // className={styles.modal}
        open={open}
        onClose={modalClose}
        noCloseInRight
      >
        <div className={aboutusStyles.iconDiv}>
          <Icon onClick={modalClose}>
            <ClearIcon className={aboutusStyles.cursor} />
          </Icon>
        </div>
        {bios ? (
          <div>
            <div className={aboutusStyles.headDiv}>
              {bios[0].data.image ? (
                <img src={bios[0].data.image.url} />
              ) : (
                <div />
              )}

              <div className={aboutusStyles.rightDiv}>
                <T className={pharmaStyles.imageName}>{bios[0].data.name}</T>
                <T className={pharmaStyles.imagedesc}>
                  {bios[0].data.designation}
                </T>
              </div>
            </div>
            <div className={aboutusStyles.desc}>
              <T className={pharmaStyles.imagedesc}>{bios[0].data.bios}</T>
            </div>
          </div>
        ) : (
          <div />
        )}
      </NferxModal>
    </>
  )
}

export default Aboutus
