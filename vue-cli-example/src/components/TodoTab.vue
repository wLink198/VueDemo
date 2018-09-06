<template>
  <div class="todo">
    <div id="todoList" class="card card-body">
      <div class="row">
          <div class="offset-md-2 col-md-6">
              <input v-on:keyup.enter="addTodo" v-model="todo" class="input-group" placeholder="type smt here..." type="text">
              </input>
          </div>
      </div> <h1></h1>
      <div class="row todoTask" v-for="todo in todos">
          <p></p>
          <div v-bind:id="todo.id" v-bind:class="{completed: todo.done}" class="offset-md-2 col-md-6">{{todo.text}}</div>
          <div class="col-md-4">
              <a v-on:click="btnDone(todo)" v-if="!todo.done" href="javascript:void(0)">Done | </a>
              <a v-on:click="btnDone(todo)" v-else href="javascript:void(0)">unDone | </a>
              <a v-on:click="btnEdit(todo)" href="javascript:void(0)">Edit | </a>
              <a v-on:click="btnDelete(todo.id)" href="javascript:void(0)">Delete</a>
          </div>
      </div>
      <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">Edit modal</h3>
          <input slot="body" class="input-group" v-model="editInput" v-on:keyup.enter="editTodo" type="text">
          </input>
      </modal>
      </div>  
  </div>
</template>

<script>
import modal from '@/components/modal'
import { eventBus } from '../main'

export default {
  name: 'todoTab',
  components: {
    modal
  },
  data () {
    return {
      todos: [],
      showModal: false,
      editInput: '',
      todo: '',
      doneTasks: []
    }
  },
  methods: {
    addTodo: function() {
        var bool = true;
        var newTodo = this.todo;
        if (newTodo.trim().length === 0) {
            alert("Pls type smt in words and try again");
            bool = false;
        }
        this.todos.forEach( function(e) {
            if (newTodo === e.text) {
                alert("Can not add existing task!");
                bool = false;
            }
        });
        if (bool) {
            this.todos.push({text: newTodo, id: newTodo, done: false})
        }
    },
    btnDone: function(todo) {
      if (!todo.done) {
        todo.done = true;
        this.doneTasks.push(todo);
      }
      else {
        todo.done = false;
        this.doneTasks = this.doneTasks.filter(e => e.text !== todo.text);
      }
      eventBus.$emit('doneTasks', this.doneTasks)
    },
    btnDelete: function(id) {
        this.todos = this.todos.filter(e => e.id !== id);
        this.doneTasks = this.doneTasks.filter(e => e.id !== id);
        eventBus.$emit('doneTasks', this.doneTasks)
    },
    btnEdit: function(todo) {
        this.showModal = true;
        this.editInput = todo.text;
        this.todo = this.editInput;
    },
    editTodo: function() {
        var bool = true;
        this.todos.forEach(e => {
            if (e.text === this.editInput) {
              bool = false;
              alert("Task existed!");
            }
        })
        if (bool) {
          this.todos.forEach( e => {
              if (e.text === this.todo) {
                e.text = this.editInput;
              }
          });
        }
        this.showModal = false;
    }
  }
}
</script>

<style>
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
.completed {
  text-decoration: line-through;
}
</style>