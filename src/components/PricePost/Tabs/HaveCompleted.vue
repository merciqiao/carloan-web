<template>
    <div class="p20">
        <el-row>
            <el-col :span="2"><span>进件编号：</span></el-col>
            <el-col :span="4"><el-input size="mini"></el-input></el-col>
            <el-col :span="2"><span>产品类型：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="productValue">
                    <el-option v-for="item in productType" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>任务类型：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="taskValue">
                    <el-option v-for="item in taskType" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>案件状态：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="statusValue">
                    <el-option v-for="item in taskStatus" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="2"><span>信审接单时间：</span></el-col>
            <el-col :span="4">
                <el-date-picker
                    v-model="receiveDate"
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
                    v-model="finishDate"
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
                    <el-button size="mini">重置</el-button>
                    <el-button size="mini" type="primary">查询</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="table_container">
            <el-table
                :data="beforeCheckData.slice(0,5)"
                border
                style="width: 100%"
            >
                <el-table-column
                    prop="id"
                    label="序号"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="进件编号"
                    width="210">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="产品类型">
                </el-table-column>
                <el-table-column
                    prop="approvalResult"
                    label="审批结果">
                </el-table-column>
                <el-table-column
                    prop="taskType"
                    label="任务类型">
                </el-table-column>
                <el-table-column
                    prop="jdTime"
                    label="信审接单时间">
                </el-table-column>
                <el-table-column
                    prop="bjTime"
                    label="办结时间">
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
                    :total="beforeCheckData.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage:1,
            pageSize:5,
            pageNumber:1,
            taskType: [{
                value:'1',
                label: '定价审批'
            },{
                value:'2',
                label: '车贷审批'
            },{
                value:'3',
                label: '车贷复议审批'
            }],
            taskStatus: [{
                value:'1',
                label: '状态一'
            },{
                value:'2',
                label: '状态二'
            },{
                value:'3',
                label: '状态三'
            }],
            productType: [{
                value:'1',
                label:'产品状态一'
            },{
                value:'2',
                label:'产品状态二'
            },{
                value:'3',
                label:'产品状态三'
            }],
            taskValue: '',
            statusValue: '',
            provinceValue: '',
            cityValue: '',
            productValue: '',
            receiveDate: '',
            finishDate: '',
            beforeCheckData: [{
                id:'1',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'2',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'3',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'4',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'5',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'6',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'7',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            },{
                id:'8',
                number:'BJPHYB2017060800026XXX',
                type: '鸿途融',
                approvalResult:'同意',
                taskType:'信审审批',
                jdTime:'2017-06-07 12:04:33',
                bjTime:'2017-06-07 14:04:33'
            }],
            displayTableData: [].concat(this.beforeCheckData),
            //查询modal
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            let startRow = (val - 1) * this.pageSize + 1;
            let endRow = val * this.pageSize;
            this.beforeCheckData = this.beforeCheckData.slice(startRow,endRow);
            console.log(this.displayTableData.length);
            console.log(this.receiveDate);
        }
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

