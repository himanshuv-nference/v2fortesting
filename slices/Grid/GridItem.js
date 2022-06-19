import React from 'react'
import Image from 'next/image'
import { ButtonBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GridItemModal from './GridItemModal'
import cx from 'clsx'
import { PrismicRichText } from '@prismicio/react'

const useStyles = makeStyles((theme) => ({
  fancyBorder: {
    width: '100%',
    height: 1,
    background:
      'linear-gradient(to right, rgba(0, 87, 255, 1), rgba(90, 238, 255, 1),rgba(222, 255, 222, 1))',
    marginBottom: theme.pad.sm,
  },
  centerText: {
    textAlign: 'center !important',
    alignItems: 'center !important',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  title: {
    marginTop: theme.pad.sm,
    marginBottom: theme.pad.xs,
  },
  description: {
    marginBottom: '0 !important',
    color: theme.typography.colorLight,
  },
}))

const GridItem = ({ item, slice, hasExpand }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState(false)

  const rootClass = cx(classes.gridItem, {
    [classes.centerText]: slice.primary.centerText,
  })

  const contents = (
    <>
      {slice.primary.border && <div className={classes.fancyBorder} />}
      {item.photo?.url && (
        <Image
          src={item.photo?.url}
          alt={item.photo?.alt}
          width={300}
          height={240}
        />
      )}
      <PrismicRichText
        field={item.title}
        components={{
          heading5: ({ children, key }) => (
            <Typography variant={'h5'} key={key} className={classes.title}>
              {children}
            </Typography>
          ),
        }}
      />
      <PrismicRichText
        field={item.description}
        components={{
          paragraph: ({ children, key }) => (
            <Typography variant={'body1'} key={key} className={classes.description}>
              {children}
            </Typography>
          ),
        }}
      />
    </>
  )

  return hasExpand ? (
    <ButtonBase className={rootClass} onClick={() => setIsOpen(true)}>
      <GridItemModal
        item={item}
        slice={slice}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      {contents}
    </ButtonBase>
  ) : (
    <div className={rootClass}>{contents}</div>
  )
}

export default GridItem
