<template>
  <div>
    <notifications group="notify" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 30px;
  height: 80%;
}
</style>
