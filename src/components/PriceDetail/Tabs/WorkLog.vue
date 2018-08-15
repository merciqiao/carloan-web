<template>
    <div>
        <el-table
            :data="logs.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            border
            style="width:100%">
            <el-table-column
                type="index"
                label="序号"
                width="50">
            </el-table-column>
            <el-table-column
                prop="assignee"
                label="处理人"
                width="90">
            </el-table-column>
            <el-table-column
                prop="activityName"
                label="环节"
                width="90">
            </el-table-column>
            <el-table-column
                prop="describe"
                label="过程描述"
                width="150">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="开始时间"
                width="180"
                :formatter="this.$common.dateFormat">
            </el-table-column>
            <el-table-column
                prop="endTime"
                label="完成时间"
                width="180"
                :formatter="this.$common.dateFormat">
            </el-table-column>
            <el-table-column
                prop="transition"
                label="执行备注">
            </el-table-column>
        </el-table>
        <div class="page_container">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[2,10,15,20]"
                :page-size="2"
                layout="total, sizes, prev, pager, next, jumper"
                :total="logs.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            currentPage: 1,
            pageSize:2,
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        }
    },
    props: ['logs']
}
</script>
<style lang="less">

</style>

