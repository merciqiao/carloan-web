/**
 * 
 * 懒加载动态路由 
 */
function lazy(code) {

    //return  resolve => require(["@/components/" + name + ".vue"], resolve)
    return getComponetByPath('/'+code);


}
function getComponetByPath(path){
    for(var i=0;i<dynamicRouter.length;i++){
        var route=dynamicRouter[i];
        if(route.path==path){
            return route.component;
        }
    }
}
/**
 * 路由定义
 * path跟配置里的资源标示对应,同时跟url地址对应
 */
const dynamicRouter = [
    {
        name: 'PricePost',
        path: '/pricepost',
        component: resolve => require(['@/components/PricePost/index.vue'], resolve),
        meta: { title: '我的任务' }
    },
    {
        name: 'WorkPiece',
        path: '/workpiece',
        component: resolve => require(['@/components/WorkPiece/index.vue'], resolve),
        meta: { title: '工作件查询' }
    },
    {
        name: 'FlowMonitor',
        path: '/flowmonitor',
        component: resolve => require(['@/components/FlowMonitor/index.vue'], resolve),
        meta: { title: '业务流程监控' }
    },
    {
        name: 'SysPosition',
        path: '/sysPosition',
        component: resolve => require(['@/components/Admin/SysPosition.vue'], resolve),
        meta: { title: '岗位管理' }
    },
    {
        name: 'OrganizationTree',
        path: '/organizationTree',
        component: resolve => require(['@/components/Admin/OrganizationTree.vue'], resolve),
        meta: { title: '机构管理' }
    },
    {
        name: 'SysUser',
        path: '/sysUser',
        component: resolve => require(['@/components/Admin/SysUser.vue'], resolve),
        meta: { title: '用户管理' }
    },
    {
        name: 'SysAcl',
        path: '/sysAcl',
        component: resolve => require(['@/components/Admin/SysAcl.vue'], resolve),
        meta: { title: '角色资源管理' }
    },
    {
        name: 'SysMenu',
        path: '/sysMenu',
        component: resolve => require(['@/components/Admin/SysMenu.vue'], resolve),
        meta: { title: '菜单管理' }
    },
    {
        name: 'SysResource',
        path: '/sysResource',
        component: resolve => require(['@/components/Admin/SysResource.vue'], resolve),
        meta: { title: '资源管理' }
    },
    {
        name: 'SysRole',
        path: '/sysRole',
        component: resolve => require(['@/components/Admin/SysRole.vue'], resolve),
        meta: { title: '角色管理' }
    },
    {
        name: 'sysRoleMap',
        path: '/sysRoleMap',
        component: resolve => require(['@/components/Admin/SysRoleMap.vue'], resolve),
        meta: { title: '角色权限管理' }
    },
     {
        name: 'pricedetail',
        path: '/pricedetail',
        component: resolve => require(['@/components/PriceDetail/index.vue'], resolve),
        meta: { title: '审核详情页' }
    }
]
export { lazy }

