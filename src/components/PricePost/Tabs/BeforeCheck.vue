<template>
    <div class="p20">
        <el-row>
            <el-col :span="2"><span>进件编号：</span></el-col>
            <el-col :span="4"><el-input size="mini"></el-input></el-col>
            <el-col :span="2"><span>承租人姓名：</span></el-col>
            <el-col :span="4"><el-input size="mini"></el-input></el-col>
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
            <el-col :span="2"><span>客户经理：</span></el-col>
            <el-col :span="4"><el-input size="mini"></el-input></el-col>
            <el-col :span="2"><span>区域：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="provinceValue">
                    <el-option v-for="item in provinceName" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2"><span>城市：</span></el-col>
            <el-col :span="4">
                <el-select placeholder="请选择" size="mini" v-model="cityValue">
                    <el-option v-for="item in cityName" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
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
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="mini">{{scope.row.number}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="承租人姓名"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机号码"
                    width="130">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="产品类型"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="taskType"
                    label="任务类型">
                </el-table-column>
                <el-table-column
                    prop="caseStatus"
                    label="案件状态">
                </el-table-column>
                <el-table-column
                    prop="store"
                    label="进件门店">
                </el-table-column>
                <el-table-column
                    prop="manager"
                    label="客户经理">
                </el-table-column>
                <el-table-column
                    prop="enterTime"
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
            provinceName: [{
                value:'1',
                label:'北京'
            },{
                value:'2',
                label:'天津'
            },{
                value:'3',
                label:'上海'
            }],
            cityName: [{
                value:'1',
                label:'杭州'
            },{
                value:'2',
                label:'合肥'
            },{
                value:'3',
                label:'沈阳'
            }],
            taskValue: '',
            statusValue: '',
            provinceValue: '',
            cityValue: '',
            beforeCheckData: [{
                id:'1',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'2',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'3',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'4',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'5',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'6',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'7',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            },{
                id:'8',
                number:'BJPHYB2017060800026XXX',
                name:'张三',
                phone:'13423834934',
                type: '鸿途融',
                taskType:'定价审批',
                caseStatus:'未完成',
                store:'光华路店',
                manager:'王总',
                enterTime:'2018-6-28 15:20'
            }],
            displayTableData: [].concat(this.beforeCheckData)
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
        },
        handleClick(row) {
            console.log(row);
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

