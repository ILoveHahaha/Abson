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
        <div class="userChat" v-for="(item, key) in friendListLength" :key="item" @click="goToChat(item, item.uname, key)">
          <div>
            <!--<img src="../../../assets/logo/1134.jpg">-->
            <img v-if="item.ulogo" :src="item.ulogo">
            <img v-if="!item.ulogo" src="../../../assets/logo/init.jpg">
          </div>
          <div>
            <p v-if="item.uname">{{item.uname}}</p>
            <p>
              <!--<span v-if="item.noRead">[{{item.noRead}}条] </span>-->
              <!--<span v-if="item.uname">{{item.uname}}:</span>-->
              <!--<span v-if="item.message">{{item.message}}</span>-->
            </p>
          </div>
          <div>
            <p>
              <!--<span v-if="item.time">{{item.time}}</span>-->
            </p>
            <p>
              <!--<span v-if="item.issure"><i></i></span>-->
            </p>
          </div>
        </div>
        <div class="userChat" v-for="item in groupListLength" :key="item" @click="goToChat(item, item.gname)">
          <div>
            <img :src="item.glogo">
          </div>
          <div>
            <p v-if="item.gname">{{item.gname}}</p>
            <p>
              <!--<span v-if="item.noRead">[{{item.noRead}}条] </span>-->
              <!--<span v-if="item.gname">{{item.gname}}:</span>-->
              <!--<span v-if="item.message">{{item.message}}</span>-->
            </p>
          </div>
          <div>
            <p>
              <!--<span v-if="item.time">{{item.time}}</span>-->
            </p>
            <p>
              <!--<span v-if="item.issure"><i></i></span>-->
            </p>
          </div>
        </div>
      </div>
    </EasyScrollbar>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {
      // noRead: 10,
      // user: '肥莹',
      // message: '真的很好吃啊',
      time: this.nowDate().getHours() + ':' + this.nowDate().getMinutes(),
      // issure: true,
      // total: 10
      // total: (this.$store.getters.getGroupList ? 0 : this.$store.getters.getGroupList.length + this.$store.getters.getFriendList.length),
      // groupListLength: (this.$store.getters.getGroupList ? '' : this.$store.getters.getGroupList),
      // friendListLength: (this.$store.getters.getFriendList ? '' : this.$store.getters.getFriendList)
      // total: 0,
      groupListLength: '',
      friendListLength: '',
      currentELem: -1,
      userChatELem: ''
    }
  },
  watch: {
    userId: function (value) {
      if (value) {
        this.$store.dispatch('myself', {uid: value}).then(res => {})
        this.$store.dispatch('friendList', {uid: value}).then(res => {})
        this.$store.dispatch('groupList', {uid: value}).then(res => {})
      }
    },
    getGroupList: function (value) {
      if (value.length) {
        this.groupListLength = value
      }
    },
    getFriendList: function (value) {
      if (value.length) {
        this.friendListLength = value
      }
    }
  },
  mounted () {
    this.groupListLength = this.$store.getters.getGroupList
    this.friendListLength = this.$store.getters.getFriendList
    this.userChatELem = document.getElementsByClassName('userChat')
  },
  computed: {
    ...mapGetters(['userId', 'uname', 'getGroupList', 'getFriendList']),
    ...mapMutations(['CHATNAME']),
    ...mapActions(['myself', 'friendList', 'groupList'])
  },
  methods: {
    nowDate () {
      let date = new Date()
      return date
    },
    goToChat (item, name, elem) {
      this.userChatELem[elem].classList.add('active')
      if (this.currentELem !== elem) {
        if (this.currentELem >= 0) {
          this.userChatELem[this.currentELem].classList.remove('active')
        }
        this.currentELem = elem
      }
      this.$store.commit('CHATNAME', {chatObj: item, chatName: name})
      this.$router.push({path: '/inThePage/message/rightNav'})
    }
  }
}
</script>

<style lang="less" scoped>
  @import "centerNav";
</style>
