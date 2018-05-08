/**
 * getters的作用主要是用来获取state的数据
 * */
// 获取用户id
export const userId = state => state.userId
// 获取用户名
export const uname = state => state.username
// 获取用户性别
export const usex = state => state.usex
// 获取用户签名
export const usign = state => state.usign
// 获取用户头像
export const ulogo = state => state.ulogo
// 获取用户城市
export const ucity = state => state.ucity
// 获取群组列表，包含群名称、群头像和群组id
export const getGroupList = state => state.groupList
// 获取好友列表，包含好友名称、好友头像和好友id
export const getFriendList = state => state.userFriendList
// 获取聊天室名称
export const getChatName = state => state.chatName
// 获取当前聊天的ID
export const getChatId = state => state.chatId
