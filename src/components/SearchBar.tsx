import { GoSearch } from 'react-icons/go'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <div className='absolute top-0 left-0 flex'></div>
      <GoSearch className='absolute top-[21px] left-[24px] fill-gray-500 text-[24px]' />
      <input
        className='h-8 w-full max-w-[650px] rounded-[36px] border border-gray-300 px-8 py-[2px] text-xl text-gray-900 md:w-[650px]'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Start your search here'
        value={query}
      />
    </form>
  )
}

export default SearchBar
