import request from '@/utils/request'

//系统管理员增加
export function add(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext',
      method: 'post',
      data
    })
  }

  //查询所有系统管理人员
  export function find_p(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext',
      method: 'post',
      data
    })
  }

 //删除系统管理人员
 export function dele(data) {
  return request({
    url: 'org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext',
    method: 'post',
    data
  })
}
