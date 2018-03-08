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
    <div class="userChat">
      <div>
        <img src="../../../assets/webwxgeticon.jpg">
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  .centerNav{
    margin-left: 60px;
    position: absolute;
    padding: 12px;
    width: 216px;
    height: 576px;
    background-color: #eeeeee;
    .centerNav-Select{
      height: 40px;
      div{
        display: inline-block;
        border: 1px solid #afafaf;
        width: 160px;
        height: 19px;
        padding-left: 5px;
        background: #edeeef;
        position: relative;
        text-align: left;
        img{
          vertical-align: middle;
        }
        input{
          width: 120px;
          height: 19px;
          font-size: 14px;
          color: #999;
          background: none;
          border: none;
          outline: none;
        }
        /*padding-left: 5px;*/
        /*padding-right: 5px;*/
        /*background: url("../../../assets/search.png") no-repeat;*/
      }
      span{
        display: inline-block;
        width: 19px;
        height: 19px;
        vertical-align: bottom;
        border: 1px solid #8a8a8a;
        i{
          background: url("../../../assets/addUser.png");
          display: inline-block;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
</style>
