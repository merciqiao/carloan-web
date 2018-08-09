<template>
  <div class="table"> <!-- 页面表格begin -->
          <div class="crumbs"> <!-- 页面标题begin -->
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item><i class="el-icon-tickets"></i> 业务流程监控</el-breadcrumb-item>
              </el-breadcrumb>
          </div> <!-- 页面标题end--> 
          <div class="container"><!-- 页面内容区begin -->
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="待审核监控" name="beforeCheck">
              <before-check></before-check>
            </el-tab-pane>
            <el-tab-pane label="待完成监控" name="beforeComplete">
              <before-complete></before-complete>
            </el-tab-pane>
            <el-tab-pane label="已完成监控" name="haveCompleted">
              <have-completed></have-completed>
            </el-tab-pane>
          </el-tabs>
        </div><!-- 页面内容区end-->            
        </div><!-- 页面表格end -->
</template>
<style lang='less'>
.test{
  color:red;
}
</style>
<script>
import ToolBar from '../Common/Toolbar/index'
import DashBoard from '../Common/Dashboard/index'
import BeforeCheck from './Tabs/BeforeCheck'
import BeforeComplete from './Tabs/BeforeComplete'
import HaveCompleted from './Tabs/HaveCompleted'
export default {
  components: {
    DashBoard,
    ToolBar,
    BeforeCheck,
    BeforeComplete,
    HaveCompleted
  },
  data() {
    return {
      activeName: 'beforeCheck'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
