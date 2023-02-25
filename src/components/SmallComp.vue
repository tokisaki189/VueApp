<template>
  <div>Son</div>
  <!-- <p> {{ messages }}</p>
<p> {{as}} </p> -->
  <!--  <button @click="$emit('someEvent')">click me</button> -->
  <button @click="bindEmit">click emit</button>
  <form @submit.prevent="emitform">
    <input v-model="mess" type="text" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  name: "son-component",
  data() {
    return {
      mess: "",
    };
  },
  props: {
    messages: String,
    as: String,
  },
  methods: {
    emitform() {
      this.$emit("formevent", this.mess);
    },
    submit() {
      this.$emit("someEvent");
    },
    bindEmit() {
      this.$emit("emitDec");
    },
  },
};
</script>
