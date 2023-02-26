import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Chat.vue";
import notes from "./components/notes.vue";
import BigComp from "./components/BigComp.vue";
import SmallComp from "./components/SmallComp.vue";
const app = createApp(App);



app.component("notes-section", notes);
app.component("header-section", Header);
app.component("big-comp", BigComp);
app.component("small-comp", SmallComp);
app.mount("#app");
