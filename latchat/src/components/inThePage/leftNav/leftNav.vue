<template>
  <div class="leftNav">
    <div class="leftNav_title_img" @click="mySelf()">
      <img src="../../../assets/webwxgeticon.jpg"/>
    </div>
    <div class="leftNav_select_manage" @click="tabSelect($event)">
      <router-link to="/inThePage/message"><i></i></router-link>
      <router-link to="/inThePage/trend"><i></i></router-link>
      <router-link to="/inThePage/interest"><i></i></router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
      preNode: ''
    }
  },
  mounted: function () {
    document.getElementsByTagName('i')[0].click()
  },
  methods: {
    mySelf () {

    },
    tabSelect (elem) {
      let current = elem.target
      if (current.nodeName.toLowerCase() === 'i') {
        if (this.preNode !== '') {
          this.preNode.removeAttribute('class')
        }
        elem.target.setAttribute('class', 'active')
        this.preNode = elem.target
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "leftNav";
</style>
