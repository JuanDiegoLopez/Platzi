<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-success(v-if='results > 0') Resultados encontrados {{ results }}
        .notification.is-danger(v-else) No se encontraron resultados
</template>

<script>
  export default {
    props: {
      results: {
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notification{
    margin: 10px;
  }
</style>
