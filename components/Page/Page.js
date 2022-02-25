import React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textTransform: 'none'
  },
  mainContent: {
    padding: '24px'
  }
}));

function Page(props) {
  const { children } = props
  const { title, description } = props
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Nference
        </Typography>
        <Button className={classes.button}>About Us</Button>
        <Button className={classes.button}>For Pharma</Button>
        <Button className={classes.button}>For Medical Centers</Button>
        <Button className={classes.button}>Publications</Button>
        <Button className={classes.button}>Media</Button>
        <Button className={classes.button}>Careers</Button>
        <Button className={classes.button}>Blog</Button>
        <Button className={classes.button}>Contact Us</Button>
      </Toolbar>
    </AppBar>
      <div className={classes.mainContent}>
      <NextSeo title={title} description={description} />
      {children}
      </div>
    <div style={{ marginLeft: '20px'}}>
        <Typography variant="h6" className={classes.title}>
          Nference
        </Typography>
        <div>About Us</div>
        <div>For Pharma</div>
        <div>For Medical Centers</div>
        <div>Publications</div>
        <div>Media</div>
        <div>Careers</div>
        <div>Blog</div>
        <div>Contact Us</div>
    </div>
    </div>
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Page
