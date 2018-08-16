import Axios from "axios";

export default {
    state: {
        user_token: "",
        user_msg: "",
        sysMenuList:[],
        sysUserName:""
    },
    mutations: {
        user_login(state,payload) {
            state.user_token = payload.token;
        },
        send_msg(state,payload) {
            state.user_msg = payload.msg
        },
        setSysMenuList(state,payload){
            state.sysMenuList=payload.sysMenuList;
        },
        getSysUserName(state,payload){
            state.sysUserName=payload.sysUserName;
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
                        commit('setSysMenuList', {
                            sysMenuList: res.data.data.sysMenuVoList
                        });                       
                        commit('getSysUserName', {
                            sysUserName: res.data.data.userInfo.userName
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