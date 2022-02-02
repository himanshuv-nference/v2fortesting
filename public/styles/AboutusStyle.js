import { makeStyles } from '@material-ui/styles'
const AboutusStyle = makeStyles((theme) => ({
  headDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  rightDiv: {
    marginLeft: '15px',
  },
  desc: {
    marginTop: '18px',
  },
  iconDiv: {
    display: 'flex',
    justifyContent: 'end',
  },
  cursor: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  err: {
    fontSize: '44px !important',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#2C2C2C',
    marginTop: '30px',
    marginBottom: '30px',
    textAlign: 'center',
    ['@media (max-width:780px)']: {
      fontSize: '25px',
    },
  },
  Leaderimage: {
    width: '304px',
    height: '238px',
  },
}))
export default AboutusStyle
