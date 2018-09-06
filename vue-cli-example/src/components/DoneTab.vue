<template>
  <div class="hello">
    <ul v-for="d in doneTasks">
      <li>{{d.text}}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  name: 'doneTab',
  data () {
    return {
      msg: 'Simple todo app',
      doneTasks: []
    }
  },
  created: function() {
    eventBus.$on('doneTasks', (d) => {
      this.doneTasks = d
    })   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>