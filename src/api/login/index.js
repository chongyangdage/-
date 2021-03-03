import request from '@/utils/request'

//登录查询
export function login(data) {
    return request({
      url: 'org.gocom.components.coframe.auth.LoginManager.login.biz.ext',
      method: 'post',
      data
    })
  }

  //注销用户

export function login_out(data) {
    return request({
      url: 'org.gocom.components.coframe.auth.LoginManager.logoutByUniqueId.biz.ext',
      method: 'post',
      data
    })
  }