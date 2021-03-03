import request from '@/utils/request'

//查询字典类型
export function index_type(data) {
    return request({
      url: 'org.gocom.components.coframe.dict.DictManager.queryAllDictType.biz.ext',
      method: 'post',
      data
    })
  }


  //查询字典类型项
export function index_list(data) {
  return request({
    url: 'org.gocom.components.coframe.dict.DictManager.queryDictByDictType.biz.ext',
    method: 'post',
    data
  })
}


  //添加字典类型
  export function index_addType(data) {
    return request({
      url: 'org.gocom.components.coframe.dict.DictManager.saveDictType.biz.ext',
      method: 'post',
      data
    })
  }


    //删除字典类型
    export function index_deleType(data) {
      return request({
        url: 'org.gocom.components.coframe.dict.DictManager.removeDictType.biz.ext',
        method: 'post',
        data
      })
    }


     //添加字典项
  export function addx(data) {
    return request({
      url: 'org.gocom.components.coframe.dict.DictManager.saveDict.biz.ext',
      method: 'post',
      data
    })
  }

    //刷新缓存
    export function hc(data) {
      return request({
        url: 'org.gocom.components.coframe.dict.DictManager.refreshDictCache.biz.ext',
        method: 'post',
        data
      })
    }