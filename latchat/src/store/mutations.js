// 执行状态修改，同步操作
import * as MutationTypes from './constMutation'

// export default {
//   // 用户id
//   [MutationTypes.USERID] (state) {
//     state.userId = ''
//   },
//   // 群组列表，包含头像、名称和id
//   [MutationTypes.GROUPLIST] (state) {
//     state.groupList = ''
//   },
//   // 好友列表，包含头像、名称和id
//   [MutationTypes.USERFRIENDLIST] (state) {
//     state.userFriendList = ''
//   },
//   [MutationTypes.LOGIN] (state, uid) {
//     state.userId = uid
//   },
//   [MutationTypes.REGISTER] (state) {},
//   [MutationTypes.CHANGEPSW] (state) {},
//   [MutationTypes.INITDATA] (state) {
//     state.userId = ''
//     state.groupList = ''
//     state.userFriendList = ''
//   }
// }

const mutations = {
  // 用户id
  [MutationTypes.USERID] (state) {
    state.userId = ''
  },
  // 好友列表，包含头像、名称和id
  [MutationTypes.USERFRIENDLIST] (state) {
    state.userFriendList = ''
  },
  // 用户个人id
  [MutationTypes.LOGIN] (state, uid) {
    state.userId = uid
  },
  // 用户个人信息
  [MutationTypes.MYSELF] (state, obj) {
    let {uname, ulogo, usex, usign, ucity} = obj[0]
    state.username = uname
    state.ulogo = ulogo
    state.usex = usex
    state.usign = usign
    state.ucity = ucity
  },
  [MutationTypes.REGISTER] (state, uid) {
    state.userId = uid
  },
  [MutationTypes.CHANGEPSW] (state) {},
  // 群组列表，包含头像、名称和id
  [MutationTypes.GROUPLIST] (state, obj) {
    state.groupList = obj
  },
  // 好友列表，包含头像、名称和id
  [MutationTypes.FRIENDLIST] (state, obj) {
    state.userFriendList = obj
  },
  // 聊天室名称
  [MutationTypes.CHATNAME] (state, {chatObj, chatName}) {
    state.chatName = chatName
    state.chatObj = chatObj
  }
}

export default mutations
