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
}))
export default AboutusStyle
