<template>
  <div id="message" class="message">
    <div class="message">
      <center-nav></center-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import centerNav from '../centerNav/centerNav.vue'
export default {
  name: 'message',
  components: {
    centerNav
  }
}
</script>

<style scoped>

</style>
