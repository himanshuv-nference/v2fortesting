import Link from 'next/link'
import clsx from 'clsx'
import { Typography as T } from '@material-ui/core'
import ReactReadMoreReadLess from 'react-read-more-read-less'
import Carousel from 'react-material-ui-carousel'
import LowerSlider from '../components/LowerSlider'
import useStyles from '../public/styles/HomepageStyles'
import Prismic from '@prismicio/client'
import Slider from '../components/HomePageCarousel'

//Defining variables for images
const circle = '/nference-web/HomePageImages/Group 4045.svg'
const circle2 = '/nference-web/HomePageImages/Group 3794.svg'
const mayologo = '/nference-web/HomePageImages/Group 2948.svg'
const pharma = '/nference-web/HomePageImages/Group 4047.svg'
const medical = '/nference-web/HomePageImages/Group 4042.svg'
const newspaper = '/nference-web/HomePageImages/Group 4060.svg'
const blom = '/nference-web/HomePageImages/Group.svg'
const wash = '/nference-web/HomePageImages/Group 1227.svg'
const newy = '/nference-web/HomePageImages/new-york-times 3.svg'
const fortune = '/nference-web/HomePageImages/Group 1268.svg'
const wallStreet = '/nference-web/HomePageImages/Group 1274.svg'
const scientifamerican = '/nference-web/HomePageImages/g14.svg'
const Step1 = '/nference-web/HomePageImages/step1.svg'
const Step2 = '/nference-web/HomePageImages/step2.svg'
const Step3 = '/nference-web/HomePageImages/step3.svg'
const Step4 = '/nference-web/HomePageImages/step4.svg'
const Step5 = '/nference-web/HomePageImages/step5.svg'
const AllSteps = '/nference-web/HomePageImages/Group 3504.svg'
const anumana = '/nference-web/HomePageImages/anumana.svg'
const pranama = '/nference-web/HomePageImages/Group 4286.svg'
const productlogo = '/nference-web/HomePageImages/Group 4198.svg'
const productphoto = '/nference-web/HomePageImages/icon_1.svg'
const tringul = '/nference-web/HomePageImages/icon_2.svg'
const signals = '/nference-web/HomePageImages/icon_3 (1).svg'
const collabs = '/nference-web/HomePageImages/icon_4.svg'
const Step1Icon = '/nference-web/HomePageImages/Group 3804.svg'
const Step2Icon = '/nference-web/HomePageImages/Group 4201.svg'
const Step3Icon = '/nference-web/HomePageImages/Group 4202.svg'
const Step4Icon = '/nference-web/HomePageImages/Group 4203.svg'
const Step5Icon = '/nference-web/HomePageImages/Group 4204.svg'
const ProductIcon = '/nference-web/HomePageImages/Group 4199.svg'
const Covidlogo = '/nference-web/CovidPageImages/Group 4221.svg'
//APi Details
const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps() {
  const responseforUpperSlider = await Client.query(
    Prismic.Predicates.at('document.type', 'homepage_carousel'),
  )
  const responseforLowerSlider = await Client.query(
    Prismic.Predicates.at('document.type', 'publications'),
  )
  const data = responseforUpperSlider.results
  const pubInfo = responseforLowerSlider.results
  return {
    props: {
      data: data,
      pubInfo: pubInfo,
    },
  }
}
function Homepage({ data, pubInfo }) {
  const styles = useStyles()
  return (
    <>
      <div className={styles.body}>
        <img src={circle} className={styles.circleImage} />
        <div className={styles.cirlceLine}></div>
        <div className={styles.box1}>
          <div className={styles.heroLeft}>
            <div>
              <T className={styles.head1}>
                Transforming healthcare with science and technology
              </T>
            </div>
            <div className={styles.description1Div}>
              <T className={styles.description1}>
                nference partners with medical centers to turn decades of rich
                but predominantly unstructured data captured in electronic
                medical records (EMR) into powerful software solutions that
                enable scientists to discover and develop the next-generation of
                personalized diagnostics and treatments for patients worldwide.
              </T>
            </div>
          </div>
          <div>
            <Carousel
              indicators={true}
              animation={'slide'}
              timeout={400}
              autoPlay={true}
            >
              {data.map((item, index) => {
                return <Slider item={item} key={index} />
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className={styles.greybox}>
        <div className={styles.box2}>
          <div className={styles.boximage}>
            <div className={styles.circle2}>
              <img src={circle2} />
            </div>
            <div className={styles.cirlceLine}></div>

            <T className={styles.box2head}>
              Building the future of healthcare by unlocking the value of EMR
              data
            </T>

            <T className={styles.box2text}>
              Our partner - Mayo Clinic - invented the medical record system
              more than 100 years ago. We leverage state-of-the-art technology
              and deep biomedical expertise to turn that gold mine of data into
              powerful solutions for the healthcare ecosystem with a focus on
              medical centers and biopharmaceutical companies.
            </T>
            <div className={styles.mayo}>
              <img src={mayologo} />
            </div>
          </div>

          <div className={styles.box2part}>
            <div>
              <img src={pharma} />

              <T className={styles.pharmahead}>FOR PHARMA</T>
              <T className={styles.pharmaText}>
                We work with biopharma companies who leverage our proprietary
                EMR data, software products and services to address important
                challenges across the drug lifecycle, ranging from target
                discovery and clinical trial design to real-world outcomes
                research.
              </T>
              <Link href="/pharma">
                <div className={clsx(styles.learnmore, styles.link)}>
                  <T className={styles.learnoretext}>Learn more -{'>'}</T>
                </div>
              </Link>
            </div>
            <div>
              <img src={medical} />
              <T className={styles.pharmahead}>FOR MEDICAL CENTERS</T>
              <T className={styles.pharmaText}>
                We partner with medical centers who leverage our platform to
                address the end-to-end challenges associated with unlocking the
                potential of EMR data in a privacy preserving manner including
                record de-identification, curation of unstructured information
                and data creation via digitization of pathology and molecular
                sequencing.
              </T>
              <Link href="/pharma">
                <div className={clsx(styles.learnmore, styles.link)}>
                  <T className={styles.learnoretext}>Learn more -{'>'}</T>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.boximage}>
            <img src={newspaper} className={styles.newspaper} />
            <div className={styles.cirlceLine}></div>
            <T className={styles.new1}>LEADING SCIENCE AND RESEARCH</T>
            <T className={styles.new2}>Our Science and Publications</T>
            <T className={styles.new3}>
              See nference’s work in the news and our latest publications
            </T>
          </div>
          <div>
            <div className={styles.mediaImage}>
              <img src={blom} className={styles.mImage} />
              <img src={wash} className={styles.mImage} />
              <img src={newy} className={styles.mImage} />
            </div>
            <div className={styles.mediaImage2}>
              <img src={fortune} className={styles.mImage} />
              <img src={wallStreet} className={styles.mImage} />
              <img src={scientifamerican} className={styles.mImage} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div>
          <T className={styles.new1}>NFERENCE PLATFORM</T>
          <T className={styles.new2}>How the nference platform works</T>
        </div>
        <div className={styles.desktop}>
          <div className={styles.box4}>
            <div className={styles.allSteps}>
              <img src={AllSteps} />
            </div>

            <div>
              <div className={styles.stepd1data}>
                <div className={styles.iconName}>
                  <img src={Step1Icon} className={styles.stepicons} />
                  <T className={styles.stephead}>Existing EMR Data</T>
                </div>
                <T className={styles.stepsub}>
                  Decades of rich but unprocessed data
                </T>
                <div className={styles.step1Line}></div>
                <T className={styles.stepdesc}>
                  Electronic medical records (EMRs) contain a tremendous amount
                  of information about human health, but is largely
                  unstructured. The amount of data from Mayo Clinic alone -
                  500M+ clinical notes, 4B+ images, 1B+ lab results and more -
                  pose a challenge and an opportunity
                </T>
              </div>

              <div className={styles.stepd2data}>
                <div className={styles.iconName}>
                  <img src={Step2Icon} className={styles.stepicons} />
                  <T className={styles.stephead}>Data Creation</T>
                </div>
                <T className={styles.stepsub}>
                  Pathology digitization and molecular sequencing
                </T>
                <div className={styles.step2Line}></div>
                <T className={styles.stepdesc}>
                  We digitize tens of millions of archived pathology slides
                  using high-throughput state-of-the-art scanning capabilities
                  in partnership with Pramana, and we work with sequencing
                  partners to provide clinical-grade whole exome and
                  transcriptome sequencing for patients seen at our partner
                  centers. These data creation processes enrich the real world
                  data currently existing in EMRs.
                </T>
              </div>

              <div className={styles.stepd3data}>
                <div className={styles.iconName}>
                  <img src={Step3Icon} className={styles.stepicons} />
                  <T className={styles.stephead}>Deidentification</T>
                </div>
                <T className={styles.stepsub}>
                  Best-in-class algorithms and ‘Data Under Glass’
                </T>
                <div className={styles.step3Line}></div>
                <T className={styles.stepdesc}>
                  Patient and data privacy are at the core of everything we and
                  our partners do. Our algorithms for deidentification,
                  including for challenging data modalities such as unstructured
                  (free-text) data, have been certified as best-in-class. Our
                  “data under glass” approach ensures that the data, even after
                  deidentification, always remains at the center.
                </T>
              </div>

              <div className={styles.stepd4data}>
                <div className={styles.iconName}>
                  <img src={Step4Icon} className={styles.stepicons} />
                  <T className={styles.stephead}>
                    Augmented Curation · Harmonization
                  </T>
                </div>
                <T className={styles.stepsub}>
                  Making healthcare data computable
                </T>
                <div className={styles.step4Line}></div>
                <T className={styles.stepdesc}>
                  The majority of EMR data exists in semi-structured or
                  completely unstructured forms. A critical part of enabling
                  artificial intelligence applications downstream is
                  transforming this data into a structured labeled data. We
                  leverage state-of-the-art technology coupled with deep
                  biomedical expertise to transform semi-structured data
                  (harmonization) and unstructured data (augmented curation),
                  resulting in the largest labeled dataset in healthcare.{' '}
                </T>
              </div>

              <div className={styles.stepd5data}>
                <div className={styles.iconName}>
                  <img src={Step5Icon} className={styles.stepicons} />
                  <T className={styles.stephead}>
                    Neutral Networks · Triangulation
                  </T>
                </div>
                <T className={styles.stepsub}>
                  Creating AI-enabled solutions for healthcare
                </T>
                <div className={styles.step5Line}></div>
                <T className={styles.stepdesc}>
                  We use the labeled data on its own to train state-of-the-art
                  neural networks that enable next-generation diagnostics and
                  precision medicine. We also triangulate the labeled data with
                  other datasets such as public literature, molecular and real
                  world data to create solutions and support scientific
                  discovery.{' '}
                </T>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.body}>
          <img src={Step1} className={styles.Stepimages} />

          <div className={styles.stepd1data}>
            <div className={styles.iconName}>
              <img src={Step1Icon} className={styles.stepicons} />
              <T className={styles.stephead}>Existing EMR Data</T>
            </div>
            <T className={styles.stepsub}>
              Decades of rich but unprocessed data
            </T>
            <div className={styles.step1Line}></div>
            <T className={styles.stepdesc}>
              <ReactReadMoreReadLess
                charLimit={120}
                readMoreText={'see all'}
                readLessText={'see less'}
                readMoreClassName={styles.seeAll}
                readLessClassName={styles.seeAll}
              >
                Electronic medical records (EMRs) contain a tremendous amount of
                information about human health, but is largely unstructured. The
                amount of data from Mayo Clinic alone - 500M+ clinical notes,
                4B+ images, 1B+ lab results and more - pose a challenge and an
                opportunity
              </ReactReadMoreReadLess>
            </T>
          </div>
        </div>
        <div className={styles.mobileSepartor} />
        <div className={styles.body}>
          <img src={Step2} className={styles.Stepimages} />

          <div className={styles.stepd2data}>
            <div className={styles.iconName}>
              <img src={Step2Icon} className={styles.stepicons} />
              <T className={styles.stephead}>Data Creation</T>
            </div>
            <T className={styles.stepsub}>
              Pathology digitization and molecular sequencing
            </T>
            <div className={styles.step2Line}></div>
            <T className={styles.stepdesc}>
              <ReactReadMoreReadLess
                charLimit={120}
                readMoreText={'see all'}
                readLessText={'see less'}
                readMoreClassName={styles.seeAll}
                readLessClassName={styles.seeAll}
              >
                We digitize tens of millions of archived pathology slides using
                high-throughput state-of-the-art scanning capabilities, and we
                work with sequencing partners to provide clinical-grade whole
                exome and transcriptome sequencing for patients seen at our
                partner centers. These data creation processes enrich the real
                world data currently existing in EMRs
              </ReactReadMoreReadLess>
            </T>
          </div>
        </div>
        <div className={styles.mobileSepartor} />
        <div className={styles.body}>
          <img src={Step3} className={styles.Stepimages} />

          <div className={styles.stepd3data}>
            <div className={styles.iconName}>
              <img src={Step3Icon} className={styles.stepicons} />
              <T className={styles.stephead}>Deidentification</T>
            </div>
            <T className={styles.stepsub}>
              Best-in-class algorithms and ‘Data Under Glass’
            </T>
            <div className={styles.step3Line}></div>
            <T className={styles.stepdesc}>
              <ReactReadMoreReadLess
                charLimit={120}
                readMoreText={'see all'}
                readLessText={'see less'}
                readMoreClassName={styles.seeAll}
                readLessClassName={styles.seeAll}
              >
                Patient and data privacy are at the core of everything we and
                our partners do. Our algorithms for deidentification, including
                for challenging data modalities such as unstructured (free-text)
                data, have been certified as best-in-class. Our “data under
                glass” approach ensures that the data, even after
                deidentification, always remains at the center.
              </ReactReadMoreReadLess>
            </T>
          </div>
        </div>
        <div className={styles.mobileSepartor} />
        <div className={styles.body}>
          <img src={Step4} className={styles.Stepimages} />

          <div className={styles.stepd4data}>
            <div className={styles.iconName}>
              <img src={Step4Icon} className={styles.stepicons} />
              <T className={styles.stepheadAug}>
                Augmented Curation · Harmonization
              </T>
            </div>
            <T className={styles.stepsub}>Making healthcare data computable</T>
            <div className={styles.step4Line}></div>
            <T className={styles.stepdesc}>
              <ReactReadMoreReadLess
                charLimit={120}
                readMoreText={'see all'}
                readLessText={'see less'}
                readMoreClassName={styles.seeAll}
                readLessClassName={styles.seeAll}
              >
                The majority of EMR data exists in semi-structured or completely
                unstructured forms. A critical part of enabling artificial
                intelligence applications downstream is transforming this data
                into a structured labeled data. We leverage state-of-the-art
                technology coupled with deep biomedical expertise to transform
                semi-structured data (harmonization) and unstructured data
                (augmented curation), resulting in the largest labeled dataset
                in healthcare.
              </ReactReadMoreReadLess>
            </T>
          </div>
        </div>
        <div className={styles.mobileSepartor} />
        <div className={styles.body}>
          <img src={Step5} className={styles.Stepimages} />

          <div className={styles.stepd5data}>
            <div className={styles.iconName}>
              <img src={Step5Icon} className={styles.stepicons} />
              <T className={styles.stephead}>
                Neutral Networks · Triangulation
              </T>
            </div>
            <T className={styles.stepsub}>
              Creating AI-enabled solutions for healthcare
            </T>
            <div className={styles.step5Line}></div>
            <T className={styles.stepdesc}>
              <ReactReadMoreReadLess
                charLimit={120}
                readMoreText={'see all'}
                readLessText={'see less'}
                readMoreClassName={styles.seeAll}
                readLessClassName={styles.seeAll}
              >
                We use the labeled data on its own to train state-of-the-art
                neural networks that enable next-generation diagnostics and
                precision medicine. We also triangulate the labeled data with
                other datasets such as public literature, molecular and real
                world data to create solutions and support scientific discovery.
              </ReactReadMoreReadLess>
            </T>
          </div>
        </div>
        <div className={styles.mobileSepartor} />
      </div>
      <div className={styles.box4new}>
        <div className={styles.body}>
          <div className={styles.boximage}>
            <div className={styles.box4newLine}></div>
            <T className={clsx(styles.new1, styles.powerTextcolor)}>
              THE NFERENCE PLATFORM
            </T>
            <T className={clsx(styles.vensub, styles.powerTextcolor)}>
              Powers spincos, products and discoveries
            </T>
          </div>

          <div className={styles.Powerdata}>
            <div>
              <img src={ProductIcon} />
              <T className={styles.box4subHead}>Products</T>
              <div className={styles.box4newLine}></div>

              <T className={clsx(styles.stepdesc, styles.powerTextcolor)}>
                nference software products enable rapid synthesis of biomedical
                information, both publicly available data as well as information
                contained in electronic medical records.
              </T>
            </div>
            <div>
              <T className={styles.box4subHead}>Spincos</T>
              <div className={styles.box4newLine}></div>

              <T className={clsx(styles.stepdesc, styles.powerTextcolor)}>
                Our platform powers new venture creation through nference’s
                ability to unlock our understanding of rich deep real-world
                patient data.
              </T>
            </div>
            <div>
              <T className={styles.box4subHead}>Discoveries</T>
              <div className={styles.box4newLine}></div>

              <T className={clsx(styles.stepdesc, styles.powerTextcolor)}>
                Our technology allows scientists to rapidly generate, evaluate
                and validate novel hypotheses, leading to impactful discoveries.
              </T>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.boximage}>
          <div className={styles.step5Line}></div>
          <T className={styles.new1}>NEW VENTURES</T>
          <T className={styles.vensub}>
            Venture creation powered by the nference platform
          </T>
        </div>

        <div className={styles.webdata}>
          <div>
            <img src={anumana} />
            <div className={styles.step5Line}></div>

            <T className={styles.stepdesc}>
              Harnessing industry-leading AI and translational science to decode
              the electrocardiogram as never before – as a deep predictive tool
              and biomarker of disease – empowering care providers to help
              patients early
            </T>
            <Link href="https://www.anumana.ai/">
              <a className={styles.link}>
                <T className={styles.websitetext}> Anumana website -{'>'} </T>
              </a>
            </Link>
          </div>
          <div>
            <img src={pranama} />
            <div className={styles.pLine}></div>

            <T className={styles.stepdesc}>
              Harnessing industry-leading AI and translational science to decode
              the electrocardiogram as never before – as a deep predictive tool
              and biomarker of disease – empowering care providers to help
              patients early
            </T>
            <T className={styles.websitetext}> Pramana website -{'>'} </T>
          </div>
        </div>
      </div>

      <div className={styles.box5}>
        <div className={styles.boximage}>
          <img src={productlogo} />
          <div className={styles.step5Line}></div>
          <T className={styles.new1}>OUR BIOPHARMA OFFERINGS</T>
          <T className={styles.vensub}>Our products and services</T>
        </div>
        <div className={styles.productcontainer}>
          <div>
            <T className={styles.pharmahead}>OUR EMR DATA PRODUCT</T>
            <T className={styles.stephead}>nfer Clinical nSights</T>
            <div className={styles.productLine}></div>
            <T className={styles.stepdesc}>
              Powered by the largest set of deep, longitudinal de-identified
              clinical data in the world, this suite of sophisticated
              applications and tools unlocks the ability to realize insights
              from structured and unstructured records of 6M+ patients from our
              academic medical center partners.
            </T>
            <T className={styles.websitetextOUR}>Learn more -{'>'}</T>
          </div>
          <img className={styles.productphoto} src={productphoto} />
        </div>
        <div className={styles.productcontainer2}>
          <div>
            <img src={tringul} className={styles.productsPhotos} />
            <T className={styles.productname}>Nfer Triangulation software</T>
            <div className={styles.tringLine}></div>
            <T className={styles.stepdesc}>
              Optimize lifecycle management and target discovery through
              unbiased triangulation of literature, molecular and real world
              evidence.
            </T>
            <T className={styles.websitetext}>Learn more -{'>'}</T>
          </div>
          <div>
            <img src={signals} className={styles.productsPhotos} />
            <T className={styles.productname}>Nfer signals software</T>
            <div className={styles.signalLine}></div>
            <T className={styles.stepdesc}>
              Automated real-time synthesis of associated concepts, key opinion
              leaders and clinical activity for any biomedical concept based on
              110M+ publicly available documents.
            </T>
          </div>
          <div>
            <img src={collabs} className={styles.productsPhotos} />
            <T className={styles.productname}>Collaborations</T>
            <div className={styles.collabLine}></div>
            <T className={styles.stepdesc}>
              We work with pharma and biotech companies to leverage our real
              world data and software to answer the questions most relevant to
              your teams.
            </T>
            <T className={styles.websitetext}>Learn more -{'>'}</T>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.boximage}>
          <img src={Covidlogo} />

          <T className={styles.covidsubHead}>OUR FEATURED DISCOVERIES</T>
          <T className={clsx(styles.vensub)}>
            See how our platform advanced research for Covid-19
          </T>
          <T className={styles.box2text}>
            In the last year, nference has contributed to the world’s
            understanding of Covid-19. Our platform and partnership with the
            Mayo Clinic allowed for analysis of real-time real world evidence
            relating to Covid-19 infections, treatments vaccinations, and
            subsequent outcomes.
          </T>
          <div className={styles.covidLinkDiv}>
            <Link href="/covid">
              <a className={styles.link}>
                <T className={styles.websitetext}>Covid-19 Spotlight -{'>'}</T>
              </a>
            </Link>
            <Link href="/publications">
              <a className={styles.link}>
                <T className={styles.websitetext}>
                  Link to all publications -{'>'}
                </T>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.boximage}>
          <img src={newspaper} className={styles.newspaper} />
          <div className={styles.cirlceLine}></div>
          <T className={styles.new2}>Featured publications</T>
        </div>
      </div>
      <div className={styles.desktop}>
        <div className={styles.body}>
          <LowerSlider doc={pubInfo} />
          <div className={styles.boximage}>
            <Link href="/publications">
              <a className={styles.link}>
                <div className={styles.allpaper}>
                  <T className={styles.learnoretext}>
                    See all our papers -{'>'}
                  </T>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <LowerSlider doc={pubInfo} />
      </div>
    </>
  )
}

export default Homepage
