    <template>
        <div>
            <el-collapse v-model="ids" v-for="list in auditList" :key=list.id >
                <!-- 查看审核意见 -->
                <div v-if="list.isEdit=='false'" >
                <el-collapse-item :title="list.currentExaminationPost" :name=list.id>
                    <el-row>
                        <el-col :span="4" class="bgColor1">审核结论：</el-col>
                        <el-col :span="6" class="el_style1">
                           
                            {{list.transition}}
                        </el-col>
                        <el-col :span="4" class="bgColor1">合同金额：</el-col>
                        <el-col :span="10" class="el_style1">
                      
                             {{list.contractAmount}}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" class="bgColor1">建议产品：</el-col>
                        <el-col :span="6" class="el_style1" >
                   
                             {{list.productSeries}}
                        </el-col>
                        <el-col :span="14" class="el_style1">(建议金额3-150万)</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" class="bgColor1">还款方式：</el-col>
                        <el-col :span="6" class="el_style1">
                      
                            {{list.repaymentMethodStr}}
                        </el-col>
                        <el-col :span="4" class="bgColor1">期数：</el-col>
                        <el-col :span="10" class="el_style1">
                      
                             {{list.approvalPeriod}}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" class="bgColor1">是否同意过户：</el-col>
                        <el-col :span="20" class="el_style1">
                          
                              {{list.ifTransfer}}
                        </el-col>
                    </el-row>
                    <el-row class="addHeight">
                        <el-col :span="4" class="bgColor1 addHeight">内部备注：</el-col>
                        <el-col :span="20" class="el_style1 addHeight">
                        
                             {{list.innerRemarks}}
                        </el-col>
                    </el-row>
                    <el-row class="addHeight">
                        <el-col :span="4" class="bgColor1 addHeight addborder">外部备注：</el-col>
                        <el-col :span="20" class="el_style1 addHeight addborder">
                         
                             {{list.examineRemarks}}
                        </el-col>
                    </el-row>
                    <div>
                       
                    </div>
                </el-collapse-item>
                </div>
                <!-- 编辑审核意见 -->
            <div v-if="list.isEdit=='true'">
                <el-collapse-item :title="list.currentExaminationPost" :name=list.id>
                  
                     <el-form :inline="true"  :model="saveEditForm" :ref="'saveEditForm-'+list.id"   :rules="formRules" >
                     <el-row> 
                        <el-col :span="12" class="el_style1"> 
                             <div v-show="false">
                            {{saveEditForm=list}}
                            {{saveRemarkEditForm=list}}
                             </div>
                             <el-form-item label="审核结论：" prop="transition" >                                  
                                    <el-select v-model="saveEditForm.transition" placeholder="请选择" size="small"  @change="selectAuditing"  @focus="handleFocus(saveEditForm.productType)" >
                                        <el-option value="同意">同意</el-option>
                                        <el-option value="拒绝">拒绝</el-option>
                                        <el-option value="疑似欺诈">疑似欺诈</el-option>
                                        <el-option value="回退">回退</el-option>
                                    </el-select>
                               </el-form-item>
                        </el-col> 
                        <div v-show="isShowAdd">                          
                              <el-col :span="12" class="el_style1">                                   
                                  <el-form-item label="合同金额：" prop="contractAmount">
                                     <el-input size="mini" v-model="saveEditForm.contractAmount"></el-input>
                                 </el-form-item>
                              </el-col>
                        </div>
                   </el-row>                 
                  <div v-show="isShowAdd">
                    <el-row>
                        <el-col :span="12" class="el_style1">
                            <el-form-item label="建议产品：" prop="productType">                                  
                               <el-select v-model="saveEditForm.productType"  placeholder="请选择" size="small" @change="selectProduct" >
                                <el-option
                                v-for="item in productList"
                                :key="item.productCode"
                                :label="item.productName"
                                :value="item.productCode">
                                </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12" class="el_style1">(建议金额3-150万)</el-col>
                    </el-row>
                    <el-row>                     
                        <el-col :span="12" class="el_style1">
                             <el-form-item label="还款方式：" prop="repaymentMethod">                                
                            <el-select v-model="saveEditForm.repaymentMethod" placeholder="请选择" size="small">
                                <el-option
                                v-for="item in repaymentType"
                                :key="item.DICVALUE"
                                :label="item.DICNAME"
                                :value="item.DICVALUE">
                                </el-option>
                            </el-select>
                             </el-form-item>
                        </el-col>                      
                        <el-col :span="12" class="el_style1">
                             <el-form-item label="期数：" prop="approvalPeriod">                                 
                            <el-select v-model="saveEditForm.approvalPeriod" placeholder="请选择" size="small">
                                <el-option
                                v-for="item in periodNum"
                                :key="item.DICVALUE"
                                :label="item.DICNAME"
                                :value="item.DICVALUE">
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>                     
                        <el-col :span="24" class="el_style1">
                             <el-form-item label="是否同意过户：" prop="ifTransfer">                              
                              <el-radio v-model="saveEditForm.ifTransfer" label="是">是</el-radio>
                              <el-radio v-model="saveEditForm.ifTransfer" label="否">否</el-radio>
                             </el-form-item>
                        </el-col>
                    </el-row>                    
                     </div>
                 </el-form>
                    <el-form :inline="true"  :model="saveRemarkEditForm" :ref="'saveRemarkEditForm-'+list.id"  :rules="formRemarkRules" >
                    <el-row class="addHeight">
                        <el-col :span="24" class="el_style1 addHeight">
                               <el-form-item label="内部备注：" prop="innerRemarks">                                  
                            <el-input
                                type="textarea"
                                :row="2"
                                size="mini"
                                placeholder="请输入备注信息"
                                v-model="saveRemarkEditForm.innerRemarks" style="width:750px;">
                            </el-input>
                             </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row class="addHeight">                     
                        <el-col :span="24" class="el_style1 addHeight addborder">
                            <el-form-item label="外部备注：" prop="examineRemarks">
                            <el-input
                                type="textarea"
                                :row="2"
                                size="mini"
                                placeholder="请输入备注信息"
                                v-model="saveRemarkEditForm.examineRemarks" style="width:750px;">
                            </el-input>
                             </el-form-item>
                        </el-col>
                    </el-row>
                      </el-form>
                    <div>                  
                        <div class="pri_btn_container">
                             <div v-show="false">
                            {{isedittag='true'}}
                             </div>                           
                            <el-button @click="handleListSave(list,0)">保存</el-button>
                            <el-button type="primary"  @click="handleListSave(list,1)">提交</el-button>
                        </div>
                    </div>
                   
                </el-collapse-item>
            </div> 
            
            </el-collapse>
    <!-- 新增审核意见 -->
    <div v-if="isedittag=='false'"> 
            <el-collapse v-model="valueForCollapse"> 
                <el-collapse-item :title="actName" name="100">
                    <el-form :inline="true"  :model="saveForm" ref="saveForm"   :rules="formRules" >
                     <el-row> 
                        <el-col :span="12" class="el_style1"> 
                             <el-form-item label="审核结论：" prop="transition" >
                                    <el-select v-model="saveForm.transition" placeholder="请选择" size="small"  @change="selectAuditing">
                                        <el-option value="同意">同意</el-option>
                                        <el-option value="拒绝">拒绝</el-option>
                                        <el-option value="疑似欺诈">疑似欺诈</el-option>
                                        <el-option value="回退">回退</el-option>
                                    </el-select>
                               </el-form-item>
                        </el-col> 
                        <div v-show="isShowAdd">                          
                              <el-col :span="12" class="el_style1"> 
                                  <el-form-item label="合同金额：" prop="contractAmount">
                                     <el-input size="mini" v-model="saveForm.contractAmount"></el-input>
                                 </el-form-item>
                              </el-col>
                        </div>
                   </el-row> 
                
                     <div v-show="isShowAdd">
                    <el-row>
                        <el-col :span="12" class="el_style1">
                            <el-form-item label="建议产品：" prop="productType">
                             <el-select v-model="saveForm.productType" placeholder="请选择" size="small" @change="selectProduct">
                                <el-option
                                v-for="item in productList"
                                :key="item.productCode"
                                :label="item.productName"
                                :value="item.productCode">
                                </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12" class="el_style1">(建议金额3-150万)</el-col>

                    </el-row>
                    <el-row>                     
                        <el-col :span="12" class="el_style1">
                             <el-form-item label="还款方式：" prop="repaymentMethod">
                            <el-select v-model="saveForm.repaymentMethod" placeholder="请选择" size="small">
                                <el-option
                                v-for="item in repaymentType"
                                :key="item.DICVALUE"
                                :label="item.DICNAME"
                                :value="item.DICVALUE">
                                </el-option>
                            </el-select>
                             </el-form-item>
                        </el-col>                      
                        <el-col :span="12" class="el_style1">
                             <el-form-item label="期数：" prop="approvalPeriod">
                            <el-select v-model="saveForm.approvalPeriod" placeholder="请选择" size="small">
                                <el-option
                                v-for="item in periodNum"
                                :key="item.DICVALUE"
                                :label="item.DICNAME"
                                :value="item.DICVALUE">
                                </el-option>
                            </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>                     
                        <el-col :span="24" class="el_style1">
                             <el-form-item label="是否同意过户：" prop="ifTransfer">
                              <el-radio v-model="saveForm.ifTransfer" label="是">是</el-radio>
                              <el-radio v-model="saveForm.ifTransfer" label="否">否</el-radio>
                             </el-form-item>
                        </el-col>
                    </el-row>                    
                     </div>
                 </el-form>
                    <el-form :inline="true"  :model="saveRemarkForm" ref="saveRemarkForm"   :rules="formRemarkRules" >
                    <el-row class="addHeight">
                        <el-col :span="24" class="el_style1 addHeight">
                               <el-form-item label="内部备注：" prop="innerRemarks">
                            <el-input
                                type="textarea"
                                :row="2"
                                size="mini"
                                placeholder="请输入备注信息"
                                v-model="saveRemarkForm.innerRemarks" style="width:750px;">
                            </el-input>
                             </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row class="addHeight">                     
                        <el-col :span="24" class="el_style1 addHeight addborder">
                            <el-form-item label="外部备注：" prop="examineRemarks">
                            <el-input
                                type="textarea"
                                :row="2"
                                size="mini"
                                placeholder="请输入备注信息"
                                v-model="saveRemarkForm.examineRemarks" style="width:750px;">
                            </el-input>
                             </el-form-item>
                        </el-col>
                    </el-row>
                      </el-form>
                    <div>
                        <div class="pri_btn_container">
                            <el-button @click="handleSave(0)">保存</el-button>
                            <el-button type="primary" @click="handleSave(1)">提交</el-button>
                        </div>
                    </div>
               
                </el-collapse-item>
            </el-collapse>
    </div>

 
        </div>
    </template>
    <script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      valueForCollapse: ["100"],
      transition: "",
      contractAmount: "",
      productType: "",
      repaymentMethod: "",
      approvalPeriod: "",
      ifTransfer: "",
      innerRemarks: "",
      examineRemarks: "",
      productSeries: "",
      isedittag: "false",
      addID: "0",
      isShowAdd: true,
      saveParamAudit: JSON.parse(sessionStorage.getItem("paramAudit")),
      //保存输入框验证
      saveForm: {
        transition: "",
        contractAmount: "",
        productSeries: "",
        productType: "",
        repaymentMethod: "",
        approvalPeriod: "",
        ifTransfer: ""
      },
      saveRemarkForm: {
        innerRemarks: "",
        examineRemarks: ""
      },
      //编辑输入框验证
      saveEditForm: {
        transition: "",
        contractAmount: "",
        productSeries: "",
        productType: "",
        repaymentMethod: "",
        approvalPeriod: "",
        ifTransfer: ""
      },
      saveRemarkEditForm: {
        innerRemarks: "",
        examineRemarks: ""
      },
      formRules: {
        transition: [
          { required: true, message: "请选择审核结论", trigger: "blur" }
        ],
        contractAmount: [
          { required: true, message: "请输入合同金额", trigger: "blur" }
        ],
        productType: [
          { required: true, message: "请选择产品", trigger: "blur" }
        ],
        repaymentMethod: [
          { required: true, message: "请选择还款方式", trigger: "blur" }
        ],
        approvalPeriod: [
          { required: true, message: "请选择期数", trigger: "blur" }
        ],
        ifTransfer: [
          { required: true, message: "请选择是否同意过户", trigger: "blur" }
        ]
      },
      formRemarkRules: {
        innerRemarks: [
          { required: true, message: "请输入内部备注", trigger: "blur" }
        ],
        examineRemarks: [
          { required: true, message: "请输入外部备注", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    selectProduct(value) {
      let obj = {};
      obj = this.productList.find(item => {
        return item.productCode === value;
      });
      this.productSeries = obj.productName;
      this.$store.dispatch("getProductById", {
        headers: { token: this.token },
        params: { productCode: value }
      });
    },
    handleSave(ope) {
      let params = Object.assign({}, this.saveParamAudit, {
        operation: ope,
        id: this.addID[0],
        transition: this.saveForm.transition,
        contractAmount: this.saveForm.contractAmount,
        productSeries: this.productSeries,
        productType: this.saveForm.productType,
        repaymentMethod: this.saveForm.repaymentMethod,
        approvalPeriod: this.saveForm.approvalPeriod,
        ifTransfer: this.saveForm.ifTransfer,
        innerRemarks: this.saveRemarkForm.innerRemarks,
        examineRemarks: this.saveRemarkForm.examineRemarks
      });
      //保存
      if (ope == "0") {
        if (
          this.saveForm.transition == "同意" ||
          this.saveForm.transition == null ||
          this.saveForm.transition == ""
        ) {
          this.$refs.saveForm.validate(valid => {
            if (valid) {
              this.$store.dispatch("saveAuditConclusion", params).then(() => {
                if (this.msg == "保存审核意见成功！") {
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });
                  this.addID = this.carLoanInfoId;
                } else {
                  this.$message({
                    message: "保存失败",
                    type: "error"
                  });
                }
              });
            }
          });
        } else {
          this.$refs.saveRemarkForm.validate(valid => {
            if (valid) {
              this.$store.dispatch("saveAuditConclusion", params).then(() => {
                if (this.msg == "保存审核意见成功！") {
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });
                  this.addID = this.carLoanInfoId;
                } else {
                  this.$message({
                    message: "保存失败",
                    type: "error"
                  });
                }
              });
            }
          });
        }
      }
      //提交
      if (ope == "1") {
        if (
          this.saveForm.transition == "同意" ||
          this.saveForm.transition == null ||
          this.saveForm.transition == ""
        ) {
          this.$refs.saveForm.validate(valid => {
            if (valid) {
              this.$confirm("确认提交吗？", "提示", {}).then(() => {
                this.$store.dispatch("saveAuditConclusion", params).then(() => {
                  if (this.msg == "保存审核意见成功！") {
                    this.$message({
                      message: "提交成功",
                      type: "success"
                    });
                    this.addID = this.carLoanInfoId;
                    //提交之后跳转
                    this.$router.push({ name: "PricePost" });
                  } else {
                    this.$message({
                      message: "保存失败",
                      type: "error"
                    });
                  }
                });
              });
            }
          });
        } else {
          this.$refs.saveRemarkForm.validate(valid => {
            if (valid) {
              this.$confirm("确认提交吗？", "提示", {}).then(() => {
                this.$store.dispatch("saveAuditConclusion", params).then(() => {
                  if (this.msg == "保存审核意见成功！") {
                    this.$message({
                      message: "提交成功",
                      type: "success"
                    });
                    this.addID = this.carLoanInfoId;
                    //提交之后跳转
                    this.$router.push({ name: "PricePost" });
                  } else {
                    this.$message({
                      message: "保存失败",
                      type: "error"
                    });
                  }
                });
              });
            }
          });
        }
      }
    },
    handleListSave(list, ope) { 
      var EditForm='saveEditForm-'+list.id;
      var RemarkEditForm='saveRemarkEditForm-'+list.id;
    
      let params = Object.assign({}, this.saveParamAudit, {
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
        // bizType: list.bizType,
        // currentExaminationPost: list.actName,
        // orderNumber: list.orderNumber,
        // carInfoId: list.carInfoId,
        // processId: list.processId
      });

      //保存
      if (ope == "0") {
        if (
          this.saveEditForm.transition == "同意" ||
          this.saveEditForm.transition == "审核同意" ||
          this.saveEditForm.transition == "复核同意" ||
          this.saveEditForm.transition == null ||
          this.saveEditForm.transition == ""
        ) {            
          this.$refs[EditForm][0].validate(valid => {
            if (valid) {
              this.$store.dispatch("saveAuditConclusion", params).then(() => {
                if (this.msg == "保存审核意见成功！") {
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });
                } else {
                  this.$message({
                    message: "保存失败",
                    type: "error"
                  });
                }
              });
            }
          });
        } else {
          this.$refs[RemarkEditForm][0].validate(valid => {
            if (valid) {
              this.$store.dispatch("saveAuditConclusion", params).then(() => {
                if (this.msg == "保存审核意见成功！") {
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });
                } else {
                  this.$message({
                    message: "保存失败",
                    type: "error"
                  });
                }
              });
            }
          });
        }
      }
      //提交
      if (ope == "1") {
        if (
          this.saveEditForm.transition == "同意" ||
          this.saveEditForm.transition == "审核同意" ||
          this.saveEditForm.transition == "复核同意" ||
          this.saveEditForm.transition == null ||
          this.saveEditForm.transition == ""
        ) {
          this.$refs[EditForm][0].validate(valid => {
            if (valid) {
              this.$confirm("确认提交吗？", "提示", {}).then(() => {
                this.$store.dispatch("saveAuditConclusion", params).then(() => {
                  if (this.msg == "保存审核意见成功！") {
                    this.$message({
                      message: "提交成功",
                      type: "success"
                    });
                    //提交之后跳转
                    this.$router.push({ name: "PricePost" });
                  } else {
                    this.$message({
                      message: "保存失败",
                      type: "error"
                    });
                  }
                });
              });
            }
          });
        } else {
          this.$refs[RemarkEditForm][0].validate(valid => {
            if (valid) {
              this.$confirm("确认提交吗？", "提示", {}).then(() => {
                this.$store.dispatch("saveAuditConclusion", params).then(() => {
                  if (this.msg == "保存审核意见成功！") {
                    this.$message({
                      message: "提交成功",
                      type: "success"
                    });
                    //提交之后跳转
                    this.$router.push({ name: "PricePost" });
                  } else {
                    this.$message({
                      message: "保存失败",
                      type: "error"
                    });
                  }
                });
              });
            }
          });
        }
      }
    },
    handleFocus(value) {
      this.$store.dispatch("getProductById", {
        headers: { token: this.token },
        params: { productCode: value }
      });
    },
    saveParams() {
      if (this.paramAudit) {
        var param = JSON.stringify(this.paramAudit);
        if (param != "{}") {
          sessionStorage.setItem("paramAudit", param);
        }
      }
    },
    selectAuditing(val) {
      if (val == "拒绝" || val == "疑似欺诈" || val == "回退") {
        this.isShowAdd = false;
      }
      if (val == "同意") {
        this.isShowAdd = true;
      }
    }
  },
  computed: mapState({
    token: state => state.login.user_token,
    repaymentType: state => state.orderInfo.repaymentType,
    periodNum: state => state.orderInfo.periodList,
    productList(state) {
      let arr = [];
      state.orderInfo.productsList.map(item => {
        let obj = {};
        if (arr.indexOf(item.productName) == -1) {
          obj.productName = item.productName;
          obj.productCode = item.productCode;
          arr.push(obj);
        }
      });
      return arr;
    },
    ids(state) {
      let ids = [];
      state.orderInfo.auditList.forEach(item => {
        ids.push(item.id);
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
      this.$store.dispatch("getProducts", {
        headers: { token: this.token }
      });
  },
  //父组件传过来的参数
  props: ["paramAudit", "auditList", "actName"]
};
</script>
    <style lang="less">
.bgColor1 {
  background-color: #f0f0f0;
  text-align: right;
  .el_style1;
}
.el_style1 {
  height: 60px;
  line-height: 60px;
  border: 1px solid #e0dfdf;
  border-bottom: 0;
  padding-left: 61px; //10px;
}
.addborder {
  border-bottom: 1px solid #e0dfdf;
}
.addHeight {
  height: 60px;
  line-height: 60px;
}
.el-form--inline .el-form-item__label {
  float: left;
}
</style>

