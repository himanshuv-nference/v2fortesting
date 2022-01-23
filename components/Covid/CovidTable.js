import React, { useEffect, useState } from 'react'
import CovidStyles from '../../public/styles/CovidpageStyles'
import {
  ChipFilter,
  ConfoundersTable,
  LocalStatePaginationTable,
  Table,
  Typography as T,
  ListItem,
  ChipFilterSelect,
} from 'nferx-core-ui'
import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'key7uNhgnqbPDr8r3' }).base(
  'appkHmFRhm82m0IuK',
)
const filterBase = new Airtable({ apiKey: 'key7uNhgnqbPDr8r3' }).base(
  'apph6X9ZP85jjFsDW',
)

const columnConfig = [
  {
    id: 'ae',
    header: {
      name: <T variant={'caption'}>Adverse Event</T>,
    },
    widthWeight: 5,
  },
  {
    id: 'JANSSEN',
    header: {
      name: <T variant={'caption'}>PRR</T>,
    },
    style: {
      backgroundColor: 'rgba(77, 216, 255, 0.3)',
    },
  },
  {
    id: 'report_count_JANSSEN',
    header: {
      name: <T variant={'caption'}>Report Co.</T>,
    },
    style: {
      backgroundColor: 'rgba(77, 216, 255, 0.3)',
    },
  },
  {
    id: 'MODERNA',
    header: {
      name: <T variant={'caption'}>PRR</T>,
    },
    style: {
      backgroundColor: 'rgba(78, 210, 175, 0.3)',
    },
  },
  {
    id: 'report_count_MODERNA',
    header: {
      name: <T variant={'caption'}>Report Co.</T>,
    },
    style: {
      backgroundColor: 'rgba(78, 210, 175, 0.3)',
    },
  },
  {
    id: 'PFIZER BIONTECH',
    header: {
      name: <T variant={'caption'}>PRR</T>,
    },
    style: {
      backgroundColor: 'rgba(12, 103, 235, 0.3)',
    },
  },
  {
    id: 'report_count_PFIZER BIONTECH',
    header: {
      name: <T variant={'caption'}>Report Co.</T>,
    },
    style: {
      backgroundColor: 'rgba(12, 103, 235, 0.3)',
    },
  },
]
const defaultValue = null

function CovidTableHeader(props) {
  const { gender, setGender } = props
  const style = CovidStyles()
  return (
    <div>
      <T variant={'h4'}>Assess the safety profile of COVID-19 vaccines</T>
      <div className={style.filterDiv}>
        <div>
          <div className={style.vaccineDIv}>
            <T variant={'body3'}>FOR JANSSEN COVID VACCINE</T>
            <div className={style.janssen} />
          </div>
          <div className={style.vaccineDIv}>
            <T variant={'body3'}>FOR MODERNA COVID VACCINE</T>
            <div className={style.moderna} />
          </div>
          <div className={style.vaccineDIv}>
            <T variant={'body3'}>FOR PFIZER COVID VACCINE</T>
            <div className={style.pfizer} />
          </div>
        </div>
        <div>
          <ChipFilterSelect
            label={'Gender'}
            value={gender}
            onChange={setGender}
            isDefault={gender === defaultValue}
            onDelete={() => setGender(defaultValue)}
          >
            <ListItem key={'MALE'} id={'MALE'} text={'Male'} />
            <ListItem key={'FEMALE'} id={'FEMALE'} text={'Female'} />
            <ListItem key={'UNKNOWN'} id={'UNKNOWN'} text={'Unknown'} />
          </ChipFilterSelect>
        </div>
      </div>
    </div>
  )
}

function CovidTable(props) {
  const { appDetail } = props
  const { selected } = props
  const style = CovidStyles()
  const [records, setRecord] = useState([])
  const [gender, setGender] = useState(defaultValue)

  const app = appDetail.filter((x) => x.data.app_name === selected)
  useEffect(() => {
    if (gender) {
      filterBase(`${gender}_2020-12_2021-11`)
        .select({ view: 'Grid view' })
        .eachPage((records, fetchNextPage) => {
          setRecord(records)
          fetchNextPage()
        })
    }
  }, [gender])
  useEffect(() => {
    base('Imported table 3')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setRecord(records)
        fetchNextPage()
      })
  }, [])
  let fields = []
  records.map((record) => {
    fields.push(record.fields)
  })
  console.log('gender', gender)

  if (app[0].data.title) {
    return (
      <div>
        <T variant={'body3'} className={style.tableHead}>
          {app[0].data.app_name}
        </T>
        <T variant={'h5'}>{app[0].data.title}</T>
        <T variant={'body1'} className={style.abstract}>
          {app[0].data.abstract}
        </T>
        {records.length ? (
          <LocalStatePaginationTable
            title={<CovidTableHeader gender={gender} setGender={setGender} />}
            data={fields}
            columns={columnConfig}
            pageInfo={{ pageSize: 10 }}
            disableFixedHeader
          />
        ) : (
          <div />
        )}
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
  } else {
    return (
      <div>
        <h1>No data found for this app</h1>
      </div>
    )
  }
}

export default CovidTable
