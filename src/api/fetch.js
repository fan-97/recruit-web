import api from './index'
import axios from 'axios'

let headersToken = {
  'Content-Type': 'application/json',
  'F-RECRUIT-TOKEN': localStorage.getItem('token')
}
let header = {
  'Content-Type':'application/json'
}
export default {
  getToken() {
    return axios.get(api.getToken(),)
  },
  getCompany () {
    return axios.get(api.getCompany(), {params: {pageSize: 9}, headers: headersToken})
  },
  userRegister (info) {
    return axios.post(api.userRegister(), JSON.stringify(info), {headers: header})
  },
  getComName () {
    return axios.get(api.getComName(), {headers: header})
  },
  userLogin (info) {
    return axios.post(api.userLogin(), JSON.stringify(info), {headers: header})
  },
  getUserInfo () {
    return axios.get(api.getUserInfo()+"/"+sessionStorage.getItem("userId"),{headers: headersToken})
  },
  sendCode (phone) {
    return axios.get(api.sendCode()+"/"+phone, { headers: header})
  },
  logout () {
    return axios.delete(api.logout(),{params:{userId:sessionStorage.getItem("userId")},headers: headersToken})
  },
  sendResume (resumeInfo) {
    return axios.post(api.sendResume(), JSON.stringify(resumeInfo), {headers: headersToken})
  },
  deliveryList (pageCurrent,pageSize) {
    return axios.get(api.deliveryList(sessionStorage.getItem("userId")), {params:{pageCurrent:pageCurrent,pageSize:pageSize},headers: headersToken})
  },
  putUserInfo (userInfo) {
    return axios.put(api.putUserInfo(), JSON.stringify(userInfo), {headers: headersToken})
  },
  changePhone (phone) {
    return axios.put(api.changePhone(), JSON.stringify(phone), {headers: headersToken})
  },
  changePass (password) {
    return axios.put(api.changePass(), JSON.stringify(password), {headers: headersToken})
  },
  changeEmail (email) {
    return axios.put(api.changeEmail(), JSON.stringify(email), {headers: headersToken})
  },
  getCompanyDetail (id) {
    return axios.get(api.getCompanyDetail(id), {headers: headersToken})
  },
  getResume (userId) {
    return axios.get(api.getResume(userId), {headers: headersToken})
  },
  getJobDetail (id) {
    return axios.get(api.getJobDetail(id), {headers: headersToken})
  },
  deliveryReusme (body) {
    return axios.post(api.deliveryReusme(), JSON.stringify(body), {headers: headersToken})
  },
  getMessage (params) {
    return axios.get(api.getMessage(), {params:params,headers: headersToken})
  },
  findJob (key) {
    return axios.get(api.findJob(), {params: {key: key}, headers: headersToken})
  },
  readMessage (info) {
    return axios.put(api.readMessage(info),{},{headers: headersToken})
  },
  receiveResume () {
    return axios.get(api.receiveResume(), {headers: headersToken})
  },
  publishJob (jobinfo) {
    return axios.post(api.publishJob(), JSON.stringify(jobinfo), {headers: headersToken})
  },
  checkJob (param) {
    return axios.get(api.checkJob(), {params:param,headers: headersToken})
  },
  deletejob (id) {
    return axios.delete(api.deletejob(id), {headers: headersToken})
  },
  hrRegister (hrInfo) {
    return axios.post(api.userRegister(), JSON.stringify(hrInfo), {headers: headersToken})
  },
  recommendCandidate () {
    return axios.get(api.recommendCandidate(), {headers: headersToken})
  },
  recommendJob () {
    return axios.get(api.recommendJob(),{headers: headersToken})
  },
  getRecommandJob (param) {
    return axios.get(api.getRecommandJob(), {params:param,headers: headersToken})
  },
  // 添加公司
  addCompany (companyInfo) {
    return axios.post(api.getCompany(), JSON.stringify(companyInfo), {headers: headersToken})
  }
}
