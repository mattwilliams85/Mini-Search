import { LinkItemType } from '../types/main.ts'
import { TbWorldSearch } from 'react-icons/tb'
import LoadingSpinner from './LoadingSpinner.tsx'

interface ListLoaderProps {
  loading: boolean
  query: string
  results: LinkItemType[]
  children: React.ReactNode
}

const ListLoader = ({ loading, query, results, children }: ListLoaderProps) => {
  return (
    <div className='py-3'>
      {!loading && !query && (
        <div className='flex justify-center py-3 text-center'>
          <div>
            <div className='mx-auto h-4 w-4 justify-center rounded-full bg-blue-100 p-8'>
              <TbWorldSearch className='relative top-[-30px] left-[-30px] mb-2 stroke-blue-800 text-6xl opacity-70' />
            </div>
            <h2 className='py-1 text-2xl font-medium'>Discover new content</h2>
            <p className='text-gray-500'>
              Search by topic, keyword, or tag to find exactly what you need.
            </p>
          </div>
        </div>
      )}

      {!loading && query && (
        <p className='font-bold'>{results.length} search results </p>
      )}
      {loading ? <LoadingSpinner /> : children}
    </div>
  )
}

export default ListLoader
