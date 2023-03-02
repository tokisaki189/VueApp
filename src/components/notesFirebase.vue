<template>
  <div>
    <div><p>Father</p></div>
    <!-- <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <SmallComp :messages="message"> </SmallComp>
  <SmallComp :as="`message`"></SmallComp> -->

    <!-- <SmallComp @someEvent="logthat"></SmallComp> -->
    <div>{{ showValue }}</div>
  </div>
</template>
<script>
export default {
  name: "father-component",
  components: {
  },
  data() {
    return {
      message: "",
      messages: "",
      as: "",
      showValue: "",
    };
  },
  methods: {
    logthis() {
      console.log("logthis");
    },
    logthat() {
      this.logthis();
      console.log("da log");
    },
    logDec() {
      console.log("emit this by declare");
    },
    logchildmess(value) {
      this.showValue = value;
    },
  },
};
</script>
