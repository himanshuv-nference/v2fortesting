import { makeStyles } from '@material-ui/styles'
const PharmaStyles = makeStyles((theme) => ({
  mayoIcon: {
    display: 'flex',
    justifyContent: 'center',
  },
  box2: {
    background: '#FAFBFC',
    borderRadius: '2px',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'rgba(20, 221, 224, 1)',
    boxSizing: 'border-box',
    marginTop: '50px',
    paddingTop: '60px',
    ['@media (max-width:780px)']: {
      marginTop: '48px',
      paddingTop: '32px',
    },
  },
  box2part: {
    display: 'flex',
    paddingLeft: '60px',
    paddingRight: '60px',
    gap: '120px',
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      paddingLeft: '16px',
      paddingRight: '16px',
      gap: '0px',
    },
  },
  box2text: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#374554',
    textAlign: 'center',
    paddingRight: '150px',
    paddingLeft: '150px',
    marginTop: '48px',
    marginBottom: '24px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      paddingRight: '16px',
      paddingLeft: '16px',
      marginTop: '16px',
      marginBottom: '32px',
    },
  },
  box3subhead: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#1A2530',
    marginTop: '15px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      marginBottom: '8px',
    },
  },
  box3head: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '140%',
    textTransform: 'capitalize',
    marginTop: '8px',
    marginBottom: '12px',
    color: '#1A2530',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  box3desc: {
    fontSize: '20px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },

  box3part1: {
    textAlign: 'center',
    marginBottom: '55px',
    ['@media (max-width:780px)']: {
      marginBottom: '32px',
    },
  },
  box3Image: {
    marginBottom: '30px',
    ['@media (max-width:780px)']: {
      marginBottom: '16px',
    },
  },
  box3part2: {
    display: 'flex',
    gap: '85px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '52px',
    },
  },
  box3: {
    marginTop: '120px',
    paddingLeft: '10px',
    paddingRight: '10px',
    ['@media (max-width:780px)']: {
      marginTop: '48px',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  box3width: {
    paddingLeft: '170px',
    paddingRight: '170px',
    ['@media (max-width:780px)']: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  box3image2: {
    ['@media (max-width:780px)']: {
      width: '300px',
    },
  },
  box4: {
    padding: '96px 100px 50px 120px',
    background: '#FAFBFC',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      marginTop: '38px',
      padding: '32px 16px 32px 16px',
    },
  },
  box4pad1: {
    paddingRight: '100px',
    ['@media (max-width:780px)']: {
      paddingRight: '0px',
    },
  },
  box4pad2: {
    paddingRight: '330px',
    ['@media (max-width:780px)']: {
      paddingRight: '0px',
    },
  },
  box4desc: {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  nameImage: {
    display: 'flex',
    gap: '8px',
  },
  box4row: {
    display: 'flex',
    gap: '32px',
  },
  bo4part3: {
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
    },
  },
  separatorDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
    marginBottom: '32px',
  },
  separator: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    borderRadius: '2px',
    width: '270px',
  },
  box4icons: {
    // width: '12px',
    // height: '12px',
    // paddingTop: '15px',
    ['@media (max-width:780px)']: {
      width: '12px',
    },
    paddingBottom: '7px',
  },
  lastgrid: {
    paddingRight: '50%',
    paddingLeft: '2%',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  aboutHeadText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
    },
  },
  aboutHeadDiv: {
    marginBottom: '16px',
    marginTop: '200px',
    ['@media (max-width:780px)']: {
      marginTop: '30px',
      marginBottom: '8px',
    },
  },
  aboutHead2Div: {
    marginBottom: '16px',
    maxWidth: '737px',
  },
  aboutHead2Text: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  aboutdesc: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  aboutdescDiv: {
    maxWidth: '1141px',
  },
  found: {
    marginTop: '120px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      marginTop: '48px',
    },
  },
  founderText: {
    fontSize: '20px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  imageName: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '150%',
    color: '#2C2C2C',
    marginTop: '16px',
    marginBottom: '7px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginBottom: '0.5px',
    },
  },
  imagedesc: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '200%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },

  founderdev: {
    maxWidth: '601px',
  },
  imageLine: {
    background:
      'linear-gradient(to right, rgba(0, 87, 255, 1), rgba(90, 238, 255, 1),rgba(222, 255, 222, 1))',
    mixBlendMode: 'multiply',
    height: '1px',
    width: '304px',
    marginBottom: '16px',
  },
  imagesrow: {
    marginTop: '48px',
    display: 'flex',
    gap: '115px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
      flexDirection: 'column',
      alignItems: 'baseline',
      gap: '33px',
    },
  },
  offrow: {
    marginTop: '48px',
    display: 'flex',
    gap: '115px',
    alignItems: 'baseline',
    textAlign: 'center',
    marginBottom: '56px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
      flexDirection: 'column',
    },
  },
  mobileimage: {
    ['@media (max-width:780px)']: {
      width: '280px',
    },
  },
  box1: {
    textAlign: 'center',
    marginTop: '150px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
    },
  },
  workBox: {
    height: '150px',
    width: '275px',
  },
  path: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    textTransform: 'capitalize',
    marginTop: '8px',
    marginBottom: '12px',
    color: '#1A2530',
    ['@media (max-width:780px)']: {
      fontSize: '13px',
      marginTop: '48px',
    },
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
}))

export default PharmaStyles
