<template>
  <div v-if="todos.length">
    <transition-group name="fade-slide">
      <div v-for="todo in todos" :key="todo.id">
        <Todo
          v-if="value === ''"
          :todo="todo"
          @toggle="$emit('toggle')"
          @delete-todo="$emit('delete-todo', todo.id)"
        />
        <Todo
          v-else-if="todo.completed === value"
          :todo="todo"
          @toggle="$emit('toggle')"
          @delete-todo="$emit('delete-todo', todo.id)"
        />
        <!-- <Todo
          :todo="todo"
          @toggle="$emit('toggle')"
          @delete-todo="$emit('delete-todo', todo.id)"
        /> -->
      </div>
    </transition-group>
  </div>

  <div v-else>
    <h3>No todos left</h3>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  props: ["todos", "value"],
  components: {
    Todo,
  },
};
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.7s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
