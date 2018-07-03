<template>
    <div>
        <el-collapse v-model="final_col_val">
            <el-collapse-item title="初审结论" name="1">
                <el-row>
                    <el-col :span="4" class="bgColor1">初审结论：</el-col>
                    <el-col :span="20" class="el_style1">同意</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">建议产品：</el-col>
                    <el-col :span="6" class="el_style1">鸿途融-A</el-col>
                    <el-col :span="14" class="el_style1">（建议金额3-150万）</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">还款方式：</el-col>
                    <el-col :span="6" class="el_style1">等额等息</el-col>
                    <el-col :span="4" class="bgColor1">期数：</el-col>
                    <el-col :span="10" class="el_style1">12</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">是否同意过户：</el-col>
                    <el-col :span="20" class="el_style1">是</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1 addborder">备注信息：</el-col>
                    <el-col :span="20" class="el_style1 addborder">####</el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="审核结论" name="2">
                <el-row>
                    <el-col :span="4" class="bgColor1">终审结论：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="finalCheckValue" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in finalCheckOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">合同金额：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-input size="mini"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">建议产品：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="finalSuggestValue" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in finalSuggestOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="14" class="el_style1">(建议金额3-150万)</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">还款方式：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="finalRepayValue" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in finalRepayOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">期数：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-select v-model="finalPeriodsValue" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in finalPeriodsOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">是否同意过户：</el-col>
                    <el-col :span="20" class="el_style1">
                        <el-radio v-model="finalAgreeValue" label="1">是</el-radio>
                        <el-radio v-model="finalAgreeValue" label="2">否</el-radio>
                    </el-col>
                </el-row>
                <el-row class="addHeight">
                    <el-col :span="4" class="bgColor1 addHeight">内部备注：</el-col>
                    <el-col :span="20" class="el_style1 addHeight">
                        <el-input
                            type="textarea"
                            :row="2"
                            size="mini"
                            placeholder="请输入备注信息"
                            v-model="innerRemark">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="addHeight">
                    <el-col :span="4" class="bgColor1 addHeight addborder">外部备注：</el-col>
                    <el-col :span="20" class="el_style1 addHeight addborder">
                        <el-input
                            type="textarea"
                            :row="2"
                            size="mini"
                            placeholder="请输入备注信息"
                            v-model="outerRemark">
                        </el-input>
                    </el-col>
                </el-row>
                <div>
                    <div class="pri_btn_container">
                        <el-button>保存</el-button>
                        <el-button type="primary">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default{
    data() {
        return {
            final_col_val:['1','2'],
            finalCheckOptions: [{
                value: '1',
                label: '同意'
            },{
                value: '2',
                label: '拒绝'
            },{
                value: '3',
                label: '疑似欺诈'
            },{
                value: '4',
                label: '补件'
            }],
            finalSuggestOptions: [{
                value: '1',
                label: '鸿途融-A'
            },{
                value: '2',
                label: '鸿途融-B'
            },{
                value: '3',
                label: '鸿途融-C'
            }],
            finalRepayOptions: [{
                value: '1',
                label: '等额等息'
            }],
            finalPeriodsOptions: [{
                value: '1',
                label: '12'
            },{
                value: '2',
                label: '24'
            }],
            finalCheckValue:'',
            finalSuggestValue:'',
            finalRepayValue:'',
            finalPeriodsValue:'',
            finalAgreeValue: '1',
            innerRemark:'',
            outerRemark:''
        }
    }
}
</script>
<style lang="less">
.bgColor1{
    background-color: #f0f0f0;
    text-align: right;
    .el_style1;
}
.el_style1{
    height: 40px;
    line-height: 40px;
    border: 1px solid #e0dfdf;
    border-bottom: 0;
    padding-left:10px;
}
.addborder{
    border-bottom: 1px solid #e0dfdf;
}
.addHeight{
    height:60px;
    line-height: 60px;
}
</style>

