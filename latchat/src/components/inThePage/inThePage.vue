<template>
  <div id="inThePage" class="inThePage">
    <div class="pageContain">
      <left-nav></left-nav>
      <center-nav></center-nav>
      <right-nav></right-nav>
    </div>
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
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("../../assets/bj_zhuce.jpg");
    .pageContain{
      align-self: center;
      min-height: 700px;
      min-width: 1000px;
      width: 1000px;
      height: 700px;
    }
  }
</style>
