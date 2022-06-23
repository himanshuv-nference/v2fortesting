import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Section from '../../components/Section/Section'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  p: {
    color: theme.typography.color,
    '& + &': {
      marginTop: theme.pad.md,
    },
  },
}))

const RichText = ({ slice }) => {
  const classes = useStyles()

  return (
    <Section>
      {slice?.items?.map((item) => (
        <PrismicRichText
          field={item.richText}
          className={classes.p}
          components={{
            paragraph: ({ children, key }) => (
              <Typography variant={'body1'} key={key} className={classes.p}>
                {children}
              </Typography>
            ),
            listItem: ({ children, key }) => (
              <Typography variant={'body1'} component={'li'} key={key} className={classes.p}>
                {children}
              </Typography>
            ),
            oListItem: ({ children, key }) => (
              <Typography variant={'body1'} key={key} component={'ol'} className={classes.p}>
                {children}
              </Typography>
            ),
          }}
        />
      ))}
    </Section>
  )
}

export default RichText
