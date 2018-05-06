// 执行异步操作
import * as api from '../fetch/api'
import * as types from './constMutation'
// export default {
//   // 登陆
//   login ({ commit, uid, password }) {
//     api.login(uid, password)
//     commit('LOGIN', uid)
//   },
//   newuser ({ commit, uid, password, uname }) {
//     api.newUser(uid, password, uname)
//   },
//   changePsw ({ commit, uid, password }) {
//     api.changePsw(uid, password)
//   },
//   // 初始化信息
//   initPage ({ commit }) {
//     commit('INITDATA')
//   }
// }

// export const login = function ({commit}, uid, password) {
//   api.login(uid, password)
//   console.log(1)
//   commit(types.LOGIN, uid)
// }
export const login = ({commit}, {uid, password}) => {
  api.login(uid, password).then(res => {
    commit(types.LOGIN, uid)
  }).catch(error => {
    console.log(error)
  })
}

export const myself = ({commit}, {uid}) => {
  api.myselef(uid)
  commit(types.MYSELF, uid)
}

export const newuser = ({commit}, {uid, password, uname}) => {
  api.newUser(uid, password, uname).then(res => {
    commit(types.REGISTER, uid)
  }).catch(error => {
    console.log(error)
  })
}

export const changePsw = ({commit}, {uid, password}) => {
  api.changePsw(uid, password)
  commit(types.CHANGEPSW)
}

export const initPage = ({commit}) => {
  commit(types.INITDATA)
}
