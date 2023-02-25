<template>
  <div>
    <div>ToDo App</div>
    <div>ToDo App</div>
    <div>ToDo App</div>
    <input type="text" id="input" v-model="something" />
    <p>{{ something2 }}</p>
  </div>
</template>
<script>
export default {
  name: "Header-section",
  data() {
    return {
      something: "",
    };
  },
  computed: {
    something2() {
      return this.something.split("").reverse().join("");
    },
  },
};
</script>
