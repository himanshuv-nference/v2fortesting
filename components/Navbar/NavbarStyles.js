import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  topline: {
    background:
      'linear-gradient(to right, rgba(0, 87, 255, 1), rgba(90, 238, 255, 1),rgba(222, 255, 222, 1),rgba(56, 232, 169, 1))',
    mixBlendMode: 'multiply',
    height: '8px',
  },
  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: theme.sectionWidth.xl,
  },
  navItems: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    display: 'flex',
    flexDirection: 'row',
    gap: theme.pad.md,
    alignItems: 'center',
  },
  mobile: {
    ['@media (max-width:780px)']: {
      display: 'block',
    },
    display: 'none',
  },

  body: {
    padding: [theme.pad.sm, theme.pad.lg],
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: theme.pad.sm,
    },
  },
  selected: {
    background: '#1A2530',
    fontSize: theme.typography.fontSizeLg,
    borderRadius: 500,
    color: 'white',
    padding: [theme.pad.xs * 1.5, theme.pad.sm],
    cursor: 'pointer',

    ['@media (max-width:780px)']: {
      width: 'max-content',
      marginLeft: '16px',
      marginTop: '32px',
      marginBottom: '50px',
    },
  },
  top: {
    margin: '-8px',
  },
  link: {
    textDecoration: 'none',
    color: theme.typography.color,
    fontSize: theme.typography.fontSizeLg,
  },
  activeLink: {
    textDecoration: 'underline',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginLeft: '20px',
  },
  mobileLogo: {
    marginLeft: '16px',
  },
  logoDiv: {
    display: 'flex',
    gap: '55%',
    marginBottom: '15px',
    marginTop: '15px',
    alignItems: 'baseline',
  },
  line: {
    marginBottom: '17px',
    borderWidth: '2px',
    borderBottomStyle: 'solid',
    borderColor: '#E4EBF2',
  },
  ///form css from here
  // formcontanier: {
  //   background: '#FAFBFC',
  //   padding: '54px 48px 55px 48px',
  //   ['@media (max-width:780px)']: {
  //     padding: '16px',
  //   },
  // },
  contactusText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '150%',
    color: '#2C2C2C',
    marginBottom: '16px',
  },
  formbox: {
    // display: 'flex',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '1px',
    // gap: '60px',
    // padding: '102px 60px 80px 60px',
    ['@media (max-width:780px)']: {
      // flexDirection: 'column',
      // gap: '0px',
      // padding: '16px',
    },
  },
  formboxFlex: {
    display: 'flex',
    padding: '30px 38px 55px 45px',
    gap: '60px',

    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      padding: '16px',
    },
  },
  formhead: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#0057FF',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
    // textAlign: 'center',
    // paddingRight: '180px',
    // paddingLeft: '180px',
    // marginTop: '32px',
  },
  formsub: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#627181',
    // textAlign: 'center',
    // paddingRight: '180px',
    // paddingLeft: '180px',
    marginTop: '16px',
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginTop: '8px',
      marginBottom: '32px',
    },
  },
  nameInput: {
    width: '190px',
    ['@media (max-width:780px)']: {
      width: '110px',
    },
  },
  inputname: {
    display: 'flex',
    gap: '18px',
  },
  inputemail: {
    width: '100%',
  },
  inputemailDiv: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  inputmessage: {
    width: '100%',
    marginBottom: '58px',
  },
  learnoretext: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: '#0057FF',
    textAlign: 'center',
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
    marginTop: '50px',
    ['@media (max-width:780px)']: {
      marginBottom: '28px',
      marginTop: '30px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  modal: {
    margin: 'auto',
    // paddingTop: '13%',
    padding: '38px',
    width: '80% !important',
    ['@media (max-width:780px)']: {
      height: '80%',
      width: '100% !important',
    },
    ['@media (min-width:100000px)']: {
      width: '60% !important',
    },
  },
  iconDiv: {
    textAlign: 'right',
    paddingTop: '25px',
    paddingRight: '23px',
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  companyDiv: {
    marginBottom: '16px',
    marginTop: '12px',
  },
  thankmodal: {
    margin: 'auto',
    // paddingTop: '13%',

    width: '1128px !important',

    ['@media (max-width:780px)']: {
      width: '300px  !important',

      height: '80%',
      padding: '0px',
    },
    ['@media (min-width:100000px)']: {
      width: '60%  !important',
    },
  },
  thankyoupad: {
    padding: '145px 5px 100px 45px',
    ['@media (max-width:780px)']: {
      padding: '10px',
    },
  },
  sticky: {
    position: 'sticky',
    top: '0',
    background: 'white',
    zIndex: 1,
  },
}))

// const useStyle = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// })

export default useStyles
