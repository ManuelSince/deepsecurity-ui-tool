import Store from '../../store'
import tags from '../modules/tags'
import AxiosClient from '../../services/client'
//import Tools from '../../common/Tools'

// initial state
const state = () => ({
  administrators: []
})

// getters
const getters = {
  columns: (state) => state.columns,
}

// mutations
const mutations = {
  setLoading (state, isLoading) {
    state.loading = isLoading
  },
  setAdministrators ( state, payload ) {
    state.administrators = payload
  }
}

// actions
const actions = {
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  },
  async administrators ( { commit }) {
    const client = new AxiosClient(Store.getters.apiConfig.baseURL, Store.getters.apiConfig.port, Store.getters.apiConfig.apikey, Store.getters.apiConfig.version)
    const payload = await client.getAll(tags.state.tags)
    commit('setAdministrators', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}