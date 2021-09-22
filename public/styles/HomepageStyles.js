import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: 'block',
    ['@media (max-width:780px)']: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    ['@media (max-width:780px)']: {
      display: 'block',
    },
  },
  body: {
    marginLeft: '8.43%',
    marginRight: '8.43%',
    ['@media (max-width:780px)']: {
      marginLeft: '16px',
      marginRight: '16px',
    },
    ['@media (min-width:3000px)']: {
      marginRight: '1200px',
      marginLeft: '1200px',
    },
  },
  circleImage: {
    width: '28px',
    marginTop: '90px',
  },
  cirlceLine: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '30px',
    marginTop: '4px',
    borderRadius: '20px',
  },
  head1: {
    fontSize: '44px !important',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    ['@media (max-width:780px)']: {
      fontSize: '25px',
    },
  },
  description1: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  description1Div: {
    paddingRight: '33px',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      paddingRight: '0px',
      marginBottom: '16px',
    },
  },

  date: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '200%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
    },
  },
  dateDiv: {
    display: 'flex',
    marginTop: '16px',
    marginBottom: '8px',
    gap: '2px',
  },
  imgDesciption: {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '160%',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  slider: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    borderRadius: '2px',
    padding: '24px',
    ['@media (max-width:780px)']: {
      padding: '16px',
    },
  },
  slideImage: {
    width: '419px',
    height: '247px',
    opacity: '0.9',
    ['@media (max-width:780px)']: {
      width: '280px',
      height: '206px',
    },
  },
  box1: {
    display: 'flex',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      marginTop: '16px',
    },
  },
  boximage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ['@media (max-width:780px)']: {
      marginTop: '75px',
    },
  },
  box2head: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#0057FF',
    textAlign: 'center',
    paddingRight: '180px',
    paddingLeft: '180px',
    marginTop: '32px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      paddingRight: '16px',
      paddingLeft: '16px',
      marginTop: '16px',
    },
  },
  box2text: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#374554',
    textAlign: 'center',
    paddingRight: '180px',
    paddingLeft: '180px',
    marginTop: '32px',
    marginBottom: '24px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      paddingRight: '16px',
      paddingLeft: '16px',
      marginTop: '16px',
      marginBottom: '32px',
    },
  },
  box2: {
    background: '#FAFBFC',
    borderRadius: '2px',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'rgba(20, 221, 224, 1)',
    boxSizing: 'border-box',
    marginTop: '85px',
    ['@media (max-width:780px)']: {
      marginTop: '48px',
      borderTopWidth: '1px',
      borderRightWidth: '0px',
      borderLeftWidth: '0px',
      borderBottomWidth: '1px',
    },
  },
  mayo: {
    background: ' #FFFFFF',
    borderRadius: '50%',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    height: '110px',
    width: '110px',
    textAlign: 'center',
    paddingTop: '26px',
    marginBottom: '63px',
  },
  circle2: {
    marginTop: '63px',
    ['@media (max-width:780px)']: {
      marginTop: '35px',
    },
  },
  box2part: {
    display: 'flex',
    paddingLeft: '60px',
    paddingRight: '60px',
    gap: '250px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      paddingLeft: '16px',
      paddingRight: '16px',
      gap: '0px',
    },
  },
  pharmahead: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#0057FF',
    marginTop: '16px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      marginBottom: '8px',
    },
  },
  paharmaicon: {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    borderWidth: '1px',
    textAlign: 'center',
    paddingTop: '13px',
  },
  pharmaText: {
    fontSize: '20px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#374554',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  learnmore: {
    borderRadius: '20px',
    borderStyle: 'solid',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderWidth: '1px',
    textAlign: 'center',
    background: '#FFFFFF',
    maxWidth: '146px',
    padding: '8px 16px 8px 16px',
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      marginBottom: '28px',
    },
  },
  learnoretext: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#0057FF',
    textAlign: 'center',
  },
  newspaper: {
    marginTop: '120px',
    marginBottom: '12px',
    ['@media (max-width:780px)']: {
      marginTop: '80px',
    },
  },
  new1: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    textAlign: 'center',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
    },
  },
  new2: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#1A2530',
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      marginTop: '8px',
      marginBottom: '8px',
    },
  },
  new3: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    textAlign: 'center',
    marginBottom: '41px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginBottom: '24px',
    },
  },
  mediaImage: {
    textAlign: 'center',
  },

  mediaImage2: {
    textAlign: 'center',
    marginTop: '33px',
    marginBottom: '67px',
    ['@media (max-width:780px)']: {
      marginTop: '4px',
    },
  },
  mImage: {
    marginRight: '31px',
    ['@media (max-width:780px)']: {
      height: '16px',
      marginRight: '16px',
    },
  },
  allSteps: {
    width: '330px',
  },
  Stepimages: {
    width: '300px',
    marginTop: '26px',
  },
  mobileSepartor: {
    marginTop: '32px',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    borderRadius: '2px',
  },
  stepheadAug: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    // textAlign: 'center',
    marginBottom: '8px',
    ['@media (max-width:780px)']: {
      fontSize: '15px',
      marginBottom: '26px',
    },
  },
  stephead: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    // textAlign: 'center',
    marginBottom: '8px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginBottom: '26px',
    },
  },
  stepsub: {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  stepdesc: {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '200%',
    color: '#374554',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      marginTop: '16px',
    },
  },
  step1Line: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  box4: {
    display: 'flex',
    gap: '300px',
    marginTop: '72px',
    ['@media (max-width:780px)']: {
      marginTop: '26px',
    },
  },
  stepd1data: {
    paddingTop: '0px',
    ['@media (max-width:780px)']: {
      paddingTop: '40px',
    },
  },
  step2Line: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  stepd2data: {
    paddingTop: '40px',
  },
  step3Line: {
    background:
      'linear-gradient(to right, rgba(56, 232, 169, 1), rgba(4, 185, 165, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  stepd3data: {
    paddingTop: '90px',
    ['@media (max-width:780px)']: {
      paddingTop: '26px',
    },
  },
  step4Line: {
    background:
      'linear-gradient(to right, rgba(255, 3, 125, 1), rgba(255, 217, 236, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  stepd4data: {
    paddingTop: '90px',
    ['@media (max-width:780px)']: {
      paddingTop: '26px',
    },
  },
  step5Line: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  stepd5data: {
    paddingTop: '70px',
    ['@media (max-width:780px)']: {
      paddingTop: '26px',
    },
  },
  vensub: {
    paddingRight: '250px',
    paddingLeft: '250px',
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#1A2530',
    textAlign: 'center',
    marginBottom: '16px',
    marginBottom: '16px',
    marginBottom: '8px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      paddingRight: '0px',
      paddingLeft: '0px',
      marginBottom: '32px',
    },
  },
  websitetext: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#1A2530',
    marginTop: '8px',
  },
  pLine: {
    background:
      'linear-gradient(to right, rgba(240, 125, 255, 1), rgba(205, 55, 252, 1),rgba(253, 76, 223, 1),rgba(253, 76, 223, 1),rgba(252, 126, 139, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  webdata: {
    display: 'flex',
    gap: '120px',
    alignItems: 'baseline',
    paddingRight: '60px',
    paddingLeft: '60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '60px',
      paddingRight: '16px',
      paddingLeft: '16px',
    },
  },
  productLine: {
    background:
      'linear-gradient(to right, rgba(199, 253, 228, 1), rgba(20, 221, 224, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  productcontainer: {
    display: 'flex',
    gap: '56px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column-reverse',
      gap: '0px',
    },
  },
  productphoto: {
    width: '200px',
    height: '200px',
    paddingTop: '55px',
    ['@media (max-width:780px)']: {
      paddingTop: '0px',
    },
  },
  productsPhotos: {
    width: '72px',
    height: '72px',
  },
  productcontainer2: {
    display: 'flex',
    gap: '42px',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '48px',
      marginTop: '32px',
    },
  },
  productname: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    marginTop: '16px',
  },
  tringLine: {
    background:
      'linear-gradient(to right, rgba(222, 255, 222, 1), rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  signalLine: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(89, 200, 252, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  collabLine: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  box5: {
    background: '#FAFBFC',
    padding: '118px 120px 80px 120px',
    marginTop: '60px',
    ['@media (max-width:780px)']: {
      padding: '16px',
    },
  },
  slider2Top: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#627181',
  },
  slider2head: {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '180%',
    color: '#1A2530',
  },
  slider2disc: {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
  },
  slider2read: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#0057FF',
    textAlign: 'right',
    marginTop: '32px',
  },
  slider2container: {
    display: 'flex',
    gap: '30px',
  },
  slider2: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0C67EB',
    boxSizing: 'border-box',
    borderRadius: '2px',
    padding: '24px',
    width: '420px',
  },
  allpaper: {
    borderRadius: '20px',
    borderStyle: 'solid',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderWidth: '1px',
    textAlign: 'center',
    background: '#FFFFFF',
    maxWidth: '201px',
    padding: '8px 16px 8px 16px',
    marginBottom: '60px',
    marginTop: '50px',
  },
  allproduct: {
    borderRadius: '20px',
    borderStyle: 'solid',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderWidth: '1px',
    textAlign: 'center',
    background: '#FFFFFF',
    maxWidth: '210px',
    padding: '8px 16px 8px 16px',
    marginBottom: '60px',
    marginTop: '50px',
  },
  iconName: {
    display: 'flex',
    gap: '16px',
    ['@media (max-width:780px)']: {
      gap: '9px',
    },
  },
  stepicons: {
    height: '42px',
  },
  nav: {
    textDecorationLine: 'none',
  },
  heroLeft: {
    ['@media (min-width:780px)']: {
      paddingRight: '32px',
    },
  },
  websitetextOUR: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#1A2530',
    marginTop: '16px',
  },
  greybox: {
    ['@media (min-width:780px)']: {
      marginLeft: '8.43%',
      marginRight: '8.43%',
    },

    ['@media (min-width:3000px)']: {
      marginRight: '1200px',
      marginLeft: '1200px',
    },
  },
  seeAll: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '200%',
    color: '#1A2530',
    textDecorationLine: 'underline',
  },
  link: {
    textDecorationLine: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export default useStyles
