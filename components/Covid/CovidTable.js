import React from 'react'
import CovidStyles from '../../public/styles/CovidpageStyles'
import { Table, Typography as T } from 'nferx-core-ui'

function CovidTable(props) {
  const { appDetail } = props
  const style = CovidStyles()
  const app = appDetail.filter((x) => x.data.app_name == 'Adverse Events')
  console.log('sex', app)
  return (
    <div>
      <T variant={'body3'} className={style.tableHead}>
        {app[0].data.app_name}
      </T>
      <T variant={'h5'}>{app[0].data.title}</T>
      <T variant={'body1'} className={style.abstract}>
        {app[0].data.abstract}
      </T>
      <T className={style.table}>Table will be here</T>

      <T variant={'body3'} className={style.factHead}>
        FACTS derived from {app[0].data.app_name} app
      </T>
      <div className={style.factBox}>
        <T variant={'body1'} className={style.factText}>
          {app[0].data.fact1}
        </T>
      </div>
      <div className={style.factBox}>
        <T variant={'body1'} className={style.factText}>
          {app[0].data.fact2}
        </T>
      </div>
    </div>
  )
}

export default CovidTable
