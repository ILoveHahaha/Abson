<template>
  <div id="login" class="login">
    <div class="UnauthHomePage">
      <div class="register_shadow">
        <div class="register_shadow_txt"></div>
      </div>
    </div>
    <div class="loginPanel" v-if="isLogin">
      <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="demo-loginForm">
        <el-col class="loginImg">
          <img src="../../assets/pswPanel.png">
          <img src="../../assets/inputUsername.png" style="display: none;">
          <img src="../../assets/inputPsw.png" style="display: none">
        </el-col>
        <el-col class="loginTitle">
          <span>登&nbsp;录</span>
          <!--<span>{{$store.state.userId}}</span>-->
        </el-col>
        <!--<el-form-item label="用户名" prop="username">-->
          <!--<el-col :span="20">-->
            <!--<el-input v-model="loginForm.username" auto-complete="off"></el-input>-->
          <!--</el-col>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="确认密码" prop="password">-->
          <!--<el-col :span="20">-->
            <!--<el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>-->
          <!--</el-col>-->
        <!--</el-form-item>-->
        <div class="demo-input-suffix">
          <el-col class="loginInput">
            <el-input
                    placeholder="请输入账号"
                    prefix-icon="el-icon-ump-yonghu"
                    v-model="loginForm.userEmail"
                    @focus="showTheHanel(1)"
                    @blur="showThepanel(1)">
            </el-input>
          </el-col>
          <el-col class="loginInput">
            <el-input
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-ump-mima"
                    v-model="loginForm.password"
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
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="register()">注册</el-button>
        </el-col>
      </el-form>
    </div>
    <div class="newUser" v-if="!isLogin">
      <el-form :model="UserForm" status-icon :rules="newUserState" ref="UserForm" label-width="100px" class="demo-UserForm" label-position="top">
        <el-col class="UserImg">
          <img src="../../assets/pswPanel.png">
          <img src="../../assets/inputUsername.png" style="display: none;">
          <img src="../../assets/inputPsw.png" style="display: none">
        </el-col>
        <el-col class="UserTitle">
          <span>注&nbsp;册</span>
        </el-col>
        <div class="demo-input-suffix">
          <el-form-item class="UserInput" prop="userEmail">
            <el-input
                    placeholder="请输入邮箱地址"
                    prefix-icon="el-icon-message"
                    v-model="UserForm.userEmail"></el-input>
          </el-form-item>
          <el-form-item class="UserInput" prop="username">
            <el-input
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-ump-yonghu"
                    v-model="UserForm.username"></el-input>
          </el-form-item>
          <el-form-item class="UserInput" prop="password">
            <el-input
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-ump-mima"
                    v-model="UserForm.password">
            </el-input>
          </el-form-item>
          <el-form-item class="UserInput" prop="repeatPassword">
            <el-input
                    type="password"
                    placeholder="请再次输入密码"
                    prefix-icon="el-icon-ump-mima"
                    v-model="UserForm.repeatPassword">
            </el-input>
          </el-form-item>
        </div>
        <el-col>
          <el-button type="primary" @click="submitForm('UserForm')">注册</el-button>
          <a @click="loginPanel()">已有账号</a>
        </el-col>
      </el-form>
    </div>
  </div>
</template>

<script src='./login.js'></script>

<style lang="less" scoped>
  @import "../../assets/icon/iconfont.css";
  @import "login";
</style>
