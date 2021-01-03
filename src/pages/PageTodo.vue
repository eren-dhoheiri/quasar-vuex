/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-parsing-error */
<template>
  <q-page class="q-pa-md" padding>
    <q-list bordered separator>
      <todo v-for="(task, key) in tasks"
        :key="key" :task="task" :id="key"></todo>
    </q-list>

  </q-page>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      tasks: 'todoList/tasks'
    })
  },
  methods: {
    ...mapActions(['todoList/fetchTasks'])
  },
  mounted () {
    this['todoList/fetchTasks']()
  },
  components: {
    todo: require('components/Todo.vue').default
  }
}
</script>
