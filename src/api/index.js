// const host = 'http://pf.stalary.com'
const host = '/api/v1'

export default {

  getToken() {
    return host + '/token'
  },
  userLogin () {
    return host + '/user/login'
  },
  sendCode () {
    return host + '/user/code'
  },
  logout () {
    return host + '/user/logout'
  },
  userRegister () {
    return host + '/user/register'
  },
  getUserInfo () {
    return host + '/user'
  },
  // 提交用户信息
  putUserInfo () {
    return host + '/user'
  },
  // 修改用户手机号码
  changePhone () {
    return host + '/user'
  },
  // 修改用户密码
  changePass () {
    return host + '/user/password'
  },
  // 修改用户邮箱
  changeEmail () {
    return host + '/user'
  },                
  getCompany () {
    return host + '/company'
  },
  // 获取全部公司信息
  getComName () {
    return host + '/company/noPage'
  },
   
  // 获取公司详情
  getCompanyDetail (id) {
    return host + `/company/${id}`
  },
  // 提交简历信息
  sendResume () {
    return host + '/resume'
  },
  // 获取投递列表
  deliveryList (id) {
    return host + `/record/${id}`
  },
 
  // 获取简历信息
  getResume (userId) {
    return host + `/resume/${userId}`
  },
  // 获取岗位详细信息
  getJobDetail (id) {
    return host + `/job/${id}`
  },
  // 投递简历
  deliveryReusme () {
    return host + '/job/resume'
  },
  // 搜索职位信息
  findJob () {
    return host + '/job'
  },
   // hr发布职位信息
   publishJob () {
    return host + '/job'
  },
  // 查看hr发布的职位信息
  checkJob () {
    return host + '/job'
  },
  deletejob (id) {
    return host + `/job/${id}`
  },
  // 推荐候选人
  recommendCandidate () {
    return host + '/job/recommend/candidate'
  },
  // 推荐职位
  recommendJob () {
    return host + '/job/recommend/job'
  },
  // 获取感兴趣的工作
  getRecommandJob () {
    return host + '/job'
  },
  // 获取站内信
  getMessage () {
    return host + '/message'
  },
  // 已读
  readMessage (info) {
    return host + `/message/read/${info}`
  },
  // hr resumelist
  receiveResume () {
    return host + '/user/receive'
  },
 
  hrRegister () {
    return host + '/user/hr'
  }
}
