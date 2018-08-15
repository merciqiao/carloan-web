<template>
   <div class="table"> <!-- 页面表格begin -->
          <div class="crumbs"> <!-- 页面标题begin -->
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item><i class="el-icon-tickets"></i>工作件查询</el-breadcrumb-item>
              </el-breadcrumb>
          </div> <!-- 页面标题end--> 
          <div class="container"><!-- 页面内容区begin -->
             <div class="handle-box"> <!-- 搜索区begin -->
  
            <el-row>
              <el-col :span="2"><span>进件编号：</span></el-col>
              <el-col :span="3"><el-input size="mini" v-model="orderNumber"></el-input></el-col>
              <el-col :span="2"><span>客户姓名：</span></el-col>
              <el-col :span="3"><el-input size="mini" v-model="userName"></el-input></el-col>
              <el-col :span="2"><span>审批类型：</span></el-col>
              <el-col :span="4">
                  <el-select placeholder="请选择" size="mini" v-model="auditeState">
                      <el-option v-for="item in approvalType" :key="item.id" :label="item.dictDetailName" :value="item.dictDetailValue"></el-option>
                  </el-select>
              </el-col>
              <el-col :span="2"><span>申请产品：</span></el-col>
              <el-col :span="4">
                  <el-select placeholder="请选择" size="mini" v-model="productType">
                      <el-option v-for="item in productList" :key="item.productCode" :label="item.productName" :value="item.productCode"></el-option>
                  </el-select>
              </el-col>
            </el-row>
            <el-row class="mt20">
              <el-col :span="2"><span>证件号码：</span></el-col>
              <el-col :span="3"><el-input size="mini" v-model="idCard"></el-input></el-col>
              <el-col :span="2"><span>手机：</span></el-col>
              <el-col :span="3"><el-input size="mini" v-model="phoneNumber"></el-input></el-col>
              <el-col :span="2"><span>审批状态：</span></el-col>
              <el-col :span="3">
                  <el-select placeholder="请选择" size="mini" v-model="auditType">
                      <el-option v-for="item in approvalStatus" :key="item.id" :label="item.dictDetailName" :value="item.dictDetailValue"></el-option>
                  </el-select>
              </el-col>
              <el-col :span="2"><span>进件日期：</span></el-col>
              <el-col :span="4">
                  <el-date-picker
                      v-model="creationTime"
                      type="daterange"
                      range-separator="-"
                      unlink-panels
                      size="mini"
                      start-placeholde="开始日期"
                      end-placeholde="结束日期">
                  </el-date-picker>
              </el-col>
            </el-row>
            <el-row class="mt20"> 
              <el-col :span="2"><span>区域：</span></el-col>
              <el-col :span="3">
                  <el-select placeholder="请选择" size="mini" v-model="entryOrgId" @change="changeRegional">
                      <el-option v-for="item in regionalData" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
              </el-col>
              <el-col :span="2"><span>城市：</span></el-col>
              <el-col :span="5">
                  <el-select placeholder="请选择" size="mini" v-model="secondLevelId">
                      <el-option v-for="item in cityData" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
              </el-col>
              <el-col :span="2"><span>信审开始时间：</span></el-col>
              <el-col :span="8">
                  <el-date-picker
                      v-model="oneStart"
                      type="daterange"
                      range-separator="-"
                      unlink-panels
                      size="mini"
                      start-placeholde="开始日期"
                      end-placeholde="结束日期">
                  </el-date-picker>
              </el-col>            
            </el-row>
             <el-row class="mt20">              
              <el-col :span="2"><span>审批结束时间：</span></el-col>
              <el-col :span="8">
                  <el-date-picker
                      v-model="oneEnd"
                      type="daterange"
                      range-separator="-"
                      unlink-panels
                      size="mini"
                      start-placeholde="开始日期"
                      end-placeholde="结束日期">
                  </el-date-picker>
              </el-col>
                <el-col :span="6"> 
                <el-button size="mini">重置</el-button>
                <el-button size="mini" type="primary" @click="handleQuery">查询</el-button>
            </el-col>
            </el-row>
            <el-row class="mt20">
                 </el-row>
  </div> <!-- 搜索区end --> 

            <el-table
                :data="workPieceData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                border
                style="width: 100%"
            >
                <el-table-column
                    type="index"
                    label="序号"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="orderNumber"
                    label="进件编号"
                    width="210">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="mini">{{scope.row.orderNumber}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="userName"
                    label="客户姓名"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="idCard"
                    label="证件号码"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="phoneNumber"
                    label="手机号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="productType"
                    label="申请产品">
                </el-table-column>
                <el-table-column
                    prop="approvalProductType"
                    label="审批产品">
                </el-table-column>
                <el-table-column :formatter="this.$common.GetAuditStatusBykey"
                    prop="auditeState"
                    label="审批状态">
                </el-table-column>
                <el-table-column
                    prop="auditType"
                    label="审批类型">
                </el-table-column>
                <el-table-column
                    prop="approvalAmount"
                    label="审批额度">
                </el-table-column>
                <el-table-column
                    prop="approvalTerm"
                    label="审批期限">
                </el-table-column>
                <el-table-column
                    prop="creUserUserName"
                    label="信审员">
                </el-table-column>
                <el-table-column
                    prop="creUserOrgname"
                    label="信审室">
                </el-table-column>
                <el-table-column
                    prop="secondLevelName"
                    label="所属门店">
                </el-table-column>
                <el-table-column
                    prop="creationTime"
                    label="进件时间">
                </el-table-column>
                <el-table-column
                    prop="oneStart"
                    label="信审开始时间">
                </el-table-column>
                <el-table-column
                    prop="oneEnd"
                    label="审批结束时间">
                </el-table-column>
            </el-table>            
            <div class="page_container">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5,10,15,20]"
                    :page-size="5"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="workPieceData.length">
                </el-pagination>    
            </div>

          </div><!-- 页面内容区end-->            
        </div><!-- 页面表格end -->
</template>
<script>
import ToolBar from '../Common/Toolbar/index'
import DashBoard from '../Common/Dashboard/index'
import { mapState } from 'vuex'
export default {
  components: {
    DashBoard,
    ToolBar
  },
  data() {
    return {
        currentPage:1,
        pageSize:5,
        //查询条件
        orderNumber:"",
        userName:"",
        auditeState:"",
        productType:"",
        idCard:"",
        phoneNumber:"",
        auditType:"",
        creationTime:"",
        entryOrgId:"",
        secondLevelId:"",
        oneStart:"",
        oneEnd:""
    }
  },
  methods: {
      handleClick(row) {
       
        this.$router.push({ name:'PriceDetail', query: {order_number:row.orderNumber, status:2, actName:row.auditType,bizType: "3000"}});
        //保存定价结论的参数
        this.$store.commit('addParamsForPrice',{
            actName: "",
            auditState: "",
            bizType: "3000",
            carInfoId: row.bIZINFID,
            creationTime: "",
            currentApprover: "",
            id: 0,
            orderNumber: row.orderNumber,
            pricingProductType: "",
            processId: "",
            staTus: "",
            transition: "",
            updateTime: ""
        });
        //保存审核意见的参数
        this.$store.commit('addParamsForAudit',{
            auditState:"",
            bizType: "3000",
            carInfoId:row.bIZINFID,
            creationTime:"",
            currentApprover:"",
            currentExaminationPost:"",
            id:0,
            orderNumber: row.orderNumber,
            processId: "",
            productType: "",
            staTus:"",
            updateTime:""
        });
        //保存反欺诈查询的参数
        this.$store.commit('addParamsForAnit', {
            approver: "",
            auditState: "",
            carInfoId: "",
            createTime: "",
            ext1: "",
            ext2: "",
            id: 0,
            orderNumber: row.orderNumber,
            processId: "", 
            staTus: "",
            subOption: "",
            updateTime: "",
            validateState: 0
        });
    },
    changeRegional(id) {
        this.$store.dispatch('getCity', {
            id:id
        })
    },
    handleSizeChange(val) {
        this.pageSize = val;
    },
    handleCurrentChange(val) {
        this.currentPage = val;
    },
    handleQuery() {
        let queryObj = {};
        queryObj.orderNumber = this.orderNumber;
        queryObj.userName = this.userName;
        queryObj.auditeState = this.auditeState;
        queryObj.productType = this.productType;
        queryObj.idCard = this.idCard;
        queryObj.phoneNumber = this.phoneNumber;
        queryObj.auditType = this.auditType;
        queryObj.creationTimeStart =this.creationTime[0]==undefined?"": new Date(this.creationTime[0]).toLocaleDateString();
        queryObj.creationTimeEnd = this.creationTime[1]==undefined?"":new Date(this.creationTime[1]).toLocaleDateString();
        queryObj.entryOrgId = this.entryOrgId;
        queryObj.secondLevelId = this.secondLevelId;
        queryObj.oneStartStart = this.oneStart[0]==undefined?"":new Date(this.oneStart[0]).toLocaleDateString();
        queryObj.oneStartEnd = this.oneStart[1]==undefined?"":new Date(this.oneStart[1]).toLocaleDateString();
        queryObj.oneEndStart = this.oneEnd[0]==undefined?"":new Date(this.oneEnd[0]).toLocaleDateString();
        queryObj.oneEndEnd = this.oneEnd[1]==undefined?"":new Date(this.oneEnd[1]).toLocaleDateString();
        this.$store.dispatch('getWorkPiece',queryObj);
    }
  },
  computed: mapState({
      workPieceData: state => state.myTask.work_piece,
      approvalType: state => state.myTask.approval_type,
      regionalData: state => state.myTask.regional_data,
      cityData: state => state.myTask.city_data,
      approvalStatus(state) {
          return state.myTask.case_status.filter((item) => {
              return item.dictDetailName.indexOf('定价') == -1
          })
      },
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
        }
  }),
  mounted() {
      //获取审批类型
      this.$store.dispatch('getApprovalType',{
          code: "AuditType"
      });
      //获取工作件列表
      this.$store.dispatch('getWorkPiece',{});
  }
}
</script>
<style lang='less'>
.p_title{
  padding:5px 0 10px 15px;
  font-size: 20px;
}
.p20{
    padding:20px 20px 0 0;
}
.mt20{
    margin-top:20px;
}
.ml{
    margin-left:184px;
}
.buttons{
    float: right;
    margin: 20px 40px 20px 0;
}
.table_container{
    width:1490px;
    margin:40px auto 0 auto;  
    
    .page_container{
        margin-top:20px;
        float:right;
    }
}
.el-col-2{
    span{
        float:right;
        font-size:14px;
    }
}
</style>
