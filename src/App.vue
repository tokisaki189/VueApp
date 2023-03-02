<template>
  <div class="container">
    <div class="button-container">
      <button
        class="tab-menu"
        v-for="(tab, index) in tabs"
        :key="tab"
        :style="{ backgroundColor: getTabColor(index) }"
        @click="(selected = tab), (activeTabIndex = index)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="component-container">
      <KeepAlive>
        <component :is="selected"></component>
      </KeepAlive>
    </div>
  </div>
  <div></div>
</template>

<script>
import notesSQL from "./components/notesSQL.vue";
import ChatFirebase from "./components/ChatFirebase.vue";
import notesFirebase from "./components/notesFirebase.vue";
import todoAppVue3 from "./components/todoAppVue3.vue";
/* import FormSection from './components/FormSection.vue' */
export default {
  name: "App",
  data() {
    return {
      tabs: ["notesSQL", "ChatFirebase", "notesFirebase", "todoAppVue3"],
      selected: "todoAppVue3",
      activeTabIndex: null,
      items: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
      ],
      colors: [
        "#FFC0CB",
        "#FFA07A",
        "#FFD700",
        "#ADFF2F",
        "#7FFFD4",
        "#87CEFA",
        "#6A5ACD",
        "#FF69B4",
        "#FF6347",
        "#FF4500",
      ],
    };
  },
  components: {
    notesSQL,
    ChatFirebase,
    notesFirebase,
    todoAppVue3,
    /* FormSection */
  },
  methods: {
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    getTabColor(index) {
      if (index === this.activeTabIndex) {
        return "white";
      } else {
        return "rgb(90, 255, 142)";
      }
    },
  },
};
</script>

<style>
body {
  background-color: #0f87ff;
}

* {
  margin: 0;
  padding: auto;
}

.color-box {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.container {
  display: flex;
}

.button-container {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 47.6rem;
  background-color: rgb(90, 255, 142);
  width: 180px;
}

.component-container {
  width: 80%;
  background-color: rgb(255, 255, 255);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.tab-menu {
  font-size: larger;
  height: 4rem;
  border-radius: 1rem 0 0 1rem;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
