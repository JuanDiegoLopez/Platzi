<template lang='pug'>
  main
    transition(name='move')
      pm-notification(v-show='showNotification', :results='total')
    
    transition(name='move')
      pm-loader(v-show='isLoading')
    
    section.section(v-show='!isLoading')
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
            pm-track(v-blur='t.preview_url', :track='t', :class="{'is-active': t.id === selectedTrack }", @select='setSelectedTrack')

</template>

<script>
  import 'babel-polyfill'
  import trackService from '@/services/track'

  import PmTrack from '@/components/track.vue'
  import PmLoader from '@/components/shared/loader.vue'
  import PmNotification from '@/components/shared/notification.vue'

  export default {
    name: 'app',
    components: {
      PmTrack,
      PmLoader,
      PmNotification
    },
    data () {
      return {
        searchQuery: '',
        tracks: [],
        isLoading: false,
        showNotification: false,
        selectedTrack: '',
        total: 0
      }
    },
    methods: {
      async search () {
        if (!this.searchQuery) { return }
        this.isLoading = true

        const response = await trackService.search(this.searchQuery)
        this.tracks = response.tracks.items
        this.total = response.tracks.total

        this.showNotification = true
        this.isLoading = false
      },
      setSelectedTrack (id) {
        this.selectedTrack = id
      }
    },
    computed: {
      searchMessage () {
        return `Encontrados: ${this.tracks.length}`
      }
    },
    watch: {
      showNotification () {
        if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false
          }, 4000)
        }
      }
    }
  }
</script>

<style lang="scss">
  .is-active{
    border: 3px solid #23d160;
  }
</style>
