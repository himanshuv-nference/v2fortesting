import React from 'react'
import { useRouter } from 'next/router'

const QueryContext = React.createContext({})

export const useQuery = () => {
  return React.useContext(QueryContext)
}

function getQS(queryObj) {
  const urlParams = new URLSearchParams()

  for (const key of Object.keys(queryObj)) {
    const value = queryObj[key]
    urlParams.set(key, value)
  }

  return urlParams.toString()
}

function getMap(qs) {
  const urlParams = new URLSearchParams(qs)
  const ret = {}
  for (const key of Array.from(urlParams.keys())) {
    ret[key] = urlParams.get(key)
  }
  return ret
}

function QueryProvider(props) {
  const { defaultQuery, children } = props
  const router = useRouter()

  const qs = router.asPath.split('?')[1] || ''
  const query = {
    ...defaultQuery,
    ...getMap(qs),
  }

  const updateQuery = (update, method) => {
    const nextQuery = { ...query, ...update }
    if (typeof window === 'undefined') {
      return
    }
    const base = window.location.href.split('?')[0]
    const url = `${base}?${getQS(nextQuery)}`
    router[method](url, undefined, { scroll: false })
  }

  const replaceQueryParam = (update) => {
    updateQuery(update, 'replace')
  }

  const pushQueryParam = (update) => {
    updateQuery(update, 'push')
  }

  return (
    <QueryContext.Provider value={{ query, replaceQueryParam, pushQueryParam }}>
      {children}
    </QueryContext.Provider>
  )
}

export default QueryProvider
