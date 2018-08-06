import Axios from "axios";

export default {
    state: {
        user_token: "",
        user_msg: ""
    },
    mutations: {
        user_login(state,payload) {
            state.user_token = payload.token;
        },
        send_msg(state,payload) {
            state.user_msg = payload.msg
        }
    },
    actions: {
        login({ commit },payload) {
            return Axios.post('/api/shiro-api/login',payload)
                .then((res) => {
                    if(res.data.status == "SUCCESS" && res.data.data !== null) {
                        commit('user_login', {
                            token: res.data.data.userInfo.token
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
        }
    }
}