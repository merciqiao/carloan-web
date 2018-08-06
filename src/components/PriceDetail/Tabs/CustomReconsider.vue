<template>
    <div>
        <el-collapse v-model="rec_col_val">
            <el-collapse-item title="客户复议" name="1">
                <el-table
                    :data="fuyi_data"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="fuyiPeriod"
                        label="复议期数">
                    </el-table-column>
                    <el-table-column
                        prop="fuyiAmount"
                        label="复议金额">
                    </el-table-column>
                    <el-table-column
                        prop="creationTime"
                        label="复议日期">
                    </el-table-column>
                    <el-table-column
                        prop="fuyiRemarks"
                        label="备注">
                    </el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import { mapState } from 'vuex'
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
    },
    computed: mapState({
        token: state => state.login.user_token,
        fuyi_data: state => state.orderInfo.fuyiList
    }),
    mounted() {
        this.$store.dispatch('getFuyi',{
            headers: {'token': this.token},
            params: {ordernum: this.orderNum}
        })
    },
    props: ["orderNum"]
}
</script>

