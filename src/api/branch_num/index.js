import request from '@/utils/request'

//部门数量
export function branch_num(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.countEmpByOrg.biz.ext',
      method: 'post',
      data
    })
  }
