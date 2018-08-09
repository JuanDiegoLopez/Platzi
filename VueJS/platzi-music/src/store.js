import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },

  getters: {
    trackTitle (state) {
      if (!state.track.name) { return ' ' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },

  actions: {
    async getTrackById (context, payload) {
      const track = await trackService.getById(payload.id)
      context.commit('setTrack', track)
      return track
    }
  }
})

export default store
