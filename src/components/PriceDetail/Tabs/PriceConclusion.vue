<template>
    <div>
        <el-collapse v-model="ids" v-for="list in conclusionList" :key=list.id v-if="conclusionList.length!==0">
            <el-collapse-item title="定价结论" :name=list.id class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">定价结论：</el-col>
                    <el-col :span="6">
                        <el-select v-model="list.pricingConclusion" placeholder="请选择" :disabled="list.isEdit == 'false'">
                            <el-option value="同意">同意</el-option>
                            <el-option value="补件">补件</el-option>
                            <el-option value="拒绝">拒绝</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="pri_label">定价金额：</el-col>
                    <el-col :span="6">
                        <el-input v-model="list.pricingMoney" :disabled="list.isEdit == 'false'"></el-input>
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
                            :disabled="list.isEdit == 'false'"
                            v-model="list.pricingRemarks">
                        </el-input>
                    </el-col>
                </el-row>
                <div v-if="list.isEdit == 'true'"><div style="display:none;">{{isEdit=false}}</div>
                    <div class="pri_btn_container mb10">
                        <el-button @click="handleListSave(list,0)">保存</el-button>
                        <el-button type="primary" @click="handleListSave(list,1)">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>  
        <el-collapse v-model="valueForCollapse" v-if="isEdit">
            <el-collapse-item title="定价结论" name="100" class="lrBorder">
                <el-row class="mt10">
                    <el-col :span="4" class="pri_label">定价结论：</el-col>
                    <el-col :span="6">
                        <el-select v-model="pricingConclusion" placeholder="请选择">
                            <el-option value="同意">同意</el-option>
                            <el-option value="补件">补件</el-option>
                            <el-option value="拒绝">拒绝</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="pri_label" v-if="pricingConclusion == '同意'">定价金额：</el-col>
                    <el-col :span="6" v-if="pricingConclusion == '同意'">
                        <el-input v-model="pricingMoney"></el-input>
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
                            v-model="pricingRemarks">
                        </el-input>
                    </el-col>
                </el-row>
                <div>
                    <div class="pri_btn_container mb10">
                        <el-button @click="handleSave(0)">保存</el-button>
                        <el-button type="primary" @click="handleSave(1)">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>     
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
    props: ['paramPrice','conclusionList',"orderNum","status"],
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
            pricingConclusion: '',
            pricingMoney: 0,
            pricingRemarks: '',
            valueForCollapse:["100"],
            id:this.priceid,
            isEdit: true,
            sessionParamPrice: JSON.parse(sessionStorage.getItem("paramPrice"+this.$route.query.order_number))

        }
    },
    methods: {
        handleSave(ope) {          
            let params = Object.assign({},this.sessionParamPrice,{
                operation: ope,
                pricingConclusion: this.pricingConclusion,
                pricingMoney: this.pricingMoney,
                pricingRemarks: this.pricingRemarks,
                id:this.priceid
            });
            console.log(this.priceid);
            if(this.pricingConclusion !== "同意") {
                if(this.pricingRemarks == "") {
                    this.$message('备注信息不能为空');
                }else{
                    this.$store.dispatch('savePriceConclusion',params).then(() => { 
                                                                this.$message({
                                                                message: "保存成功",
                                                                type: "success"
                                                                });
                                                                if(ope=="1"){this.$router.push({ name: "PricePost" });}
                                                                });
                }
            }else{
                this.$store.dispatch('savePriceConclusion',params).then(() => { 
                                                                this.$message({
                                                                message: "保存成功",
                                                                type: "success"
                                                                });
                                                                if(ope=="1"){this.$router.push({ name: "PricePost" });}
                                                                });
            }
        },
        handleListSave(list,ope) {
            this.isEdit = false;
            let params = Object.assign({},this.sessionParamPrice,{
                operation: ope,
                id: list.id,
                pricingConclusion: list.pricingConclusion,
                pricingMoney: list.pricingMoney,
                pricingRemarks: list.pricingRemarks
            });
            if(params.pricingConclusion !== '同意') {
                if(params.pricingRemarks == '') {
                    this.$message('备注信息不能为空');
                }else{
                    this.$store.dispatch('savePriceConclusion',params).then(() => { 
                                                                this.$message({
                                                                message: "保存成功",
                                                                type: "success"
                                                                });
                                                                if(ope=="1"){this.$router.push({ name: "PricePost" });}
                                                                });
                }
            }else{
                this.$store.dispatch('savePriceConclusion',params).then(() => { 
                                                                this.$message({
                                                                message: "保存成功",
                                                                type: "success"
                                                                });
                                                                if(ope=="1"){this.$router.push({ name: "PricePost" });}
                                                                });
            }
        }
    },
    computed:mapState({
        token: state => state.login.user_token,
        msg: state => state.orderInfo.order_msg,
        priceid:state => state.orderInfo.priceid,   
        priceList: state=> state.orderInfo.conclusionList,
        ids(state) {
            let ids = [];
            state.orderInfo.conclusionList.forEach((item) => {
                ids.push(item.id)
            });
            return ids;
        }
    }),
    // mounted() {
    //     //获取定价结论列表
    //         this.$store.dispatch('getPriceConclusion',{
    //             headers: {'token': this.token},
    //             params: {ordernum: this.orderNum, status: this.status}
    //         })
    // }
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
.lrBorder{
    border-left:1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
}
.mt10{
    margin-top: 10px;
}
.mb10{
    margin-bottom: 10px;
}
</style>

