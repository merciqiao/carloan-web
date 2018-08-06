<template> 
<div id="dhwh">
      <el-button size="mini" type="success" icon="el-icon-circle-plus-outline"  @click="handleAdd">新增</el-button>  
                             
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
					<!-- <el-input v-model="addForm.contactType" auto-complete="off"></el-input> -->
           <el-select v-model="addForm.contactType" placeholder="请选择">
                  <el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
            </el-select>
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
          <el-select v-model="editForm.contactType" placeholder="请选择">
                  <el-option  v-for="item in options"   :key="item.value"  :label="item.label" :value="item.value"> </el-option>
            </el-select>
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
 	<el-dialog title="电核网核" @open="openDialog" @close="closeDialog" :visible.sync="phoneFormVisible" :close-on-click-modal="false" width="58%" top="57px"  :modal="false"  customClass="dh_dialog">                                  
			<el-form  :model="contactsInfoForm" label-width="80px"   ref="contactsInfoForm">  
    <el-row :gutter="0">
      <el-col :span="24" style=" solid "> <!--border:1px green;-->
				<el-tabs v-model="phonFormFirst"  tab-position="left" @tab-click="handleClick"> 
            <el-tab-pane  v-for="item in phoneForm"   :key="item.index"  :label="item.userName+' '+item.relationship+' '+item.userTelephone"  :name="item.id+''" :userTelephone="item.userTelephone">                         
              <el-row :gutter="20" type="flex" class="row_bg"> 
                          <el-col :span="23" style=" solid ;height:358px;"> <!--border:1px red -->
                            <div class="bg_purple_light" whidth="323px">网核</div> 
                            <div  style="border:1px solid #E4E8ED;height:310px;" scrolling="auto"> 
                                <div class="#F8F8FF;" whidth="323px"> 
                                   <div v-if="item.contactType=='工作电话'">
                                     <el-radio-group v-model="radio" @change="radioChange">
                                        <el-radio   :label="item.userTelephone">{{item.userTelephone}}</el-radio>                                       
                                        <el-radio   :label="item.companyName">{{item.companyName}}</el-radio>
                                        <el-radio   :label="item.homeAddress">{{item.homeAddress}}</el-radio>
                                     </el-radio-group>  
                                    </div>
                                   <div v-else-if="item.contactType=='本人电话'">
                                      <el-radio-group v-model="radio">
                                        <el-radio   :label="item.userTelephone">{{item.userTelephone}}</el-radio>
                                        <el-radio   label="身份证">身份证</el-radio>                                       
                                    </el-radio-group>  
                                    </div>  
                                     <div v-else-if="item.contactType=='家庭电话'">
                                      <el-radio-group v-model="radio">
                                        <el-radio   :label="item.userTelephone">{{item.userTelephone}}</el-radio>
                                        <el-radio   :label="item.homeAddress">{{item.homeAddress}}</el-radio>                                  
                                    </el-radio-group>  
                                    </div>  
                                     <div v-else>                                
                                    <el-radio-group v-model="radio">
                                        <el-radio   :label="item.userTelephone">{{item.userTelephone}}</el-radio>                                       
                                    </el-radio-group>  
                                     </div>
                                </div> 
                                      <el-tabs v-model="editableTabsValue" type="card" @tab-click="handle_click">
                                        <el-tab-pane label="百度" name="first"><iframe :src="baidu" width="920px" height="260px" scrolling="auto"></iframe></el-tab-pane>
                                        <el-tab-pane label="360搜索" name="second"><iframe :src="san" width="920px" height="260px" scrolling="auto"></iframe></el-tab-pane>
                                        <el-tab-pane label="失信网" name="three"><iframe src="http://shixin.court.gov.cn/" width="920px" height="260px" scrolling="auto"></iframe></el-tab-pane>
                                        <el-tab-pane label="人法网" name="four"><iframe src="" width="920px" height="260px" scrolling="auto"></iframe></el-tab-pane>
                                        <el-tab-pane label="工商网" name="five"><iframe src="http://www.gsxt.gov.cn" width="920px" height="260px" scrolling="auto"></iframe></el-tab-pane>
                                        <el-tab-pane label="初审备注" name="six">
                                          	<el-button type="primary" @click="saveCSSubmit(item.id)" :loading="CsSaveLoading">保存</el-button>
                                          <div :id="getCSEditorId(item.id)" style="border:1px solid #E4E8ED;width:660px;"></div>
                                          </el-tab-pane>
                                        <el-tab-pane label="终审备注" name="seven">
                                          	<el-button type="primary" @click="saveZSSubmit(item.id)" :loading="ZsSaveLoading">保存</el-button>
                                          <div :id="getZSEditorId(item.id)" style="border:1px solid #E4E8ED;width:660px;"></div>
                                        </el-tab-pane>
                                       </el-tabs>
                            </div>
                           </el-col>                         
               </el-row>           
               <el-row :gutter="20" type="flex" class="row_bg">
                      <el-col :span="12">                      
                        <div class="bg_purple_light">
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

<div style="position:absolute;right:43px;bottom:270px;">
    <div class="grid_content bg_purple_light" >
          异常备注</div> <div id="yceditor" style="border:1px solid #E4E8ED;width:320px;position:absolute;"></div>  
</div>
</el-row>
			</el-form>
      <div slot="footer" class="dialog-footer">
				<el-button @click="phoneFormVisible=false">取消</el-button>
				<el-button type="primary" @click="savePhoneInfoSubmit" :loading="phoneLoading">保存</el-button>
			</div>
		</el-dialog>
    </div> 
 </template>
   <script>
import "../../../../static/ueditor/ueditor.config.js";
import "../../../../static/ueditor/ueditor.all.js";
import "../../../../static/ueditor/lang/zh-cn/zh-cn.js";
import "../../../../static/ueditor/ueditor.parse.min.js";

export default {
  data() {
    return {
      filters: {
        orderNum: "GZPHYB1542017061500003"
      },
      //列表数据
      resultData: [],
      //列表Loading加载
      listLoading: false,
      //新增界面是否显示
      addFormVisible: false,
      //添加按钮Loading加载
      addLoading: false,
      //电话类型下拉框
      options: [{
          value: '工作电话',
          label: '工作电话'
        }, {
          value: '家庭电话',
          label: '家庭电话'
        }, {
          value: '联系人电话',
          label: '联系人电话'
        }, {
          value: '本人电话',
          label: '本人电话'
        }, {
          value: '网查三方',
          label: '网查三方'
        }, {
          value: '114三方',
          label: '114三方'
        }],
      //输入框验证
      addFormRules: {
        userName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        contactType: [
          { required: true, message: "请选择电话类型", trigger: "blur" }
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
          { required: true, message: "请选择电话类型", trigger: "blur" }
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
        id: "",
        userName: "",
        contactType: "",
        relationship: "",
        userTelephone: "",
        investigationStatus: "",
        remark: ""
      },
      //电核网核界面是否显示
      phoneFormVisible: false,
      //电核网核界面保存按钮Loading加载
      phoneLoading: false,
      //电核网核界面formModel,保存提交提示用到，其它无用
      contactsInfoForm: {},
      //tabs默认选中，赋值为联系人主键ID
      phonFormFirst: "",
      //循环左侧联系人信息form
      phoneForm: [],
      //单选按钮
      radio:"",     
      //网核
      baidu: "http://wwww.baidu.com/",
      san: "http://www.so.com/",
      editableTabsValue: "first",
      //初审备注富文本编辑器
      cseditor: null,
      //初审备注富文本编辑器配置宽和高
      csconfig: {
        initialFrameWidth: 666, //初始化编辑器宽度,默认1000
        initialFrameHeight: 180 //初始化编辑器高度,默认320
      },
      //初审备注
      csContent: {},
      //保存初审备注按钮Loading加载
      CsSaveLoading: false,

      //终审备注富文本编辑器
      zseditor: null,
      //终审备注
      zsContent: {},
      //终审备注富文本编辑器配置宽和高
      zsconfig: {
        initialFrameWidth: 666, //初始化编辑器宽度,默认1000
        initialFrameHeight: 180 //初始化编辑器高度,默认320
      },
      //保存终审备注按钮Loading加载
      ZsSaveLoading: false,

      //电核备注联系人信息
      contactsInfo: {
        userName: "",
        relationship: "",
        userTelephone: ""
      },
      //电核备注
      contactsInfoRemark: {
      otherRemark: ""
      },
      //异常备注富文本编辑器
      yceditor: null,
      //异常备注
      ycContent: {}
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
          console.log(resultData);
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
      this.phonFormFirst = row.id + "";
      //根据电核网核联系人ID，查询电核网核联系人详细信息
      this.getContactsInfo(row.id);
      //根据电核网核联系人ID，查询电核网核联系人电核备注

      this.getContactsInfoRemark(row.id);
      //网核中百度tabs
      this.baidu = "http://wwww.baidu.com/s?wd=" + row.userTelephone;
      //网核中360搜索tabs
      this.san = "http://www.so.com/s?q=" + row.userTelephone;
    },
    //显示电核网核界面左侧联系人列表tabs点击事件
    handleClick(tab, event) {
      //根据电核网核联系人ID，查询电核网核联系人详细信息
      this.getContactsInfo(tab.name);
      //根据电核网核联系人ID，查询电核网核联系人电核备注
      this.getContactsInfoRemark(tab.name);
      //网核中百度tabs
      this.baidu = "http://wwww.baidu.com/s?wd=" + tab.$attrs.userTelephone;
      //网核中360搜索tabs
      this.san = "http://www.so.com/s?q=" + tab.$attrs.userTelephone;

      //初审备注赋值
      var $this = this;
      this.getCSContent(tab.name, function() {
        UE.getEditor(tab.name + "cseditor").setContent($this.csContent.content);
      });
      //终审备注赋值
      this.getZSContent(tab.name, function() {
        UE.getEditor(tab.name + "zseditor").setContent($this.zsContent.content);
      });
    },
    //Radio选中事件
    radioChange(value) {
      //网核中百度tabs
      this.baidu = "http://wwww.baidu.com/s?wd=" +value;
      //网核中360搜索tabs
      this.san = "http://www.so.com/s?q=" +value;
            console.log('改变之后的值是:' + value)
        },
    //网核界面内tabs点击事件
    handle_click(tab, event) {
      if (tab.label == "人法网") {
        window.open("http://zhixing.court.gov.cn/search/", "zhixing_court");
      }
    },
    //初审备注保存按钮
    saveCSSubmit: function(surveyInfoID) {
      //初审富文本编辑器内容
      let CSContent = UE.getEditor(surveyInfoID + "cseditor").getContent();
      this.CsSaveLoading = true;
      let param = new URLSearchParams();
      param.append("relation_number", surveyInfoID);
      param.append("biz_type", "NET_CHECK_FIRSTAUDIT_REMARK");
      param.append("Content", CSContent);
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/insertCarLoanRichText",
        data: param
      }).then(res => {
        this.CsSaveLoading = false;
        this.$message({
          message: "保存成功",
          type: "success"
        });
      });
    },
    //终审备注保存按钮
    saveZSSubmit: function(surveyInfoID) {
      //初审富文本编辑器内容
      let ZSContent = UE.getEditor(surveyInfoID + "zseditor").getContent();
      this.ZsSaveLoading = true;
      let param = new URLSearchParams();
      param.append("relation_number", surveyInfoID);
      param.append("biz_type", "NET_CHECK_LASTAUDIT_REMARK");
      param.append("Content", ZSContent);
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/insertCarLoanRichText",
        data: param
      }).then(res => {
        this.ZsSaveLoading = false;
        this.$message({
          message: "保存成功",
          type: "success"
        });
      });
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
    //根据联系人索引给初审富文本编辑器重新赋值id
    getCSEditorId: function(surveyInfoID) {
      return surveyInfoID + "cseditor";
    },
    //根据联系人索引给终审富文本编辑器重新赋值id
    getZSEditorId: function(surveyInfoID) {
      return surveyInfoID + "zseditor";
    },
    //根据订单编号及备注类别查询初审备注
    getCSContent: function(surveyInfoID, callback) {
      var _this = this;
      let param = new URLSearchParams();
      param.append("relation_number", surveyInfoID);
      param.append("biz_type", "NET_CHECK_FIRSTAUDIT_REMARK");
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/searchCarLoanRichText",
        data: param
      }).then(
        function(resultData) {
          _this.csContent = resultData.data.data;
          if (callback) {
            callback();
          }
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },
    //根据订单编号及备注类别查询终审备注
    getZSContent: function(surveyInfoID, callback) {
      var _this = this;
      let param = new URLSearchParams();
      param.append("relation_number", surveyInfoID);
      param.append("biz_type", "NET_CHECK_LASTAUDIT_REMARK");
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/searchCarLoanRichText",
        data: param
      }).then(
        function(resultData) {
          _this.zsContent = resultData.data.data;
          if (callback) {
            callback();
          }
          console.log(_this.zsContent);
        },
        function(resultData) {
          _this.resultData.message = "Local Reeuest Error!";
          console.log(resultData);
        }
      );
    },
    //根据订单编号及备注类别查询异常备注
    getYCContent: function(order_number) {
      var _this = this;
      let param = new URLSearchParams();
      param.append("relation_number", order_number);
      param.append("biz_type", "NET_CHECK_THREEAUDIT_REMARK");
      this.$ajax({
        method: "post",
        url: "/api/carloanrichtext-api/searchCarLoanRichText",
        data: param
      }).then(
        function(resultData) {
          _this.ycContent = resultData.data.data;
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
            //异常富文本编辑器内容
            let yceditor = this.yceditor.getContent();
            this.phoneLoading = true;
            let param = new URLSearchParams();
            param.append("order_number", this.filters.orderNum);
            param.append("otherRemark", this.contactsInfoRemark.otherRemark);
            param.append("ycContent", yceditor);
            param.append("contactsInfo_id", this.phonFormFirst);
            this.$ajax({
              method: "post",
              url: "/api/carloansurveyinfo-api/saveCarLoanSurveyInfo",
              data: param
            }).then(res => {
              this.phoneLoading = false;
              //根据订单编号及备注类别查询异常备注，初始赋值方便编辑器赋值，否则富文本编辑器初次无值
              this.getYCContent(this.filters.orderNum);
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
    },
    //Dialog 对话框回调才能渲染出富文本编辑器
    openDialog: function() {
      this.$nextTick(function() {
        var $this = this;
        //循环渲染初审备注富文本编辑器
        for (var i = 0; i < this.phoneForm.length; i++) {
          this.cseditor = UE.getEditor(
            this.phoneForm[i].id + "" + "cseditor",
            this.csconfig
          );
        }
        //循环渲染终审备注富文本编辑器
        for (var i = 0; i < this.phoneForm.length; i++) {
          this.zseditor = UE.getEditor(
            this.phoneForm[i].id + "" + "zseditor",
            this.zsconfig
          );
        }

        //给渲染后的备注赋值
        //    this.cseditor.ready(function(){
        //       UE.getEditor(this.phonFormFirst+'editor').setContent($this.csContent.content);

        //  });

        //渲染异常备注富文本编辑器
        this.yceditor = UE.getEditor("yceditor");
        this.yceditor.ready(function() {
          $this.$nextTick(function() {
            UE.getEditor("yceditor").setContent($this.ycContent.content);
          });
        });

        //打开电核网核初审备注赋值
        this.cseditor.ready(function() {
          $this.getCSContent($this.phonFormFirst, function() {
            UE.getEditor($this.phonFormFirst + "cseditor").setContent(
              $this.csContent.content
            );
          });
        });

        //打开电核网核终审备注赋值
        this.zseditor.ready(function() {
          $this.getZSContent($this.phonFormFirst, function() {
            UE.getEditor($this.phonFormFirst + "zseditor").setContent(
              $this.zsContent.content
            );
          });
        });
      });
    },
    closeDialog: function() {
      //  this.$nextTick(function () {
      //   this.editor.destroy();
      // })
    }
  },
  mounted() {
    //获取联系人列表
    this.getResult();
    //根据订单编号及备注类别查询异常备注，初始赋值方便编辑器赋值，否则富文本编辑器初次无值
    this.getYCContent(this.filters.orderNum);
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
  // min-height: 36px;
  width: 323px;
}
.bg_purple_light {
  background: #e5e9f2;
}
.row_bg {
  padding: 6px 6px;
}
.span {
  color: rgb(255, 0, 0);
  font-weight: bold;
}
.dh_dialog {
  margin-right: 4px;
}
</style>
