import request from '@/utils/request'

//根据应用查询人员
export function criteria_p(data) {
    return request({
      url: 'org.gocom.components.coframe.framework.SystemManager.queryApplyAuthByCriteriaWithPage.biz.ext',
      method: 'post',
      data
    })
  }

  //根据应用查询管理员
  export function criteria_g(data) {
    return request({
      url: 'org.gocom.components.coframe.framework.SystemManager.querySystemManager.biz.ext',
      method: 'post',
      data
    })
  }



  //根据应用查询审核人员
export function criteria_s(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.AuthSystem.biz.ext',
    method: 'post',
    data
  })
}
  //删除管理员权限
  export function criteria_dele(data) {
    return request({
      url: 'org.gocom.components.coframe.framework.SystemManager.deleteSystemManager.biz.ext',
      method: 'post',
      data
    })
  }
//增加管理员权限
export function criteria_add(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.saveSystemManager.biz.ext',
    method: 'post',
    data
  })
}


//应用保存接口
export function criteria_keep(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.saveSystemInfo.biz.ext',
    method: 'post',
    data
  })
}


//应用用户数统计
export function criteria_total(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.countSystemEmp.biz.ext',
    method: 'post',
    data
  })
}


//目录授权
export function mul_api(data) {
  return request({
    url: 'org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext',
    method: 'post',
    data
  })
}


//查询我的应用
export function my_app(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.queryMySystem.biz.ext',
    method: 'post',
    data
  })
}


//开通应用
export function open_app(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.applySystemAuth.biz.ext',
    method: 'post',
    data
  })
}