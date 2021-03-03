import request from '@/utils/request'

//删除机构
export function dele(data) {
    return request({
      url: 'org.gocom.components.coframe.org.organization.deleteNode.biz.ext',
      method: 'post',
      data
    })
  }
