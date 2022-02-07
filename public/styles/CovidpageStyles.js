import { makeStyles } from '@material-ui/core/styles'

const CovidStyles = makeStyles((theme) => ({
  // Tophead: {
  //   fontSize: '16px',
  //   fontWeight: '500',
  //   lineHeight: '140%',
  //   color: '#1A2530',
  //   marginTop: '32px',
  //   marginBottom: '16px',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //     marginBottom: '8px',
  //     marginTop: '16px',
  //   },
  // },
  // TopSub: {
  //   fontSize: '44px',
  //   fontWeight: '300',
  //   lineHeight: '150%',
  //   color: '#1A2530',

  //   ['@media (max-width:780px)']: {
  //     fontSize: '22px',
  //   },
  // },
  // dateContainer: {
  //   width: 'fit-content',
  //   position: 'absolute',
  //   right: 100,
  // },
  // date: {
  //   fontSize: '14px',
  //   fontWeight: '500',
  //   lineHeight: '140%',
  //   color: '#1A2530',

  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //   },
  // },
  // time: {
  //   paddingLeft: '50px',
  // },
  // line: {
  //   borderWidth: '1px',
  //   borderStyle: 'solid',
  //   borderColor: '#0661FF',
  //   width: '77px',
  //   height: '0px',
  //   marginTop: '10px',
  //   marginLeft: '100px',
  // },
  // lineDiv: {
  //   display: 'flex',
  //   position: 'relative',
  // },
  // circle: {
  //   width: '11px',
  //   height: '11px',
  //   borderRadius: '50%',
  //   background:
  //     'linear-gradient(90deg, #0057FF 0%, #5AEEFF 58.85%, #DEFFDE 100%);',
  //   marginTop: '5px',
  // },
  // standingLine: {
  //   borderWidth: '1px',
  //   borderStyle: 'dashed',
  //   borderColor: '#000000',
  //   flex: '1',
  //   width: '0px',
  // },
  // circleDiv: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '3px',
  //   alignItems: 'center',
  // },
  // card: {
  //   display: 'flex',
  //   gap: '60px',
  //   marginTop: '52px',
  // },
  // newsContainer: {
  //   width: '100%',
  // },
  // tagDiv: {
  //   display: 'flex',
  //   gap: '8px',
  // },
  // tag1: {
  //   background: '#D9E6FF',
  //   borderRadius: '4px',
  //   padding: '2px 8px 2px 8px',
  //   width: 'max-content',
  //   ['@media (max-width:780px)']: {
  //     width: 'auto',
  //   },
  // },
  // tag1Text: {
  //   fontSize: '14px',
  //   fontWeight: '300',
  //   lineHeight: '140%',
  //   color: '#0057FF',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //   },
  // },
  // tag2: {
  //   background: '#FFD9EC',
  //   borderRadius: '4px',
  //   padding: '2px 8px 2px 8px',
  //   width: 'max-content',
  // },
  // tag2Text: {
  //   fontSize: '14px',
  //   fontWeight: '300',
  //   lineHeight: '140%',
  //   color: '#FF3F61',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //   },
  // },
  // titleDiv: {
  //   display: 'flex',
  //   marginTop: '16px',
  //   gap: '16px',
  //   marginBottom: '8px',
  // },
  // cardTitle: {
  //   fontSize: '20px',
  //   fontWeight: '600',
  //   lineHeight: '140%',
  //   color: '#1A2530',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '16px',
  //     marginTop: '18px',
  //     marginBottom: '8px',
  //   },
  // },
  // desc: {
  //   fontSize: '14px',
  //   fontWeight: 'normal',
  //   lineHeight: '180%',
  //   color: '#374554',
  //   width: '553px',
  //   ['@media (max-width:780px)']: {
  //     width: 'auto',
  //     fontSize: '12px',
  //   },
  // },
  // linkText: {
  //   fontSize: '16px',
  //   fontWeight: '500',
  //   lineHeight: '26px',
  //   color: '#1A2530',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '14px',
  //   },
  // },
  // linkDiv: {
  //   display: 'flex',
  //   gap: '10px',
  // },
  // linkandimageDiv: {
  //   marginTop: '24px',
  //   display: 'flex',
  //   justifyContent: 'end',
  //   gap: '20px',
  //   alignItems: 'center',
  //   ['@media (max-width:780px)']: {
  //     marginTop: '0px',
  //     justifyContent: 'left',
  //   },
  // },
  // pubImages: {
  //   ['@media (max-width:780px)']: {
  //     height: '20px',
  //   },
  // },
  // cardImage: {
  //   marginTop: '16px',
  //   ['@media (max-width:780px)']: {
  //     marginTop: '8px',
  //     width: '300px',
  //     height: '228px',
  //     paddingRight: '30px',
  //   },
  // },
  // cardContainer: {
  //   marginBottom: '50px',
  // },
  // box2date: {
  //   fontSize: '14px',
  //   fontWeight: '500',
  //   lineHeight: '180%',
  //   color: '#1C2329',
  //   marginBottom: '10px',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //   },
  // },
  // cardHead: {
  //   fontSize: '24px',
  //   fontWeight: '500',
  //   lineHeight: '140%',
  //   color: '#1C2329',
  //   marginBottom: '16px',
  //   marginTop: '16px',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '16px',
  //     marginBottom: '8px',
  //     marginTop: '16px',
  //   },
  // },
  // carddesc: {
  //   fontSize: '16px',
  //   fontWeight: 'normal',
  //   lineHeight: '180%',
  //   color: '#374554',
  //   marginBottom: '19px',
  //   ['@media (max-width:780px)']: {
  //     fontSize: '12px',
  //     marginBottom: '16px',
  //   },
  // },
  // box2Image: {
  //   borderRadius: '4px',
  // },
  // box2: {
  //   display: 'flex',
  //   gap: '50px',
  //   marginTop: '50px',
  //   background: '#FAFBFC',
  //   borderRadius: '2px',
  //   padding: '45px 60px 50px 60px',
  //   ['@media (max-width:780px)']: {
  //     flexDirection: 'column',
  //     padding: '0px',
  //     marginTop: '32px',
  //     gap: '10px',
  //     padding: '16px',
  //   },
  // },
  // //Mobile Specific CSS
  // mobileDivdate: {
  //   display: 'flex',
  //   gap: '5px',
  //   marginBottom: '8px',
  // },
  // mobilepubImages: {
  //   display: 'flex',
  //   gap: '10px',
  // },
  // pubImages: {
  //   height: '16px',
  // },
  // mobileLinkandImages: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginTop: '20px',
  // },
  // mobileCard: {
  //   padding: '16px',
  //   borderWidth: '1px 0px 0px 0px',

  //   borderStyle: 'dashed',
  //   borderColor: '#000000',
  // },
  // mobileCardConatiner: {
  //   marginTop: '40px',
  //   marginBottom: '100px',
  // },

  // New covid page style here
  head: {
    marginBottom: '10px',
    marginTop: '27px',
  },
  colorunderLine: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '88px',
    borderRadius: '20px',
  },
  underLinediv: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  box1: {
    background: '#FAFBFD',
    paddingTop: '24px',
    paddingBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    gap: '9px',
    marginBottom: '31px',
  },
  textBox1: {
    fontWeight: '400',
  },
  sideBarhead: {
    color: '#627181',
    marginLeft: '38px',
    marginTop: '21px',
    marginBottom: '22px',
  },
  sideBar: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: ' #E4EBF2',
    borderRadius: '0px 6px 6px 0px',
    width: '365px',
    height: '400px',
  },
  sideBarLine: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: ' #E4EBF2',
  },
  appDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '5px',
    // background: 'rgba(26, 176, 149, 0.06)',

    // opacity: '0.06',
  },
  // tabBackground: {
  //   background: (props) => props.app.data.background_color,
  // },
  adverse: {
    background: 'rgba(26, 176, 149, 0.06)',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',
    borderRightColor: '#1AB095',
  },
  clinical: {
    background: 'rgb(159, 214, 248)',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',
    borderRightColor: '#036ffc',
  },
  appImg: {
    marginLeft: '30px',
  },
  infoImg: {
    marginLeft: 'auto',
    marginRight: '15px',
  },
  tableHead: {
    textTransform: 'uppercase',
    color: '#8D9EB0',
    marginBottom: '8px',
  },
  abstract: {
    marginTop: '16px',
    width: '776px',
    marginBottom: '24px',
  },
  factHead: {
    textTransform: 'uppercase',
    color: '#627181',
    marginTop: '24px',
  },
  factBox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: ' #E4EBF2',
    borderRadius: '6px',
    padding: '12px 0px 12px 12px',
    width: '1016px',
    marginTop: '12px',
    marginBottom: '12px',
  },
  factText: {
    width: '747px',
  },
  table: {
    marginBottom: '100px',
    marginTop: '100px',
  },
  container: {
    display: 'flex',
    gap: '30px',
  },
  appandLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  vaccineDIv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '200px',
  },
  janssen: {
    width: '10px',
    height: '10px',
    background: 'rgba(77, 216, 255, 0.5)',
  },
  moderna: {
    width: '10px',
    height: '10px',
    background: 'rgba(78, 210, 175, 0.5)',
  },
  pfizer: {
    width: '10px',
    height: '10px',
    background: 'rgba(12, 103, 235, 0.5)',
  },
  filterDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))
export default CovidStyles
