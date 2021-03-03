import request from '@/utils/request'

//查询通用人
export function index(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext',
      method: 'post',
      data
    })
  }

  //查询人
export function index1(data) {
  return request({
    url: 'org.gocom.components.coframe.org.employee.getEmployee.biz.ext',
    method: 'post',
    data
  })
}
//删除用户

export function index_dele(data) {
  return request({
    url: 'org.gocom.components.coframe.org.organization.deleteNode.biz.ext',
    method: 'post',
    data
  })
}

//人员变动

export function index_change(data) {
  return request({
    url: 'org.gocom.components.coframe.org.organization.moveNode.biz.ext',
    method: 'post',
    data
  })
}

//根据查询条件查询机构下的人员
export function index_gl(data) {
  return request({
    url: 'org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext',
    method: 'post',
    data
  })
}


//初始化
export function index_create(data) {
  return request({
    url: 'org.gocom.components.coframe.rights.UserManager.resetPassword.biz.ext',
    method: 'post',
    data
  })
}
