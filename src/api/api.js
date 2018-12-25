import fetch from './fetch.js'

// // 登录
// export function login (data) {
//   return fetch({
//     url: '',
//     method: 'post',
//     data
//   })
// }
// // 登出
// export function logout () {
//   return fetch({
//     url: '',
//     method: 'post'
//   })
// }

const orderList = params => {
  return fetch({
    url: `/api/data/${params.category}/${params.limit}/${params.page}`,
    method: 'get',
    params: ''
  })
}

const articleList = params => {
  return fetch({
    url: `/api/search/query/listview/category/Android/count/${params.limit}/page/${params.page}`,
    method: 'get',
    params: ''
  })
}

const userList = params => {
  return fetch({
    url: '/api/person/getPersonListByCompany',
    method: 'get',
    params: params
  })
}

/**
 * 提交用户注册信息
 * @param params
 */
const postUserInfo = params => {
  return fetch({
    url: '',
    method: 'post',
    data: params
  })
}

/**
 * 验证邮箱 token是否过期
 * @param params
 */
const checkToken = params => {
  return fetch({
    url: '',
    method: 'get',
    params: params
  })
}

const getDappInfoListData = (params) => {
  return fetch({
    url: 'dappInfo/list.json',
    params: params,
    method: 'get'
  })
}

const addDappInfo = (info) => {
  return fetch({
    url: 'dappInfo/add.json',
    data: info,
    method: 'post'
  })
}

const deleteDappInfo = (params) => {
  return fetch({
    url: 'dappInfo/delete.json',
    params: params,
    method: 'get'
  })
}

const updateDappInfo = (info) => {
  return fetch({
    url: 'dappInfo/update.json',
    data: info,
    method: 'post'
  })
}

const getTagListData = (params) => {
  return fetch({
    url: 'tag/list.json',
    params: params,
    method: 'get'
  })
}

const addTag = (params) => {
  return fetch({
    url: 'tag/add.json',
    params: params,
    method: 'get'
  })
}

const deleteTag = (params) => {
  return fetch({
    url: 'tag/delete.json',
    params: params,
    method: 'get'
  })
}

const updateTag = (params) => {
  return fetch({
    url: 'tag/update.json',
    params: params,
    method: 'get'
  })
}

const getCategoryListData = (params) => {
  return fetch({
    url: 'category/list.json',
    params: params,
    method: 'get'
  })
}

const addCategory = (params) => {
  return fetch({
    url: 'category/add.json',
    params: params,
    method: 'get'
  })
}

const deleteCategory = (params) => {
  return fetch({
    url: 'category/delete.json',
    params: params,
    method: 'get'
  })
}

const updateCategory = (params) => {
  return fetch({
    url: 'category/update.json',
    params: params,
    method: 'get'
  })
}

const getDappUpdateApplicationListData = (params) => {
  return fetch({
    url: 'dappUpdateApplication/list.json',
    params: params,
    method: 'get'
  })
}

const addDappUpdateApplication = (dappUpdateApplication) => {
  return fetch({
    url: 'dappUpdateApplication/add.json',
    data: dappUpdateApplication,
    method: 'post'
  })
}

const deleteDappUpdateApplication = (params) => {
  return fetch({
    url: 'dappUpdateApplication/delete.json',
    params: params,
    method: 'get'
  })
}

const updateDappUpdateApplication = (dappUpdateApplication) => {
  return fetch({
    url: 'dappUpdateApplication/update.json',
    data: dappUpdateApplication,
    method: 'post'
  })
}

const getDappPromotedApplicationListData = (params) => {
  return fetch({
    url: 'dappPromotedApplication/list.json',
    params: params,
    method: 'get'
  })
}

const addDappPromotedApplication = (dappPromotedApplication) => {
  return fetch({
    url: 'dappPromotedApplication/add.json',
    data: dappPromotedApplication,
    method: 'post'
  })
}

const deleteDappPromotedApplication = (params) => {
  return fetch({
    url: 'dappPromotedApplication/delete.json',
    params: params,
    method: 'get'
  })
}

const updateDappPromotedApplication = (dappPromotedApplication) => {
  return fetch({
    url: 'dappPromotedApplication/update.json',
    data: dappPromotedApplication,
    method: 'post'
  })
}

const getSubscriberListData = (params) => {
  return fetch({
    url: 'subscriber/list.json',
    params: params,
    method: 'get'
  })
}

const addSubscriber = (subscriber) => {
  return fetch({
    url: 'subscriber/add.json',
    data: subscriber,
    method: 'post'
  })
}

const deleteSubscriber = (params) => {
  return fetch({
    url: 'subscriber/delete.json',
    params: params,
    method: 'get'
  })
}

const updateSubscriber = (subscriber) => {
  return fetch({
    url: 'subscriber/update.json',
    data: subscriber,
    method: 'post'
  })
}

const getAdminListData = (params) => {
  return fetch({
    url: 'admin/list.json',
    params: params,
    method: 'get'
  })
}

const addAdmin = (admin) => {
  return fetch({
    url: 'admin/add.json',
    data: admin,
    method: 'post'
  })
}

const deleteAdmin = (params) => {
  return fetch({
    url: 'admin/delete.json',
    params: params,
    method: 'get'
  })
}

const updateAdmin = (admin) => {
  return fetch({
    url: 'admin/update.json',
    data: admin,
    method: 'post'
  })
}

const getSuggestionSubmitListData = (params) => {
  return fetch({
    url: 'suggestionSubmit/list.json',
    params: params,
    method: 'get'
  })
}

const addSuggestionSubmit = (suggestionSubmit) => {
  return fetch({
    url: 'suggestionSubmit/add.json',
    data: suggestionSubmit,
    method: 'post'
  })
}

const deleteSuggestionSubmit = (params) => {
  return fetch({
    url: 'suggestionSubmit/delete.json',
    params: params,
    method: 'get'
  })
}

const updateSuggestionSubmit = (suggestionSubmit) => {
  return fetch({
    url: 'suggestionSubmit/update.json',
    data: suggestionSubmit,
    method: 'post'
  })
}

const apiList = {
  orderList,
  articleList,
  userList,
  postUserInfo,
  checkToken,
  getDappInfoListData,
  addDappInfo,
  updateDappInfo,
  deleteDappInfo,
  getTagListData,
  addTag,
  updateTag,
  deleteTag,
  getCategoryListData,
  addCategory,
  updateCategory,
  deleteCategory,
  getDappPromotedApplicationListData,
  addDappPromotedApplication,
  updateDappPromotedApplication,
  deleteDappPromotedApplication,
  getDappUpdateApplicationListData,
  addDappUpdateApplication,
  updateDappUpdateApplication,
  deleteDappUpdateApplication,
  getSubscriberListData,
  addSubscriber,
  updateSubscriber,
  deleteSubscriber,
  getSuggestionSubmitListData,
  addSuggestionSubmit,
  updateSuggestionSubmit,
  deleteSuggestionSubmit,
  getAdminListData,
  addAdmin,
  updateAdmin,
  deleteAdmin
}

export default apiList
