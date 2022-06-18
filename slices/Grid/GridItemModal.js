import React from 'react'
import Image from 'next/image'
import NferxModal from '../../components/NferxModal/NferxModal'
import { PrismicRichText } from '@prismicio/react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  image: {
    borderRadius: theme.borderRadius,
  },
  description: {
    color: theme.typography.colorLight,
    whiteSpace: 'pre-wrap',
  },
  title: {
    marginBottom: theme.pad.xs,
  },
  textContainer: {
    marginLeft: theme.pad.md,
    flex: 1,

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: theme.pad.sm,
    },
  },
  imgContainer: {
    flexShrink: 0,
  },
}))

const GridItem = ({ item, isOpen, onClose }) => {
  const classes = useStyles()

  return (
    <NferxModal
      open={isOpen}
      onClose={onClose}
      contentPad
      title={
        <div className={classes.modalHeader}>
          {item.photo?.url && (
            <div className={classes.imgContainer}>
              <Image
                className={classes.image}
                src={item.photo?.url}
                alt={item.photo?.alt}
                width={200}
                height={160}
              />
            </div>
          )}
          <div className={classes.textContainer}>
            <PrismicRichText
              field={item.title}
              components={{
                heading5: ({ children, key }) => (
                  <Typography
                    variant={'h5'}
                    key={key}
                    className={classes.title}
                  >
                    {children}
                  </Typography>
                ),
              }}
            />
            <PrismicRichText
              field={item.description}
              components={{
                paragraph: ({ children, key }) => (
                  <Typography
                    variant={'body1'}
                    key={key}
                    className={classes.description}
                  >
                    {children}
                  </Typography>
                ),
              }}
            />
          </div>
        </div>
      }
    >
      {item.expandedDescription ? (
        <PrismicRichText field={item.expandedDescription} />
      ) : (
        <Typography>Coming soon!</Typography>
      )}
    </NferxModal>
  )
}

export default GridItem
