import request from '@/utils/request'

//字典查询
export function edit_my(data) {
    return request({
      url: 'org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext',
      method: 'post',
      data
    })
  }
