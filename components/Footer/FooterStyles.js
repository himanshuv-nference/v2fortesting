import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    marginLeft: '120px',
    marginRight: '120px',
    ['@media (max-width:780px)']: {
      marginLeft: '16px',
      marginRight: '16px',
    },
  },
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
  footerText: {
    display: 'block',
    fontSize: theme.typography.fontSize,
    fontWeight: 'normal',
    color: theme.typography.colorLight,
    textDecoration: 'none',

    '& + &': {
      marginTop: theme.pad.sm,
    },
  },
  menusContainer: {
    display: 'flex',
    gap: theme.pad.xl,
  },
  firstContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footerlogos: {
    '& + &': {
      marginLeft: theme.pad.sm,
    },
  },
  copyrightDesktop: {
    marginTop: theme.pad.xl,
  },
  footerhead: {
    marginBottom: theme.pad.md,
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
  formcontanier: {
    background: '#FAFBFC',
    padding: '60px',
    ['@media (max-width:780px)']: {
      padding: '0px',
    },
  },
  formbox: {
    display: 'flex',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '1px',
    gap: '60px',
    padding: '102px 60px 80px 60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      padding: '16px',
    },
  },
  thankbox: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#0057FF',
    boxSizing: 'border-box',
    borderRadius: '1px',
    gap: '60px',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
      gap: '0px',
      padding: '16px',
    },
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
    marginBottom: '60px',
    ['@media (max-width:780px)']: {
      marginBottom: '28px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },

  inputname: {
    display: 'flex',
    gap: '18px',
  },
  inputemail: {
    width: '100%',
  },
  inputmessage: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '58px',
  },
  widthName: {
    width: '200px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      width: '100px',
    },
  },
  thankmodal: {
    margin: 'auto',
    // paddingTop: '13%',

    width: '1128px',

    ['@media (max-width:780px)']: {
      width: '300px',

      height: '80%',
      padding: '0px',
    },
    ['@media (min-width:100000px)']: {
      width: '60%',
    },
  },
  thankyoupad: {
    padding: '145px 5px 100px 45px',
    ['@media (max-width:780px)']: {
      padding: '10px',
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
  hide: {
    display: 'none',
  },
}))

export default useStyles
