import Vuex from 'vuex'

import trackService from '~/plugins/track'

const store = () => {
  return new Vuex.Store({
    state: {
      track: {}
    },
  
    mutations: {
      setTrack (state, track) {
        state.track = track
      }
    },
  
    actions: {
      getTrackById (context, payload) {
        return trackService.getById(payload.id)
          .then(res => {
            context.commit('setTrack', res)
            return res
          })
      }
    }
  })
}

export default store
