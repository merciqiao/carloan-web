<template>
    <el-row>
        <el-col :span="4" class="dashHeight" :style="dashHeight">
            <el-menu
              default-active="1"
              class="dashHeight"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">工作台</span>
                    </template>
                    <el-menu-item index="1-1">我的任务</el-menu-item>
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

