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
  },
  image: {
    borderRadius: theme.borderRadius,
  },
  description: {
    color: theme.typography.colorLight,
  },
  title: {
    marginBottom: theme.pad.xs,
  },
  textContainer: {
    marginLeft: theme.pad.md,
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
            <Image
              className={classes.image}
              src={item.photo?.url}
              alt={item.photo?.alt}
              width={300}
              height={240}
            />
          )}
          <div className={classes.textContainer}>
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
