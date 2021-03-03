import request from '@/utils/request'

//删除部门
export function dele(data) {
    return request({
      url: 'org.gocom.components.coframe.org.organization.deleteNode.biz.ext',
      method: 'post',
      data
    })
  }


  //修改部门
export function edit(data) {
  return request({
    url: 'org.gocom.components.coframe.org.organization.updateOrg.biz.ext',
    method: 'post',
    data
  })
}


  //增加部门
  export function add(data) {
    return request({
      url: 'org.gocom.components.coframe.org.organization.addOrg.biz.ext',
      method: 'post',
      data
    })
  }