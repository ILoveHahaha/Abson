<template>
  <div id="inThePage" class="inThePage">
    <left-nav></left-nav>
    <center-nav></center-nav>
    <right-nav></right-nav>
  </div>
</template>

<script>
import leftNav from './leftNav/leftNav.vue'
import centerNav from './centerNav/centerNav.vue'
import rightNav from './rightNav/rightNav.vue'
export default {
  name: 'inThePage',
  data () {
    return {
      msg: 'aaa'
    }
  },
  components: {
    leftNav,
    centerNav,
    rightNav
  }
}
</script>

<style lang="less" scoped>
  #inThePage{
    display: flex;
  }
</style>
