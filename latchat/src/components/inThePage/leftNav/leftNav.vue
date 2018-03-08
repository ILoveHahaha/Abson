<template>
  <div class="leftNav">
    <div class="leftNav_title_img" @click="mySelf()">
      <img src="../../../assets/webwxgeticon.jpg"/>
    </div>
    <div class="leftNav_select_manage">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {

    }
  },
  methods: {
    mySelf () {

    }
  }
}
</script>

<style lang="less" scoped>
  .leftNav{
    position: absolute;
    height: 576px;
    width: 36px;
    padding: 12px;
    background-color: black;
    .leftNav_title_img{
      cursor: pointer;
      img{
        width: 36px;
      }
    }
    .leftNav_select_manage{
      margin-top: 20px;
      i{
        display: inline-block;
        width: 36px;
        height: 36px;
        cursor: pointer;
        margin-bottom: 10px;
        &:nth-of-type(1){
          background: url("../../../assets/user.png");
          &:hover{
            background: url("../../../assets/userHov.png");
          }
          &:active{
            background: url("../../../assets/userSel.png");
          }
        }
        &:nth-of-type(2){
          background: url("../../../assets/group.png");
          &:hover{
            background: url("../../../assets/groupHov.png");
          }
          &:active{
            background: url("../../../assets/groupHov.png");
          }
        }
        &:nth-of-type(3){
          background: url("../../../assets/integral.png");
          &:hover{
            background: url("../../../assets/integralHov.png");
          }
          &:active{
            background: url("../../../assets/integralSel.png");
          }
        }
      }
    }
  }
</style>
