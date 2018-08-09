<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="white"
            text-color="#303133" active-text-color="#409eff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [                 
                    {
                        icon: 'el-icon-tickets',
                        index: '1',
                        title: '工作台',
                        subs: [
                            {
                                index: 'pricepost',
                                title: '我的任务'
                            }, 
                            {
                                index: 'workpiece',
                                title: '工作件查询'
                            }
                        ]
                    },
                     {
                        icon: 'el-icon-view',
                        index: '2',
                        title: '信审管理',
                        subs: [
                            {
                                index: 'flowmonitor',
                                title: '业务流程监控'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '3',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'sysPosition',
                                title: '岗位管理'
                            }, 
                            {
                                index: 'organizationTree',
                                title: '机构管理'
                            }, 
                            {
                                index: 'sysUser',
                                title: '用户管理'
                            }, 
                            {
                                index: 'sysRole',
                                title: '角色管理'
                            }, 
                            {
                                index: 'sysAcl',
                                title: '角色资源管理'
                            }, 
                            {
                                index: 'sysRoleMap',
                                title: '角色权限管理'
                            }, 
                            {
                                index: 'sysResource',
                                title: '资源管理'
                            }, 
                            {
                                index: 'sysMenu',
                                title: '菜单管理'
                            }

                        ]
                    }
                    
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
