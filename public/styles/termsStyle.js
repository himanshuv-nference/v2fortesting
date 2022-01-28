import { makeStyles } from '@material-ui/styles'

const TermsStyle = makeStyles((theme) => ({
  head: {
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '54px',
    color: '#000000',
    textAlign: 'center',
    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  content: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
    color: '#000000',
    // textAlign: 'center',
    width: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    ['@media (max-width:780px)']: {
      width: '380px',
      fontSize: '16px',
    },
  },
  subHead: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '22px',
    color: '#000000',
    textAlign: 'center',
    marginTop: '41px',
    marginBottom: '18px',
    ['@media (max-width:780px)']: {
      fontSize: '16px',
      marginTop: '20px',
    },
  },
}))

export default TermsStyle
