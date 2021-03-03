import request from '@/utils/request'

//登录日志审计
export function audit_login(data) {
    return request({
      url: 'org.gocom.components.log.uloginlogbiz.queryULoginLogs.biz.ext',
      method: 'post',
      data
    })
  }


  
//管理员日志
export function audit_pe(data) {
  return request({
    url: 'org.gocom.components.log.uSysadminOperationLog.querySysadminOperationLog.biz.ext',
    method: 'post',
    data
  })
}


//接口日志
export function Interface(data) {
  return request({
    url: 'org.gocom.components.log.uCallInterfaceLog.queryCallInterfaceLog.biz.ext',
    method: 'post',
    data
  })
}
