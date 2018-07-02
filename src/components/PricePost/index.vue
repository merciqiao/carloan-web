<template>
    <div>
      <tool-bar></tool-bar>
      <dash-board>
        <div slot="content">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="待审核案件" name="beforeCheck">
              <before-check></before-check>
            </el-tab-pane>
            <el-tab-pane label="待完成案件" name="beforeComplete">
              <before-complete></before-complete>
            </el-tab-pane>
            <el-tab-pane label="已完成案件" name="haveCompleted">
              <have-completed></have-completed>
            </el-tab-pane>
          </el-tabs>
        </div>
      </dash-board>
    </div>
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
