<template>
    <div class='bg' :style='bg'>
        <div class='login_input_container'>
            <img src='../../assets/images/whitelogo.png' class='login_logo'/>
            <div class="login_input">
                帐号：
                <el-input
                    placeholder="请输入帐号"
                    prefix-icon="el-icon-service"
                >
                </el-input>
                密码：
                <el-input
                    placeholder="请输入密码"
                    prefix-icon="el-icon-view"
                >
                </el-input>
            </div>
            <div class="login_btn">
                <el-button type="primary">登录</el-button>
                <el-button>重置</el-button>
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
}
</style>
<script>
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
      }
    };
  }
};
</script>