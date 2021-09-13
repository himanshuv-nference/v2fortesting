import React from 'react'
import { Page } from '../components'
import NferxCard from 'nferx-core-ui/src/widgets/NferxCard/NferxCard'

export default function Home() {
  return (
    <Page
      title={'Nference Official Website'}
      description={'Making bio computable'}
    >
      <NferxCard>
      Hello World
      </NferxCard>
    </Page>
  )
}
