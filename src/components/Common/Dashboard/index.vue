<template>
    <el-row>
        <el-col :span="4" class="dashHeight" :style="dashHeight">
            <el-menu
              default-active="$route.path"
              router
              class="dashHeight"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">工作台</span>
                    </template>
                    <el-menu-item index="/pricepost">我的任务</el-menu-item>
                    <el-menu-item index="/workpiece">工作件查询</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">信审管理</span>
                    </template>
                    <el-menu-item index="/flowmonitor">业务流程监控</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                 <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>系统管理</span>
                    </template>                
                    <el-submenu index="3-1">
                    <template slot="title">机构管理</template>
                     <el-menu-item index="/sysPosition">岗位管理</el-menu-item>
                    <el-menu-item index="">机构管理</el-menu-item>
                     <el-menu-item index="">用户管理</el-menu-item>
                    </el-submenu>
                </el-submenu>
                
            </el-menu>
        </el-col>
        <el-col :span="20">
            <slot name="content"></slot>
        </el-col>
    </el-row>
</template>
<style lang="less">
.el-menu{
    border-right:none;
}
.el-submenu{
    border-bottom:1px solid #e6e6e6;
}
</style>
<script>
export default {
    data() {
        return {
            dashHeight: {
                height: document.documentElement.clientHeight + "px",
                borderRight: "1px solid #e6e6e6"
            }
        }
    }
}
</script>

