<template>
  <div id="inThePage" class="inThePage">
    <div class="pageContain">
      <left-nav></left-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from './leftNav/leftNav.vue'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'inThePage',
  data () {
    return {
      msg: 'aaa'
    }
  },
  components: {
    leftNav
    // centerNav,
    // rightNav
  },
  computed: {
    ...mapGetters([
      'state'
    ]),
    ...mapActions([]),
    ...mapMutations([])
  }
}
</script>

<style lang="less" scoped>
  #inThePage{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("../../assets/bj_zhuce.jpg");
    width: 100%;
    height: 100%;
    /*@media screen and (max-height: 700px) {*/
      /*width: 1000px;*/
      /*height: 700px;*/
    /*}*/
    /*@media screen and (min-height: 700px) {*/
      /*width: 100%;*/
      /*height: 100%;*/
    /*}*/
    .pageContain {
      align-self: center;
      width: 1000px;
      height: 600px;
    }
    /*@media screen and (max-width: 768px) {*/
    /*.pageContain{*/
    /*width: 1000px;*/
    /*height: 700px;*/
    /*}*/
    /*}*/
  }
</style>
