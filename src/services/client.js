import Vue from 'vue'

class AxiosClient {
  constructor (config) {
    this.base_URL =config.baseURL
    this.port = config.port
    this.apikey = config.apikey
    this.apiversion = config.apiversion
    const instance = Vue.axios.create(this.base_URL)
    this.client = instance.defaults.headers.common['Authorization'] = this.apikey;
  }

  create_URL () {
    return `${this.base_URL}:${this.port}/api/`
  }

  stringifyParams (params) {
    const list = []
    Object.keys(params).forEach((key) => {
      list.push(`${key}=${encodeURIComponent(params[key])}`)
    })
    return `Filters=${list.join('&')}`
  }

  async get (path, id='') {
    // res = this.get(`${this.create_URL}/${path}?${this.stringifyParams(params)}`)
    //return this.client.get(`${this.create_URL}/${path}/${id}`)
    return `${this.create_URL}/${path}/${id}`
  }
  async post (path, params) {
    return this.client.post(path, params)
  }
  async del (path, id) {
    return this.client.del(path, id)
  }
}
export default AxiosClient
// testing the axiosclient :
// const a = new AxiosClient('http://wwww.macguyver', 3006, '', '')
// const filters = {name: 'Tesla', earning: 40999, office: 'london'}
// const res = a.get('companies', filters)
// console.log(res)