import request from '@/utils/request'

//用户排序
export function sort_index(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.updateEmpBatch.biz.ext',
      method: 'post',
      data
    })
  }
