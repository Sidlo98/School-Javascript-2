<template>
  <div class="px-2 border bg-white mt-1 ">
    <div class="d-flex justify-content-between align-items-center">
      <h4
        class="p-2 m-0"
        :class="{ done: todo.completed }"
        @click="toggleCompleted"
      >
        {{ todo.title }}
      </h4>
      <button class="btn btn-danger px-3" @click="deleteTodo">X</button>
    </div>
    <Modal v-if="error" @close="error = false" />
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  components: {
    Modal
  },
  data() {
    return {
      error: false
    }
  },
  props: ["todo"],
  methods: {
    toggleCompleted() {
      fetch(`http://localhost:3000/todos/${this.todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          completed: !this.todo.completed,
        }),
      }).then((res) => {
        if (res.status === 200) {
          this.$emit("toggle");
        }
      });
    },
    deleteTodo() {
      if (this.todo.completed) {
        this.$emit("delete-Todo", this.todo.id);
      } else {
        // alert("Den här är inte klar");
        this.error = true
      }
    },
  },
};
</script>

<style scoped>
h4 {
  cursor: pointer;
  flex: 1;
}
.done {
  text-decoration: line-through;
  color: #bbb;
}
.relative {
  position: relative;
}
</style>
