<template>
  <p class="log-name">Logged in as: {{ username }}</p>
  <div class="chat-container">
    <Suspense>
      <div class="chat-text" id="chat-text">
        <ul>
          <li v-for="msg in messages" :key="msg" class="each-message">
            <span class="user-show">{{ msg.username }}: </span>
            <span>{{ msg.message }}</span>
          </li>
        </ul>
      </div>
      <template #fallback> Loading... </template>
    </Suspense>
    <div class="chat-section">
      <input
        v-model="message"
        @keyup.enter="sendMessage"
        class="message-box"
        type="text"
        name=""
        id="box"
      />
      <button @click="sendMessage" class="send-text">Send</button>
    </div>
  </div>
</template>
<script>
import { database, ref, push, onValue } from "../firebase";
export default {
  props: ["username"],
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  mounted() {
    this.getMessages();
    setTimeout(() => {
      document.getElementById("box").value = "";
      var myDiv = document.getElementById("chat-text");
      myDiv.scrollTop = myDiv.scrollHeight;
    }, 200);
  },
  updated() {
    console.log("da thu");
    setTimeout(() => {
      var myDiv = document.getElementById("chat-text");
      myDiv.scrollTop = myDiv.scrollHeight;
    }, 200);
  },
  methods: {
    sendMessage() {
      console.log(this.message);
      push(ref(database, "message"), {
        username: this.username,
        message: this.message,
      });
      setTimeout(() => {
        document.getElementById("box").value = "";

        var myDiv = document.getElementById("chat-text");
        myDiv.scrollTop = myDiv.scrollHeight;
      }, 200);
    },
    getMessages() {
      onValue(ref(database, "message"), (data) => {
        this.messages = [];
        data.forEach((m) => {
          this.messages.push(m.val());
        });
      });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.user-show {
  background-color: #00e1ff;
  width: 6rem;
  padding-top: 0.8rem;
}
.chat-text {
  overflow: scroll;
}
.chat-text::-webkit-scrollbar {
  display: none;
}
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  height: 48.5rem;
}

.chat-section {
  display: flex;
}

.send-text {
  height: 2.12rem;
  width: 5rem;
  background-color: #5aff8e;
  border: 1px solid #5aff8e;
}
.each-message {
  display: flex;
  border: 1px solid #5aff8e;
  height: 2.5rem;
}
.message-box {
  height: 2rem;
  flex: 1;
  border: 1px solid #5aff8e;
  padding-left: 2rem;
}
.log-name {
  align-self: flex-start;
  justify-self: flex-start;
}
</style>
