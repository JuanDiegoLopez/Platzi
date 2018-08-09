<template lang='pug'>
  main
    section.section
      nav.nav
        .field.has-addons
          input.input.is-large(
            type='text',
            placeholder='Buscar canciones',
            v-model='searchQuery',
            @keyup.enter='search')
          a.button.is-info.is-large(@click='search') Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for='t in tracks')
            pm-track(:track='t', :class="{'is-active': t.id === selectedTrack }", @select='setSelectedTrack')

</template>

<script>
  import trackService from '~/plugins/track'

  import PmTrack from '~/components/track.vue'

  export default {
    name: 'app',
    components: { PmTrack },
    data () {
      return {
        searchQuery: '',
        tracks: [],
        selectedTrack: '',
        total: 0
      }
    },
    methods: {
      search () {
        if (!this.searchQuery) { return }
        trackService.search(this.searchQuery)
          .then(res => {
            this.total = res.tracks.total
            this.tracks = res.tracks.items
          })
      },
      setSelectedTrack (id) {
        this.selectedTrack = id
      }
    },
    computed: {
      searchMessage () {
        return `Encontrados: ${this.tracks.length}`
      }
    }
  }
</script>

<style lang="scss">
  .is-active{
    border: 3px solid #23d160;
  }
</style>
