import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import { QueryProvider } from '../components'
import JssProvider from '../components/Styles/JssProvider'
import ThemeProvider from '../components/Styles/ThemeProvider'
import { repositoryName } from '../utils/prismic'
import { PrismicPreview } from '@prismicio/next'
import PrismicProvider from '../components/PrismicProvider/PrismicProvider'

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
  useStyles()

  React.useEffect(() => {
    // We don't need the static css any more once we have launched our application.
    const ssStyles = document.getElementById('jss-server-side')
    if (ssStyles) {
      ssStyles.parentNode.removeChild(ssStyles)
    }
  }, [])

  return (
    <JssProvider>
      <QueryProvider>
        <ThemeProvider>
          <PrismicProvider>
            <PrismicPreview repositoryName={repositoryName}>
              <CssBaseline />
              <Component {...pageProps} />
            </PrismicPreview>
          </PrismicProvider>
        </ThemeProvider>
      </QueryProvider>
    </JssProvider>
  )
}

export default MyApp
