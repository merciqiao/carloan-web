<template>
    <div>
        <el-collapse v-model="ids" v-for="list in conclusionList" :key=list.id v-if="conclusionList.length!==0">
            <el-collapse-item title="定价结论" :name=list.id class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">定价结论：</el-col>
                    <el-col :span="6">
                        <el-select v-model="list.pricingConclusion" placeholder="请选择" disabled>
                            <el-option value="同意">同意</el-option>
                            <el-option value="补件">补件</el-option>
                            <el-option value="拒绝">拒绝</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="pri_label">定价金额：</el-col>
                    <el-col :span="6">
                        <el-input v-model="list.pricingMoney" disabled></el-input>
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
                            disabled
                            v-model="list.pricingRemarks">
                        </el-input>
                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>    
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
    props: ['conclusionList'],
    data() {
        return {
        
        }
    },
    computed:mapState({
        ids(state) {
            let ids = [];
            state.orderInfo.conclusionList.forEach((item) => {
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
.mt10{
    margin-top:10px;
}
</style>

