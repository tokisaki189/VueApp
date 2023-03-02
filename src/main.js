import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/ChatFirebase.vue";
import notes from "./components/notesSQL.vue";
import BigComp from "./components/notesFirebase.vue";
import LoginChat from "./components/LoginChat.vue";
import ChatBox from "./components/ChatBox.vue";
import todoAppVue3 from "./components/todoAppVue3.vue";
const app = createApp(App);

app.component("notes-section", notes);
app.component("chat-box", ChatBox);
app.component("todo-app", todoAppVue3);
app.component("header-section", Header);
app.component("big-comp", BigComp);
app.component("login-chat", LoginChat);
app.mount("#app");
