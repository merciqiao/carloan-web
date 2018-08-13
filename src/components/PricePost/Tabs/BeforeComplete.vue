<template>
    <div class="p20">
        <el-row>
            <el-col :span="2"><span>进件编号：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="bIZINFNO"></el-input></el-col>
            <el-col :span="2"><span>承租人姓名：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="uSERNAME"></el-input></el-col>
            <el-col :span="2"><span>任务类型：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="cURACTNAME">
                    <el-option v-for="item in taskType" :key="item.id" :label="item.dictDetailName" :value="item.dictDetailValue"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>案件状态：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="oRDERSTATUS">
                    <el-option v-for="item in caseStatus" :key="item.id" :label="item.dictDetailName" :value="item.dictDetailValue"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="2"><span>客户经理：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="cUSTOMERMANAGER"></el-input></el-col>
            <el-col :span="2"><span>区域：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="SECONDLEVELID" @change="changeRegional">
                    <el-option v-for="item in regionalData" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>城市：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="eNTRYORGID">
                    <el-option v-for="item in cityData" :key="item.id" :label="item.name" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <div class="ml">
                    <el-button size="mini" @click="resetQuery">重置</el-button>
                    <el-button size="mini" type="primary" @click="handleQuery">查询</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row class="mt20">
        </el-row>
       <div class="table"> <!-- 页面表格begin -->
            <el-table
                :data="beforeCompleteData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                border
                style="width: 100%"
            >
                <el-table-column
                    type="index"
                    label="序号"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="bIZINFNO"
                    label="进件编号"
                    width="210">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="mini">{{scope.row.bIZINFNO}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="uSERNAME"
                    label="客户姓名"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="pHONENUMBER"
                    label="手机号码"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="pRODUCTTYPE"
                    label="产品类型"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="cURACTNAME"
                    label="任务类型">
                </el-table-column>
                <el-table-column
                    prop="oRDERSTATUS"
                    label="案件状态">
                </el-table-column>
                <el-table-column
                    prop="eNTRYORGName"
                    label="进件门店">
                </el-table-column>
                <el-table-column
                    prop="cUSTOMERMANAGER"
                    label="客户经理">
                </el-table-column>
                <el-table-column
                    prop="eNTRYDATE"
                    label="进件时间">
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
                    :total="beforeCompleteData.length">
                </el-pagination>    
            </div>
         </div><!-- 页面表格end -->
    </div>
</template>
<script>
import { mapState } from 'vuex' 
export default {
    data() {
        return {
            currentPage:1,
            pageSize:5,
            //查询
            bIZINFNO: '',
            uSERNAME: '',
            cURACTNAME: '',
            oRDERSTATUS: '',
            cUSTOMERMANAGER: '',
            SECONDLEVELID: '',
            eNTRYORGID: ''
        }
    },
    methods: {
        handleClick(row) {
            this.$router.push({ name:'PriceDetail', query: {order_number:row.bIZINFNO, status:2, actName: row.cURACTNAME,bizType: row.bIZTYPE}});
            //保存定价结论的参数
            this.$store.commit('addParamsForPrice',{
                actName: row.cURACTNAME,
                auditState: "",
                bizType: row.bIZTYPE,
                carInfoId: "",
                creationTime: "",
                currentApprover: "",
                id: 0,
                orderNumber: row.bIZINFNO,
                pricingProductType: "",
                processId: row.cUREXEID,
                staTus: "",
                transition: "",
                updateTime: ""
            });
            //保存审核意见的参数
            this.$store.commit('addParamsForAudit',{
                auditState:"",
                bizType: row.bIZTYPE,
                carInfoId:"",
                creationTime:"",
                currentApprover:"",
                currentExaminationPost:row.cURACTNAME,
                id:0,
                orderNumber: row.bIZINFNO,
                processId: row.cUREXEID,
                productType: row.pRODUCTTYPE,
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
                 orderNumber: row.bIZINFNO,
                 processId: row.cUREXEID, 
                 staTus: "",
                 subOption: "",
                 updateTime: "",
                 validateState: 0
            });
        },
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        handleQuery() {
            let queryObj = {};
            queryObj.bIZINFNO = this.bIZINFNO;
            queryObj.uSERNAME = this.uSERNAME;
            queryObj.cURACTNAME = this.cURACTNAME;
            queryObj.oRDERSTATUS = this.oRDERSTATUS;
            queryObj.cUSTOMERMANAGER = this.cUSTOMERMANAGER;
            queryObj.SECONDLEVELID = this.SECONDLEVELID;
            queryObj.eNTRYORGID = this.eNTRYORGID;
            this.$store.dispatch('getBeforeComplete',queryObj);
        },
        changeRegional(id) {
            this.$store.dispatch('getCity', {
                id:id
            })
        },
        resetQuery() {
            this.bIZINFNO = "";
            this.uSERNAME = "";
            this.cURACTNAME = "";
            this.oRDERSTATUS = "";
            this.cUSTOMERMANAGER = "";
            this.SECONDLEVELID = "";
            this.eNTRYORGID = "";
        }
    },
    computed:mapState({
        beforeCompleteData: state => state.myTask.beforeComplete_case,
        regionalData: state => state.myTask.regional_data,
        cityData: state => state.myTask.city_data,
        taskType: state => state.myTask.task_type,
        caseStatus: state => state.myTask.case_status,
    }),
    mounted() {
        this.$store.dispatch('getBeforeComplete',{});
        this.$store.dispatch('getRegional');
    }
}
</script>

<style lang="less">
.p20{
    padding:20px 20px 0 0;
}
.mt20{
    margin-top:20px;
}
.ml{
    margin-left:184px;
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

