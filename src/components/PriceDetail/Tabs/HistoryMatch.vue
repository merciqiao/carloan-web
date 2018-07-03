<template>
    <div>
        <el-collapse v-model="his_col_val">
            <el-collapse-item title="车牌号匹配" name="1">
                <el-table
                    :data="plateData"
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
                        @size-change="handlePlateSizeChange"
                        @current-change="handlePlateCurrentChange"
                        :current-page="currentPlatePage"
                        :page-sizes="[5,10,15,20]"
                        :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="plateData.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="车架号匹配" name="2">
                <el-table
                    :data="frameData"
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
                        @size-change="handleFrameSizeChange"
                        @current-change="handleFrameCurrentChange"
                        :current-page="currentFramePage"
                        :page-sizes="[5,10,15,20]"
                        :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="frameData.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="身份证匹配" name="3">
                <el-table
                    :data="idCardData"
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
                        @size-change="handleFrameSizeChange"
                        @current-change="handleFrameCurrentChange"
                        :current-page="currentFramePage"
                        :page-sizes="[5,10,15,20]"
                        :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="frameData.length">
                    </el-pagination>
                </div>
            </el-collapse-item>
            <el-collapse-item title="手机号匹配" name="4">
                <el-table
                    :data="telData"
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
                        @size-change="handleFrameSizeChange"
                        @current-change="handleFrameCurrentChange"
                        :current-page="currentFramePage"
                        :page-sizes="[5,10,15,20]"
                        :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="frameData.length">
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
            currentPlatePage: 1,
            currentFramePage: 1,
            pageSize:5,
            pageNumber:1,
            plateData: [{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '小王',
                idCard: '110***',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            },{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '小王',
                idCard: '110***',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            }],
            frameData: [{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '小王',
                idCard: '110***',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            },{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '小王',
                idCard: '110***',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            }],
            idCardData: [{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                carNumber: '###',
                carFrameNumber: '###',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            },{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                carNumber: '###',
                carFrameNumber: '###',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            }],
            telData: [{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '###',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            },{
                entryDate: '2011-09-05',
                orderNumber: 'BJ00069888',
                productType: '鸿途融',
                userName: '###',
                doyouApprove: '###',
                approvalAmount: '###',
                approvalTerm: '###',
                creLastUser: '###',
                secondLevelName: '###',
                customerManager: '###',
                storeAppraiser: '###',
            }],
        }
    },
    methods: {
        handlePlateSizeChange(val) {
            this.pageSize = val;
        },
        handlePlateCurrentChange(val) {
            console.log(`当前页: ${val}`);
            let startRow = (val - 1) * this.pageSize + 1;
            let endRow = val * this.pageSize;
            this.plateData = this.plateData.slice(startRow,endRow);
        },
        handleFrameSizeChange(val) {
            this.pageSize = val;
        },
        handleFrameCurrentChange(val) {
            console.log(`当前页: ${val}`);
            let startRow = (val - 1) * this.pageSize + 1;
            let endRow = val * this.pageSize;
            this.frameData = this.frameData.slice(startRow,endRow);
        },
    }
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

