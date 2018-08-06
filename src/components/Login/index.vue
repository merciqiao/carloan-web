<template>
    <div class='bg' :style='bg'>
        <div class='login_input_container'>
            <img src='../../assets/images/whitelogo.png' class='login_logo'/>
            <div class="login_input">
                帐号：
                <el-input
                    placeholder="请输入帐号"
                    prefix-icon="el-icon-service"
                    v-model="loginName"
                >
                </el-input>
                密码：
                <el-input
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-view"
                    v-model="password"
                >
                </el-input>
            </div>
            <div class="login_btn">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button>重置</el-button>
            </div>
            <div v-if="this.msg !== ''">
                <el-alert :title="this.msg" class="showMsg"></el-alert>
            </div>
        </div>
    </div>
</template>
<style lang='less'>
.mt30mid{
    margin:63px auto 0 auto;
}
.mt20mid{
    margin:20px auto 0 auto;
}
.login_input_container {
  width: 550px;
  height: 360px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #575b67;

  .login_logo {
    display: block;
    margin: 0 auto;
    padding-top: 20px;
  }
  .login_input{
      width:360px;
      .mt20mid;
  }
  .login_btn{
      width:160px;
      .mt30mid;
  }
  .showMsg{
      margin-top: 10px;
  }
}
</style>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      bg: {
        width: "100%",
        paddingTop: "230px",
        height: document.documentElement.clientHeight - 230 + "px",
        backgroundImage: "url(" + require("../../assets/images/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      loginName:'',
      password:''
    };
  },
  computed:mapState({
    msg: state => state.login.user_msg,
    token: state => state.login.user_token
  }),
  methods: {
      login() {
          this.$store.dispatch('login',{
              loginName: this.loginName,
              password: this.password
          }).then(() => {
              //用户登录成功之后保存token信息，直到用户退出。
              localStorage.setItem("token",this.token);
              this.loginName = "";
              this.password = "";
              this.$router.push({ path:'/pricepost' });
          })
      }
  }
};
</script>