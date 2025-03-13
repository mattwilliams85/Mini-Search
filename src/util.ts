import { LinkItemType } from './types/main'
import { API_URLS } from './constants/api'
import { format, formatDistanceToNow, parseISO, parse } from 'date-fns'

function getHigherResThumbnail(url: string) {
  if (!url) return '/images/wikipedia.webp'
  return url.replace(/\/\d+px-/, `/${500}px-`)
}

function getGiphyDate(timestamp: string) {
  if (!timestamp) return null
  return formatDistanceToNow(
    parse(timestamp, 'yyyy-MM-dd HH:mm:ss', new Date())
  )
}

export const normalize = (data: any, source: keyof typeof API_URLS) => {
  if (!data) return []

  let items
  switch (source) {
    case 'stackoverflow':
      items = data.items
      break
    case 'wikipedia':
      items = Object.values(data.query.pages)
      break
    case 'giphy':
      items = data.data
      break
    default:
      items = []
  }

  return items.map((item: any): LinkItemType => {
    switch (source) {
      case 'stackoverflow':
        return {
          id: item.question_id.toString(),
          title: item.title,
          url: item.link,
          source: 'Stack Overflow',
          image: '/images/stackoverflow.webp',
          date: format(new Date(item.creation_date * 1000), 'MMM d, yyyy'),
        }
      case 'giphy':
        return {
          id: item.id,
          title: item.title,
          url: item.url,
          source: 'Giphy',
          image: item.images?.preview_gif?.url || '/images/giphy.webp',
          date: `Last trending ${getGiphyDate(item.import_datetime)} ago`,
        }
      case 'wikipedia':
        return {
          id: item.pageid.toString(),
          title: item.title,
          url: `https://en.wikipedia.org/?curid=${item.pageid}`,
          source: 'Wikipedia',
          image: getHigherResThumbnail(item?.thumbnail?.source),
          date: `Last edit on ${format(parseISO(item.touched), 'MMM d, yyyy')}`,
        }
    }
  })
}
