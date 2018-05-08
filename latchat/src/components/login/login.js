import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'login',
  data () {
    // rule表示的是规则，value是值，callback是回调
    var userEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      }
    }
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
    var repeatPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      }
    }
    return {
      loginForm: {
        userEmail: '',
        password: ''
      },
      UserForm: {
        userEmail: '',
        username: '',
        password: '',
        repeatPassword: ''
      },
      newUserState: {
        userEmail: [
          { validator: userEmail, trigger: 'blur' }
        ],
        username: [
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ],
        repeatPassword: [
          { validator: repeatPassword, trigger: 'blur' }
        ]
      },
      // rules: {
      //   username: [
      //     { validator: username, trigger: 'blur' }
      //   ],
      //   password: [
      //     { validator: password, trigger: 'blur' }
      //   ]
      // },
      rememberMe: true,
      ImageShow: '',
      firstInput: 0,
      nextInput: 0,
      isLogin: true // 是否在登录模块
    }
  },
  mounted () {
    this.ImageShow = document.querySelectorAll('.login img')
    let formItem = document.querySelectorAll('.userInput input')
    formItem.forEach(function (value, index, arr) {
      arr[index].style.marginLeft = '0px'
    })
  },
  computed: {
    ...mapActions(['login', 'newuser', 'changePsw']),
    ...mapGetters(['userId'])
  },
  methods: {
    submitForm (formName) {
      if (formName === 'loginForm') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('login', {uid: this.loginForm.userEmail, password: this.loginForm.password}).then(res => {
              this.$router.push({path: '/inThePage/message'})
              sessionStorage.setItem('userId', this.loginForm.userEmail)
              // this.$store.dispatch('myself', {uid: this.loginForm.userEmail}).then(res => {})
              // this.$store.dispatch('friendList', {uid: this.loginForm.userEmail}).then(res => {})
              // this.$store.dispatch('groupList', {uid: this.loginForm.userEmail}).then(res => {})
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (formName === 'UserForm') {
        // this.$refs[formName].validate((valid) => {
        //   console.log(valid)
        //   if (valid) {
        //     console.log(2)
        this.$store.dispatch('newuser', {uid: this.UserForm.userEmail, password: this.UserForm.username, uname: this.UserForm.password}).then(res => {
          this.$router.push({path: '/inThePage/message'})
          sessionStorage.setItem('userId', this.loginForm.userEmail)
          // this.$store.dispatch('myself', {uid: this.UserForm.userEmail}).then(res => {})
          // this.$store.dispatch('friendList', {uid: this.UserForm.userEmail}).then(res => {})
          // this.$store.dispatch('groupList', {uid: this.UserForm.userEmail}).then(res => {})
        })
        // this.newUser(this.UserForm.userEmail, this.UserForm.username, this.UserForm.password)
        // } else {
        //   console.log('error submit!!')
        //   return false
        // }
      // })
      }
    },
    goToLosePsw () {

    },
    register () {
      this.isLogin = !this.isLogin
    },
    // 登录界面头顶展示动画
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
    // 注册界面头顶展示动画
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
    },
    loginPanel () {
      this.isLogin = !this.isLogin
    }
  }
}
