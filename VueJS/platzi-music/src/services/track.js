import platziMusicService from './platzi-music'
import 'babel-polyfill'
const trackService = {}

trackService.search = async function (q) {
  const type = 'track'
  const response = await platziMusicService.get('/search', {
    params: { q, type }
  })
  return response.data
}

trackService.getById = async function (id) {
  const response = await platziMusicService.get(`/tracks/${id}`)
  return response.data
}

export default trackService
