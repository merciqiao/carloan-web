import Axios from "axios";
import qs from 'qs';

export default {
    state: {
        beforeCheck_case: [],
        beforeComplete_case: [],
        haveCompleted_case: [],
        beforeCheck_monitor: [],
        beforeComplete_monitor: [],
        haveCompleted_monitor: [],
        work_piece:[],
        regional_data: [],
        city_data: [],
        audit_tabs: {},
        params_price: {},
        params_audit: {},
        params_anit:{},
        task_type: [],
        case_status: [],
        fraud_reason: [],
        approval_type: []
    },
    mutations: {
        addBeforeCheck(state,payload) {
            state.beforeCheck_case = [].concat(payload.com_before_check);
        },
        addBeforeComplete(state,payload) {
            state.beforeComplete_case = [].concat(payload.com_before_complete);
        },
        addHaveCompleted(state,payload) {
            state.haveCompleted_case = [].concat(payload.com_have_completed);
        },
        addBeforeMonitor(state,payload) {
            state.beforeCheck_monitor = [].concat(payload.com_before_monitor);
        },
        addCompletingMonitor(state,payload) {
            state.beforeComplete_monitor = [].concat(payload.com_completing_monitor);
        },
        addCompletedMonitor(state,payload) {
            state.haveCompleted_monitor = [].concat(payload.com_completed_monitor);
        },
        addWorkPiece(state,payload) {
            state.work_piece = [].concat(payload.com_work_piece);
        },
        addRegional(state,payload) {
            state.regional_data = [].concat(payload.com_regional);
        },
        addCity(state,payload) {
            state.city_data = [].concat(payload.com_city);
        },
        addTabs(state,payload) {
            state.audit_tabs = Object.assign({},payload.com_tab);
        },
        //通过点击订单号保存定价结论的参数
        addParamsForPrice(state,payload) {
            state.params_price = Object.assign({},payload)
        },
        //通过点击订单号保存审核意见的参数
        addParamsForAudit(state,payload) {
            state.params_audit = Object.assign({},payload)
        },
        //通过点击订单号保存反欺诈的参数
        addParamsForAnit(state,payload) {
            state.params_anit = Object.assign({},payload)
        },
        addTaskType(state,payload) {
            state.task_type = [].concat(payload.com_task_type)
        },
        addCaseStatus(state,payload) {
            state.case_status = [].concat(payload.com_case_status)
        },
        addFraudReason(state,payload) {
            state.fraud_reason = [].concat(payload.com_fraud_reason)
        },
        addApprovalType(state,payload) {
            state.approval_type = [].concat(payload.com_approval_type)
        }
    },
    actions: {
        //获取待审核案件
        getBeforeCheck({ commit },payload) {
            return Axios.post('/api/myTask-api/findMyTaskTodoList', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addBeforeCheck', {
                            com_before_check: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取待审核监控
        getBeforeMonitor({ commit },payload) {
            return Axios.post('/api/Monitoring-api/findsearchMonitorTodo', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addBeforeMonitor', {
                            com_before_monitor: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取待完成案件
        getBeforeComplete({ commit },payload) {
            return Axios.post('/api/myTask-api/findMyTaskDonerList', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addBeforeComplete', {
                            com_before_complete: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取待完成监控
        getCompletingMonitor({ commit },payload) {
            return Axios.post('/api/Monitoring-api/findsearchMonitorTone', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addCompletingMonitor', {
                            com_completing_monitor: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取已完成案件
        getHaveCompleted({ commit },payload) {
            return Axios.post('/api/myTask-api/findMyTaskEndList', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addHaveCompleted', {
                            com_have_completed: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取已完成监控
        getCompletedMonitor({ commit },payload) {
            return Axios.post('/api/Monitoring-api/findsearchMonitorEnd', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addCompletedMonitor', {
                            com_completed_monitor: res.data.dataList
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取工作件
        getWorkPiece({ commit },payload) {
            return Axios.post('/api/api/workfile/query', payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addWorkPiece', {
                            com_work_piece: res.data.data
                        });
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取区域
        getRegional({ commit }) {
            return Axios.get('http://172.24.133.70:8761/regional')
                .then((res) => {
                    if(res.data.message == "成功") {
                        commit('addRegional', {
                            com_regional: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取城市
        getCity({ commit },payload) {
            return Axios.get('http://172.24.133.70:8761/regional/' + payload.id + '/city')
                .then((res) => {
                    if(res.data.message == "成功") {
                        commit('addCity', {
                            com_city: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: '请与管理员联系！'
                    })
                })
        },
        //获取显示标签
        getAuditTabs({ commit },payload) {  
           
            return Axios.post('/api/creditaudit-api/getAuditTabs',qs.stringify(payload),{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                    if(res.data.status == 'SUCCESS') { 
                        commit('addTabs',{
                            com_tab: res.data.data
                            
                        })
                    }                   
                })
                .catch((error) => {
                    msg: '请与管理员联系！'
                })
        },
        //获取任类类型
        getTaskType({commit}, payload) {
            return Axios.post('/api/execute/api/sysDict/Web/searchCodeSysDictDetail',qs.stringify(payload),{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    if(res.data.status == 'SUCCESS') {
                        commit('addTaskType',{
                            com_task_type: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    msg: '请与管理员联系！'
                })
        },
        //获取案件状态
        getCaseStatus({commit}, payload) {
            return Axios.post('/api/execute/api/sysDict/Web/searchCodeSysDictDetail',qs.stringify(payload),{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    if(res.data.status == 'SUCCESS') {
                        commit('addCaseStatus',{
                            com_case_status: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    msg: '请与管理员联系！'
                })
        },
        //获取欺诈原因
        getFraudReason({commit}, payload) {
            return Axios.post('/api/execute/api/sysDict/Web/searchCodeSysDictDetail',qs.stringify(payload),{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    if(res.data.status == 'SUCCESS') {
                        commit('addFraudReason',{
                            com_fraud_reason: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    msg: '请与管理员联系！'
                })
        },
        //获取审批类型
        getApprovalType({commit}, payload) {
            return Axios.post('/api/execute/api/sysDict/Web/searchCodeSysDictDetail',qs.stringify(payload),{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    if(res.data.status == 'SUCCESS') {
                        commit('addApprovalType',{
                            com_approval_type: res.data.data
                        })
                    }
                })
                .catch((error) => {
                    msg: '请与管理员联系！'
                })
        },
    }
}