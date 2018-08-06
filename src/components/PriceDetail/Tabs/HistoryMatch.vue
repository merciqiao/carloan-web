<template>
    <div>
        <el-collapse v-model="his_col_val">
            <el-collapse-item title="车牌号匹配" name="1">
                <el-table
                    :data="carNumMatch.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="entryDate"
                        label="进件时间">
                    </el-table-column>
                    <el-table-column
                        prop="orderNumber"
                        label="进件编号">
                    </el-table-column>
                    <el-table-column
                        prop="productType"
                        label="产品名称">
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        label="进件人姓名">
                    </el-table-column>
                    <el-table-column
                        prop="idCard"
                        label="进件人身份证号">
                    </el-table-column>
                    <el-table-column
                        prop="doyouApprove"
                        label="是否批复">
                    </el-table-column>
                    <el-table-column
                        prop="approvalAmount"
                        label="审批金额">
                    </el-table-column>
                    <el-table-column
                        prop="approvalTerm"
                        label="审批期限">
                    </el-table-column>
                    <el-table-column
                        prop="creLastUser"
                        label="终审人员">
                    </el-table-column>
                    <el-table-column
                        prop="secondLevelName"
                        label="进件门店">
                    </el-table-column>
                    <el-table-column
                        prop="customerManager"
                        label="客户经理">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店客服">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店评估师">
                    </el-table-column>
                </el-table>
                <div class="page_container">
                    <el-pagination
                        @size-change="handleSizeChange1"
                        @current-change="handleCurrentChange1"
                        :current-page="currentPage1"
                        :page-sizes="[2,10,15,20]"
                        :page-size="2"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="carNumMatch.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="车架号匹配" name="2">
                <el-table
                    :data="carFraMatch.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="entryDate"
                        label="进件时间">
                    </el-table-column>
                    <el-table-column
                        prop="orderNumber"
                        label="进件编号">
                    </el-table-column>
                    <el-table-column
                        prop="productType"
                        label="产品名称">
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        label="进件人姓名">
                    </el-table-column>
                    <el-table-column
                        prop="idCard"
                        label="进件人身份证号">
                    </el-table-column>
                    <el-table-column
                        prop="doyouApprove"
                        label="是否批复">
                    </el-table-column>
                    <el-table-column
                        prop="approvalAmount"
                        label="审批金额">
                    </el-table-column>
                    <el-table-column
                        prop="approvalTerm"
                        label="审批期限">
                    </el-table-column>
                    <el-table-column
                        prop="creLastUser"
                        label="终审人员">
                    </el-table-column>
                    <el-table-column
                        prop="secondLevelName"
                        label="进件门店">
                    </el-table-column>
                    <el-table-column
                        prop="customerManager"
                        label="客户经理">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店客服">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店评估师">
                    </el-table-column>
                </el-table>
                <div class="page_container">
                    <el-pagination
                        @size-change="handleSizeChange2"
                        @current-change="handleCurrentChange2"
                        :current-page="currentPage2"
                        :page-sizes="[2,10,15,20]"
                        :page-size="2"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="carFraMatch.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="身份证匹配" name="3">
                <el-table
                    :data="idMatch.slice((currentPage3-1)*pageSize3,currentPage3*pageSize3)"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="entryDate"
                        label="进件时间">
                    </el-table-column>
                    <el-table-column
                        prop="orderNumber"
                        label="进件编号">
                    </el-table-column>
                    <el-table-column
                        prop="productType"
                        label="产品名称">
                    </el-table-column>
                    <el-table-column
                        prop="carNumber"
                        label="进件人车牌号">
                    </el-table-column>
                    <el-table-column
                        prop="carFrameNumber"
                        label="进件人车架号">
                    </el-table-column>
                    <el-table-column
                        prop="doyouApprove"
                        label="是否批复">
                    </el-table-column>
                    <el-table-column
                        prop="approvalAmount"
                        label="审批金额">
                    </el-table-column>
                    <el-table-column
                        prop="approvalTerm"
                        label="审批期限">
                    </el-table-column>
                    <el-table-column
                        prop="creLastUser"
                        label="终审人员">
                    </el-table-column>
                    <el-table-column
                        prop="secondLevelName"
                        label="进件门店">
                    </el-table-column>
                    <el-table-column
                        prop="customerManager"
                        label="客户经理">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店客服">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店评估师">
                    </el-table-column>
                </el-table>
                <div class="page_container">
                    <el-pagination
                        @size-change="handleSizeChange3"
                        @current-change="handleCurrentChange3"
                        :current-page="currentPage3"
                        :page-sizes="[2,10,15,20]"
                        :page-size="2"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="idMatch.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="手机号匹配" name="4">
                <el-table
                    :data="phoneMatch.slice((currentPage4-1)*pageSize4,currentPage4*pageSize4)"
                    border
                    style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="entryDate"
                        label="进件时间">
                    </el-table-column>
                    <el-table-column
                        prop="orderNumber"
                        label="进件编号">
                    </el-table-column>
                    <el-table-column
                        prop="productType"
                        label="产品名称">
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        label="进件人姓名">
                    </el-table-column>
                    <el-table-column
                        prop="doyouApprove"
                        label="是否批复">
                    </el-table-column>
                    <el-table-column
                        prop="approvalAmount"
                        label="审批金额">
                    </el-table-column>
                    <el-table-column
                        prop="approvalTerm"
                        label="审批期限">
                    </el-table-column>
                    <el-table-column
                        prop="creLastUser"
                        label="终审人员">
                    </el-table-column>
                    <el-table-column
                        prop="secondLevelName"
                        label="进件门店">
                    </el-table-column>
                    <el-table-column
                        prop="customerManager"
                        label="客户经理">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店客服">
                    </el-table-column>
                    <el-table-column
                        prop="storeAppraiser"
                        label="门店评估师">
                    </el-table-column>
                </el-table>
                <div class="page_container">
                    <el-pagination
                        @size-change="handleSizeChange4"
                        @current-change="handleCurrentChange4"
                        :current-page="currentPage4"
                        :page-sizes="[2,10,15,20]"
                        :page-size="2"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="phoneMatch.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default{
    data() {
        return {
            his_col_val: ['1','2','3','4'],
            currentPage1: 1,
            pageSize1:2,
            currentPage2: 1,
            pageSize2:2,
            currentPage3: 1,
            pageSize3:2,
            currentPage4: 1,
            pageSize4:2,
        }
    },
    methods: {
        handleSizeChange1(val) {
            this.pageSize1 = val;
        },
        handleCurrentChange1(val) {
            this.currentPage1 = val;
        },
        handleSizeChange2(val) {
            this.pageSize2 = val;
        },
        handleCurrentChange2(val) {
            this.currentPage2 = val;
        },
        handleSizeChange3(val) {
            this.pageSize3 = val;
        },
        handleCurrentChange3(val) {
            this.currentPage3 = val;
        },
        handleSizeChange4(val) {
            this.pageSize4 = val;
        },
        handleCurrentChange4(val) {
            this.currentPage4 = val;
        }
    },
    props: ['carNumMatch','carFraMatch','idMatch','phoneMatch']
}
</script>
<style lang="less">
.el-collapse-item__header{
    background-color: #d0d0d0;
    padding-left: 20px;
}
.page_container{
    margin:10px 0 10px 0;
    float:right;
}
</style>

