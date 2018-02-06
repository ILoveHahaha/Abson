<template>
  <div id="login" class="login">
    <div class="loginPanel">

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-col class="loginImg">
          <img src="../../assets/pswPanel.png">
          <img src="../../assets/inputUsername.png" style="display: none;">
          <img src="../../assets/inputPsw.png" style="display: none">
        </el-col>
        <el-col class="loginTitle">
          <span>登&nbsp;录</span>
        </el-col>
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
          <el-col class="loginInput">
            <el-input
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-ump-yonghu"
                    v-model="ruleForm.username"
                    @focus="showTheHanel(1)"
                    @blur="showThepanel(1)">
            </el-input>
          </el-col>
          <el-col class="loginInput">
            <el-input
                    placeholder="请输入密码"
                    prefix-icon="el-icon-ump-mima"
                    v-model="ruleForm.password"
                    @focus="showTheHanel(2)"
                    @blur="showThepanel(2)">
            </el-input>
          </el-col>
        </div>
        <el-col class="loginSelect">
          <el-checkbox v-model="rememberMe">7天内记住我</el-checkbox>
          <a @click="goToLosePsw()">忘记密码?</a>
        </el-col>
        <el-col>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="newUser()">注册</el-button>
        </el-col>
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
      },
      rememberMe: true,
      ImageShow: '',
      firstInput: 0,
      nextInput: 0
    }
  },
  mounted () {
    this.ImageShow = document.querySelectorAll('.loginImg img')
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
    },
    goToLosePsw () {

    },
    newUser () {

    },
    showTheHanel (val) {
      if (val === 1) {
        this.firstInput = 0
        this.ImageShow[0].style.display = 'none'
        this.ImageShow[1].style.display = ''
        this.ImageShow[2].style.display = 'none'
      } else {
        this.nextInput = 0
        this.ImageShow[0].style.display = 'none'
        this.ImageShow[1].style.display = 'none'
        this.ImageShow[2].style.display = ''
      }
    },
    showThepanel (val) {
      if (val === 1) {
        this.firstInput = 1
      } else {
        this.nextInput = 2
      }
      if (this.firstInput === 1 && this.nextInput === 2) {
        this.ImageShow[0].style.display = ''
        this.ImageShow[1].style.display = 'none'
        this.ImageShow[2].style.display = 'none'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/icon/iconfont.css";
  @import "login";
</style>
