/**
 * 该文件是本系统接口管理文件，所有的接口都在这里写入并返回值
 * */
import {fetch} from './fetch'
// 登陆接口
export const login = (userId, password) => fetch('/login/user/login', {uid: userId, password: password}, 'POST')
// 注册新用户接口
export const newUser = (userId, password, username) => fetch('/login/user/register', {uid: userId, password: password, uname: username}, 'POST')
// 修改密码
export const changePsw = (userId, password) => fetch('/login/user/changePsw', {uid: userId, password: password}, 'POST')
// 获取好友列表接口
export const userFriendList = (userId) => fetch('/index/friendList', {uid: userId}, 'POST')
// 获取群组列表接口
export const groupList = (userId) => fetch('/index/groupList', {uid: userId}, 'POST')
// 获取动态圈及评论点评数目
export const getFriednTrend = (userId) => fetch('/trend/getFriendTrend', {uid: userId}, 'POST')
// 删除个人动态
export const deleteMyselfTrend = (userId, articleNo) => fetch('/trend/deleteMyselfTrend', {uid: userId, utNo: articleNo}, 'GET')
// 评论动态
export const replyOther = (articleId, buid, ruid, content) => fetch('/trend/replyOther', {rid: articleId, buid: buid, ruid: ruid, rContent: content}, 'GET')
// 点赞或者修改点赞动态
export const setMyselfVote = (articleNo, userId, vState) => fetch('/trend/setMyselfVote', {utNo: articleNo, uid: userId, vState: vState}, 'GET')
// 删除评论
export const deleteReply = (replyNo, articleNo, ruid) => fetch('/trend/deleteReply', {rNo: replyNo, rid: articleNo, ruid: ruid}, 'GET')
// 加载好友信息
export const myselef = (userId) => fetch('/index/myself', {uid: userId}, 'POST')
