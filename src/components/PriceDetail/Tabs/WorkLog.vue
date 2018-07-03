<template>
    <div>
        <el-table
            :data="workLogData"
            border
            style="width:100%">
            <el-table-column
                prop="index"
                label="序号"
                width="100">
            </el-table-column>
            <el-table-column
                prop="clr"
                label="处理人"
                width="90">
            </el-table-column>
            <el-table-column
                prop="huanjie"
                label="环节"
                width="90">
            </el-table-column>
            <el-table-column
                prop="gcms"
                label="过程描述"
                width="150">
            </el-table-column>
            <el-table-column
                prop="beginTime"
                label="开始时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="endTime"
                label="完成时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="zxbz"
                label="执行备注">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default{
    data() {
        return {
            workLogData: [{
                index:"1",
                clr:"张三",
                huanjie:"定价",
                gcms:"###",
                beginTime:"2017-06-09 10:24:23",
                endTime:"2017-06-09 10:24:23",
                zxbz:"提交"
            },{
                index:"1",
                clr:"张三",
                huanjie:"定价",
                gcms:"###",
                beginTime:"2017-06-09 10:24:23",
                endTime:"2017-06-09 10:24:23",
                zxbz:"提交"
            }]
        }
    }
}
</script>
<style lang="less">

</style>

