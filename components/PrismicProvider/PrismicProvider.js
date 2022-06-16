import { linkResolver, prismicClient } from '../../utils/prismic'
import { PrismicProvider as RawPrismicProvider } from '@prismicio/react'
import { Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  h1: {
    textAlign: 'center',
    marginTop: theme.pad.xl,
    marginBottom: theme.pad.lg,
  },
  h2: {
    marginTop: theme.pad.lg,
    marginBottom: theme.pad.md,
  },
  h3: {
    marginTop: theme.pad.lg,
    marginBottom: theme.pad.md,
  },
  h4: {
    marginTop: theme.pad.lg,
    marginBottom: theme.pad.md,
  },
  h5: {
    marginTop: theme.pad.lg,
    marginBottom: theme.pad.md,
  },
  h6: {
    marginTop: theme.pad.lg,
    marginBottom: theme.pad.md,
  },
  p: {
    '& + &': {
      marginTop: theme.pad.md,
    },
  },
}))

export default function PrismicProvider(props) {
  const classes = useStyles()

  return (
    <RawPrismicProvider
      client={prismicClient}
      richTextComponents={{
        heading1: ({ children, key }) => (
          <Typography variant={'h1'} key={key} className={classes.h1}>
            {children}
          </Typography>
        ),
        heading2: ({ children, key }) => (
          <Typography variant={'h2'} key={key} className={classes.h2}>
            {children}
          </Typography>
        ),
        heading3: ({ children, key }) => (
          <Typography variant={'h3'} key={key} className={classes.h3}>
            {children}
          </Typography>
        ),
        heading4: ({ children, key }) => (
          <Typography variant={'h4'} key={key} className={classes.h4}>
            {children}
          </Typography>
        ),
        heading5: ({ children, key }) => (
          <Typography variant={'h5'} key={key} className={classes.h5}>
            {children}
          </Typography>
        ),
        heading6: ({ children, key }) => (
          <Typography variant={'h6'} key={key} className={classes.h6}>
            {children}
          </Typography>
        ),
        paragraph: ({ children, key }) => (
          <Typography variant={'body1'} key={key} className={classes.p}>
            {children}
          </Typography>
        ),
        // preformatted:
        strong: ({ children, key }) => <strong key={key}>{children}</strong>,
        em: ({ children, key }) => <em key={key}>{children}</em>,
        listItem: ({ children, key }) => (
          <Typography variant={'body1'} component={'li'} key={key}>
            {children}
          </Typography>
        ),
        oListItem: ({ children, key }) => (
          <Typography variant={'body1'} key={key} component={'ol'}>
            {children}
          </Typography>
        ),
        // list:
        // oList:
        // image:
        // embed:
        // hyperlink:
        // label:
        // span:
      }}
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {props.children}
    </RawPrismicProvider>
  )
}
