<template>
    <div>
        <el-row>
            <el-col :span="4" class="bgColor">承租人姓名：</el-col>
            <el-col :span="4">张三</el-col>
            <el-col :span="4" class="bgColor">身份证号：</el-col>
            <el-col :span="4">110233498457347593048</el-col>
            <el-col :span="4" class="bgColor">车辆品牌：</el-col>
            <el-col :span="4">奥迪</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车系：</el-col>
            <el-col :span="4">####</el-col>
            <el-col :span="4" class="bgColor">车辆型号及配置：</el-col>
            <el-col :span="4">####</el-col>
            <el-col :span="4" class="bgColor">车牌号：</el-col>
            <el-col :span="4">####</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车架号：</el-col>
            <el-col :span="4">33302221</el-col>
            <el-col :span="4" class="bgColor">初登日期：</el-col>
            <el-col :span="4">2015-06-26</el-col>
            <el-col :span="4" class="bgColor">出厂日期：</el-col>
            <el-col :span="4">2015-06-26</el-col>
        </el-row>
    </div>
</template>
<script>
export default{
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
.bgColor{
    background-color: #f0f0f0;
    text-align: right;
}
.el-col-4{
    height: 30px;
    line-height: 30px;
    border: 1px solid #e0dfdf;
    border-bottom: 0;
}
</style>

