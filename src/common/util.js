/**
 * name:util工具类型
 * des:提供公共方法
 * author:qlx
 */
exports.install = function (Vue, options) {
    var Common= Vue.prototype.$common={};
    Common.test = function (){
        alert('执行工具方法test成功');
    };
};