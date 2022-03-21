import React from 'react'
import JssProvider from 'nferx-core-ui/src/providers/JssProvider'
import ThemeProvider from 'nferx-core-ui/src/providers/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/styles'
import { QueryProvider } from '../components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      html: {
        width: '100%',
      },
      body: {
        width: '100%',
        backgroundColor: '#FFF',
      },
    },
  }
})

function MyApp(props) {
  const { Component, pageProps } = props
  const classes = useStyles()
  const router = useRouter()
  const showHeader = router.pathname === '/covid' ? false : true

  React.useEffect(() => {
    // We don't need the static css any more once we have launched our application.
    const ssStyles = document.getElementById('jss-server-side')
    if (ssStyles) {
      ssStyles.parentNode.removeChild(ssStyles)
    }
  }, [])
  if (showHeader) {
    return (
      <JssProvider>
        <QueryProvider>
          <ThemeProvider>
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </QueryProvider>
      </JssProvider>
    )
  } else {
    return (
      <JssProvider>
        <QueryProvider>
          <ThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryProvider>
      </JssProvider>
    )
  }
}

export default MyApp