import request from '@/utils/request'

//注册
export function register_index(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.addEmployee.biz.ext',
      method: 'post',
      data
    })
  }
