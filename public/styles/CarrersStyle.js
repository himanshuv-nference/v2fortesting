import { makeStyles } from '@material-ui/core/styles'

const CareersStyle = makeStyles((theme) => ({
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

  headDiv: {
    textAlign: 'center',
    marginTop: '150px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
    },
  },
  head: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  subHead: {
    fontSize: '20px',
    fontWeight: '300',
    lineHeight: '180%',
    color: '#627181',
    width: '600px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      width: '343px',
    },
  },
  subHeadDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  hiringText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#0C67EB',

    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  box2head: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: ' #1A2530',
    marginBottom: '16px',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
      marginBottom: '8px',
      marginTop: '8px',
    },
  },
  box2subHead: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '180%',
    color: ' #1A2530',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  abouthead: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: ' #1A2530',
    marginBottom: '11px',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  email: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: ' #1A2530',
    marginBottom: '16px',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  aboutDiv: {
    marginBottom: '48px',
    ['@media (max-width:780px)']: {
      marginBottom: '32px',
    },
  },
  aboutsubHead: {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '200%',
    color: '#374554',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  box2part1: {
    display: 'flex',
    alignItems: 'center',
    ['@media (max-width:780px)']: {
      flexDirection: 'column',
    },
  },
  box2div: {
    display: 'flex',
    justifyContent: 'center',
  },
  box2: {
    width: '1200px',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#000000',
    padding: '71px 60px 121px 60px',
    marginTop: '96px',
    ['@media (max-width:780px)']: {
      padding: '16px 16px 16px 12px',
      width: '343px',
      marginTop: '48px',
    },
  },
  standingLine: {
    borderRightWidth: '1px',
    borderLeftWidth: '0px',
    borderTopWidth: '0px',
    borderBottomWidth: '0px',

    borderStyle: 'dashed',
    borderColor: '#000000',
    flex: '1',
    width: '0px',
    // transform: 'rotate(90deg)',
    height: '365px',
    marginLeft: '51px',
    marginRight: '60px',
  },
  line: {
    borderRightWidth: '1px',
    borderLeftWidth: '1px',
    borderTopWidth: '0px',
    borderBottomWidth: '1px',
    width: '311px',
    borderStyle: 'dashed',
    borderColor: '#000000',
    marginTop: '34px',
    marginBottom: '30px',
  },
  locationsubText: {
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#627181',
    marginTop: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginBottom: '8px',
      marginTop: '8px',
    },
  },
  locationWidth: {
    width: '1200px',
    ['@media (max-width:780px)']: {
      width: '290px',
    },
  },
  locationDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  offrow: {
    marginTop: '48px',
    display: 'flex',
    gap: '50px',
    alignItems: 'baseline',
    textAlign: 'center',
    marginBottom: '56px',
    ['@media (max-width:780px)']: {
      marginTop: '32px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  linkText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    textDecoration: 'underline',
    ['@media (max-width:780px)']: {
      fontSize: '14px',
    },
  },
  linkDiv: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '32px',
    gap: '9px',
    width: 'max-content',
    ['@media (max-width:780px)']: {
      // fontSize: '16px',
      // marginBottom: '8px',
      gap: '4px',

      marginTop: '8px',
    },
  },
  link: {
    textDecoration: 'none',
  },
}))

export default CareersStyle
