import { makeStyles } from '@material-ui/core/styles'

const CovidStyles = makeStyles((theme) => ({
  Tophead: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',
    marginTop: '32px',
    marginBottom: '16px',
    ['@media (max-width:780px)']: {
      fontSize: '12px',
      marginBottom: '8px',
      marginTop: '16px',
    },
  },
  TopSub: {
    fontSize: '44px',
    fontWeight: '300',
    lineHeight: '150%',
    color: '#1A2530',

    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  date: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1A2530',

    ['@media (max-width:780px)']: {
      fontSize: '22px',
    },
  },
  time: {
    paddingLeft: '50px',
  },
  line: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#0661FF',
    width: '77px',
    height: '0px',
    marginTop: '10px',
    marginLeft: '12px',
  },
  lineDiv: {
    display: 'flex',
  },
  circle: {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    background:
      'linear-gradient(90deg, #0057FF 0%, #5AEEFF 58.85%, #DEFFDE 100%);',
    marginTop: '5px',
  },
  standingLine: {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: '#000000',
    flex: '1',
    width: '0px',
  },
  circleDiv: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    gap: '60px',
    marginTop: '52px',
  },
  tagDiv: {
    display: 'flex',
    gap: '8px',
  },
  tag1: {
    background: '#D9E6FF',
    borderRadius: '4px',
    padding: '2px 8px 2px 8px',
    width: 'max-content',
  },
  tag1Text: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '140%',
    color: '#0057FF',
  },
  tag2: {
    background: '#FFD9EC',
    borderRadius: '4px',
    padding: '2px 8px 2px 8px',
    width: 'max-content',
  },
  tag2Text: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '140%',
    color: '#FF3F61',
  },
  titleDiv: {
    display: 'flex',
    marginTop: '16px',
    gap: '16px',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '140%',
    color: '#1A2530',
  },
  desc: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '180%',
    color: '#374554',
    width: '553px',
  },
  linkText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '26px',
    color: '#1A2530',
  },
  linkDiv: {
    display: 'flex',
    gap: '10px',
  },
  linkandimageDiv: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'end',
    gap: '20px',
  },
  cardImage: {
    marginTop: '16px',
  },
  cardContainer: {
    marginBottom: '50px',
  },
  box2date: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '180%',
    color: '#1C2329',
    marginBottom: '10px',
  },
  cardHead: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '140%',
    color: '#1C2329',
    marginBottom: '16px',
    marginTop: '16px',
  },
  carddesc: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '180%',
    color: '#374554',
    marginBottom: '19px',
  },
  box2Image: {
    borderRadius: '4px',
  },
  box2: {
    display: 'flex',
    gap: '50px',
    marginTop: '50px',
    background: '#FAFBFC',
    borderRadius: '2px',
    padding: '45px 60px 50px 60px',
  },
}))
export default CovidStyles
