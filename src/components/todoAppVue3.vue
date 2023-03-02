<template>
  <div class="todo-container">
    <div>
      <input
        class="todo-input"
        type="text"
        @keyup.enter="addTodo"
        placeholder="something"
        v-model="newtitle"
      />
    </div>
    <!-- <input type="text" v-model="searchText" /> -->
    <div class="todo-section">
      <div
        ref="section"
        v-for="todo in responseData"
        :key="todo"
        class="each-todo"
      >
        <form class="todo-check-form">
          <input class="todo-check" :id="todo.id" type="checkbox" />
        </form>
        <form
          onsubmit="event.preventDefault()"
          @submit="editTodo(todo.id, todo.content)"
          class="todo-form-input"
        >
          <input class="todo-content-input" v-model="todo.content" />
        </form>
        <button
          class="delete-todo"
          :id="todo.id"
          @click="deleteTodo(todo.id)"
          onclick="event.preventDefault()"
        >
          Delete
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    let newtitle = ref("");
    let todos = ref([]);
    let responseData = ref([]);
    // let searchText = ref("");
    onMounted(() => {
      axios
        .get("http://localhost:3000/todos")
        .then((response) => {
          responseData.value = response.data;
          console.log(responseData.value);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    function logout() {
      console.log(newtitle.value);
    }
    function addTodo() {
      axios.post("http://localhost:3000/todos", {
        content: newtitle.value,
      });
      console.log(newtitle.value);
    }
    function deleteTodo(id) {
      console.log(id);
      axios.delete("http://localhost:3000/deletetodo/" + id);
    }
    function editTodo(id, content) {
      console.log(id, content);
      axios.put("http://localhost:3000/edittodo/" + id, {
        content: content,
      });
    }
    // function filteredTodos() {
    //   return this.responseData.filter((todo) => {
    //     return todo.content
    //       .toLowerCase()
    //       .includes(this.searchText.toLowerCase());
    //   });
    // }
    return {
      newtitle,
      logout,
      addTodo,
      todos,
      responseData,
      deleteTodo,
      editTodo,
      // filteredTodos,
      // searchText,
    };
  },
};
</script>

<style scoped>
.todo-container {
  background-color: #fffcf8;
  height: 49.5rem;
  overflow: hidden;
}
.todo-input {
  margin-top: 5rem;
  height: 3rem;
  width: 20rem;
}
.todo-section {
  margin: auto;
  background-color: #fcf4e7;
  padding-bottom: 1rem;
  border-radius: 2rem;
  border: 3px solid rgb(0, 0, 0);
  box-shadow: 7px 12px #888888;
  gap: 2rem;
  padding: auto;
  padding-top: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  justify-items: flex-start;
  width: 70%;
  height: 35rem;
  overflow: scroll;
}
*::-webkit-scrollbar {
  display: none;
}
.todo-check-form {
  height: 3rem;
  background-color: rgb(0, 136, 255);
}
.todo-check {
  height: 3rem;
  width: 3rem;
  border: 1px solid rgb(0, 219, 248);
  background-color: aqua;
}
.each-todo {
  padding-top:1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  border: 2px solid rgb(0, 0, 0);
  margin: auto;
  padding: auto;
  transition: transform 0.2s ease-in-out;
  width: 80%;
  margin-top: 0.5rem;
  height: 5rem;
}
.each-todo:hover {
  transform: scale(1.05);
}
.todo-form-input {
  height: 4rem;
  flex: 1;
}
.todo-content-input {
  padding-left: 1rem;
  border: none;
  height: 3rem;
  width: 100%;
  border-radius: 0.6rem;
}
.delete-todo {
  height: 3rem;
border: 2px solid rgb(0, 0, 0);
  font-size: larger;
  margin-left: 1rem;
  border-radius: 0.6rem;
  font-weight: bolder;
  color: white;
  background-color: #f7d8d5;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
