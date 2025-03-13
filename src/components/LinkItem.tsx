import { SourceType } from '../constants/api'
import { LinkItemType } from '../types/main.ts'
import { v4 as uuidv4 } from 'uuid'

interface LinkItemProps {
  source: SourceType
  item: LinkItemType
}

const LinkItem = ({ item }: LinkItemProps) => {
  return (
    <li key={uuidv4()} className='padding-4 my-2 flex h-15 w-[650px]'>
      <img
        src={item.image}
        alt='Source Icon'
        className='mr-2 inline-block h-11 w-14 min-w-14 rounded object-cover shadow-sm'
      />
      <a href={item?.url} target='_blank' rel='noopener noreferrer'>
        <div>
          <span className='max-w-xl py-1 font-medium'>{item?.title}</span>
          <div className='text-sm text-gray-500'>{item.date}</div>
        </div>
      </a>
    </li>
  )
}

export default LinkItem
