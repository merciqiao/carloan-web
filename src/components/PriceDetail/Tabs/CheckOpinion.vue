    <template>
        <div>
            <el-collapse v-model="ids" v-for="list in auditList" :key=list.id >
                <!-- 查看审核意见 -->
                <div v-if="list.isEdit=='false'" >
                <el-collapse-item :title="list.currentExaminationPost" :name=list.id>
                    <el-row>
                        <el-col :span="4" class="bgColor1">审核结论：</el-col>
                        <el-col :span="6" class="el_style1">
                            <el-select v-model="list.transition" placeholder="请选择" size="small" @focus="handleFocus(list.productType)" disabled>
                                <el-option value="同意">同意</el-option>
                                <el-option value="拒绝">拒绝</el-option>
                                <el-option value="疑似欺诈">疑似欺诈</el-option>
                                <el-option value="补件">补件</el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4" class="bgColor1">合同金额：</el-col>
                        <el-col :span="10" class="el_style1">
                            <el-input size="mini" v-model="list.contractAmount" disabled></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" class="bgColor1">建议产品：</el-col>
                        <el-col :span="6" class="el_style1" >
                            <el-select v-model="list.productType" placeholder="请选择" size="small" @change="selectProduct" disabled>
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
                            <el-select v-model="list.repaymentMethod" placeholder="请选择" size="small" disabled>
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
                            <el-select v-model="list.approvalPeriod" placeholder="请选择" size="small" disabled>
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
                            <el-radio v-model="list.ifTransfer" label="是" disabled>是</el-radio>
                            <el-radio v-model="list.ifTransfer" label="否" disabled>否</el-radio>
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
                                v-model="list.innerRemarks" disabled>
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
                                v-model="list.examineRemarks" disabled>
                            </el-input>
                        </el-col>
                    </el-row>
                    <div>
                        <!-- {{auditList}} -->
                        <!-- <div class="pri_btn_container">
                            <el-button @click="handleListSave(list,0)">保存</el-button>
                            <el-button type="primary" @click="handleListSave(list,1)">提交</el-button>
                        </div> -->
                    </div>
                </el-collapse-item>
                </div>
                <!-- 编辑审核意见 -->
            <div v-if="list.isEdit=='true'">
                <el-collapse-item :title="list.currentExaminationPost" :name=list.id>
                    <el-row>
                        <el-col :span="4" class="bgColor1">审核结论：</el-col>
                        <el-col :span="6" class="el_style1">
                            <el-select v-model="list.transition" placeholder="请选择" size="small" @focus="handleFocus(list.productType)" >
                                <el-option value="同意">同意</el-option>
                                <el-option value="拒绝">拒绝</el-option>
                                <el-option value="疑似欺诈">疑似欺诈</el-option>
                                <el-option value="补件">补件</el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4" class="bgColor1">合同金额：</el-col>
                        <el-col :span="10" class="el_style1">
                            <el-input size="mini" v-model="list.contractAmount" ></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" class="bgColor1">建议产品：</el-col>
                        <el-col :span="6" class="el_style1" >
                            <el-select v-model="list.productType" placeholder="请选择" size="small" @change="selectProduct" >
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
                            <el-select v-model="list.repaymentMethod" placeholder="请选择" size="small" >
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
                            <el-select v-model="list.approvalPeriod" placeholder="请选择" size="small" >
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
                            <el-radio v-model="list.ifTransfer" label="是" >是</el-radio>
                            <el-radio v-model="list.ifTransfer" label="否" >否</el-radio>
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
                                v-model="list.innerRemarks" >
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
                                v-model="list.examineRemarks" >
                            </el-input>
                        </el-col>
                    </el-row>
                    <div>                  
                        <div class="pri_btn_container">
                             <div v-show="false">
                        {{isedittag='true'}}
                    </div>
                            <el-button @click="handleListSave(list,0)">保存</el-button>
                            <el-button type="primary" @click="handleListSave(list,1)">提交</el-button>
                        </div>
                    </div>
                   
                </el-collapse-item>
            </div> 
            
            </el-collapse>
    <!-- 新增审核意见 -->
    <div v-if="isedittag=='false'"> 
            <el-collapse v-model="valueForCollapse">
                <el-collapse-item :title="actName" name="100">
                    <el-row>
                        <el-col :span="4" class="bgColor1">审核结论：</el-col>
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
            
            <!-- <el-collapse v-model="valueForCollapse">
                <el-collapse-item title="审核结论" name="100">
                    <el-row>
                        <el-col :span="4" class="bgColor1">审核结论：</el-col>
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
            </el-collapse>  -->
        
                    
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
                productSeries:"",
                isedittag:'false',
                addID:'0'           
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
                    id:this.addID,
                    transition: this.transition,
                    contractAmount: this.contractAmount,
                    productSeries: this.productSeries,
                    productType: this.productType,
                    repaymentMethod: this.repaymentMethod,
                    approvalPeriod: this.approvalPeriod,
                    ifTransfer: this.ifTransfer,
                    innerRemarks: this.innerRemarks,
                    examineRemarks: this.examineRemarks,                   
                    bizType:this.bizType,
                    currentExaminationPost:this.actName,
                    orderNumber:this.orderNumber
                });                
                //保存
                if(ope=='0')
                {
                    this.$store.dispatch('saveAuditConclusion',params).then(() => {                            
                       this.$message({
                           message: "保存成功",
                            type: "success"
                       });   
                      this.addID=this.carLoanInfoId;                 
                   });
                
               }
                 //提交
                if(ope=='1')
                {
                    this.$confirm("确认提交吗？", "提示", {}).then(() => {
                    this.$store.dispatch('saveAuditConclusion',params).then(() => {                            
                       this.$message({
                           message: "提交成功",
                            type: "success"
                       });
                        //提交之后跳转
                       this.$router.push({name:'PricePost'});   
                   });
                  });
               }
           
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
                    examineRemarks: list.examineRemarks,
                    bizType:list.bizType,
                    currentExaminationPost:list.actName,
                    orderNumber:list.orderNumber
                });
                  //保存
                if(ope=='0')
                {
                  
                    this.$store.dispatch('saveAuditConclusion',params).then(() => { 
                        if(this.msg=='保存审核意见成功！') 
                        {                           
                            this.$message({
                            message: "保存成功",
                                type: "success"
                           });  
                       }else
                       {
                         this.$message({
                            message: "保存失败",
                                type: "error"
                           });    
                       }
                                          
                   });
                
                }
                //提交
                if(ope=='1')
                {
                    this.$confirm("确认提交吗？", "提示", {}).then(() => {
                    this.$store.dispatch('saveAuditConclusion',params).then(() => {                            
                        this.$message({
                               message: "提交成功",
                                type: "success"
                         });
                          //提交之后跳转
                          this.$router.push({name:'PricePost'});   
                       });
                    });
                }
            
            
            },
            handleFocus(value) {
                this.$store.dispatch('getProductById',{
                    headers: {'token': this.token},
                    params: {productCode: value}
                })
            },
        saveParams() {          
            if(this.bizType) {
                localStorage.setItem('bizType',this.bizType);
            }
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
            },
            //获取审核意见新增数据ID
             carLoanInfoId: state => state.orderInfo.carLoanInfoId,
            //获取返回msg
             msg: state => state.orderInfo.order_msg
        }),
        mounted() { 
            //从url过来的参数保存到localStorage中
            this.saveParams(), 
            //获取产品信息
            this.$store.dispatch('getProducts',{
            headers: {'token': this.token},
            });    
        },
        //父组件传过来的参数
        props: ["paramAudit","auditList","actName","bizType","orderNumber"]
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

