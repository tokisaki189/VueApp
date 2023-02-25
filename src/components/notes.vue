<template>
  <div>
    <p>Add here</p>
    <form @submit="addNote" class="form-section">
      <input placeholder="title" type="text" v-model="newtitle" />
      <textarea placeholder="content" v-model="newcontent"></textarea>
      <button type="submit" @click="resetForm">Add</button>
    </form>

    <input
      type="text"
      v-model="searchText"
      placeholder="Search"
      class="search-box"
    />
    <div class="note-container">
      <div
        v-for="note in filteredNotes.slice().reverse()"
        :key="note"
        class="notes"
        :id="note.id"
      >
        <form
          class="edit-form"
          :id="note.id"
          @submit.prevent="editNote(note.id, note.title, note.content)"
        >
          <input
            class="edit-input"
            v-model="note.title"
            onsubmit="event.preventDefault(); "
          />
          <textarea v-model="note.content" class="edit-textarea"></textarea>
          <div class="button-section">
            <button
              class="delete-button"
              v-bind:id="note.id"
              @click="deleteNote(note.id)"
              onclick="event.preventDefault();"
            >
              Delete
            </button>
            <button class="edit-button" type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("http://localhost:3000/notes")
      .then((response) => {
        /* console.log(response.data); */
        this.responseData = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  name: "note-section",
  data() {
    return {
      responseData: [],
      newid: 0,
      newtitle: "",
      newcontent: "",
      searchText: "",
      display: false,
    };
  },
  methods: {
    addNote() {
      axios.post("http://localhost:3000/addnote", {
        title: this.newtitle,
        content: this.newcontent,
      });
    },
    deleteNote(id) {
      console.log(id);
      axios.delete("http://localhost:3000/deletenote/" + id);
    },
    editNote(id, title, content) {
      console.log(id, title, content);
      axios.put("http://localhost:3000/editnote/" + id, {
        title: title,
        content: content,
      });
    },
    /* EditNote() {
      router.push("/Edit");
    }, */
  },
  computed: {
    filteredNotes() {
      return this.responseData.filter((note) => {
        return (
          note.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          note.content.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    },
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.note-container {
  padding-top: 3rem;
  height: 37rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  gap: 2rem;
  overflow: scroll;
  width: 70%;
  margin: auto;
  padding: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: flex-end;
}
.note-container::-webkit-scrollbar {
  display: none;
}
.button-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.notes {
  padding: 1rem;
  background-color: rgb(90, 255, 142);
  width: 15rem;
  height: 15rem;
  transition: transform 0.3s ease-in-out;
}
.notes:hover {
  transform: scale(1.05);
}
.delete-button {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
.edit-input {
  width: 100%;
  height: 4rem;
  font-size: large;
  box-sizing: border-box;
  background-color: rgb(90, 255, 142);
  border: none;
}
.edit-textarea {
  width: 100%;
  height: 7rem;
  box-sizing: border-box;
  background-color: rgb(90, 255, 142);
  border: none;
  resize: none;
}
.edit-textarea::-webkit-scrollbar {
  display: none;
}
button {
  border: none;
  background: none;
}
.edit-button {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
.form-section {
  margin: auto;
  padding: auto;
  width: 20%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.form-section * {
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  height: 2rem;
}
textarea {
  outline: none;
  resize: none;
}
input {
  outline: none;
}
.search-box {
  border-radius: 2rem;
  padding: 0.5rem;
  border: 1px solid rgb(90, 255, 142);
  margin-bottom: 1rem;
  height: 1.5rem;
}
</style>
