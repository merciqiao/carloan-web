<template>
    <div>
        <el-collapse v-model="ids" v-for="list in auditList" :key=list.id v-if="auditList.length!==0">
            <el-collapse-item title="审核结论" :name=list.id>
                <el-row>
                    <el-col :span="4" class="bgColor1">终审结论：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="list.transition" placeholder="请选择" size="small" @focus="handleFocus(list.productType)" :disabled="list.isEdit == 'false'">
                            <el-option value="同意">同意</el-option>
                            <el-option value="拒绝">拒绝</el-option>
                            <el-option value="疑似欺诈">疑似欺诈</el-option>
                            <el-option value="补件">补件</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">合同金额：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-input size="mini" v-model="list.contractAmount"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">建议产品：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="list.productType" placeholder="请选择" size="small" @change="selectProduct">
                            <el-option
                            v-for="item in productList"
                            :key="item.productCode"
                            :label="item.productName"
                            :value="item.productCode">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="14" class="el_style1">(建议金额3-150万)</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">还款方式：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="list.repaymentMethod" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in repaymentType"
                            :key="item.DICVALUE"
                            :label="item.DICNAME"
                            :value="item.DICVALUE">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">期数：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-select v-model="list.approvalPeriod" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in periodNum"
                            :key="item.DICVALUE"
                            :label="item.DICNAME"
                            :value="item.DICVALUE">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">是否同意过户：</el-col>
                    <el-col :span="20" class="el_style1">
                        <el-radio v-model="list.ifTransfer" label="是">是</el-radio>
                        <el-radio v-model="list.ifTransfer" label="否">否</el-radio>
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
                            v-model="list.innerRemarks">
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
                            v-model="list.examineRemarks">
                        </el-input>
                    </el-col>
                </el-row>
                <div>
                    <div class="pri_btn_container">
                        <el-button @click="handleListSave(list,0)">保存</el-button>
                        <el-button type="primary" @click="handleListSave(list,1)">提交</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="valueForCollapse">
            <el-collapse-item title="审核结论" name="100">
                <el-row>
                    <el-col :span="4" class="bgColor1">终审结论：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="transition" placeholder="请选择" size="small">
                            <el-option value="同意">同意</el-option>
                            <el-option value="拒绝">拒绝</el-option>
                            <el-option value="疑似欺诈">疑似欺诈</el-option>
                            <el-option value="回退">回退</el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">合同金额：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-input size="mini" v-model="contractAmount"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">建议产品：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="productType" placeholder="请选择" size="small" @change="selectProduct">
                            <el-option
                            v-for="item in productList"
                            :key="item.productCode"
                            :label="item.productName"
                            :value="item.productCode">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="14" class="el_style1">(建议金额3-150万)</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">还款方式：</el-col>
                    <el-col :span="6" class="el_style1">
                        <el-select v-model="repaymentMethod" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in repaymentType"
                            :key="item.DICVALUE"
                            :label="item.DICNAME"
                            :value="item.DICVALUE">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4" class="bgColor1">期数：</el-col>
                    <el-col :span="10" class="el_style1">
                        <el-select v-model="approvalPeriod" placeholder="请选择" size="small">
                            <el-option
                            v-for="item in periodNum"
                            :key="item.DICVALUE"
                            :label="item.DICNAME"
                            :value="item.DICVALUE">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" class="bgColor1">是否同意过户：</el-col>
                    <el-col :span="20" class="el_style1">
                        <el-radio v-model="ifTransfer" label="是">是</el-radio>
                        <el-radio v-model="ifTransfer" label="否">否</el-radio>
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
                            v-model="innerRemarks">
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
                            v-model="examineRemarks">
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
            valueForCollapse:['100'],
            transition:"",
            contractAmount:"",
            productType:"",
            repaymentMethod:"",
            approvalPeriod:"",
            ifTransfer:"",
            innerRemarks:"",
            examineRemarks:"",
            productSeries:""
        }
    },
    created() {
    },
    methods: {
        selectProduct(value) {
            let obj = {};
            obj = this.productList.find((item) => {
                return item.productCode === value;
            });
            this.productSeries = obj.productName;
            this.$store.dispatch('getProductById',{
                headers: {'token': this.token},
                params: {productCode: value}
            })
        },
        handleSave(ope) {
            let params = Object.assign({},this.paramAudit,{
                operation: ope,
                transition: this.transition,
                contractAmount: this.contractAmount,
                productSeries: this.productSeries,
                productType: this.productType,
                repaymentMethod: this.repaymentMethod,
                approvalPeriod: this.approvalPeriod,
                ifTransfer: this.ifTransfer,
                innerRemarks: this.innerRemarks,
                examineRemarks: this.examineRemarks
            });
            this.$store.dispatch('saveAuditConclusion',params);
        },
        handleListSave(list,ope) {
            let params = Object.assign({},this.paramAudit,{
                operation: ope,
                id: list.id,
                transition: list.transition,
                contractAmount: list.contractAmount,
                productSeries: list.productSeries,
                productType: list.productType,
                repaymentMethod: list.repaymentMethod,
                approvalPeriod: list.approvalPeriod,
                ifTransfer: list.ifTransfer,
                innerRemarks: list.innerRemarks,
                examineRemarks: list.examineRemarks
            });
            this.$store.dispatch('saveAuditConclusion',params);
        },
        handleFocus(value) {
            this.$store.dispatch('getProductById',{
                headers: {'token': this.token},
                params: {productCode: value}
            })
        }
    },
    computed: mapState({
        token: state => state.login.user_token,
        repaymentType: state => state.orderInfo.repaymentType,
        periodNum: state => state.orderInfo.periodList,
        productList(state) {
            let arr = [];
            state.orderInfo.productsList.map((item) => {
                let obj = {};
                if(arr.indexOf(item.productName) == -1) {
                    obj.productName = item.productName;
                    obj.productCode = item.productCode;
                    arr.push(obj);
                }
            });
            return arr;
        },
        ids(state) {
            let ids = [];
            state.orderInfo.auditList.forEach((item) => {
                ids.push(item.id)
            });
            return ids;
        }
    }),
    mounted() {
        //获取产品信息
        this.$store.dispatch('getProducts',{
          headers: {'token': this.token},
        });    
    },
    props: ["paramAudit","auditList"]
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

