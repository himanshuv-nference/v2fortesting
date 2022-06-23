import { Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../../components/Section/Section'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.pad.md,
  },
  mission: {
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 16,
    color: theme.typography.color,
  },
  text: {
    fontSize: 20,
    fontWeight: 300,
    maxWidth: 960,
  }
}))

export default function AboutUsContents() {
  const classes = useStyles()

  return (
    <Section size={'xl'}>
      <T className={classes.mission}>Our Mission</T>
      <T variant={'h1'} className={classes.title}>Powering quantum leaps in human health</T>
      <T className={classes.text}>
        The exponential growth of biomedical data, driven by the adoption of
        electronic medical records (EMRs), provides an unprecedented opportunity
        to create transformative technologies and products in healthcare.
        nference partners with medical centers to turn decades of rich and
        predominantly unstructured data captured in EMRs into powerful solutions
        that enable scientists to discover and develop the next-generation of
        personalized diagnostics and treatments for patients worldwide. We
        believe that the greatest opportunity for our generation to elevate
        human health is by developing technology to curate and synthesize the
        world’s biomedical data in order to enable that scientific discovery.
      </T>
    </Section>
  )
}
