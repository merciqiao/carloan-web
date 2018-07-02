<template>
    <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#0f90e8"
        text-color="#fff"
        @select="handleSelect">
        <img src="../../../assets/images/logo2.png" class="tb_logo"/>
        <span class="tb_span">风控作业系统</span>
        <el-menu-item index="4">退出</el-menu-item>
        <el-menu-item index="3">修改密码</el-menu-item>
        <el-menu-item index="2">李念</el-menu-item>
        <el-menu-item index="1">定价岗</el-menu-item>
    </el-menu>
</template>
<style lang="less">
.el-menu--horizontal>.el-menu-item{
    float:right;
}
.tb_logo{
    float:left;
    margin: 10px 0 0 20px;
}
.tb_span{
    color: #fff;
    font-size: 20px;
    margin-left:20px;
    display: block;
    float: left;
    line-height: 60px;
}
</style>
<script>
export default{
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>