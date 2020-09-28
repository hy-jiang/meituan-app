import axios from '@/axios.js'
const api = {
  searchHotWords (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/header/searchHotWords.json', params)
  },
  getMenuList (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/index/nav.json', params)
  },
  resultsByKeywords (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/index/resultsByKeywords.json', params)
  },
  getClassify(params){
    return axios.get('http://open.duyiedu.com/api/meituan/list/classify.json', params)
  },
  getHotCity () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/login', params)
  },
  register (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/register', params)
  }
}
export default api
