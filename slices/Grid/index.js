import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Section from '../../components/Section/Section'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'clsx'
import GridItem from './GridItem'

const useStyles = makeStyles((theme) => ({
  text: {
    '& > p': {
      color: theme.typography.colorLight,
      fontSize: 20,
      maxWidth: 600,
      fontWeight: 300,
    },

    marginBottom: theme.pad.lg,
  },
  grid: {
    display: 'grid',
    // gridTemplateColumns: 'repeat(auto-fill, 300px)',
    gap: theme.pad.xl,
  },
  centerText: {
    textAlign: 'center',
  },
}))

const Grid = ({ slice }) => {
  const classes = useStyles()

  const hasExpand = Boolean(
    slice.items?.find((item) => item.expandedDescription?.length > 0),
  )

  return (
    <Section size={'xl'}>
      <div className={classes.text}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div
        className={cx(classes.grid, {
          [classes.centerText]: slice.primary.centerText,
        })}
        style={{
          gridTemplateColumns: `repeat(auto-fill, ${
            slice.primary.columnSize || 300
          }px)`,
        }}
      >
        {slice.items?.map((item) => (
          <GridItem item={item} slice={slice} hasExpand={hasExpand} />
        ))}
      </div>
    </Section>
  )
}

export default Grid
