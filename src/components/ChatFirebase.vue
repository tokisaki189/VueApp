<template>
  <LoginChat v-if="!showChat" @login="getUsername"></LoginChat>
  <ChatBox v-if="showChat" :username="username"></ChatBox>
</template>
<script>
import ChatBox from "./ChatBox.vue"
import LoginChat from "./LoginChat.vue"

export default {
  components: {
    LoginChat,
    ChatBox
  },
  name: "Header-section",
  data() {
    return {
      showChat: false,
      username: ""
    };
  },
  methods: {
    getUsername(username) {
      this.username = username;
      this.showChat = true;
    },
  },
  computed: {
  },
};
</script>
