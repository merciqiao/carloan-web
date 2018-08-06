<template>
    <div>
        <el-row>
            <el-col :span="4" class="bgColor">承租人姓名：</el-col>
            <el-col :span="4" class="el_style">{{ cars.lesseeName }}</el-col>
            <el-col :span="4" class="bgColor">身份证号：</el-col>
            <el-col :span="4" class="el_style">{{ cars.idCard}}</el-col>
            <el-col :span="4" class="bgColor">车辆品牌：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carBrand }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车系：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carType }}</el-col>
            <el-col :span="4" class="bgColor">车辆型号及配置：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carModelConfig }}</el-col>
            <el-col :span="4" class="bgColor">车牌号：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carNumber }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车架号：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carFrameNumber }}</el-col>
            <el-col :span="4" class="bgColor">初登日期：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carNumberDate }}</el-col>
            <el-col :span="4" class="bgColor">出厂日期：</el-col>
            <el-col :span="4" class="el_style">{{ cars.manufactureDate }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车身颜色：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carColor }}</el-col>
            <el-col :span="4" class="bgColor">交强险到期日：</el-col>
            <el-col :span="4" class="el_style">{{ cars.strongRiskDueDate }}</el-col>
            <el-col :span="4" class="bgColor">发动机号：</el-col>
            <el-col :span="4" class="el_style">{{ cars.engineNumber }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车辆的生产厂商：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carManufacturers }}</el-col>
            <el-col :span="4" class="bgColor">购置数量：</el-col>
            <el-col :span="4" class="el_style">{{ cars.purchaseNumber }}</el-col>
            <el-col :span="4" class="bgColor">公里数：</el-col>
            <el-col :span="4" class="el_style">{{ cars.carDrivingKilometres }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">车辆过户次数：</el-col>
            <el-col :span="4" class="el_style">{{ cars.numberOfTransfer }}</el-col>
            <el-col :span="4" class="bgColor">评估师姓名：</el-col>
            <el-col :span="4" class="el_style">{{ cars.appraiserName }}</el-col>
            <el-col :span="4" class="bgColor"></el-col>
            <el-col :span="4" class="el_style"></el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor">评估备注：</el-col>
            <el-col :span="20" class="el_style">{{ cars.appraiserNote }}</el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="bgColor addborder">整体描述：</el-col>
            <el-col :span="20" class="addborder el_style">{{ cars.description }}</el-col>
        </el-row>
    </div>
</template>
<script>
export default{
    data() {
        return {

        }
    },
    props: ["cars"]
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

