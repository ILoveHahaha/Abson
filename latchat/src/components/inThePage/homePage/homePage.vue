<template>
  <div id="homePage" class="homePage">
    <div class="homePageContain">
      <center-nav></center-nav>
    </div>
  </div>
</template>

<script>
import centerNav from '../centerNav/centerNav.vue'
export default {
  name: 'homePage',
  components: {
    centerNav
  }
}
</script>

<style scoped>

</style>
