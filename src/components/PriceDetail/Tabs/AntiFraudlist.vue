<template>
    <div>
        <el-collapse v-model="ids" v-for="list in fraudList" :key=list.id v-if="fraudList.length!==0">
            <el-collapse-item title="反欺诈调查" :name=list.id class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">反欺诈结论：</el-col>
                    <el-col :span="6">
                        <el-radio v-model="list.fraudConclusion" label="欺诈" disabled>欺诈</el-radio>
                        <el-radio v-model="list.fraudConclusion" label="非欺诈" disabled>非欺诈</el-radio>
                    </el-col>
                    <el-col :span="4" class="pri_label" v-if="list.fraudConclusion == '欺诈'">欺诈原因：</el-col>
                    <el-col :span="6" v-if="list.fraudConclusion == '欺诈'">
                        <el-select v-model="list.mainOption" placeholder="请选择" disabled>
                            <el-option
                            v-for="item in auditReason"
                            :key="item.id"
                            :label="item.dictDetailName"
                            :value="item.dictDetailValue">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                 <el-row>
                    <el-col :span="4" class="pri_label pri_mt">备注信息：</el-col>
                    <el-col :span="20" class="pri_remark">
                        <el-input
                            type="textarea"
                            :row="2"
                            size="mini"
                            placeholder="请输入备注信息"
                            v-model="list.remarks"
                            disabled>
                        </el-input>
                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    props: ["fraudList"],
    data() {
        return {
            
        }
    },
    computed:mapState({
        auditReason: state => state.myTask.fraud_reason,
        ids(state) {
            let ids = [];
            state.orderInfo.fraudList.forEach((item) => {
                ids.push(item.id)
            });
            return ids;
        }
    })
}
</script>
<style lang="less">
.pri_label{
    height: 30px;
    line-height:30px;
    text-align: right;
    border:0;
}
.pri_remark{
    padding-left:0;
    margin:10px 0 10px 0;
    border:none;
}
.pri_mt{
    margin-top:18px;
}
.pri_btn_container{
    width:170px;
    float:right;
    margin-top: 30px;
}
</style>

