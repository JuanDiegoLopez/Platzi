<template lang="pug">
  .container(v-if='track && track.id')
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src='track.album.images[0].url')

      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for='(v, k) in track')
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
</template>

<script>
import { mapState } from 'vuex'

export default {

  head () {
    return {
      title: this.track.name
    }
  },

  computed: {
    ...mapState(['track']),
  },

 fetch ({ store, params }) {
    const id = params.id
    if (!store.state.track || !store.state.track.id || store.state.track.id !== id) {
      return store.dispatch('getTrackById', { id })
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-bar {
    margin-top: 20px;
  }
</style>