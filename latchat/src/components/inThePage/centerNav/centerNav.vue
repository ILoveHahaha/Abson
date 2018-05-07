<template>
  <div class="centerNav">
    <div class="centerNav-Select">
      <div>
        <img src="../../../assets/search.png"/>
        <input type="text"/>
      </div>
      <span>
        <i></i>
      </span>
    </div>
    <EasyScrollbar>
      <div class="userPanel">
        <div class="userChat" v-for="item in total" @click="goToChat()">
          <div>
            <img src="../../../assets/webwxgeticon.jpg">
          </div>
          <div>
            <p>前后端分享群</p>
            <p>
              <span v-if="noRead">[{{noRead}}条] </span>
              <span v-if="user">{{user}}:</span>
              <span v-if="message">{{message}}</span>
            </p>
          </div>
          <div>
            <p>
              <span v-if="time">{{time}}</span>
            </p>
            <p>
              <span v-if="issure"><i></i></span>
            </p>
          </div>
        </div>
      </div>
    </EasyScrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noRead: 10,
      user: '肥莹',
      message: '真的很好吃啊',
      time: this.nowDate().getHours() + ':' + this.nowDate().getMinutes(),
      issure: true,
      total: 10
    }
  },
  methods: {
    nowDate () {
      let date = new Date()
      return date
    },
    goToChat () {
      this.$router.push({path: '/inThePage/message/rightNav'})
    }
  }
}
</script>

<style lang="less" scoped>
  @import "centerNav";
</style>
