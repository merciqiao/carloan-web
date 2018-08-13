import Axios from "axios";

export default {
    state: {
        order_info: {},
        user_info: {},
        contacts_info: [],
        cars_info: {},
        cars_file: [],
        order_msg: "",
        conclusionList: [],
        auditList: [],
        productsList: [],
        repaymentType: [],
        periodList: [],
        historyLogs: [],
        fraudList: [],
        fuyiList:[],
        carLoanInfoId:''

    },
    mutations: {
        addOrderInfo(state,payload) {
            state.order_info = Object.assign({}, payload.com_order_info);
        },
        addUserInfo(state,payload) {
            state.user_info = Object.assign({}, payload.com_user_info);
        },
        addContactsInfo(state,payload) {
            state.contacts_info = [].concat(payload.com_contact_info);
        },
        addCarsInfo(state,payload) {
            state.cars_info = Object.assign({}, payload.com_cars_info);
        },
        addCarsFile(state,payload) {
            state.cars_file = [].concat(payload.com_cars_file);
        },
        send_msg(state,payload) {
            state.order_msg = payload.msg
        },
        addPriceConclusion(state,payload) {
            state.conclusionList = [].concat(payload.com_price_conclusion);
        },
        addAuditConclusion(state,payload) {
            state.auditList = [].concat(payload.com_audit_conclusion);
        },
        addAntiFrauds(state, payload) {
            state.fraudList = [].concat(payload.com_anti_frauds);
        },
        addProducts(state, payload) {
            state.productsList = [].concat(payload.com_products);
        },
        //添加还款方式和期数
        addOptions(state, payload) {
            state.repaymentType = [].concat(payload.com_repayment);
            state.periodList = [].concat(payload.com_period);
        },
        addHistoryLogs(state, payload) {
            state.historyLogs = [].concat(payload.com_historys);
        },
        addFuyi(state, payload) {
            state.fuyiList = [].concat(payload.com_fuyi);
        },
        getCarLoanInfoId(state, payload) {          
            state.carLoanInfoId = [].concat(payload.carLoanInfoAddId);
        }
    },
    actions: {
        //获取订单信息
        getOrderInfo({ commit }, payload) {
            return Axios.get('/api/web-carinfo-api/queryEntityCarLoanInfo', payload)
                .then((res) => {
                    commit('addOrderInfo',{
                        com_order_info: res.data.data
                    })
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
                })
        },
        //获取用户信息
        getUserInfo({ commit }, payload) {
            return Axios.get('/api/web-carinfo-api/queryEntityCarLoanUser', payload)
               .then((res) => {
                   commit('addUserInfo',{
                       com_user_info: res.data.data
                   })
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //获取申请人联系人信息
        getContactsInfo({commit}, payload) {
            return Axios.get('/api/web-carinfo-api/queryCarLoanSurveyContactsEntityList', payload)
               .then((res) => {
                   commit('addContactsInfo',{
                       com_contact_info: res.data.data
                   })
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //获取车辆信息
        getCarsInfo({commit}, payload) {
            return Axios.get('/api/web-carinfo-api/queryEntityCarLoanMsg', payload)
               .then((res) => {
                   commit('addCarsInfo',{
                       com_cars_info: res.data.data
                   })
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //获取附件信息
        getCarsFile({commit}, payload) {
            return Axios.get('/api/web-carinfo-api/queryEntityCarFileList', payload)
               .then((res) => {
                   commit('addCarsFile',{
                       com_cars_file: res.data.data
                   })
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //保存/提交定价结论
        savePriceConclusion({commit}, payload) {
            return Axios.post('/api/creditaudit-api/saveLoanPrice', payload)
               .then((res) => {
                   if(res.data.status == "SUCCESS") {
                        commit('send_msg', {
                            msg: '保存定价结论成功！'
                        })
                   }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                   }
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //查询定价结论
        getPriceConclusion({commit}, payload) {
            return Axios.get('/api/creditaudit-api/queryLoanPriceByParam', payload)
               .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addPriceConclusion', {
                            com_price_conclusion: res.data.data
                        })
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //保存/提交审核意见
        saveAuditConclusion({commit}, payload) {                 
            return Axios.post('/api/creditaudit-api/saveLoanOpinion', payload)
               .then((res) => {
                   if(res.data.status == "SUCCESS") {
                        commit('send_msg', {
                            msg: '保存审核意见成功！'
                        })
                      
                   }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                   }
                   commit('getCarLoanInfoId', {
                    carLoanInfoAddId: res.data.data 
                })
                  
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //查询审核意见
        getAuditConclusion({commit}, payload) {
            return Axios.get('/api/creditaudit-api/queryLoanOpinionByParam', payload)
               .then((res) => {
                    if(res.data.status == "SUCCESS") {
                        commit('addAuditConclusion', {
                            com_audit_conclusion: res.data.data
                        })
                    }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                    }
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //查询产品列表
        getProducts({commit}, payload) {
            return Axios.get('/api/carinfo-product-api/queryCarProductData', payload)
               .then((res) => {
                   if(res.data.status == 'SUCCESS') {
                       commit('addProducts', {
                           com_products: res.data.dataList
                       })
                   }else{
                       commit('send_msg', {
                           msg: 'orderInfo请与管理员联系！'
                       })
                   }
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //通过id查询产品
        getProductById({commit}, payload) {
            return Axios.get('/api/carinfo-product-api/getProductInfoById', payload)
               .then((res) => {
                    commit('addOptions', {
                        com_repayment: res.data.loanrepaymentType,
                        com_period: res.data.loanPeriodList
                    });
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //获取流程轨迹
        getHistoryLogs({commit}, payload) {
            return Axios.get('/api/creditaudit-api/getAuditHistoryLogs', payload)
               .then((res) => {
                    commit('addHistoryLogs', {
                        com_historys: res.data.data,
                    });
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //查询反欺诈列表
        getAntiFrauds({commit}, payload) {
            return Axios.get('/api/antifraudOpnition-api/queryCarAntifraudOpnitionList', payload)
               .then((res) => {
                    commit('addAntiFrauds', {
                        com_anti_frauds: res.data.data,
                    });
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //保存/提交反欺诈
        saveAntiFraud({commit}, payload) {
            return Axios.post('/api/antifraudOpnition-api/saveAntifraudOpnition', payload)
               .then((res) => {
                   if(res.data.status == "SUCCESS") {
                        commit('send_msg', {
                            msg: '保存反欺诈结论成功！'
                        })
                   }else{
                        commit('send_msg', {
                            msg: res.data.message
                        })
                   }
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
        //获取客户复议
        getFuyi({commit}, payload) {
            return Axios.get('/api/creditaudit-api/getFuyiInfoByorderNum', payload)
               .then((res) => {
                    commit('addFuyi', {
                        com_fuyi: res.data.data,
                    });
               })
               .catch((error) => {
                    commit('send_msg', {
                        msg: 'orderInfo请与管理员联系！'
                    })
               })
        },
    }
}