<template>
  <div>
    <div><p>Father</p></div>
    <!-- <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <SmallComp :messages="message"> </SmallComp>
  <SmallComp :as="`message`"></SmallComp> -->

    <!-- <SmallComp @someEvent="logthat"></SmallComp> -->
    <SmallComp @emitDec="logDec" @formevent="logchildmess"></SmallComp>
    <div>{{ showValue }}</div>
  </div>
</template>
<script>
import SmallComp from "./SmallComp.vue";
export default {
  name: "father-component",
  components: {
    SmallComp,
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
