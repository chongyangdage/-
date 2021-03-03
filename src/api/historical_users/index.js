import request from '@/utils/request'

//历史用户查询
export function historical_users(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.queryEmployee.biz.ext',
      method: 'post',
      data
    })
  }

  //历史用户回复
export function historical_users_h(data) {
  return request({
    url: 'org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext',
    method: 'post',
    data
  })
}
