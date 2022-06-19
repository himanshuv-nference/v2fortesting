import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import cx from 'clsx'

const useStyles = makeStyles((theme) => {
  return {
    dark: {
      color: '#FFF',
      backgroundColor: theme.palette.primary.main,
    },
    secondary: {
      backgroundColor: '#FFF1EE'
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '100%',
      minWidth: '100%',
    },
    grey: {
      backgroundColor: theme.palette.background.default,
    },
    inner: {
      flex: 1,
      padding: [theme.pad.xl, theme.pad.md],
      width: '100%',
      maxWidth: theme.sectionWidth.md,

      [theme.breakpoints.down('sm')]: {
        padding: [theme.pad.md, theme.pad.sm],
      },
    },
    lg: {
      maxWidth: theme.sectionWidth.lg,
    },
    xl: {
      maxWidth: theme.sectionWidth.xl,
    },
    sm: {
      maxWidth: theme.sectionWidth.sm,
    },
  }
})

function Section(props) {
  const {children, bg, secondary, className, size, component: Component, dark} = props
  const classes = useStyles(props)

  const section = (
    <Component
      className={cx(classes.root, className, {
        [classes.grey]: bg === 'grey',
        [classes.dark]: dark,
        [classes.secondary]: secondary,
      })}
    >
      <div
        className={cx(classes.inner, {
          [classes.lg]: size === 'lg',
          [classes.xl]: size === 'xl',
          [classes.sm]: size === 'sm',
        })}
      >
        {children}
      </div>
    </Component>
  )

  return section
  // return dark ? <DarkThemeProvider>{section}</DarkThemeProvider> : section
}

Section.defaultProps = {
  component: 'section',
}

export default Section
