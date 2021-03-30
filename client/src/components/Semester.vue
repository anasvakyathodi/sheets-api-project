<template>
  <div>Semester Page</div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.params.value) {
      this.input = this.$route.params.value;
    } else {
      this.input = prompt("Please Enter an item from this category");
    }
  },
  data() {
    return {
      input: undefined,
    };
  },
};
</script>
