<template>
  <div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "BlankLayout",
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}
</style>
