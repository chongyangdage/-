import request from '@/utils/request'

  //工作数根节点
export function tree() {
  return request({
    url: 'org.gocom.components.coframe.auth.partyauth.ManageableRes.getManageableOrg.biz.ext',
    method: 'post',
  })
}
 //工作数以后次查询
 export function tree_after(data) {
  return request({
    url: 'org.gocom.components.coframe.org.organization.queryTreeChildNodes.biz.ext',
    method: 'post',
    data
  })
}

//所有应用
export function criteria(data) {
  return request({
    url: 'org.gocom.components.coframe.framework.SystemManager.querySystemByCriteria.biz.ext',
    method: 'post',
    data
  })
}


//只查单位的树
export function tree_place(data) {
  return request({
    url: 'org.gocom.components.coframe.org.organization.queryOrgTree.biz.ext',
    method: 'post',
    data
  })
}