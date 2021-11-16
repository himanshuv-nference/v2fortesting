import { makeStyles } from '@material-ui/styles'

const PublicationListingStyles = makeStyles((theme) => ({
  body: {
    marginLeft: '8.43%',
    marginRight: '8.43%',
    ['@media (max-width:780px)']: {
      marginRight: '10px',
      marginLeft: '10px',
    },
    ['@media (min-width:3000px)']: {
      marginRight: '1200px',
      marginLeft: '1200px',
    },
  },
  head: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '140%',
    marginTop: '70px',
    // marginBottom:'12px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      marginTop: '16px',
    },
  },
  headline: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1),rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  slidercontainer: {
    marginTop: '40px',
    marginLeft: '60px',
    marginRight: '60px',
    background: '#FAFBFC',
    display: 'flex',
    padding: '40px 60px 28px 60px',
    gap: '45px',
  },
  Slidertop: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '160%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    marginBottom: '8px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '140%',
      color: '#0C67EB',
      marginTop: '0px',
    },
  },
  SliderTitle: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    // letterSpacing:'0.005em',
    // marginTop:'70px',
    marginBottom: '16px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      //   marginTop:'16px'
    },
  },
  sliderDesc: {
    fontSize: '18px',
    fontWeight: 'noraml',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    marginBottom: '16px',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      color: '#627181',
      marginBottom: '24px',

      //   marginTop:'16px'
    },
  },
  sliderAuth: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    // marginBottom: '8px',
    color: '#1C2329',
    ['@media (max-width:780px)']: {
      fontSize: '11px',
      fontWeight: '300',
      lineHeight: '140%',
      color: '#0057FF',
      width: 'max-content',
      //   marginTop:'16px'
    },
  },
  sliderDate: {
    fontSize: '14px',
    fontWeight: 'noraml',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    // marginBottom:'16px',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '140%',
      letterSpacing: '0.005em',
      // marginTop:'70px',
      marginBottom: '14px',
      color: '#6C7987',
    },
  },
  datediv: {
    display: 'flex',

    ['@media (max-width:780px)']: {
      gap: '25%',
    },
  },
  Newsdatediv: {
    display: 'flex',

    ['@media (max-width:780px)']: {
      gap: '45%',
    },
  },
  Carddatediv: {
    display: 'flex',
    gap: '10%',
  },
  authdiv: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    marginBottom: '13px',
  },
  authcover: {
    background: '#FFFFFF',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#14DDE0',
    boxSizing: 'border-box',
    borderRadius: '40px',
    textAlign: 'center',
    width: 'max-content',
    padding: '5px 11px 5px 11px',
  },
  sample: {
    height: '284px',
    width: '412px',
    marginTop: '40px',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  underlineFlex: {
    display: 'flex',
  },
  mobileContaniner: {
    marginTop: '31px',
    padding: '32px 16px 31px 16px',
    background: '#FAFBFC',
  },
  newsmobileContaniner: {
    marginTop: '31px',
    padding: '32px 16px 32px 16px',
    marginLeft: '16px',
    marginRight: '16px',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0C67EB',
    boxSizing: 'border-box',
    borderRadius: '1px',
  },
  mobileauthcover: {
    background: '#D9E6FF',
    borderRadius: '4px',
    height: '16px',
  },
  mobileauthcovernews: {
    background: '#D9E6FF',
    borderRadius: '4px',
    height: '16px',
    paddingRight: '5px',
    paddingLeft: '5px',
  },
  readmore: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    // marginBottom:'16px',
    color: '#374554',
  },
  mobileDatediv: {
    display: 'flex',
    gap: '50%',
  },
  newsmobileDatediv: {
    display: 'flex',
    gap: '40%',
  },
  label: {
    background:
      'linear-gradient(90deg, rgba(20, 221, 224, 0.05) -5.88%, rgba(75, 90, 255, 0.05) 102.94%)',
    borderRadius: '2px',
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '32px',
    paddingBottom: '32px',
    marginTop: '32px',
    // marginRight: '-10px',
    marginLeft: '-10px',
    ['@media (max-width:780px)']: {
      paddingTop: '20px',
      paddingBottom: '20px',
      gap: '20px',
    },
  },
  Date: {
    flex: '1',
    textAlign: 'end',
  },
  newslabel: {
    background:
      'linear-gradient(90deg, rgba(20, 221, 224, 0.05) -5.88%, rgba(75, 90, 255, 0.05) 102.94%)',
    borderRadius: '2px',
    display: 'flex',
    gap: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '32px',
    paddingBottom: '32px',
    marginTop: '32px',
    ['@media (max-width:780px)']: {
      paddingTop: '20px',
      paddingBottom: '20px',
      gap: '10px',
    },
  },
  labelImages: {
    ['@media (max-width:780px)']: {
      width: '90px',
    },
  },
  bloom: {
    ['@media (max-width:780px)']: {
      width: '57.2px',
    },
  },
  wash: {
    ['@media (max-width:780px)']: {
      width: '89.6px',
    },
  },
  newsyork: {
    ['@media (max-width:780px)']: {
      width: '96.5px',
    },
  },
  SA: {
    ['@media (max-width:780px)']: {
      width: '50.8px',
    },
  },
  head2: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '140%',
    marginTop: '70px',
    // marginBottom:'12px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      marginTop: '50px',
    },
  },
  card: {
    display: 'flex',
    gap: '55px',
    marginTop: '35px',
    ['@media (max-width:780px)']: {
      gap: '8px',
      marginTop: '35px',
      flexDirection: 'column',
    },
  },
  cardTitle: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    // letterSpacing:'0.005em',
    // marginTop:'70px',
    marginBottom: '8px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      //   marginTop:'16px'
    },
  },
  postedIn: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    marginBottom: '8px',
    color: '#1C2329',
    ['@media (max-width:780px)']: {
      fontSize: '12px',

      //   marginTop:'16px'
    },
  },
  postedIndiv: {
    display: 'flex',
    gap: '5px',
  },
  authors: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '124.5%',
    letterSpacing: '0.005em',
    marginTop: '7px',
    marginBottom: '8px',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      marginTop: '8px',
    },
  },
  cardesc: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    marginBottom: '8px',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
    },
  },
  usecaseText: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: ' #1C2329',
    ['@media (max-width:780px)']: {
      fontSize: '11px',
    },
  },
  usecaseboxes: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '40px',
    textAlign: 'center',
    width: 'max-content',
    // height:'32px'
    marginBottom: '8px',
    padding: '6px 12px 6px 12px',
    ['@media (max-width:780px)']: {
      padding: '2.5px 12px 2.5px 12px',
    },
  },
  areaboxes: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#10BF80',
    boxSizing: 'border-box',
    borderRadius: '40px',
    textAlign: 'center',
    width: 'max-content',
    // height:'32px'
    marginBottom: '8px',
    padding: '6px 12px 6px 12px',
    ['@media (max-width:780px)']: {
      padding: '2.5px 12px 2.5px 12px',
    },
  },

  authboxes: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#14DDE0',
    boxSizing: 'border-box',
    borderRadius: '40px',
    textAlign: 'center',
    width: 'max-content',
    // height:'32px'
    marginBottom: '8px',
    padding: '6px 12px 6px 12px',
    ['@media (max-width:780px)']: {
      padding: '2.5px 12px 2.5px 12px',
    },
  },
  grid: {
    display: 'grid',
    // gridTemplateColumns: 'auto auto',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridColumnGap: '90px',
  },
  SeeMoreText: {
    fontSize: '11px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#627181',
    textDecorationLine: 'underline',
    marginLeft: '10px',
  },
  cardRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  mobilePosted: {
    ['@media (max-width:780px)']: {
      display: 'flex',
      gap: '10px',
      flexDirection: 'column',
    },
  },

  cardLeft: { flex: '1' },
  cardconatiner: {
    marginBottom: '100px',
    ['@media (max-width:780px)']: {
      marginBottom: '50px',
    },
  },
  Pageconatiner: {
    marginBottom: '200px',
    ['@media (max-width:780px)']: {
      marginBottom: '50px',
    },
  },
  pageination: {
    color: 'red',
  },
  authormore: {
    fontSize: '16px',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    lineHeight: '124.5%',
    letterSpacing: '0.005em',
    marginTop: '32px',
    marginBottom: '8px',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      marginTop: '8px',
    },
  },
  pubflex: {
    flex: 'none',
  },
  nav: {
    textDecorationLine: 'none',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  select: {
    borderColor: '#E4EBF2',
    color: '#0C67EB',
  },
  filterDiv: {
    marginTop: '16px',
    display: 'flex',
    gap: '16px',
  },
  filterDivNews: {
    marginTop: '30px',
    display: 'flex',
    gap: '16px',
  },
  Err: {
    marginTop: '150px',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '140%',
    // letterSpacing:'0.005em',
    // marginTop:'70px',
    marginBottom: '8px',
    textAlign: 'center',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      marginTop: '75px',
    },
  },
  newsCard: {
    display: 'flex',
    marginTop: '32px',
    borderWidth: '1px',

    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    ['@media (max-width:780px)']: {
      marginTop: '27px',
      background: '#FAFBFC',
      borderRadius: '2px',
      marginLeft: '15px',
      marginRight: '15px',
      padding: '10px 14px 17px 15px',
    },
  },

  newsleft: {
    padding: '32px 60px 32px 60px',
    flex: 0.5,
    // borderTopWidth: '1px',
    // borderLeftWidth: '1px',
    // borderBottomWidth: '1px',
    // borderRightWidth: '0px',

    // borderStyle: 'dashed',
    // borderColor: '#627181',
    // boxSizing: 'border-box',
  },
  newsright: {
    flex: 0.5,
  },
  newscardhead: {
    display: 'flex',
  },
  newsSource: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#0C67EB',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '140%',
      color: '#0C67EB',
      marginTop: '0px',
      marginBottom: '6px',
    },
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '140%',
    // letterSpacing:'0.005em',
    // marginTop:'70px',
    marginBottom: '16px',
    color: '#000000;',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      marginBottom: '11px',

      //   marginTop:'16px'
    },
  },
  newsDesc: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '180%',
    letterSpacing: '0.005em',
    // marginTop:'70px',
    marginBottom: '24px',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
      color: '#627181',
      marginBottom: '24px',

      //   marginTop:'16px'
    },
  },
  newsDate: {
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#6C7987',
    ['@media (max-width:780px)']: {
      fontSize: '11px',
      // marginLeft: '125px',
    },
  },

  newsCardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ['@media (max-width:780px)']: {
      width: '90px',
      height: '84.32px',
      objectFit: 'cover',
      marginTop: '15px',
    },
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  mediaText: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#A9B9C9',
    ['@media (max-width:780px)']: {
      fontSize: '11px',
      marginTop: '16px',
    },
  },
  mediaDiv: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '45%',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
    },
  },
  pageButtom: {
    ['@media (max-width:780px)']: {
      marginTop: '16px',
    },
  },
  mobileNewsFIlter: {
    ['@media (max-width:780px)']: {
      width: '150px',
    },
  },
  image: {
    width: '550px',
    height: '430px',
  },
}))

export default PublicationListingStyles
