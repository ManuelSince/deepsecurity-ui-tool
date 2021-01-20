import Vue from 'vue'
import Vuex from 'vuex'
import tags from './modules/tags.js'
import AxiosClient from '../services/client'
import administrators from './modules/administrator.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrationApiModalData: {},
    apiConfig: {
      baseURL: '',
      port: 47649,
      apikey: '',
      version: 'v1'
    },
    openComponent: {},
    detailsModalShow: false
  },
  getters:{
    registrationApiData ( state ) {
      return state.registrationApiModalData
    },
    apiConfig ( state ) {
      return state.apiConfig
    },
    colors ( state ) {
      return state.colors
    },
    openComponent ( state ) {
      return state.openComponent
    },
    detailsModalShow ( state ) {
      return state.detailsModalShow
    }
  },
  mutations: {
    set_RegistrationApiModalData (state, payload) {
      state.registrationApiModalData = payload
    },
    set_apiConfiguration (state, payload) {
      //Object.entries(this.apiConfig).map((key, value) => console.log(`${key}: ${value}`)) 
      state.apiConfig.baseURL = payload.baseURL
      state.apiConfig.port = parseInt(payload.port)
      state.apiConfig.apikey = payload.apikey
      state.apiConfig.version = payload.version
    },
    setOpenComponent (state, payload) {
        state.openComponent = payload
        state.detailsModalShow = true
    },
    detailsModalShow ( state, payload ) {
      state.detailsModalShow = payload
    },
    componentFindAll( state, payload ) {
      state.componentFindAll = payload
    }   
  },
  actions: {
    set_apiConfiguration ({commit}, payload) {
      commit('set_apiConfiguration', payload)
    },
    async setOpenComponent ({commit, state}, payload) {
      commit('setOpenComponent', payload)
      state
      // let client = AxiosClient(state.apiConfig)
      // let res = await client.get(state.openComponent.path)
      console.log('res from axios client = ' + payload)
    },
    detailsModalShow ( {commit}, payload) {
      payload
      commit('detailsModalShow', payload)
    },
    async findAll ({state}) {
      let client = new AxiosClient(state.apiConfig)
      let res = await client.get(state.openComponent.path)
      console.log('res from axios client = ' + res)
      // if(res.status >= 200 && res.status <= 204)
      //   context.commit('componentFindAll', res.data)
      // else
      //   console.log('error')
    }


  },
  modules: {
    tags,
    administrators
  }
})
