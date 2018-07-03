<template>
    <div>
        <el-row>
            <el-col :span="4" class="pri_label">定价结论：</el-col>
            <el-col :span="6">
                <el-select v-model="conclusionValue" placeholder="请选择">
                    <el-option
                    v-for="item in conclusionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4" class="pri_label">定价金额：</el-col>
            <el-col :span="6">
                <el-input v-model="priceValue"></el-input>
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
            conclusionOptions: [{
                value: '1',
                label: '同意'
            },{
                value: '2',
                label: '补件'
            },{
                value: '3',
                label: '拒绝'
            }],
            conclusionValue: '',
            priceValue: 20,
            priceRemark: '这是备注'
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
</style>

