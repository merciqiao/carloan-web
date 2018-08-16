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
    /**
     * 在新页面打开
     * @param {*} $this 
     * @param {*} routeName 
     * @param {*} query 
     */
    Common.OpenNewPage=function($this,routeName,query){
      let routeData = $this.$router.resolve({
        name: routeName,
        query: query,
      });
     window.open(routeData.href, '_blank');
    }
    Common.GetBizTypenameBykey=function(row, column)
    { //alert(row.bIZTYPE);
        var keyName="";
        if(row.bIZTYPE=="3000"){
            keyName="车贷信审审批"
        }
        else if(row.bIZTYPE=="3001"){
            keyName="车贷定价审批"
        }
        else if(row.bIZTYPE=="3002"){
            keyName="车贷复议审批"
        }
        // obj.forEach(dic => { 
        //     if(dic.dictDetailValue==row.id)
        //     {
        //       keyName=dic.dictDetailName;
        //     }                
        // });
        return keyName;
                    
    };
    Common.GetAuditStatusBykey=function(row, column)
    
      { var status=row.oRDERSTATUS;
        if(status==undefined||status==""){status=row.auditeState}
        switch (status) {
            case "2000":
              return "定价审核中-审核中";
              break;
            case "2100":
              return "定价审核中-补件";
              break;
            case "2200":
              return "定价审核结束-同意";
              break;
            case "2700":
              return "定价审核结束-拒绝";
              break;
            case "2300":
              return "审核中-审核中";
              break;
            case "2400":
              return "审核中-补件";
              break;
            case "3100":
              return "审核结束-同意";
              break;
            case "3300":
              return "审核结束-拒绝";
              break;
              case "3400":
              return "审核中-复议";
              break;
              case "3500":
              return "审核结束-复议同意";
              break;
              case "3600":
              return "审核结束-复议拒绝";
              break;
              case "2500":
              return "审核中-疑似欺诈";
              break;
              case "2600":
              return "审核结束-欺诈拒绝";
              break;

          }
          return "";
                    
    };
    Common.dateFormat=function(row, column) {
               var date = row[column.property];
          if (date == undefined) {
             return "";
          }
          return moment(date).format("YYYY-MM-DD HH:mm:ss");
            };
};