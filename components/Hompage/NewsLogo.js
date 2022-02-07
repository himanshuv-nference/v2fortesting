import React from 'react'

import useStyles from '../../public/styles/HomepageStyles'
import Link from 'next/link'

const blom = '/HomePageImages/Group33.svg'
const wash = '/HomePageImages/Group1227.svg'
const newy = '/HomePageImages/new-york-times32.svg'
const fortune = '/HomePageImages/Group1268.svg'
const wallStreet = '/HomePageImages/Group1274.svg'
const scientifamerican = '/HomePageImages/g411.svg'
const usatoday = '/HomePageImages/usaTodayColor1.svg'
const reuters = '/HomePageImages/Group44.svg'
const TOI = '/HomePageImages/toiColor (1).svg'
const stat = '/HomePageImages/Group4316.svg'
const CBS = '/HomePageImages/Group55.svg'
const faceNation = '/HomePageImages/Group43171.svg'
const CNN = '/HomePageImages/Group6.svg'
const foxNews = '/HomePageImages/foxColor1.svg'
const abc = '/HomePageImages/abcColor1.svg'
const cbs_news = '/HomePageImages/CBS_New.svg'
const hill = '/HomePageImages/The_Hill.svg'
const NYM = '/HomePageImages/New_York_Magazine.svg'
const business = '/HomePageImages/Business.svg'
const atlantic = '/HomePageImages/Group4332.svg'
const VOA = '/HomePageImages/VOA_logo 1.svg'
const Medscape = '/HomePageImages/layer1.svg'
const beckers = '/HomePageImages/beckers.svg'
const group_33 = '/HomePageImages/Group_33.svg'
const bbc = '/HomePageImages/BBC.svg'
const axios = '/HomePageImages/Group4335.svg'
const kurier = '/HomePageImages/KURIER_Logo_RGB.svg'
const finacialT = '/HomePageImages/Vector.svg'
const politico = '/HomePageImages/Group 4330.svg'
const starTribune = '/HomePageImages/layer1 (1).svg'
const CNBC = '/HomePageImages/Group (4).svg'
const abcNews = '/HomePageImages/Group (5).svg'
const npr = '/HomePageImages/National_Public_Radio_logo 1.svg'
const telegraph = '/HomePageImages/Group (6).svg'
const fierce = '/HomePageImages/Group 4339.svg'
const NatGeo = '/HomePageImages/National-Geographic-Logo.svg'
const Gaurdian = '/HomePageImages/The_Guardian_2018.svg'
const USnews = '/HomePageImages/Group (7).svg'
const TheScientist = '/HomePageImages/Vector (1).svg'
const AP = '/HomePageImages/Group 4343.svg'
const Forbes = '/HomePageImages/Vector (2).svg'
const NHIPH = '/HomePageImages/Group 4333.svg'
const Group4334 = '/HomePageImages/Group 4334.svg'
const USWhiteHouse = '/HomePageImages/US-WhiteHouse-Logo 1.svg'
const NIH = '/HomePageImages/NIH_2012_logo_arrow 1.svg'
const WHO = '/HomePageImages/path6.svg'
const AACR = '/HomePageImages/download 1.svg'
const elife = '/HomePageImages/Group (8).svg'
const npj = '/HomePageImages/npj-300x300 1.svg'
const cellPress = '/HomePageImages/Group (9).svg'
const americanSociety = '/HomePageImages/Group 4337.svg'
const ScintificReports = '/HomePageImages/Group (10).svg'
const AAAS = '/HomePageImages/Page-1.svg'
const JAMANetwork = '/HomePageImages/Group 4336.svg'
const Lancet = '/HomePageImages/The_Lancet_logo 2.svg'
const nature = '/HomePageImages/Vector (3).svg'

const FDA = '/HomePageImages/Food_and_Drug_Administration_logo 1.svg'

const CDC =
  '/HomePageImages/United_States_Centers_for_Disease_Control_and_Prevention_logo 1.svg'

function NewsLogo() {
  const styles = useStyles()

  return (
    <div>
      <div className={styles.desktop}>
        <div>
          <div className={styles.mediaImage2}>
            <Link
              className={styles.link}
              href="https://www.bloomberg.com/news/articles/2021-02-17/mayo-clinic-ai-study-shows-covid-shots-work-well-in-real-world"
            >
              <a target="_blank">
                <img src={blom} className={styles.bloomClass} />
              </a>
            </Link>
            <Link href="https://www.washingtonpost.com/health/2020/08/08/asymptomatic-coronavirus-covid/">
              <a target="_blank">
                <img src={wash} className={styles.mImage} />
              </a>
            </Link>
            <Link href="https://www.nytimes.com/2020/07/29/health/coronavirus-vaccines.html">
              <a target="_blank">
                <img src={newy} className={styles.mImage} />
              </a>
            </Link>
            <Link href="https://www.usatoday.com/story/news/health/2021/08/16/covid-booster-shots-vaccination-united-states-biden-administration/8160915002/">
              <a target="_blank">
                <img src={usatoday} className={styles.mobileImage} />
              </a>
            </Link>
            <Link href="https://www.reuters.com/article/us-health-coronavirus-science/riskier-blood-thinner-used-more-often-in-black-patients-psychiatric-issues-linked-to-covid-19-idUSKBN27R2T9">
              <a target="_blank">
                <img src={reuters} className={styles.mobileImage} />
              </a>
            </Link>
            {/* <Link href="https://timesofindia.indiatimes.com/home/science/hypertensive-patients-most-likely-to-develop-post-covid-complications-study/articleshow/84777503.cms">
                  <a target="_blank">
                    <img src={TOI} className={styles.mobileImage} />
                  </a>
                </Link> */}
          </div>
          <div className={styles.mediaImage2}>
            <Link href="https://fortune.com/2020/08/20/coronavirus-health-care-innovation-collaboration/">
              <a target="_blank">
                <img src={fortune} className={styles.fortune} />
              </a>
            </Link>
            <Link href="https://www.wsj.com/articles/nference-gets-backing-to-synthesize-medical-knowledge-1528279200">
              <a target="_blank">
                <img src={wallStreet} className={styles.mImage} />
              </a>
            </Link>
            <Link href="https://www.scientificamerican.com/article/a-flu-shot-might-reduce-coronavirus-infections-early-research-suggests/">
              <a target="_blank">
                <img
                  src={scientifamerican}
                  className={styles.scientifamerican}
                />
              </a>
            </Link>
            <Link href="https://www.statnews.com/2020/06/26/from-nose-to-toe-covid19-virus-attacks-like-no-other-respiratory-infection/">
              <a target="_blank">
                <img src={stat} className={styles.mobileImage2} />
              </a>
            </Link>
            <Link href="https://www.cbsnews.com/news/coronavirus-florida-covid-deaths-record-third-day-straight/">
              <a target="_blank">
                <img src={CBS} className={styles.mobileImage2} />
              </a>
            </Link>
            <Link href="https://www.cbsnews.com/news/transcript-gianrico-farrugia-on-face-the-nation-march-29-2020/">
              <a target="_blank">
                <img src={faceNation} className={styles.mobileImage2} />
              </a>
            </Link>
            <Link href="https://edition.cnn.com/2020/08/11/health/us-coronavirus-tuesday/index.html">
              <a target="_blank">
                <img src={CNN} className={styles.mobileImage2} />
              </a>
            </Link>
            <Link href="https://www.foxnews.com/health/pfizer-covid-19-vaccine-42-infection-delta-preprint">
              <a target="_blank">
                <img src={foxNews} className={styles.mobileImage2} />
              </a>
            </Link>
            <Link href="https://abcnews.go.com/Health/long-covid-19-vaccine-booster/story?id=79430314">
              <a target="_blank">
                <img src={abc} className={styles.mobileImage2} />
              </a>
            </Link>
          </div>
          <div className={styles.mediaImage2}>
            <img src={cbs_news} className={styles.cbs_news} />

            <img src={hill} className={styles.cbs_news} />

            <img src={NYM} className={styles.NYM} />

            <img src={business} className={styles.mobileImage2} />

            <img src={atlantic} className={styles.mobileImage2} />

            <img src={VOA} className={styles.mobileImage2} />

            <img src={Medscape} className={styles.mobileImage2} />

            <img src={beckers} className={styles.mobileImage2} />

            <img src={group_33} className={styles.mobileImage2} />
            <img src={bbc} className={styles.mobileImage2} />
            <img src={axios} className={styles.mobileImage2} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={kurier} className={styles.kurier} />

            <img src={finacialT} className={styles.mImage} />

            <img src={politico} className={styles.politico} />

            <img src={starTribune} className={styles.mobileImage2} />

            <img src={CNBC} className={styles.mobileImage2} />

            <img src={abcNews} className={styles.mobileImage2} />

            <img src={npr} className={styles.mobileImage2} />

            <img src={telegraph} className={styles.mobileImage2} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={fierce} className={styles.fierce} />

            <img src={NatGeo} className={styles.NatGeo} />

            <img src={Gaurdian} className={styles.fierce} />

            <img src={USnews} className={styles.mobileImage2} />

            <img src={TheScientist} className={styles.mobileImage2} />

            <img src={AP} className={styles.mobileImage2} />

            <img src={Forbes} className={styles.mobileImage2} />

            <img src={CDC} className={styles.mobileImage2} />

            <img src={USWhiteHouse} className={styles.mobileImage2} />
            <img src={FDA} className={styles.mobileImage2} />
            <img src={NHIPH} className={styles.mobileImage2} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={Group4334} className={styles.Group4334} />

            <img src={NIH} className={styles.NIH} />

            <img src={WHO} className={styles.Group4334} />
            <img src={npj} className={styles.mobileImage2} />

            <img src={AACR} className={styles.AACR} />

            <img src={elife} className={styles.mobileImage2} />

            <img src={cellPress} className={styles.mobileImage2} />

            <img src={americanSociety} className={styles.mobileImage2} />

            <img src={ScintificReports} className={styles.mobileImage2} />
            <img src={AAAS} className={styles.mobileImage2} />
          </div>
          <div className={styles.mediaImage4}>
            <img src={JAMANetwork} className={styles.bloomClass} />

            <img src={Lancet} className={styles.Lancet} />

            <img src={TOI} className={styles.TOI} />
            <img src={nature} className={styles.mobileImage2} />
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div>
          <div className={styles.mediaImage}>
            <Link
              className={styles.link}
              href="https://www.bloomberg.com/news/articles/2021-02-17/mayo-clinic-ai-study-shows-covid-shots-work-well-in-real-world"
            >
              <a target="_blank">
                <img src={blom} className={styles.bloomClass} />
              </a>
            </Link>
            <Link href="https://www.washingtonpost.com/health/2020/08/08/asymptomatic-coronavirus-covid/">
              <a target="_blank">
                <img src={wash} className={styles.wash} />
              </a>
            </Link>
            <Link href="https://www.nytimes.com/2020/07/29/health/coronavirus-vaccines.html">
              <a target="_blank">
                <img src={newy} className={styles.newy} />
              </a>
            </Link>
          </div>
          <div className={styles.mediaImage}>
            <Link href="https://fortune.com/2020/08/20/coronavirus-health-care-innovation-collaboration/">
              <a target="_blank">
                <img src={fortune} className={styles.fortuneImagemob} />
              </a>
            </Link>
            <Link href="https://www.wsj.com/articles/nference-gets-backing-to-synthesize-medical-knowledge-1528279200">
              <a target="_blank">
                <img src={wallStreet} className={styles.wallStreet} />
              </a>
            </Link>
            <Link href="https://www.scientificamerican.com/article/a-flu-shot-might-reduce-coronavirus-infections-early-research-suggests/">
              <a target="_blank">
                <img
                  src={scientifamerican}
                  className={styles.scientifamerican}
                />
              </a>
            </Link>
            <Link href="https://www.statnews.com/2020/06/26/from-nose-to-toe-covid19-virus-attacks-like-no-other-respiratory-infection/">
              <a target="_blank">
                <img src={stat} className={styles.mobileImage2} />
              </a>
            </Link>
          </div>

          <div className={styles.mediaImage}>
            <Link href="https://www.usatoday.com/story/news/health/2021/08/16/covid-booster-shots-vaccination-united-states-biden-administration/8160915002/">
              <a target="_blank">
                <img src={usatoday} className={styles.mobileImage} />
              </a>
            </Link>
            <Link href="https://www.reuters.com/article/us-health-coronavirus-science/riskier-blood-thinner-used-more-often-in-black-patients-psychiatric-issues-linked-to-covid-19-idUSKBN27R2T9">
              <a target="_blank">
                <img src={reuters} className={styles.mobileImage} />
              </a>
            </Link>
            <Link href="https://timesofindia.indiatimes.com/home/science/hypertensive-patients-most-likely-to-develop-post-covid-complications-study/articleshow/84777503.cms">
              <a target="_blank">
                <img src={TOI} className={styles.TOI} />
              </a>
            </Link>
          </div>
          <div className={styles.mediaImage2}>
            <Link href="https://www.cbsnews.com/news/coronavirus-florida-covid-deaths-record-third-day-straight/">
              <a target="_blank">
                <img src={CBS} className={styles.cbs_news} />
              </a>
            </Link>
            <Link href="https://www.cbsnews.com/news/transcript-gianrico-farrugia-on-face-the-nation-march-29-2020/">
              <a target="_blank">
                <img src={faceNation} className={styles.faceNation} />
              </a>
            </Link>
            <Link href="https://edition.cnn.com/2020/08/11/health/us-coronavirus-tuesday/index.html">
              <a target="_blank">
                <img src={CNN} className={styles.mobileImage3} />
              </a>
            </Link>
            <Link href="https://www.foxnews.com/health/pfizer-covid-19-vaccine-42-infection-delta-preprint">
              <a target="_blank">
                <img src={foxNews} className={styles.mobileImage3} />
              </a>
            </Link>
            <Link href="https://abcnews.go.com/Health/long-covid-19-vaccine-booster/story?id=79430314">
              <a target="_blank">
                <img src={abc} className={styles.mobileImage3} />
              </a>
            </Link>
            <img src={cbs_news} className={styles.cbs_news} />
            <img src={hill} className={styles.cbs_news} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={NYM} className={styles.NYM} />

            <img src={business} className={styles.mobileImage3} />

            <img src={atlantic} className={styles.mobileImage3} />

            <img src={VOA} className={styles.mobileImage3} />

            <img src={Medscape} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={beckers} className={styles.mobileImage3} />

            <img src={group_33} className={styles.mobileImage3} />
            <img src={bbc} className={styles.mobileImage3} />
            <img src={axios} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={kurier} className={styles.mobileImage3} />

            <img src={finacialT} className={styles.mobileImage3} />

            <img src={politico} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={starTribune} className={styles.mobileImage3} />

            <img src={CNBC} className={styles.mobileImage3} />

            <img src={abcNews} className={styles.mobileImage3} />

            <img src={npr} className={styles.mobileImage3} />

            <img src={telegraph} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={fierce} className={styles.fierce} />

            <img src={NatGeo} className={styles.mobileImage3} />

            <img src={Gaurdian} className={styles.mobileImage3} />

            <img src={USnews} className={styles.mobileImage3} />

            <img src={TheScientist} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={AP} className={styles.mobileImage3} />

            <img src={Forbes} className={styles.mobileImage3} />

            <img src={CDC} className={styles.mobileImage3} />

            <img src={USWhiteHouse} className={styles.mobileImage3} />
            <img src={FDA} className={styles.mobileImage3} />
            <img src={Group4334} className={styles.mobileImage3} />

            <img src={NHIPH} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={NIH} className={styles.mobileImage3} />

            <img src={WHO} className={styles.mobileImage3} />
            <img src={npj} className={styles.mobileImage3} />

            <img src={AACR} className={styles.mobileImage3} />

            <img src={elife} className={styles.mobileImage3} />

            <img src={cellPress} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={americanSociety} className={styles.mobileImage3} />

            <img src={ScintificReports} className={styles.mobileImage3} />
            <img src={AAAS} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={JAMANetwork} className={styles.mobileImage3} />

            <img src={Lancet} className={styles.mobileImage3} />
          </div>
          <div className={styles.mediaImage2}>
            <img src={TOI} className={styles.mobileImage3} />
            <img src={nature} className={styles.mobileImage3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLogo
