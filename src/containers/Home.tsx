import { useEffect, useState } from 'react'
import { normalize } from '../util.ts'
import { LinkItemType } from '../types/main.ts'
import { API_URLS, SourceType } from '../constants/api'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs.tsx'
import LinkItem from '../components/LinkItem.tsx'
import ListLoader from '../components/ListLoader.tsx'

const Home = () => {
  const [results, setResults] = useState<LinkItemType[]>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [source, setSource] = useState<SourceType>('stackoverflow')

  useEffect(() => {
    if (!query) return

    async function fetchResults() {
      setLoading(true)

      try {
        const response = await fetch(`${API_URLS[source].url}${query}`)
        const data = await response.json()
        setResults(normalize(data, source) || [])
      } catch (error) {
        console.error('Error fetching:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query, source])

  const handleOnSearch = (query: string) => {
    setQuery(query)
  }

  const handleOnTabsChange = (newSource: SourceType) => {
    setSource(newSource)
  }

  return (
    <div>
      <h2 className='mb-2 text-4xl font-bold'>Mini Search</h2>
      <p className='mb-1 text-sm leading-4 text-gray-500'>
        Explore Stackoverflow, Wikipedia, and GIPHY with one search
      </p>
      <Tabs onChange={handleOnTabsChange} />
      <SearchBar onSearch={handleOnSearch} />
      <ListLoader loading={loading} query={query} results={results}>
        <ul className='space-y-2 py-3'>
          {results.map((item) => (
            <LinkItem key={item?.id} item={item} source={source} />
          ))}
        </ul>
      </ListLoader>
    </div>
  )
}

export default Home
