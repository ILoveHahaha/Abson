<template>
  <div class="rightNav">
    <div class="messagePanel">
      <!--<div class="noSelect">-->
        <!--<i></i>-->
        <!--<p>未选择聊天</p>-->
      <!--</div>-->
      <div class="userMessage">
        <div class="messageTitle">
          <span></span>
          <p>{{this.$store.getters.getChatName}}</p>
          <i></i>
        </div>
        <div class="message">
          <EasyScrollbar>
            <div class="messageList" v-for="item in messageList" :key="item">
              <!--<div class="messageList"></div>-->
              <p>{{item.time}}</p>
              <div class="myMessage" v-if="item.who === 'me'">
                <div class="messageCell">
                  <div class="messageUserCell">
                    <span class="spanRight">{{item.username}}</span>
                    <div class="divRight">{{item.message}}</div>
                  </div>
                  <img src="../../../assets/logo/1134.jpg">
                </div>
              </div>
              <div class="otherMessage" v-if="item.who === 'another'">
                <div class="messageCell">
                  <img src="../../../assets/logo/1124.jpg"/>
                  <div class="messageUserCell">
                    <span class="spanLeft">{{item.username}}</span>
                    <div class="divLeft">{{item.message}}</div>
                  </div>
                </div>
              </div>
            </div>
          </EasyScrollbar>
        </div>
        <div class="inputPanel">
          <div class="inputPanel-icon">
            <i></i>
            <i></i>
          </div>
          <div class="inputPanel-input">
            <textarea></textarea>
          </div>
          <div class="inputPanel-commit">
            <el-button type="primary" size="mini">发送</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      messageUser: '肥莹',
      messageList: [{
        'username': 'abson',
        'message': '明天下午我找你',
        'who': 'me',
        'time': '22:49'
      }, {
        'username': 'feiying',
        'message': '好啊好啊,记得带吃的过来',
        'who': 'another',
        'time': '22:50'
      }, {
        'username': 'abson',
        'message': '你这头猪',
        'who': 'me',
        'time': '22:51'
      }]
    }
  },
  mounted () {
    this.getMessageList()
  },
  computed: {
    ...mapGetters(['getChatName'])
  },
  methods: {
    getMessageList () {
      // this.$http.get('http://localhost:8088/testApi/messageListApi.json').then(response => {
      //   this.messageList = response
      //   console.log(this.messageList)
      // }, response => {
      //   alert('出错了')
      // })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "rightNav";
</style>
