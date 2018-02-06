<template>
  <div id="login" class="login">
    <div class="loginPanel">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <!--<el-form-item label="用户名" prop="username">-->
          <!--<el-col :span="20">-->
            <!--<el-input v-model="ruleForm.username" auto-complete="off"></el-input>-->
          <!--</el-col>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="确认密码" prop="password">-->
          <!--<el-col :span="20">-->
            <!--<el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>-->
          <!--</el-col>-->
        <!--</el-form-item>-->
        <div class="demo-input-suffix">
          <el-input
                  placeholder="请输入用户名"
                  prefix-icon="el-icon-ump-yonghu"
                  v-model="ruleForm.username">
          </el-input>
          <el-input
                  placeholder="请输入密码"
                  prefix-icon="el-icon-ump-mima"
                  v-model="ruleForm.password">
          </el-input>
        </div>
        <!--<el-form-item>-->
        <el-col>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <!--</el-form-item>-->
        </el-col>
        <el-button size="small" icon="el-icon-ump-tupian" style="padding: 6px 4px;width: 90px;">sdfalkj</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }
    var password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../css/icon/iconfont.css";
  @height: 100%;
  @width: 100%;
  #login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: @width;
    height: @height;
    .loginPanel{
      width: 350px;
      height: 300px;
      top: @height / 2;
      align-self: center;
    }
  }
</style>
