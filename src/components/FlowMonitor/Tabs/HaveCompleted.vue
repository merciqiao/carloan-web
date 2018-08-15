<template>
    <div class="p20">
        <el-row>
            <el-col :span="2"><span>进件编号：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="bIZINFNO"></el-input></el-col>
            <el-col :span="2"><span>客户姓名：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="uSERNAME"></el-input></el-col>
            <el-col :span="2"><span>任务归属人：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="aSSIGNEE"></el-input></el-col>
            <el-col :span="2"><span>产品类型：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="pRODUCTTYPE">
                    <el-option v-for="item in productList" :key="item.productCode" :label="item.productName" :value="item.productCode"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="2"><span>区域：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="SECONDLEVELID" @change="changeRegional">
                    <el-option v-for="item in regionalData" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>城市：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="eNTRYORGID">
                    <el-option v-for="item in cityData" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>发起时间：</span></el-col>
            <el-col :span="4"><el-input size="mini" v-model="crMsgdateStr"></el-input></el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="2"><span>信审接单时间：</span></el-col>
            <el-col :span="7">
                <el-date-picker
                    v-model="eNTRYDATE"
                    type="daterange"
                    range-separator="-"
                    unlink-panels
                    size="mini"
                    start-placeholde="开始日期"
                    end-placeholde="结束日期">
                </el-date-picker>
            </el-col>
            <el-col :span="2"><span>办结时间：</span></el-col>
            <el-col :span="4">
                <el-date-picker
                    v-model="eNDDATE"
                    type="daterange"
                    range-separator="-"
                    unlink-panels
                    size="mini"
                    start-placeholde="开始日期"
                    end-placeholde="结束日期">
                </el-date-picker>
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
                :data="completedMonitor.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                    label="客户姓名">
                </el-table-column>
                <el-table-column
                    prop="oRDERSTATUS"
                    label="任务当前状态">
                </el-table-column>
                <el-table-column
                    prop="pRODUCTTYPE"
                    label="产品类型">
                </el-table-column>
                <el-table-column
                    prop="cURACTNAME"
                    label="任务类型">
                </el-table-column>
                <el-table-column
                    prop="PROINSTANCESTATE"
                    label="流程状态">
                </el-table-column>
                <el-table-column
                    prop="eNTRYORGName"
                    label="进件门店">
                </el-table-column>
                <el-table-column
                    prop="crMsgdateStr"
                    label="发起时间">
                </el-table-column>
                <el-table-column
                    prop="eNTRYDATEStr"
                    label="信审接单时间">
                </el-table-column>
                <el-table-column
                    prop="eNDDATEStr"
                    label="完结时间">
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
                    :total="completedMonitor.length">
                </el-pagination>
            </div>
        </div><!-- 页面表格end -->
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            currentPage:1,
            pageSize:5,
            pageNumber:1,
            /*查询字段*/
            bIZINFNO:"",
            uSERNAME:"",
            aSSIGNEE:"",
            pRODUCTTYPE:"",
            SECONDLEVELID:"",
            eNTRYORGID:"",
            crMsgdateStr:"",
            eNTRYDATE:"",
            eNDDATE:""
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        changeRegional(id) {
            this.$store.dispatch('getCity', {
                id:id
            })
        },
        handleClick(row) {
            this.$router.push({ name:'PriceDetail', query: {order_number:row.bIZINFNO, status:2, actName: row.cURACTNAME, bizType: row.bIZTYPE }});
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
        handleQuery() {
            let queryObj = {};
            queryObj.bIZINFNO = this.bIZINFNO;
            queryObj.uSERNAME = this.uSERNAME;
            queryObj.aSSIGNEE = this.aSSIGNEE;
            queryObj.pRODUCTTYPE = this.pRODUCTTYPE;
            queryObj.SECONDLEVELID = this.SECONDLEVELID;
            queryObj.eNTRYORGID = this.eNTRYORGID;
            queryObj.crMsgdateStr = this.crMsgdateStr;
            queryObj.eNTRYDATEStr = new Date(this.eNTRYDATE[0]).toLocaleDateString();
            queryObj.eNTRYDATEEnd = new Date(this.eNTRYDATE[1]).toLocaleDateString();
            queryObj.eNDDATEStr = new Date(this.eNDDATE[0]).toLocaleDateString();
            queryObj.eNDDATEEnd = new Date(this.eNDDATE[1]).toLocaleDateString();
            this.$store.dispatch('getCompletedMonitor',queryObj);
        },
        resetQuery() {
            this.bIZINFNO = "",
            this.uSERNAME = "",
            this.aSSIGNEE = "",
            this.pRODUCTTYPE = "",
            this.SECONDLEVELID = "",
            this.eNTRYORGID = "",
            this.crMsgdateStr = "",
            this.eNTRYDATE = "",
            this.eNDDATE =""
        }
    },
    computed: mapState({
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
        completedMonitor: state => state.myTask.haveCompleted_monitor,
        regionalData: state => state.myTask.regional_data,
        cityData: state => state.myTask.city_data,
    }),
    mounted() {
        this.$store.dispatch('getCompletedMonitor',{});
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

