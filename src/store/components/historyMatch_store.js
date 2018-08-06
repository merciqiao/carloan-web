import Axios from "axios";

export default {
    state: {
        carNumber_match: [],
        carFrame_match: [],
        idCard_match: [],
        phone_match: []
    },
    mutations: {
        addCarNumberMatch(state,payload) {
            state.carNumber_match = [].concat(payload.com_car_num);
        },
        addCarFrameMatch(state,payload) {
            state.carFrame_match = [].concat(payload.com_car_frame);
        },
        addIdCardMatch(state,payload) {
            state.idCard_match = [].concat(payload.com_id_card);
        },
        addPhoneMatch(state,payload) {
            state.phone_match = [].concat(payload.com_phone);
        }
    },
    actions: {
        //获取车牌号匹配
        getCarNumberMatch({ commit }, payload) {
            return Axios.get('/api/carinfo-history-api/queryCarLoanCarNumberHistory', payload)
                .then((res) => {
                    commit('addCarNumberMatch',{
                        com_car_num: res.data.dataList
                    })
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: 'carNumber请与管理员联系！'
                    })
                })
        },
        //获取车架号匹配
        getCarFrameMatch({ commit }, payload) {
            return Axios.get('/api/carinfo-history-api/queryCarLoanCarFrameNumberHistory', payload)
                .then((res) => {
                    commit('addCarFrameMatch',{
                        com_car_frame: res.data.dataList
                    })
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: 'carNumber请与管理员联系！'
                    })
                })
        },
        //获取身份证号匹配
        getIdCardMatch({ commit }, payload) {
            return Axios.get('/api/carinfo-history-api/queryCarLoanIdCardHistory', payload)
                .then((res) => {
                    commit('addIdCardMatch',{
                        com_id_card: res.data.dataList
                    })
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: 'carNumber请与管理员联系！'
                    })
                })
        },
        //获取手机号匹配
        getPhoneMatch({ commit }, payload) {
            return Axios.get('/api/carinfo-history-api/queryCarLoanPhoneHistory', payload)
                .then((res) => {
                    commit('addPhoneMatch',{
                        com_phone: res.data.dataList
                    })
                })
                .catch((error) => {
                    commit('send_msg', {
                        msg: 'carNumber请与管理员联系！'
                    })
                })
        },
    }
}