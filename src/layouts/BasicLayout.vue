<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  //   padding: 0 0.18rem 0.2rem;
}
</style>
