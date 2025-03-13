export const API_URLS = {
  stackoverflow: {
    url: 'https://api.stackexchange.com/2.3/questions?order=desc&pagesize=50&sort=activity&site=stackoverflow&tagged=',
    title: 'Stack Overflow',
  },
  wikipedia: {
    url: 'https://en.wikipedia.org/w/api.php?origin=*&action=query&gsrlimit=50&format=json&prop=pageimages|titles|extracts|info&generator=search&gsrsearch=',
    title: 'Wikipedia',
  },
  giphy: {
    url: 'https://api.giphy.com/v1/gifs/search?api_key=oYJM7AKfQS5F0rJTm0a7TUAGWi7o4JGL&limit=LIMIT&offset=OFFSET&rating=RATING&lang=LANG&q=',
    title: 'Giphy',
  },
}

export type SourceType = keyof typeof API_URLS
