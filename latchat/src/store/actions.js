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
  api.myselfInfo(uid).then(res => {
    commit(types.MYSELF, res.data)
  })
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

export const friendList = ({commit}, {uid}) => {
  api.userFriendList(uid).then(res => {
    commit(types.FRIENDLIST, res.data)
  })
}

export const groupList = ({commit}, {uid}) => {
  api.groupList(uid).then(res => {
    commit(types.GROUPLIST, res.data)
  })
}
