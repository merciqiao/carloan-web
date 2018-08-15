import {lazy} from './lazyLoading'
/**
 * 拼接动态路由
 */
export default (routerList, sysMenuList) => {
    toRoutes(routerList, sysMenuList)
}
function toRoutes(routerList, sysMenuList) {
    if (sysMenuList) {
        for (var i = 0; i < sysMenuList.length; i++) {
            var sysMenuNode = sysMenuList[i];
            if (sysMenuNode.resoure_type == 'url') {
                var code=sysMenuNode.permission;
                var routeNode = {
                    name: code,
                    path: '/' + code,
                    component: lazy(code),
                    meta: { title: sysMenuNode.menuName },
                    children:[]
                };
                 //子节点存在
                if (sysMenuNode.sysMenuVoChild && sysMenuNode.sysMenuVoChild.length > 0) {
                    toRoutes(routeNode.children,sysMenuNode.sysMenuVoChild);
                }
                if(code&&code!=''){
                    routerList.push(routeNode);
                }
            }
            else{
                 //子节点存在
                if (sysMenuNode.sysMenuVoChild && sysMenuNode.sysMenuVoChild.length > 0) {
                    toRoutes(routerList,sysMenuNode.sysMenuVoChild);
                }
            }
        }
    }
}