<template>
    <div>
        <el-row>
            <el-col :span="4" class="pri_label">初审结论：</el-col>
            <el-col :span="20">
                <el-select v-model="firstCheckValue" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in firstCheckOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="mt10">
            <el-col :span="4" class="pri_label">建议产品：</el-col>
            <el-col :span="20">
                <el-select v-model="suggestValue" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in suggestOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span>(建议金额3-150万)</span>
            </el-col>
        </el-row>
        <el-row class="mt10">
            <el-col :span="4" class="pri_label">还款方式：</el-col>
            <el-col :span="6">
                <el-select v-model="repayValue" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in repayOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4" class="pri_label">期数：</el-col>
            <el-col :span="6">
                <el-select v-model="periodsValue" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in periodsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="mt10">
            <el-col :span="4" class="pri_label">是否同意过户：</el-col>
            <el-col :span="20">
                <el-radio v-model="agreeValue" label="1">是</el-radio>
                <el-radio v-model="agreeValue" label="2">否</el-radio>
            </el-col>
        </el-row>
        <el-row class="mt10">
            <el-col :span="4" class="pri_label pri_mt">备注信息：</el-col>
            <el-col :span="20" class="pri_remark">
                <el-input
                    type="textarea"
                    :row="2"
                    size="mini"
                    placeholder="请输入备注信息"
                    v-model="priceRemark">
                </el-input>
            </el-col>
        </el-row>
        <div>
            <div class="pri_btn_container">
                <el-button>保存</el-button>
                <el-button type="primary">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            firstCheckOptions: [{
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
                label: '回退'
            }],
            suggestOptions: [{
                value: '1',
                label: '鸿途融-A'
            },{
                value: '2',
                label: '鸿途融-B'
            },{
                value: '3',
                label: '鸿途融-C'
            }],
            repayOptions: [{
                value: '1',
                label: '等额等息'
            }],
            periodsOptions: [{
                value: '1',
                label: '12'
            },{
                value: '2',
                label: '24'
            }],
            firstCheckValue:'',
            suggestValue:'',
            repayValue:'',
            periodsValue:'',
            agreeValue: '1',
            priceRemark:'备注'
        }
    }
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
.mt10{
    margin-top:15px;
}
</style>

