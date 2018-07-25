<template> 
<div id="dhwh">
    <!-- <div id="editor"></div>  -->
      
      <el-button size="mini"  @click="handleAdd">新增</el-button>        
        <el-table :data="resultData" size="mini"  highlight-current-row border  style="width: 100%;height:500px;padding-bottom: 0px;text-align:center;" class="el-tb-edit"  ref="demoTable"  v-loading="listLoading">
            <el-table-column type="index" width="50">
            </el-table-column>           
            <el-table-column prop="userName" label="姓名" width="180">                
            </el-table-column>           
            <el-table-column prop="contactType" label="电话类型" width="150">               
            </el-table-column>     
            <el-table-column prop="relationship" label="关系" width="150">               
            </el-table-column>
            <el-table-column prop="userTelephone" label="号码" width="180">              
            </el-table-column>    
            <el-table-column prop="investigationStatus" label="调查阶段" width="150">              
            </el-table-column>
            <el-table-column prop="remark" label="备注">               
            </el-table-column>   
             <el-table-column label="查询" width="150">
			        	<template slot-scope="scope">				         
                    	<el-button type="warning" plain size="small" @click="handlePhone(scope.$index,scope.row)">电核网核</el-button>
			        	</template>
		      	</el-table-column>        
            <el-table-column label="操作" width="150">
			        	<template slot-scope="scope">
				         	<el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
				          	<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>                    
			        	</template>
		      	</el-table-column>    
        </el-table>
    <!--新增界面-->
		<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="userName">
					<el-input v-model="addForm.userName" auto-complete="off"></el-input>
				</el-form-item>
        <el-form-item label="电话类型" prop="contactType">
					<el-input v-model="addForm.contactType" auto-complete="off"></el-input>
				</el-form-item>
			 <el-form-item label="关系" prop="relationship">
					<el-input v-model="addForm.relationship" auto-complete="off"></el-input>
				</el-form-item>
        	 <el-form-item label="号码" prop="userTelephone">
					<el-input v-model="addForm.userTelephone" auto-complete="off"></el-input>
				</el-form-item>
         <el-form-item label="调查阶段" prop="investigationStatus">
					<el-input v-model="addForm.investigationStatus" auto-complete="off"></el-input>
				</el-form-item>
         <el-form-item label="备注" prop="remark">
					<el-input v-model="addForm.remark" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
     <!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">      
				<el-form-item label="姓名" prop="userName">
					<el-input v-model="editForm.userName" auto-complete="off"></el-input>
				</el-form-item>
        <el-form-item label="电话类型" prop="contactType">
					<el-input v-model="editForm.contactType" auto-complete="off"></el-input>
				</el-form-item>
			 <el-form-item label="关系" prop="relationship">
					<el-input v-model="editForm.relationship" auto-complete="off"></el-input>
				</el-form-item>
        	 <el-form-item label="号码" prop="userTelephone">
					<el-input v-model="editForm.userTelephone" auto-complete="off"></el-input>
				</el-form-item>
         <el-form-item label="调查阶段" prop="investigationStatus">
					<el-input v-model="editForm.investigationStatus" auto-complete="off"></el-input>
				</el-form-item>
         <el-form-item label="备注" prop="remark">
					<el-input v-model="editForm.remark" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

 <!--电核网核界面-->
		<el-dialog title="电核网核" @open="openDialog" :visible.sync="phoneFormVisible" :close-on-click-modal="false" width="58%" top="57px"  :modal="false"  customClass="dh_dialog">
    
			<el-form  :model="contactsInfoForm" label-width="80px"   ref="contactsInfoForm">  
<el-row :gutter="0">
<el-col :span="14">
				<el-tabs v-model="phonFormFirst"  tab-position="left" @tab-click="handleClick"  > 
            <el-tab-pane  v-for="item in phoneForm"   :key="item.index"  :label="item.userName+' '+item.relationship+' '+item.userTelephone"  :name="item.id+''">                         
              <el-row :gutter="20" type="flex" class="row_bg"> 
                          <el-col :span="12">
                            <div class="grid_content bg_purple_light">网核</div>                          
                            <div  style="border:1px solid #E4E8ED;width:320px;height:270px"></div>
                           </el-col>                         
               </el-row>           
               <el-row :gutter="20" type="flex" class="row_bg">
                      <el-col :span="12">
                        <div class="grid_content bg_purple_light">
                          <span class="span">姓名：</span>{{contactsInfo.userName}}&nbsp;&nbsp;
                          <span class="span">关系:</span>{{contactsInfo.relationship}}&nbsp;&nbsp;
                          <span class="span">电话：</span>{{contactsInfo.userTelephone}} 
                        <el-input  type="textarea"  :rows="12"  placeholder="请输入内容"  v-model="contactsInfoRemark.otherRemark" ></el-input>
                        </div>
                      </el-col>                    
              </el-row>
            </el-tab-pane>          
         </el-tabs>   
</el-col>
<el-col :span="10">
  <el-row :gutter="0">
<el-col>
    <div class="grid_content bg_purple_light">
       初审备注</div><div id="cseditor" style="border:1px solid #E4E8ED;width:320px"></div>  
 </el-col> 
 </el-row>
  <el-row :gutter="0">
<el-col >
    <div class="grid_content bg_purple_light">
       终审备注</div> <div id="zseditor" style="border:1px solid #E4E8ED;width:320px"></div>  
 </el-col> 
 </el-row>
</el-col>
</el-row>
			</el-form>
      <div slot="footer" class="dialog-footer">
				<el-button @click="phoneFormVisible = false">取消</el-button>
				<el-button type="primary" @click="savePhoneInfoSubmit" :loading="phoneLoading">保存</el-button>
			</div>
		</el-dialog>
    </div> 
 </template>
   <script>
  import '../../../../static/ueditor/ueditor.config.js'
  import '../../../../static/ueditor/ueditor.all.js'
  import '../../../../static/ueditor/lang/zh-cn/zh-cn.js'
  import '../../../../static/ueditor/ueditor.parse.min.js'

export default {
  data() {
    return {
      cseditor: null,
      zseditor: null,
      filters: {
        orderNum: 'GZPHYB1542017061500003'
      },
      //列表数据
      resultData: [],   
      //列表Loading加载   
      listLoading: false,
      //新增界面是否显示
      addFormVisible: false,
      //添加按钮Loading加载
      addLoading: false,
      //输入框验证
      addFormRules: {
        userName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        contactType: [
          { required: true, message: "请输入电话类型", trigger: "blur" }
        ],
        relationship: [
          { required: true, message: "请输入关系", trigger: "blur" }
        ],
        userTelephone: [
          { required: true, message: "请输入电话号码", trigger: "blur" }
        ]
      },
      //新增界面数据
      addForm: {
        userName: "",
        contactType: "",
        relationship: "",
        userTelephone: "",
        investigationStatus: "",
        remark: ""
      },
      //编辑界面是否显示
      editFormVisible: false,
      //编辑按钮Loading加载
      editLoading: false,
       //输入框验证
      editFormRules: {
        userName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        contactType: [
          { required: true, message: "请输入电话类型", trigger: "blur" }
        ],
        relationship: [
          { required: true, message: "请输入关系", trigger: "blur" }
        ],
        userTelephone: [
          { required: true, message: "请输入电话号码", trigger: "blur" }
        ]
      },
      //编辑界面数据
      editForm: {
        id: '',
        userName: '',
        contactType: '',
        relationship: '',
        userTelephone: '',
        investigationStatus:'',
        remark: ''
      },
      //电核网核界面是否显示
      phoneFormVisible: false,
      //电核网核界面保存按钮Loading加载
      phoneLoading: false,
      //电核网核界面formModel,保存提交提示用到，其它无用   
      contactsInfoForm:{},
      //tabs默认选中，赋值为联系人主键ID
      phonFormFirst: '',
      //循环左侧联系人信息form
      phoneForm:[],
      //电核备注联系人信息
      contactsInfo: {
        userName: '',
        relationship: '',
        userTelephone:''
      },      
      //电核备注
      contactsInfoRemark:{},
      //初审备注
      csContent:{},
       //终审备注
      zsContent:{}
     
    };
  },
  methods: {   
    //获取联系人列表
    getResult: function() {
      var _this = this;
      this.listLoading = true;
      let param = new URLSearchParams();
      param.append("order_number", _this.filters.orderNum);
      this.$ajax({
        method: "post",
        url: "/api/carloansurveycontacts-api/searchCarLoanSurveyContacts",
        data: param
      }).then(
        function(resultData) {
          _this.resultData = resultData.data.dataList;

          _this.listLoading = false;
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },
    //显示新增界面
    handleAdd: function() {
      this.addFormVisible = true;
      this.addForm = {
        userName: "",
        contactType: "",
        relationship: "",
        userTelephone: "",
        investigationStatus: "",
        remark: "",
        orderNumber: this.filters.orderNum,
        carLoanUserId: "1"
      };
    },
    //新增
    addSubmit: function() {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            let param = Object.assign({}, this.addForm);
            this.$ajax({
              method: "post",
              url: "/api/carloansurveycontacts-api/insertCarLoanSurveyContacts",
              data: param
            }).then(res => {
              this.addLoading = false;
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["addForm"].resetFields();
              this.addFormVisible = false;
              this.getResult();
            });
          });
        }
      });
    },
    //显示编辑界面
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    //编辑
    editSubmit: function() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let param = Object.assign({}, this.editForm);
            // para.birth =
            //   !para.birth || para.birth == ""
            //     ? ""
            //     : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
            this.$ajax({
              method: "post",
              url: "/api/carloansurveycontacts-api/updateCarLoanSurveyContacts",
              data: param
            }).then(res => {
              this.editLoading = false;
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["editForm"].resetFields();
              this.editFormVisible = false;
              this.getResult();
            });
          });
        }
      });
    },
    //删除
    handleDel: function(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          this.listLoading = true;
          let param = { id: row.id, type: row.type };
          this.$ajax({
            method: "post",
            url: "/api/carloansurveycontacts-api/deleteCarLoanSurveyContacts",
            data: param
          }).then(res => {
            this.listLoading = false;

            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getResult();
          });
        })
        .catch(() => {});
    },
    //显示电核网核界面
    handlePhone: function(index, row) {
      this.phoneFormVisible = true;
      this.phoneForm = this.resultData;
      //联系人主键ID,根据联系人主键I默认选中电核网核tabs
      this.phonFormFirst = row.id + '';
      //根据电核网核联系人ID，查询电核网核联系人详细信息
      this.getContactsInfo(row.id);
      //根据电核网核联系人ID，查询电核网核联系人电核备注
      this.getContactsInfoRemark(row.id);
       //根据订单编号及备注类别查询初审备注
     // this.getCSContent(this.filters.orderNum);
      //根据订单编号及备注类别查询终审备注
     // this.getZSContent(this.filters.orderNum);     
   
    },
    //显示电核网核界面
    handleClick(tab, event) {     
       //根据电核网核联系人ID，查询电核网核联系人详细信息
      this.getContactsInfo(tab.name);
       //根据电核网核联系人ID，查询电核网核联系人电核备注
      this.getContactsInfoRemark(tab.name);
      //根据订单编号及备注类别查询初审备注
      //this.getCSContent(this.filters.orderNum);
      //根据订单编号及备注类别查询终审备注
      //this.getZSContent(this.filters.orderNum);  
      
     
  
    },
    //根据电核网核联系人ID，查询电核网核联系人详细信息
    getContactsInfo: function(contactsInfo_id) {
      var _this = this;     
      let param = new URLSearchParams();
      param.append("contactsInfo_id", contactsInfo_id);
      this.$ajax({
        method: "post",
        url: "/api/carloansurveycontacts-api/searchCarLoanSurveyContactsInfo",
        data: param
      }).then(
        function(resultData) {
          _this.contactsInfo = resultData.data.data;    
          console.log(resultData);     
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          
        }
      );
    },
     //根据电核网核联系人ID，查询电核网核联系人电核备注
    getContactsInfoRemark: function(contactsInfo_id) {
      var _this = this;     
      let param = new URLSearchParams();
      param.append("survey_contacts_id", contactsInfo_id);
      this.$ajax({
        method: "post",
        url: "/api/carloansurveyinfo-api/searchCarLoanSurveyInfo",
        data: param
      }).then(
        function(resultData) {
          _this.contactsInfoRemark = resultData.data.data; 
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },
   //根据订单编号及备注类别查询初审备注
    getCSContent: function(order_number) {
      var _this = this;     
      let param = new URLSearchParams();
      param.append("order_number", order_number);
      param.append("biz_type","NET_CHECK_FIRSTAUDIT_REMARK");
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/searchCarLoanRichText",
        data: param
      }).then(
        function(resultData) {
          _this.csContent = resultData.data.data;          
          console.log(_this.csContent);
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },
    //根据订单编号及备注类别查询终审备注
    getZSContent: function(order_number) {
      var _this = this;     
      let param = new URLSearchParams();
      param.append("order_number", order_number);
      param.append("biz_type","NET_CHECK_LASTAUDIT_REMARK");
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/searchCarLoanRichText",
        data: param
      }).then(
        function(resultData) {
          _this.zsContent = resultData.data.data; 
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },

     //电核网核保存按钮
    savePhoneInfoSubmit: function() {    
      this.$refs.contactsInfoForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            //初审富文本编辑器内容
              let cseditor =this.cseditor.getContent();
           //终审富文本编辑器内容
              let zseditor =this.zseditor.getContent();
            this.phoneLoading = true;
           let param = new URLSearchParams();          
             param.append("order_number", this.filters.orderNum);
             param.append("otherRemark", this.contactsInfoRemark.otherRemark);
             param.append("csContent", cseditor);
             param.append("zsContent",zseditor);  
             param.append("contactsInfo_id",this.phonFormFirst);                
            this.$ajax({
              method: "post",
              url: "/api/carloansurveyinfo-api/saveCarLoanSurveyInfo",
              data: param
            }).then(res => {
              this.phoneLoading = false;
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["contactsInfoForm"].resetFields();
              this.addFormVisible = false;              
            });
            
          });
        }
      });
    } ,
    //Dialog 对话框回调才能渲染出富文本编辑器
    openDialog:function(){
        this.$nextTick(function () { 
            this.cseditor = UE.getEditor('cseditor');          
            this.zseditor = UE.getEditor('zseditor');  
            var $this=this;        
            this.cseditor.ready(function() {               
               $this.$nextTick(function(){ 
                UE.getEditor('cseditor').setContent($this.csContent.content);
              });
            });
            this.zseditor.ready(function(){              
              $this.$nextTick(function(){
                UE.getEditor('zseditor').setContent($this.zsContent.content);
              });
            });
         })
      
       }
  },
  mounted() {
    //获取联系人列表
    this.getResult();
     //根据订单编号及备注类别查询初审备注，初始赋值方便编辑器赋值，否则富文本编辑器初次无值
    this.getCSContent(this.filters.orderNum);
    //根据订单编号及备注类别查询终审备注，初始赋值方便编辑器赋值，否则富文本编辑器初次无值
    this.getZSContent(this.filters.orderNum);    

    
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #495060;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}

/* 可编辑表格 */

.el-tb-edit .el-input,
.el-tb-edit .el-input-number,
.el-tb-edit .el-select {
  display: none;
  width: 100%;
}

.el-tb-edit .current-row .el-input,
.el-tb-edit .current-row .el-input-number,
.el-tb-edit .current-row .el-select {
  display: inherit;
}

.el-tb-edit .current-row .el-input + span,
.el-tb-edit .current-row .el-input-number + span,
.el-tb-edit .current-row .el-select + span {
  display: none;
}
.pri_btn_container {
  width: 180px;
  float: right;
  margin-top: 30px;
}
.grid_content {
  border-radius: 4px;
  min-height: 36px;
  width: 323px;
}
.bg_purple_light {
  background: #e5e9f2;
}
.row_bg {
  padding: 6px 6px;
}
.span{
    color:rgb(255, 0, 0);
     font-weight:bold;
}
.dh_dialog{   
  margin-right: 4px; 
}
</style>
