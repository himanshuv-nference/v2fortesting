import React from 'react'
import { Typography as T } from '@material-ui/core'
import clsx from 'clsx'

import styles from '../../public/styles/MedicalStyles'
import PharmaStyles from '../../public/styles/PharmaStyles'

import useStyles from '../../public/styles/HomepageStyles'
import Link from 'next/link'
import { useState } from 'react'
import LowerSlider from '../../components/LowerSlider'
import Prismic from '@prismicio/client'

const logo = '/nference-web/PharmaPageImages/Group 3963.svg'
const mayologo = '/nference-web/HomePageImages/Group 2948.svg'
const box1image2 = '/nference-web/PharmaPageImages/Group 4049.svg'
const box1image3 = '/nference-web/PharmaPageImages/Group 4050.svg'
const box2image1 = '/nference-web/PharmaPageImages/Group 3670.svg'
const box2image2 = '/nference-web/PharmaPageImages/Group 4235.svg'
const discovery = '/nference-web/PharmaPageImages/Group 3966.svg'
const lifecycle = '/nference-web/PharmaPageImages/Group 3967.svg'
const trial = '/nference-web/PharmaPageImages/Group 3968.svg'
const real = '/nference-web/PharmaPageImages/Group 3969.svg'
const medicine = '/nference-web/PharmaPageImages/Group 3970.svg'
const intervention = '/nference-web/PharmaPageImages/Group 3971.svg'
const early = '/nference-web/PharmaPageImages/Group 3978.svg'
const journey = '/nference-web/PharmaPageImages/Group 3973.svg'
const drug = '/nference-web/PharmaPageImages/Group 3977.svg'
const symptoms = '/nference-web/PharmaPageImages/Group 3976.svg'
//Data fetching from Prismic
const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps() {
  const responseforLowerSlider = await Client.query(
    Prismic.Predicates.at('document.type', 'publications'),
  )
  const pubInfo = responseforLowerSlider.results
  return {
    props: {
      pubInfo: pubInfo,
    },
  }
}
function ForPharma({ pubInfo }) {
  const s = styles()
  const style = useStyles()
  const x = PharmaStyles()

  const [show, setShow] = useState(false)

  const seeMore = () => {
    setShow(true)
  }
  const seeLess = () => {
    setShow(false)
  }

  return (
    <>
      <div className={s.body}>
        <div className={x.box1}>
          <img src={logo} />
          <T className={s.Tophead}>Collaborations for Pharma</T>
          <T className={s.TopSub}>
            Our scientists use the nference platform and data in collaboration
            with your teams to tackle your most important questions and
            challenges
          </T>
        </div>
        <div className={x.box2}>
          <div className={x.mayoIcon}>
            <div className={style.mayo}>
              <img src={mayologo} />
            </div>
          </div>

          <T className={style.box2head}>
            nference is creating the largest labeled EMR dataset in healthcare
          </T>

          <T className={x.box2text}>
            EMR data contains longitudinal real-world, “deep data” rich in
            clinical phenotypes and outcomes spanning across therapeutic ares,
            but exists in in largely semi-structured and unstructured form. The
            nference platform powers the tranformation of the raw data into a
            labeled EMR dataset.
          </T>

          <div className={x.box2part}>
            <div>
              <img src={box1image2} />

              <T className={style.pharmahead}>HARMONIZATION</T>
              <T className={style.pharmaText}>
                We leverage our deep biomedical expertise to transform
                semi-structured data (e.g. lab tests, procedures) into
                structured data through technology-enabled data harmonization.
              </T>
            </div>
            <div>
              <img src={box1image3} />
              <T className={style.pharmahead}>AUGMENTED CURATION</T>
              <T className={style.pharmaText}>
                We build upon state-of-the-art neural networks and Natural
                Language Processing (NLP) methods to transform unstructured
                clinical text (e.g. clinical notes...) into structured patient
                features.
              </T>
            </div>
          </div>
        </div>

        <div className={x.box3}>
          <div className={x.box3part1}>
            <T className={s.path}>BIOPHARMA COLLABORATIONS</T>
            <T className={clsx(x.box3width, x.box3subhead)}>
              Triangulation across data and state of the art algorithms power
              collaborations
            </T>
            <T className={clsx(x.box3width, s.box2desc)}>
              Connecting structured, harmonized EMR data with publicly available
              literature, molecular and real world datasets and applying our
              powerful proprietary algorithms allows us to ask and answer
              challenging questions
            </T>
          </div>

          <div className={x.box3part2}>
            <div>
              <img src={box2image1} className={x.box3Image} />
              <T className={x.box3head}>
                Triangulation with public and proprietary data1
              </T>
              <T className={x.box3desc}>
                Integrating additional data sources with labeled, curated and
                harmonized EMR data can strengthen the insights derived from
                downstream data analysis. This data includes biomedical
                literature (ex. PubMed), clinical trials (ex.
                clinicaltrials.gov) and molecular data (ex. Gene Expression
                Omnibus).
              </T>
            </div>
            <div>
              <img
                src={box2image2}
                className={clsx(x.box3Image, x.box3image2)}
              />
              <T className={x.box3head}>State of the art algorithms</T>
              <T className={x.box3desc}>
                The labeled, curated and harmonized EMR data serves as a
                starting point that enables training state-of-the-art AI
                algorithms. We develop these algorithms as solutions to some of
                the major challenges in healthcare, including early detection
                and diagnosis of disease, identification of biomarkers for
                disease progression and more.
              </T>
            </div>
          </div>
        </div>
      </div>
      <div className={x.box4}>
        <T className={s.path}>NFERENCE COLLABORATIONS FOR BIOPHARMA</T>
        <T className={clsx(s.Tophead, x.box4pad1)}>
          Work with our scientists to tackle hard problems in Pharma R{'&'}D,
          Medical Affairs and Strategy
        </T>
        <T className={clsx(s.box2desc, x.box4pad2)}>
          Our scientists will use the nference platform and data in
          collaboration with your teams to tackle the questions and challenges
          most important to you
        </T>
        <div className={x.bo4part3}>
          {/* 

          Desktop view
          */}

          <div className={s.desktop}>
            <div>
              <div className={x.box4row}>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Target discovery</T>
                      <img src={discovery} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Identify candidate targets with significant evidence for
                      potential therapeutic benefit for a selected indication
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Lifecycle Management</T>
                      <img src={lifecycle} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Evaluate likelihood of drug success pre-launch and
                      identify opportunities for commercialized assets
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Clinical Trial Design</T>
                      <img src={trial} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Build complex patient cohorts using real world EMR data to
                      optimize clinial study criteria and study design. Read our
                      Publication
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Real World Outcomes</T>
                      <img src={real} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Track patient-level outcomes following specific treatments
                      or interventions
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
              </div>
              {/* ROW 2nd */}
              <div className={x.box4row}>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Precision Medicine</T>
                      <img src={medicine} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Identify biomarkers or correlates of disease progression
                      or treatment outcomes using our clinico-genomic data which
                      spans therapeutic areas
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Early Intervention</T>
                      <img src={intervention} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Identify indicators of disease or disease progression to
                      support earlier, targeted treatment or intervention
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Early Diagnosis</T>
                      <img src={early} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Leverage the longitudinality of our dataset and power of
                      our technology to identify early predictors of disease
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Drug Toxicity</T>
                      <img src={drug} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Identify drug side effects and understand the populations
                      most susceptible to them based on real world use
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
              </div>
              {/* Row 3rd */}
              <div className={x.box4row}>
                <div>
                  <div className={x.workBox}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Symptoms</T>
                      <img src={symptoms} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Identify disease symptoms and understand the populations
                      most susceptible to them
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
                <div>
                  <div className={clsx(x.workBox)}>
                    <div className={x.nameImage}>
                      <T className={s.path}>Patient Journey</T>
                      <img src={journey} className={x.box4icons} />
                    </div>
                    <T className={x.box4desc}>
                      Get disease area specific insight on the end-to-end
                      patient journey, leveraging longitudinal patient data
                    </T>
                  </div>
                  <div className={x.separatorDiv}>
                    <div className={x.separator} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          Mobile view

           */}
          <div className={s.mobile}>
            <div>
              <div className={x.nameImage}>
                <T className={s.path}>Target discovery</T>
                <img src={discovery} className={x.box4icons} />
              </div>
              <T className={x.box4desc}>
                Identify candidate targets with significant evidence for
                potential therapeutic benefit for a selected indication
              </T>
            </div>
            <div>
              <div className={x.nameImage}>
                <T className={s.path}>Precision Medicine</T>
                <img src={medicine} className={x.box4icons} />
              </div>
              <T className={x.box4desc}>
                Identify biomarkers or correlates of disease progression or
                treatment outcomes using our clinico-genomic data which spans
                therapeutic areas
              </T>
            </div>
            <div>
              <div className={x.nameImage}>
                <T className={s.path}>Symptoms</T>
                <img src={symptoms} className={x.box4icons} />
              </div>
              <T className={x.box4desc}>
                Identify disease symptoms and understand the populations most
                susceptible to them
              </T>
            </div>
            <div>
              <div className={x.nameImage}>
                <T className={s.path}>Lifecycle Management</T>
                <img src={lifecycle} className={x.box4icons} />
              </div>
              <T className={x.box4desc}>
                Evaluate likelihood of drug success pre-launch and identify
                opportunities for commercialized assets
              </T>
            </div>
            <div
              onClick={seeMore}
              className={clsx({ [x.show]: !show, [x.hide]: show })}
            >
              <T className={clsx(s.path, x.underline)}>See More</T>
            </div>
            <div className={clsx({ [x.hide]: !show, [x.show]: show })}>
              <div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Early Intervention</T>
                    <img src={intervention} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Identify indicators of disease or disease progression to
                    support earlier, targeted treatment or intervention
                  </T>
                </div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Patient Journey</T>
                    <img src={journey} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Get disease area specific insight on the end-to-end patient
                    journey, leveraging longitudinal patient data
                  </T>
                </div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Clinical Trial Design</T>
                    <img src={trial} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Build complex patient cohorts using real world EMR data to
                    optimize clinial study criteria and study design. Read our
                    Publication
                  </T>
                </div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Early Diagnosis</T>
                    <img src={early} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Leverage the longitudinality of our dataset and power of our
                    technology to identify early predictors of disease
                  </T>
                </div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Real World Outcomes</T>
                    <img src={real} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Track patient-level outcomes following specific treatments
                    or interventions
                  </T>
                </div>
                <div>
                  <div className={x.nameImage}>
                    <T className={s.path}>Drug Toxicity</T>
                    <img src={drug} className={x.box4icons} />
                  </div>
                  <T className={x.box4desc}>
                    Identify drug side effects and understand the populations
                    most susceptible to them based on real world use
                  </T>
                </div>
              </div>

              <div onClick={seeLess}>
                <T className={clsx(s.path, x.underline)}>See Less</T>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.body}>
        <div>
          <div className={s.box10part1}>
            <div>
              <T className={x.path}>NFERENCE PUBLICATIONS</T>
              <T className={s.box2Subhead}>Peer-reviewed publications</T>
              <T className={clsx(s.box2desc, s.box8desc)}>
                Our partners and clients have used our data and analyses to
                publish insights in a array of academic journals
              </T>
            </div>
          </div>
          <LowerSlider doc={pubInfo} />
          <div className={s.desktop}>
            <div className={style.boximage}>
              <Link href="/publications">
                <a className={style.nav}>
                  <div className={style.allpaper}>
                    <T className={style.learnoretext}>
                      See all our papers -{'>'}
                    </T>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForPharma
