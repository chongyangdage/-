import request from '@/utils/request'

//设置新密码
export function My_lastPass(data) {
    return request({
      url: 'org.gocom.components.coframe.rights.UserManager.changePassword.biz.ext',
      method: 'post',
      data
    })
  }
