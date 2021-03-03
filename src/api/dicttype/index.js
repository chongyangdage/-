import request from '@/utils/request'

//字典查询
export function dicttype_index(data) {
    return request({
      url: 'org.gocom.components.coframe.dict.DictManager.queryDictByDictType.biz.ext',
      method: 'post',
      data
    })
  }
