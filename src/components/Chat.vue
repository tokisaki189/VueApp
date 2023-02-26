<template>
  <div>
<form> 
  <input type="text" name="">
</form>
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
