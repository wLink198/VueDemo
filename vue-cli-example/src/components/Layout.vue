<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <p v-bind:class="{ready : currentTab === 'doneTab'}" @click="currentTab = 'todoTab'">Todo list</p>
      </li>
      <li>
        <p v-bind:class="{ready : currentTab === 'todoTab'}" @click="currentTab = 'doneTab'">Done list</p>
      </li>   
    </ul>

    <keep-alive>
      <component
      v-bind:is="currentTab"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import TodoTab from '@/components/TodoTab'
import DoneTab from '@/components/DoneTab'

export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Simple todo app',
      currentTab: 'todoTab'
    }
  },
  components: {
    todoTab: TodoTab,
    doneTab: DoneTab
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
p.ready {
  text-decoration: underline;
  color: #3CB371;
  cursor: pointer;
}
</style>
