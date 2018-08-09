<template lang='pug'>
    section.section
      h1.title Tareas de: {{ name }}
      p Horas trabajadas: {{ totalTime }}
      h2.subtitle(v-show='!tasks.length') No hay tareas aun
      .container(v-show='tasks.length')
        h3 Lista de tereas:
        ul
          li(v-for='(t,i) in tasks') 
            span {{ t.title }} - {{ t.time }}
            span(@click='removeTask(i)') ❌
      input.input.is-large(type='text', placeholder='Titulo', v-model='newTask.title')
      input.input.is-large(type='number', placeholder='Horas', v-model='newTask.time')
      button.button.is-info.is-large(@click='addTask') Añadir tarea
      button.button.is-danger.is-large(@click='cancel') Cancelar 
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.tasks = JSON.parse(window.localStorage.getItem('tasks')) || []
    },
    data () {
      return {
        name: 'Juan Diego',
        tasks: [],
        newTask: {
          title: '',
          time: 0
        }
      }
    },
    methods: {
      addTask () {
        if (this.newTask.title !== '' && this.newTask.time !== 0) {
          let taskToAdd = this.newTask
          this.newTask = {
            title: '',
            time: 0
          }
          this.tasks.push(taskToAdd)
          window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
        } else {
          console.log('No hay tarea nueva')
        }
      },
      cancel () {
        this.newTask = {
          title: '',
          time: 0
        }
      },
      removeTask (i) {
        this.tasks.splice(i, 1)
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    computed: {
      totalTime () {
        let totalTime = 0
        for (let i = 0; i < this.tasks.length; i++) {
          totalTime += parseInt(this.tasks[i].time)
        }
        return totalTime
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
