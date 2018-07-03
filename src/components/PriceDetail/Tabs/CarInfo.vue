<template>
    <div>
        <el-row>
            <el-col :span="4" class="bgColor">承租人姓名：</el-col>
            <el-col :span="4" class="el_style">张三</el-col>
            <el-col :span="4" class="bgColor">身份证号：</el-col>
            <el-col :span="4" class="el_style">110233498457347593048</el-col>
            <el-col :span="4" class="bgColor">车辆品牌：</el-col>
            <el-col :span="4" class="el_style">奥迪</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车系：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor">车辆型号及配置：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor">车牌号：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车架号：</el-col>
            <el-col :span="4" class="el_style">33302221</el-col>
            <el-col :span="4" class="bgColor">初登日期：</el-col>
            <el-col :span="4" class="el_style">2015-06-26</el-col>
            <el-col :span="4" class="bgColor">出厂日期：</el-col>
            <el-col :span="4" class="el_style">2015-06-26</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车身颜色：</el-col>
            <el-col :span="4" class="el_style">黑色</el-col>
            <el-col :span="4" class="bgColor">交强险到期日：</el-col>
            <el-col :span="4" class="el_style">2015-06-26</el-col>
            <el-col :span="4" class="bgColor">发动机号：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车辆的生产厂商：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor">购置数量：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor">公里数：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车辆过户次数：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor">评估师姓名：</el-col>
            <el-col :span="4" class="el_style">####</el-col>
            <el-col :span="4" class="bgColor"></el-col>
            <el-col :span="4" class="el_style"></el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">评估备注：</el-col>
            <el-col :span="20" class="el_style">####</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor addborder">整体描述：</el-col>
            <el-col :span="20" class="addborder el_style">####</el-col>
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
    .el_style;
}
.el_style{
    height: 30px;
    line-height: 30px;
    border: 1px solid #e0dfdf;
    border-bottom: 0;
    padding-left:10px;
}
.addborder{
    border-bottom: 1px solid #e0dfdf;
}
</style>

