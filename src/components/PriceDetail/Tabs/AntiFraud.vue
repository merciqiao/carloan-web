<template>
    <div>
        <!-- {{msg}} -->
        <el-collapse v-model="ids" v-for="list in fraudList" :key=list.id v-if="fraudList.length!==0">
            <el-collapse-item title="反欺诈调查" :name=list.id class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">反欺诈结论：</el-col>
                    <el-col :span="6">
                        <el-radio v-model="list.fraudConclusion" label="欺诈" :disabled="list.isEdit == 'false'">欺诈</el-radio>
                        <el-radio v-model="list.fraudConclusion" label="非欺诈" :disabled="list.isEdit == 'false'">非欺诈</el-radio>
                    </el-col>
                    <el-col :span="4" class="pri_label" v-if="list.fraudConclusion == '欺诈'">欺诈原因：</el-col>
                    <el-col :span="6" v-if="list.fraudConclusion == '欺诈'">
                        <el-select v-model="list.mainOption" placeholder="请选择" :disabled="list.isEdit == 'false'">
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
                            :disabled="list.isEdit == 'false'">
                        </el-input>
                    </el-col>
                </el-row>
                <div v-if="list.isEdit == 'true'"><div style="display:none;">{{isEdit=false}}</div>
                    <div class="pri_btn_container">
                        <el-button @click="handleListSave(list,0)">保存</el-button>
                        <el-button type="primary" @click="handleListSave(list,1)">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="valueForCollapse" v-if="isEdit">
            <el-collapse-item title="反欺诈调查" name="100" class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">反欺诈结论：</el-col>
                    <el-col :span="6">
                        <el-radio v-model="fraudConclusion" label="欺诈">欺诈</el-radio>
                        <el-radio v-model="fraudConclusion" label="非欺诈">非欺诈</el-radio>
                    </el-col>
                    <el-col :span="4" class="pri_label" v-if="fraudConclusion == '欺诈'">欺诈原因：</el-col>
                    <el-col :span="6" v-if="fraudConclusion == '欺诈'">
                        <el-select v-model="mainOption" placeholder="请选择">
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
                            v-model="remarks">
                        </el-input>
                    </el-col>
                </el-row>
                <div>
                    <div class="pri_btn_container">
                        <el-button @click="handleSave(0)">保存</el-button>
                        <el-button type="primary" @click="handleSave(1)">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    data() {
        return {
            fraudConclusion:"欺诈",
            mainOption:"",
            remarks:"",
            valueForCollapse:["100"],
            isEdit:true
        }
    },
    computed: mapState({
        auditReason: state => state.myTask.fraud_reason,
        msg: state => state.orderInfo.order_msg,
        antifraudid:state =>state.orderInfo.antifraudid,
        ids(state) {
            let ids = [];
            state.orderInfo.fraudList.forEach((item) => {
                ids.push(item.id)
            });
            return ids;
        }
    }),
    mounted() {
        this.$store.dispatch('getFraudReason',{
            code:"AUDIT_ANTIFRAUD_TYPE"
        });
    },
    methods: {
        handleSave(ope) {
            let params = Object.assign({},this.paramAnit,{
                operation: ope,
                fraudConclusion: this.fraudConclusion,
                mainOption: this.mainOption,
                transition: this.fraudConclusion,
                remarks: this.remarks,
                id: parseInt(this.antifraudid)
            });
           console.log(this.antifraudid);
            this.$store.dispatch('saveAntiFraud',params).then(() => { 
                                                                this.$message({
                                                                message: this.msg,
                                                                type: "success"
                                                                });
                                                                });
        },
        handleListSave(list,ope) {
            let params = Object.assign({},this.paramAnit, {
                operation: ope,
                fraudConclusion: list.fraudConclusion,
                mainOption: list.mainOption,
                transition: list.fraudConclusion,
                remarks: list.remarks,
                id:list.id
            });
            this.$store.dispatch('saveAntiFraud',params).then(() => { 
                                                                this.$message({
                                                                message: this.msg,
                                                                type: "success"
                                                                });});
        }
    },
    props: ["paramAnit","fraudList"]
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
    margin-bottom: 20px;
}
</style>

