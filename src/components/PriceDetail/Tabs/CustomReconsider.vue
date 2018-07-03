<template>
    <div>
        <el-collapse v-model="rec_col_val">
            <el-collapse-item title="客户复议" name="1">
                <el-table
                    :data="reconsiderData"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        label="客户姓名">
                    </el-table-column>
                    <el-table-column
                        prop="idCard"
                        label="证件号码">
                    </el-table-column>
                    <el-table-column
                        prop="periodsNo"
                        label="复议期数">
                    </el-table-column>
                    <el-table-column
                        prop="periodsAmount"
                        label="复议金额">
                    </el-table-column>
                    <el-table-column
                        prop="periodsDate"
                        label="复议日期">
                    </el-table-column>
                    <el-table-column
                        prop="remark"
                        label="备注">
                    </el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rec_col_val: ['1'],
            reconsiderData:[{
                userName:'张三',
                idCard:'110###',
                periodsNo:'12',
                periodsAmount:'150000.00',
                periodsDate:'2017-11-30 14:00:56',
                remark:'####'
            },{
                userName:'张三',
                idCard:'110###',
                periodsNo:'12',
                periodsAmount:'150000.00',
                periodsDate:'2017-11-30 14:00:56',
                remark:'####'
            }]
        }
    }
}
</script>

