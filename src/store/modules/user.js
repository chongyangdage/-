import localStore from 'storejs'

const state = {
  token: ''
}

const mutations = {
  set_token: (state,data) => {
    state.token = data
    localStore.set('token',data)
  },
  set_empid: (state,data) => {
    localStore.set('empid',data)
  }

}

const actions = {
  login ({commit},e,e1) {
    return new Promise (resolve=> {
      console.log(e,'9999999')
      commit('set_token', e.userId)
      console.log(e1,'aaaa')
      commit('set_empid', e.empid)
      resolve()
    })
  },
  logout ({commit}) {
    return new Promise(resolve => {
      commit('set_token', '')
      resolve()
    })
  }
}

const getters = {
  token: state => {
    return state.token
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}