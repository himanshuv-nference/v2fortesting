import { makeStyles } from '@material-ui/styles'

const Medicalstyles = makeStyles((theme) => ({
  body: {
    marginLeft: '8.43%',
    marginRight: '8.43%',
    ['@media (max-width:780px)']: {
      marginRight: '16px',
      marginLeft: '16px',
    },
    ['@media (min-width:2000px)']: {
      // width: '1200px',
      marginLeft: '1200px',
      marginRight: '1200px',
    },
  },
  desktop: {
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
  box4body: {
    marginLeft: '5%',
    marginRight: '5%',
    ['@media (max-width:780px)']: {
      marginRight: '16px',
      marginLeft: '16px',
    },
  },
  Tophead: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    marginTop: '15px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '25px',
      marginBottom: '8px',
    },
  },
  box1: {
    textAlign: 'center',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
    },
  },
  TopSub: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    paddingLeft: '170px',
    paddingRight: '170px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  box2Head: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
    },
  },
  box2Subhead: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    marginTop: '16px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  box2desc: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  box2: {
    display: 'flex',
    gap: '111px',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      marginTop: '50px',
      gap: '45px',
    },
  },
  box2image1: {
    height: '404px',
    ['@media (max-width:780px)']: {
      display: 'none',
    },
  },
  box3: {
    display: 'flex',
    gap: '62px',
    ['@media (max-width:780px)']: {
      gap: '16px',
      flexDirection: 'column',
    },
  },
  box3image1: {
    height: '80px',
    ['@media (max-width:780px)']: {
      height: '54px',
      width: '63px',
    },
  },
  box3image2: {
    paddingTop: '50px',
    ['@media (max-width:780px)']: {
      paddingTop: '0px',

      height: 'auto',
      width: 'auto',
    },
  },
  box3head: {
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '48px',
    color: '#1A2530',
    marginTop: '16px',
    marginBottom: '8px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  box3subhead: {
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '140%',
    color: '#627181',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
    },
  },
  box3line: {
    background:
      'linear-gradient(to right, rgba(56, 232, 169, 1), rgba(4, 185, 165, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  box4line: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(75, 90, 255, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '34px',
    borderRadius: '20px',
    ['@media (max-width:780px)']: {
      marginBottom: '19px',
    },
  },
  box3desc: {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '200%',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  box3readmore: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '140%',
    textDecorationLine: 'underline',
    marginTop: '8px',
    color: '#1A2530',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  separator: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#627181',
    boxSizing: 'border-box',
    borderRadius: '2px',
    width: '343px',
  },
  separatorDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '95px',
    marginBottom: '95px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
      marginBottom: '32px',
    },
  },
  box4: {
    background: '#FAFBFC',
    borderRadius: '1px',
    padding: '60px 60px 28px 60px',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      padding: '32px 16px 32px 16px',
      marginTop: '32px',
    },
  },
  box4image1: {
    ['@media (max-width:780px)']: {
      width: '80px',
      height: '46px',
    },
  },
  pathdiv: {
    display: 'flex',
    gap: '10px',
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
    },
  },
  box4part2: {
    display: 'flex',
    gap: '117px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '16px',
    },
  },
  pathImage: {
    // width: '20px',
    // height: '20px',
    // paddingTop: '10px',
  },
  box5: {
    display: 'flex',
    gap: '62px',
    marginTop: '100px',
    ['@media (max-width:780px)']: {
      gap: '16px',
      flexDirection: 'column',
      marginTop: '32px',
    },
  },
  box5image2: {
    width: '480px',
    height: '360px',
    paddingTop: '100px',
    ['@media (max-width:780px)']: {
      width: 'auto',
      height: 'auto',
      paddingTop: '0px',
    },
  },
  box5line: {
    background:
      'linear-gradient(to right, rgba(56, 232, 169, 1), rgba(255, 63, 97, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  box7line: {
    background:
      'linear-gradient(to right, rgba(36, 138, 229, 1), rgba(90, 238, 255, 1),rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  box8line: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  box9line: {
    background:
      'linear-gradient(to right, rgba(199, 253, 228, 1), rgba(20, 221, 224, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    marginBottom: '16px',

    borderRadius: '20px',
  },
  box5image1: {
    ['@media (max-width:780px)']: {
      width: '54px',
      height: '54px',
    },
  },
  box6: {
    display: 'flex',
    gap: '62px',
    marginTop: '100px',
    background: '#FAFBFC',
    borderRadius: '1px',
    padding: '60px 44px 60px 44px',
    marginBottom: '100px',
    ['@media (max-width:780px)']: {
      gap: '16px',
      flexDirection: 'column-reverse',
      padding: '8px',
      marginTop: '32px',
      marginBottom: '32px',
    },
  },
  box7part2: {
    display: 'flex',
    gap: '85px',
  },
  box8desc: {
    width: '840px',
    ['@media (max-width:780px)']: {
      width: 'auto',
    },
  },
  box9part2: {
    display: 'flex',
    marginTop: '60px',
    gap: '60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      marginTop: '32px',
    },
  },
  box9image2: {
    width: '72px',
    height: '72px',
  },
  productcontainer2: {
    display: 'flex',
    gap: '42px',
    marginTop: '75px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '32px',
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
  websitetext: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#1A2530',
    marginTop: '8px',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
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
  ncongLine: {
    background:
      'linear-gradient(to right, rgba(20, 221, 224, 1), rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '4px',
    width: '40px',
    marginTop: '16px',
    borderRadius: '20px',
  },
  box10part1: {
    display: 'flex',
    gap: '85px',
    marginTop: '150px',
    marginBottom: '90px',
    ['@media (max-width:780px)']: {
      marginTop: '0px',
      marginBottom: '32px',
    },
  },
  boximage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
    },
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
    marginBottom: '48px',
  },
  mobileSLider: {
    ['@media (max-width:780px)']: {
      marginBottom: '48px',
    },
  },
}))

export default Medicalstyles
