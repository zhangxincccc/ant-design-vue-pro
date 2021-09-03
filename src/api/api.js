/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    系统接口文档，如果需要，可以覆盖Swagger配置进行自定义配置
 ==========================================================*/
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listAdditionalIncomes
* url: listAdditionalIncomesURL
* method: listAdditionalIncomes_TYPE
* raw_url: listAdditionalIncomes_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchDate - 查询条件:date，等于
     * @param searchIncomeName - 查询条件:income_name，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listAdditionalIncomes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/additionalIncomes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDate'] !== undefined) {
    queryParameters['search_date'] = parameters['searchDate']
  }
  if (parameters['searchIncomeName'] !== undefined) {
    queryParameters['search_incomeName'] = parameters['searchIncomeName']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAdditionalIncomes_RAW_URL = function() {
  return '/api/additionalIncomes'
}
export const listAdditionalIncomes_TYPE = function() {
  return 'get'
}
export const listAdditionalIncomesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/additionalIncomes'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDate'] !== undefined) {
    queryParameters['search_date'] = parameters['searchDate']
  }
  if (parameters['searchIncomeName'] !== undefined) {
    queryParameters['search_incomeName'] = parameters['searchIncomeName']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createAdditionalIncome
 * url: createAdditionalIncomeURL
 * method: createAdditionalIncome_TYPE
 * raw_url: createAdditionalIncome_RAW_URL
 * @param body - 实体参数
 */
export const createAdditionalIncome = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/additionalIncomes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAdditionalIncome_RAW_URL = function() {
  return '/api/additionalIncomes'
}
export const createAdditionalIncome_TYPE = function() {
  return 'post'
}
export const createAdditionalIncomeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/additionalIncomes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAdditionalIncomeById
 * url: loadAdditionalIncomeByIdURL
 * method: loadAdditionalIncomeById_TYPE
 * raw_url: loadAdditionalIncomeById_RAW_URL
 * @param id - ID
 */
export const loadAdditionalIncomeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/additionalIncomes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadAdditionalIncomeById_RAW_URL = function() {
  return '/api/additionalIncomes/{id}'
}
export const loadAdditionalIncomeById_TYPE = function() {
  return 'get'
}
export const loadAdditionalIncomeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/additionalIncomes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateAdditionalIncome
 * url: updateAdditionalIncomeURL
 * method: updateAdditionalIncome_TYPE
 * raw_url: updateAdditionalIncome_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateAdditionalIncome = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/additionalIncomes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateAdditionalIncome_RAW_URL = function() {
  return '/api/additionalIncomes/{id}'
}
export const updateAdditionalIncome_TYPE = function() {
  return 'put'
}
export const updateAdditionalIncomeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/additionalIncomes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteAdditionalIncomeById
 * url: deleteAdditionalIncomeByIdURL
 * method: deleteAdditionalIncomeById_TYPE
 * raw_url: deleteAdditionalIncomeById_RAW_URL
 * @param id - ID
 */
export const deleteAdditionalIncomeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/additionalIncomes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAdditionalIncomeById_RAW_URL = function() {
  return '/api/additionalIncomes/{id}'
}
export const deleteAdditionalIncomeById_TYPE = function() {
  return 'delete'
}
export const deleteAdditionalIncomeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/additionalIncomes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listAreaEquipments
* url: listAreaEquipmentsURL
* method: listAreaEquipments_TYPE
* raw_url: listAreaEquipments_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAreaid - 查询条件:areaid，等于
     * @param searchClosetime - 查询条件:closetime，等于
     * @param searchEquipmenttype - 查询条件:equipmenttype，等于
     * @param searchExecute - 查询条件:execute，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchOpentime - 查询条件:opentime，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listAreaEquipments = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaEquipments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreaid'] !== undefined) {
    queryParameters['search_areaid'] = parameters['searchAreaid']
  }
  if (parameters['searchClosetime'] !== undefined) {
    queryParameters['search_closetime'] = parameters['searchClosetime']
  }
  if (parameters['searchEquipmenttype'] !== undefined) {
    queryParameters['search_equipmenttype'] = parameters['searchEquipmenttype']
  }
  if (parameters['searchExecute'] !== undefined) {
    queryParameters['search_execute'] = parameters['searchExecute']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOpentime'] !== undefined) {
    queryParameters['search_opentime'] = parameters['searchOpentime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAreaEquipments_RAW_URL = function() {
  return '/api/areaEquipments'
}
export const listAreaEquipments_TYPE = function() {
  return 'get'
}
export const listAreaEquipmentsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaEquipments'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreaid'] !== undefined) {
    queryParameters['search_areaid'] = parameters['searchAreaid']
  }
  if (parameters['searchClosetime'] !== undefined) {
    queryParameters['search_closetime'] = parameters['searchClosetime']
  }
  if (parameters['searchEquipmenttype'] !== undefined) {
    queryParameters['search_equipmenttype'] = parameters['searchEquipmenttype']
  }
  if (parameters['searchExecute'] !== undefined) {
    queryParameters['search_execute'] = parameters['searchExecute']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOpentime'] !== undefined) {
    queryParameters['search_opentime'] = parameters['searchOpentime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createAreaEquipment
 * url: createAreaEquipmentURL
 * method: createAreaEquipment_TYPE
 * raw_url: createAreaEquipment_RAW_URL
 * @param body - 实体参数
 */
export const createAreaEquipment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaEquipments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAreaEquipment_RAW_URL = function() {
  return '/api/areaEquipments'
}
export const createAreaEquipment_TYPE = function() {
  return 'post'
}
export const createAreaEquipmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaEquipments'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAreaEquipmentById
 * url: loadAreaEquipmentByIdURL
 * method: loadAreaEquipmentById_TYPE
 * raw_url: loadAreaEquipmentById_RAW_URL
 * @param id - ID
 */
export const loadAreaEquipmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaEquipments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadAreaEquipmentById_RAW_URL = function() {
  return '/api/areaEquipments/{id}'
}
export const loadAreaEquipmentById_TYPE = function() {
  return 'get'
}
export const loadAreaEquipmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaEquipments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateAreaEquipment
 * url: updateAreaEquipmentURL
 * method: updateAreaEquipment_TYPE
 * raw_url: updateAreaEquipment_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateAreaEquipment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaEquipments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateAreaEquipment_RAW_URL = function() {
  return '/api/areaEquipments/{id}'
}
export const updateAreaEquipment_TYPE = function() {
  return 'put'
}
export const updateAreaEquipmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaEquipments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteAreaEquipmentById
 * url: deleteAreaEquipmentByIdURL
 * method: deleteAreaEquipmentById_TYPE
 * raw_url: deleteAreaEquipmentById_RAW_URL
 * @param id - ID
 */
export const deleteAreaEquipmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaEquipments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAreaEquipmentById_RAW_URL = function() {
  return '/api/areaEquipments/{id}'
}
export const deleteAreaEquipmentById_TYPE = function() {
  return 'delete'
}
export const deleteAreaEquipmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaEquipments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listAreaLocks
* url: listAreaLocksURL
* method: listAreaLocks_TYPE
* raw_url: listAreaLocks_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchChargesrule - 查询条件:chargesrule，等于
     * @param searchContent - 查询条件:content，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchEndTimeZone - 查询条件:end_time_zone，等于
     * @param searchNeedNotice - 查询条件:need_notice，等于
     * @param searchStartTimeZone - 查询条件:start_time_zone，等于
     * @param searchTitle - 查询条件:title，等于
     * @param searchUseEnd - 查询条件:use_end，等于
     * @param searchUseStart - 查询条件:use_start，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listAreaLocks = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchEndTimeZone'] !== undefined) {
    queryParameters['search_endTimeZone'] = parameters['searchEndTimeZone']
  }
  if (parameters['searchNeedNotice'] !== undefined) {
    queryParameters['search_needNotice'] = parameters['searchNeedNotice']
  }
  if (parameters['searchStartTimeZone'] !== undefined) {
    queryParameters['search_startTimeZone'] = parameters['searchStartTimeZone']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUseEnd'] !== undefined) {
    queryParameters['search_useEnd'] = parameters['searchUseEnd']
  }
  if (parameters['searchUseStart'] !== undefined) {
    queryParameters['search_useStart'] = parameters['searchUseStart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAreaLocks_RAW_URL = function() {
  return '/api/areaLocks'
}
export const listAreaLocks_TYPE = function() {
  return 'get'
}
export const listAreaLocksURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchEndTimeZone'] !== undefined) {
    queryParameters['search_endTimeZone'] = parameters['searchEndTimeZone']
  }
  if (parameters['searchNeedNotice'] !== undefined) {
    queryParameters['search_needNotice'] = parameters['searchNeedNotice']
  }
  if (parameters['searchStartTimeZone'] !== undefined) {
    queryParameters['search_startTimeZone'] = parameters['searchStartTimeZone']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUseEnd'] !== undefined) {
    queryParameters['search_useEnd'] = parameters['searchUseEnd']
  }
  if (parameters['searchUseStart'] !== undefined) {
    queryParameters['search_useStart'] = parameters['searchUseStart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createAreaLock
 * url: createAreaLockURL
 * method: createAreaLock_TYPE
 * raw_url: createAreaLock_RAW_URL
 * @param body - 实体参数
 */
export const createAreaLock = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAreaLock_RAW_URL = function() {
  return '/api/areaLocks'
}
export const createAreaLock_TYPE = function() {
  return 'post'
}
export const createAreaLockURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAreaLockReserve
 * url: loadAreaLockReserveURL
 * method: loadAreaLockReserve_TYPE
 * raw_url: loadAreaLockReserve_RAW_URL
 * @param body - 实体参数
 */
export const loadAreaLockReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks/reserve'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const loadAreaLockReserve_RAW_URL = function() {
  return '/api/areaLocks/reserve'
}
export const loadAreaLockReserve_TYPE = function() {
  return 'post'
}
export const loadAreaLockReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks/reserve'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAreaLockById
 * url: loadAreaLockByIdURL
 * method: loadAreaLockById_TYPE
 * raw_url: loadAreaLockById_RAW_URL
 * @param id - ID
 */
export const loadAreaLockById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadAreaLockById_RAW_URL = function() {
  return '/api/areaLocks/{id}'
}
export const loadAreaLockById_TYPE = function() {
  return 'get'
}
export const loadAreaLockByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateAreaLock
 * url: updateAreaLockURL
 * method: updateAreaLock_TYPE
 * raw_url: updateAreaLock_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateAreaLock = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateAreaLock_RAW_URL = function() {
  return '/api/areaLocks/{id}'
}
export const updateAreaLock_TYPE = function() {
  return 'put'
}
export const updateAreaLockURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteAreaLockById
 * url: deleteAreaLockByIdURL
 * method: deleteAreaLockById_TYPE
 * raw_url: deleteAreaLockById_RAW_URL
 * @param id - ID
 */
export const deleteAreaLockById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaLocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAreaLockById_RAW_URL = function() {
  return '/api/areaLocks/{id}'
}
export const deleteAreaLockById_TYPE = function() {
  return 'delete'
}
export const deleteAreaLockByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaLocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listAreaUses
* url: listAreaUsesURL
* method: listAreaUses_TYPE
* raw_url: listAreaUses_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchContent - 查询条件:content，等于
     * @param searchTitle - 查询条件:title，等于
     * @param searchUseEnd - 查询条件:use_end，等于
     * @param searchUseStart - 查询条件:use_start，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listAreaUses = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaUses'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUseEnd'] !== undefined) {
    queryParameters['search_useEnd'] = parameters['searchUseEnd']
  }
  if (parameters['searchUseStart'] !== undefined) {
    queryParameters['search_useStart'] = parameters['searchUseStart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAreaUses_RAW_URL = function() {
  return '/api/areaUses'
}
export const listAreaUses_TYPE = function() {
  return 'get'
}
export const listAreaUsesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaUses'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUseEnd'] !== undefined) {
    queryParameters['search_useEnd'] = parameters['searchUseEnd']
  }
  if (parameters['searchUseStart'] !== undefined) {
    queryParameters['search_useStart'] = parameters['searchUseStart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createAreaUse
 * url: createAreaUseURL
 * method: createAreaUse_TYPE
 * raw_url: createAreaUse_RAW_URL
 * @param body - 实体参数
 */
export const createAreaUse = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaUses'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAreaUse_RAW_URL = function() {
  return '/api/areaUses'
}
export const createAreaUse_TYPE = function() {
  return 'post'
}
export const createAreaUseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaUses'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAreaUseById
 * url: loadAreaUseByIdURL
 * method: loadAreaUseById_TYPE
 * raw_url: loadAreaUseById_RAW_URL
 * @param id - ID
 */
export const loadAreaUseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaUses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadAreaUseById_RAW_URL = function() {
  return '/api/areaUses/{id}'
}
export const loadAreaUseById_TYPE = function() {
  return 'get'
}
export const loadAreaUseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaUses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateAreaUse
 * url: updateAreaUseURL
 * method: updateAreaUse_TYPE
 * raw_url: updateAreaUse_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateAreaUse = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaUses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateAreaUse_RAW_URL = function() {
  return '/api/areaUses/{id}'
}
export const updateAreaUse_TYPE = function() {
  return 'put'
}
export const updateAreaUseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaUses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteAreaUseById
 * url: deleteAreaUseByIdURL
 * method: deleteAreaUseById_TYPE
 * raw_url: deleteAreaUseById_RAW_URL
 * @param id - ID
 */
export const deleteAreaUseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areaUses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAreaUseById_RAW_URL = function() {
  return '/api/areaUses/{id}'
}
export const deleteAreaUseById_TYPE = function() {
  return 'delete'
}
export const deleteAreaUseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areaUses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listAreas
* url: listAreasURL
* method: listAreas_TYPE
* raw_url: listAreas_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAreaname - 查询条件:areaname，等于
     * @param searchCatatype - 查询条件:catatype，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listAreas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreaname'] !== undefined) {
    queryParameters['search_areaname'] = parameters['searchAreaname']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAreas_RAW_URL = function() {
  return '/api/areas'
}
export const listAreas_TYPE = function() {
  return 'get'
}
export const listAreasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areas'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreaname'] !== undefined) {
    queryParameters['search_areaname'] = parameters['searchAreaname']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createArea
 * url: createAreaURL
 * method: createArea_TYPE
 * raw_url: createArea_RAW_URL
 * @param body - 实体参数
 */
export const createArea = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createArea_RAW_URL = function() {
  return '/api/areas'
}
export const createArea_TYPE = function() {
  return 'post'
}
export const createAreaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadAreaById
 * url: loadAreaByIdURL
 * method: loadAreaById_TYPE
 * raw_url: loadAreaById_RAW_URL
 * @param id - ID
 */
export const loadAreaById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadAreaById_RAW_URL = function() {
  return '/api/areas/{id}'
}
export const loadAreaById_TYPE = function() {
  return 'get'
}
export const loadAreaByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateArea
 * url: updateAreaURL
 * method: updateArea_TYPE
 * raw_url: updateArea_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateArea = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateArea_RAW_URL = function() {
  return '/api/areas/{id}'
}
export const updateArea_TYPE = function() {
  return 'put'
}
export const updateAreaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteAreaById
 * url: deleteAreaByIdURL
 * method: deleteAreaById_TYPE
 * raw_url: deleteAreaById_RAW_URL
 * @param id - ID
 */
export const deleteAreaById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/areas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAreaById_RAW_URL = function() {
  return '/api/areas/{id}'
}
export const deleteAreaById_TYPE = function() {
  return 'delete'
}
export const deleteAreaByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/areas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createAttachment
 * url: createAttachmentURL
 * method: createAttachment_TYPE
 * raw_url: createAttachment_RAW_URL
 * @param attachment - attachment
 */
export const createAttachment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/attachments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['attachment'] !== undefined) {
    form['attachment'] = parameters['attachment']
  }
  if (parameters['attachment'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: attachment'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createAttachment_RAW_URL = function() {
  return '/api/attachments'
}
export const createAttachment_TYPE = function() {
  return 'post'
}
export const createAttachmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/attachments'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序字段：type,mappingMethod,mappingUrl,userName,requestMethod,requestUrl,createTime
成功：code=200，data对象为包含分页信息的业务日志列表，失败：code!=200
* request: listBusinessLogs
* url: listBusinessLogsURL
* method: listBusinessLogs_TYPE
* raw_url: listBusinessLogs_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchArguments - 查询条件:请求参数，模糊匹配
     * @param searchContent - 查询条件:日志内容，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchIp - 查询条件:客户端IP地址，模糊匹配
     * @param searchMappingMethod - 查询条件:映射请求方式，模糊匹配
     * @param searchMappingUrl - 查询条件:映射URL地址，模糊匹配
     * @param searchRequestMethod - 查询条件:映射请求方式，精确匹配
     * @param searchRequestUrl - 查询条件:映射URL地址，模糊匹配
     * @param searchReturnValue - 查询条件:返回值，模糊匹配
     * @param searchType - 查询条件:日志类型，精确匹配
     * @param searchUserId - 查询条件:日志用户ID，精确匹配
     * @param searchUserName - 查询条件:日志用户名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listBusinessLogs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/businessLogs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchArguments'] !== undefined) {
    queryParameters['search_arguments'] = parameters['searchArguments']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchIp'] !== undefined) {
    queryParameters['search_ip'] = parameters['searchIp']
  }
  if (parameters['searchMappingMethod'] !== undefined) {
    queryParameters['search_mappingMethod'] = parameters['searchMappingMethod']
  }
  if (parameters['searchMappingUrl'] !== undefined) {
    queryParameters['search_mappingUrl'] = parameters['searchMappingUrl']
  }
  if (parameters['searchRequestMethod'] !== undefined) {
    queryParameters['search_requestMethod'] = parameters['searchRequestMethod']
  }
  if (parameters['searchRequestUrl'] !== undefined) {
    queryParameters['search_requestUrl'] = parameters['searchRequestUrl']
  }
  if (parameters['searchReturnValue'] !== undefined) {
    queryParameters['search_returnValue'] = parameters['searchReturnValue']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUserId'] !== undefined) {
    queryParameters['search_userId'] = parameters['searchUserId']
  }
  if (parameters['searchUserName'] !== undefined) {
    queryParameters['search_userName'] = parameters['searchUserName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listBusinessLogs_RAW_URL = function() {
  return '/api/businessLogs'
}
export const listBusinessLogs_TYPE = function() {
  return 'get'
}
export const listBusinessLogsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/businessLogs'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchArguments'] !== undefined) {
    queryParameters['search_arguments'] = parameters['searchArguments']
  }
  if (parameters['searchContent'] !== undefined) {
    queryParameters['search_content'] = parameters['searchContent']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchIp'] !== undefined) {
    queryParameters['search_ip'] = parameters['searchIp']
  }
  if (parameters['searchMappingMethod'] !== undefined) {
    queryParameters['search_mappingMethod'] = parameters['searchMappingMethod']
  }
  if (parameters['searchMappingUrl'] !== undefined) {
    queryParameters['search_mappingUrl'] = parameters['searchMappingUrl']
  }
  if (parameters['searchRequestMethod'] !== undefined) {
    queryParameters['search_requestMethod'] = parameters['searchRequestMethod']
  }
  if (parameters['searchRequestUrl'] !== undefined) {
    queryParameters['search_requestUrl'] = parameters['searchRequestUrl']
  }
  if (parameters['searchReturnValue'] !== undefined) {
    queryParameters['search_returnValue'] = parameters['searchReturnValue']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUserId'] !== undefined) {
    queryParameters['search_userId'] = parameters['searchUserId']
  }
  if (parameters['searchUserName'] !== undefined) {
    queryParameters['search_userName'] = parameters['searchUserName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listCardchanges
* url: listCardchangesURL
* method: listCardchanges_TYPE
* raw_url: listCardchanges_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchFlag - 查询条件:flag，等于
     * @param searchNew - 查询条件:new，等于
     * @param searchOld - 查询条件:old，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listCardchanges = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cardchanges'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchNew'] !== undefined) {
    queryParameters['search_new'] = parameters['searchNew']
  }
  if (parameters['searchOld'] !== undefined) {
    queryParameters['search_old'] = parameters['searchOld']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCardchanges_RAW_URL = function() {
  return '/api/cardchanges'
}
export const listCardchanges_TYPE = function() {
  return 'get'
}
export const listCardchangesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cardchanges'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchNew'] !== undefined) {
    queryParameters['search_new'] = parameters['searchNew']
  }
  if (parameters['searchOld'] !== undefined) {
    queryParameters['search_old'] = parameters['searchOld']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createCardchange
 * url: createCardchangeURL
 * method: createCardchange_TYPE
 * raw_url: createCardchange_RAW_URL
 * @param body - 实体参数
 */
export const createCardchange = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cardchanges'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createCardchange_RAW_URL = function() {
  return '/api/cardchanges'
}
export const createCardchange_TYPE = function() {
  return 'post'
}
export const createCardchangeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cardchanges'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCardchangeById
 * url: loadCardchangeByIdURL
 * method: loadCardchangeById_TYPE
 * raw_url: loadCardchangeById_RAW_URL
 * @param id - ID
 */
export const loadCardchangeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cardchanges/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCardchangeById_RAW_URL = function() {
  return '/api/cardchanges/{id}'
}
export const loadCardchangeById_TYPE = function() {
  return 'get'
}
export const loadCardchangeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cardchanges/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateCardchange
 * url: updateCardchangeURL
 * method: updateCardchange_TYPE
 * raw_url: updateCardchange_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateCardchange = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cardchanges/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCardchange_RAW_URL = function() {
  return '/api/cardchanges/{id}'
}
export const updateCardchange_TYPE = function() {
  return 'put'
}
export const updateCardchangeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cardchanges/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteCardchangeById
 * url: deleteCardchangeByIdURL
 * method: deleteCardchangeById_TYPE
 * raw_url: deleteCardchangeById_RAW_URL
 * @param id - ID
 */
export const deleteCardchangeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cardchanges/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCardchangeById_RAW_URL = function() {
  return '/api/cardchanges/{id}'
}
export const deleteCardchangeById_TYPE = function() {
  return 'delete'
}
export const deleteCardchangeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cardchanges/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listCards
* url: listCardsURL
* method: listCards_TYPE
* raw_url: listCards_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchBillid - 查询条件:billid，等于
     * @param searchCardcount - 查询条件:cardcount，等于
     * @param searchCardmoney - 查询条件:cardmoney，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchHallid - 查询条件:hallid，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listCards = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardcount'] !== undefined) {
    queryParameters['search_cardcount'] = parameters['searchCardcount']
  }
  if (parameters['searchCardmoney'] !== undefined) {
    queryParameters['search_cardmoney'] = parameters['searchCardmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCards_RAW_URL = function() {
  return '/api/cards'
}
export const listCards_TYPE = function() {
  return 'get'
}
export const listCardsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardcount'] !== undefined) {
    queryParameters['search_cardcount'] = parameters['searchCardcount']
  }
  if (parameters['searchCardmoney'] !== undefined) {
    queryParameters['search_cardmoney'] = parameters['searchCardmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createCard
 * url: createCardURL
 * method: createCard_TYPE
 * raw_url: createCard_RAW_URL
 * @param body - 实体参数
 */
export const createCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createCard_RAW_URL = function() {
  return '/api/cards'
}
export const createCard_TYPE = function() {
  return 'post'
}
export const createCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: searchCard
* url: searchCardURL
* method: searchCard_TYPE
* raw_url: searchCard_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchBillid - 查询条件:billid，等于
     * @param searchCardcount - 查询条件:cardcount，等于
     * @param searchCardmoney - 查询条件:cardmoney，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchCreateUserId - 查询条件:createUserId，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchHallid - 查询条件:hallid，等于
     * @param searchOperationType - 查询条件:operationType，等于
     * @param searchPayway - 查询条件:payway，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const searchCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards/searchCard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardcount'] !== undefined) {
    queryParameters['search_cardcount'] = parameters['searchCardcount']
  }
  if (parameters['searchCardmoney'] !== undefined) {
    queryParameters['search_cardmoney'] = parameters['searchCardmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchOperationType'] !== undefined) {
    queryParameters['search_operationType'] = parameters['searchOperationType']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const searchCard_RAW_URL = function() {
  return '/api/cards/searchCard'
}
export const searchCard_TYPE = function() {
  return 'get'
}
export const searchCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards/searchCard'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardcount'] !== undefined) {
    queryParameters['search_cardcount'] = parameters['searchCardcount']
  }
  if (parameters['searchCardmoney'] !== undefined) {
    queryParameters['search_cardmoney'] = parameters['searchCardmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchOperationType'] !== undefined) {
    queryParameters['search_operationType'] = parameters['searchOperationType']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCardById
 * url: loadCardByIdURL
 * method: loadCardById_TYPE
 * raw_url: loadCardById_RAW_URL
 * @param id - ID
 */
export const loadCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCardById_RAW_URL = function() {
  return '/api/cards/{id}'
}
export const loadCardById_TYPE = function() {
  return 'get'
}
export const loadCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateCard
 * url: updateCardURL
 * method: updateCard_TYPE
 * raw_url: updateCard_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCard_RAW_URL = function() {
  return '/api/cards/{id}'
}
export const updateCard_TYPE = function() {
  return 'put'
}
export const updateCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteCardById
 * url: deleteCardByIdURL
 * method: deleteCardById_TYPE
 * raw_url: deleteCardById_RAW_URL
 * @param id - ID
 */
export const deleteCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/cards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCardById_RAW_URL = function() {
  return '/api/cards/{id}'
}
export const deleteCardById_TYPE = function() {
  return 'delete'
}
export const deleteCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/cards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkClassMoney
 * url: checkClassMoneyURL
 * method: checkClassMoney_TYPE
 * raw_url: checkClassMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkClassMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/checkClassMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkClassMoney_RAW_URL = function() {
  return '/api/checkMoney/checkClassMoney'
}
export const checkClassMoney_TYPE = function() {
  return 'post'
}
export const checkClassMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/checkClassMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkLeaseMoney
 * url: checkLeaseMoneyURL
 * method: checkLeaseMoney_TYPE
 * raw_url: checkLeaseMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkLeaseMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/checkLeaseMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkLeaseMoney_RAW_URL = function() {
  return '/api/checkMoney/checkLeaseMoney'
}
export const checkLeaseMoney_TYPE = function() {
  return 'post'
}
export const checkLeaseMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/checkLeaseMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkReserveMoney
 * url: checkReserveMoneyURL
 * method: checkReserveMoney_TYPE
 * raw_url: checkReserveMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkReserveMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/checkReserveMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkReserveMoney_RAW_URL = function() {
  return '/api/checkMoney/checkReserveMoney'
}
export const checkReserveMoney_TYPE = function() {
  return 'post'
}
export const checkReserveMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/checkReserveMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkSellMoney
 * url: checkSellMoneyURL
 * method: checkSellMoney_TYPE
 * raw_url: checkSellMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkSellMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/checkSellMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkSellMoney_RAW_URL = function() {
  return '/api/checkMoney/checkSellMoney'
}
export const checkSellMoney_TYPE = function() {
  return 'post'
}
export const checkSellMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/checkSellMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: bill
 * url: billURL
 * method: bill_TYPE
 * raw_url: bill_RAW_URL
 * @param body - 实体参数
 */
export const bill = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/gathering'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const bill_RAW_URL = function() {
  return '/api/checkMoney/gathering'
}
export const bill_TYPE = function() {
  return 'post'
}
export const billURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/gathering'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: monthCheck
 * url: monthCheckURL
 * method: monthCheck_TYPE
 * raw_url: monthCheck_RAW_URL
 * @param body - 实体参数
 */
export const monthCheck = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkMoney/monthCheck'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const monthCheck_RAW_URL = function() {
  return '/api/checkMoney/monthCheck'
}
export const monthCheck_TYPE = function() {
  return 'post'
}
export const monthCheckURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkMoney/monthCheck'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkSwamReserveMoney
 * url: checkSwamReserveMoneyURL
 * method: checkSwamReserveMoney_TYPE
 * raw_url: checkSwamReserveMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkSwamReserveMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkSwamMoney/checkReserveMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkSwamReserveMoney_RAW_URL = function() {
  return '/api/checkSwamMoney/checkReserveMoney'
}
export const checkSwamReserveMoney_TYPE = function() {
  return 'post'
}
export const checkSwamReserveMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkSwamMoney/checkReserveMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkSwamSellMoney
 * url: checkSwamSellMoneyURL
 * method: checkSwamSellMoney_TYPE
 * raw_url: checkSwamSellMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkSwamSellMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkSwamMoney/checkSellMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkSwamSellMoney_RAW_URL = function() {
  return '/api/checkSwamMoney/checkSellMoney'
}
export const checkSwamSellMoney_TYPE = function() {
  return 'post'
}
export const checkSwamSellMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkSwamMoney/checkSellMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: checkSwamLeaseMoney
 * url: checkSwamLeaseMoneyURL
 * method: checkSwamLeaseMoney_TYPE
 * raw_url: checkSwamLeaseMoney_RAW_URL
 * @param body - 实体参数
 */
export const checkSwamLeaseMoney = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkSwamMoney/checkSwamLeaseMoney'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const checkSwamLeaseMoney_RAW_URL = function() {
  return '/api/checkSwamMoney/checkSwamLeaseMoney'
}
export const checkSwamLeaseMoney_TYPE = function() {
  return 'post'
}
export const checkSwamLeaseMoneyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkSwamMoney/checkSwamLeaseMoney'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: bill_1
 * url: bill_1URL
 * method: bill_1_TYPE
 * raw_url: bill_1_RAW_URL
 * @param body - 实体参数
 */
export const bill_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkSwamMoney/gathering'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const bill_1_RAW_URL = function() {
  return '/api/checkSwamMoney/gathering'
}
export const bill_1_TYPE = function() {
  return 'post'
}
export const bill_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkSwamMoney/gathering'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: monthSwam
 * url: monthSwamURL
 * method: monthSwam_TYPE
 * raw_url: monthSwam_RAW_URL
 * @param body - 实体参数
 */
export const monthSwam = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checkSwamMoney/monthSwam'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const monthSwam_RAW_URL = function() {
  return '/api/checkSwamMoney/monthSwam'
}
export const monthSwam_TYPE = function() {
  return 'post'
}
export const monthSwamURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checkSwamMoney/monthSwam'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: qrcode
 * url: qrcodeURL
 * method: qrcode_TYPE
 * raw_url: qrcode_RAW_URL
 * @param body - 实体参数
 */
export const qrcode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checktickets/qrCode'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const qrcode_RAW_URL = function() {
  return '/api/checktickets/qrCode'
}
export const qrcode_TYPE = function() {
  return 'post'
}
export const qrcodeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checktickets/qrCode'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: swimming
 * url: swimmingURL
 * method: swimming_TYPE
 * raw_url: swimming_RAW_URL
 * @param body - 实体参数
 */
export const swimming = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/checktickets/swimming'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const swimming_RAW_URL = function() {
  return '/api/checktickets/swimming'
}
export const swimming_TYPE = function() {
  return 'post'
}
export const swimmingURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/checktickets/swimming'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listClasses
* url: listClassesURL
* method: listClasses_TYPE
* raw_url: listClasses_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchClassterm - 查询条件:classterm，等于
     * @param searchClasstype - 查询条件:classtype，等于
     * @param searchEnddate - 查询条件:enddate，小于等于
     * @param searchEndtime - 查询条件:endtime，等于
     * @param searchName - 查询条件:name，模糊查询
     * @param searchPhone - 查询条件:phone，等于
     * @param searchStartdate - 查询条件:startdate，大于等于
     * @param searchStarttime - 查询条件:starttime，等于
     * @param searchTeacher - 查询条件:teacher，模糊查询
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listClasses = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/classes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchClassterm'] !== undefined) {
    queryParameters['search_classterm'] = parameters['searchClassterm']
  }
  if (parameters['searchClasstype'] !== undefined) {
    queryParameters['search_classtype'] = parameters['searchClasstype']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchTeacher'] !== undefined) {
    queryParameters['search_teacher'] = parameters['searchTeacher']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listClasses_RAW_URL = function() {
  return '/api/classes'
}
export const listClasses_TYPE = function() {
  return 'get'
}
export const listClassesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/classes'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchClassterm'] !== undefined) {
    queryParameters['search_classterm'] = parameters['searchClassterm']
  }
  if (parameters['searchClasstype'] !== undefined) {
    queryParameters['search_classtype'] = parameters['searchClasstype']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchTeacher'] !== undefined) {
    queryParameters['search_teacher'] = parameters['searchTeacher']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createClass
 * url: createClassURL
 * method: createClass_TYPE
 * raw_url: createClass_RAW_URL
 * @param body - 实体参数
 */
export const createClass = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/classes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createClass_RAW_URL = function() {
  return '/api/classes'
}
export const createClass_TYPE = function() {
  return 'post'
}
export const createClassURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/classes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadClassById
 * url: loadClassByIdURL
 * method: loadClassById_TYPE
 * raw_url: loadClassById_RAW_URL
 * @param id - ID
 */
export const loadClassById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/classes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadClassById_RAW_URL = function() {
  return '/api/classes/{id}'
}
export const loadClassById_TYPE = function() {
  return 'get'
}
export const loadClassByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/classes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateClass
 * url: updateClassURL
 * method: updateClass_TYPE
 * raw_url: updateClass_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateClass = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/classes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateClass_RAW_URL = function() {
  return '/api/classes/{id}'
}
export const updateClass_TYPE = function() {
  return 'put'
}
export const updateClassURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/classes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteClassById
 * url: deleteClassByIdURL
 * method: deleteClassById_TYPE
 * raw_url: deleteClassById_RAW_URL
 * @param id - ID
 */
export const deleteClassById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/classes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteClassById_RAW_URL = function() {
  return '/api/classes/{id}'
}
export const deleteClassById_TYPE = function() {
  return 'delete'
}
export const deleteClassByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/classes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listCustCharges
* url: listCustChargesURL
* method: listCustCharges_TYPE
* raw_url: listCustCharges_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchChargesrule - 查询条件:chargesrule，等于
     * @param searchCustype - 查询条件:custype，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listCustCharges = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custCharges'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchCustype'] !== undefined) {
    queryParameters['search_custype'] = parameters['searchCustype']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCustCharges_RAW_URL = function() {
  return '/api/custCharges'
}
export const listCustCharges_TYPE = function() {
  return 'get'
}
export const listCustChargesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custCharges'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchCustype'] !== undefined) {
    queryParameters['search_custype'] = parameters['searchCustype']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createCustCharge
 * url: createCustChargeURL
 * method: createCustCharge_TYPE
 * raw_url: createCustCharge_RAW_URL
 * @param body - 实体参数
 */
export const createCustCharge = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custCharges'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createCustCharge_RAW_URL = function() {
  return '/api/custCharges'
}
export const createCustCharge_TYPE = function() {
  return 'post'
}
export const createCustChargeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custCharges'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCustChargeById
 * url: loadCustChargeByIdURL
 * method: loadCustChargeById_TYPE
 * raw_url: loadCustChargeById_RAW_URL
 * @param body - 实体参数
 */
export const loadCustChargeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custCharges/custype'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const loadCustChargeById_RAW_URL = function() {
  return '/api/custCharges/custype'
}
export const loadCustChargeById_TYPE = function() {
  return 'post'
}
export const loadCustChargeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custCharges/custype'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteCustChargeById
 * url: deleteCustChargeByIdURL
 * method: deleteCustChargeById_TYPE
 * raw_url: deleteCustChargeById_RAW_URL
 * @param body - 实体参数
 */
export const deleteCustChargeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custCharges/store'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const deleteCustChargeById_RAW_URL = function() {
  return '/api/custCharges/store'
}
export const deleteCustChargeById_TYPE = function() {
  return 'put'
}
export const deleteCustChargeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custCharges/store'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateCustCharge
 * url: updateCustChargeURL
 * method: updateCustCharge_TYPE
 * raw_url: updateCustCharge_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateCustCharge = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custCharges/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCustCharge_RAW_URL = function() {
  return '/api/custCharges/{id}'
}
export const updateCustCharge_TYPE = function() {
  return 'put'
}
export const updateCustChargeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custCharges/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listCustbills
* url: listCustbillsURL
* method: listCustbills_TYPE
* raw_url: listCustbills_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAddmoney - 查询条件:addmoney，等于
     * @param searchBalance - 查询条件:balance，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCusttype - 查询条件:custtype，等于
     * @param searchDecmoney - 查询条件:decmoney，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchHoldmoney - 查询条件:holdmoney，等于
     * @param searchId - 查询条件:id，等于
     * @param searchOpertype - 查询条件:opertype，等于
     * @param searchPaymoney - 查询条件:paymoney，等于
     * @param searchPayref - 查询条件:payref，等于
     * @param searchPayway - 查询条件:payway，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchReceipts - 查询条件:receipts，等于
     * @param searchReceivable - 查询条件:receivable，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchTempdiscount - 查询条件:tempdiscount，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listCustbills = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchBalance'] !== undefined) {
    queryParameters['search_balance'] = parameters['searchBalance']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCusttype'] !== undefined) {
    queryParameters['search_custtype'] = parameters['searchCusttype']
  }
  if (parameters['searchDecmoney'] !== undefined) {
    queryParameters['search_decmoney'] = parameters['searchDecmoney']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchHoldmoney'] !== undefined) {
    queryParameters['search_holdmoney'] = parameters['searchHoldmoney']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchOpertype'] !== undefined) {
    queryParameters['search_opertype'] = parameters['searchOpertype']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['searchPayref'] !== undefined) {
    queryParameters['search_payref'] = parameters['searchPayref']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReceipts'] !== undefined) {
    queryParameters['search_receipts'] = parameters['searchReceipts']
  }
  if (parameters['searchReceivable'] !== undefined) {
    queryParameters['search_receivable'] = parameters['searchReceivable']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchTempdiscount'] !== undefined) {
    queryParameters['search_tempdiscount'] = parameters['searchTempdiscount']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCustbills_RAW_URL = function() {
  return '/api/custbills'
}
export const listCustbills_TYPE = function() {
  return 'get'
}
export const listCustbillsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchBalance'] !== undefined) {
    queryParameters['search_balance'] = parameters['searchBalance']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCusttype'] !== undefined) {
    queryParameters['search_custtype'] = parameters['searchCusttype']
  }
  if (parameters['searchDecmoney'] !== undefined) {
    queryParameters['search_decmoney'] = parameters['searchDecmoney']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchHoldmoney'] !== undefined) {
    queryParameters['search_holdmoney'] = parameters['searchHoldmoney']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchOpertype'] !== undefined) {
    queryParameters['search_opertype'] = parameters['searchOpertype']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['searchPayref'] !== undefined) {
    queryParameters['search_payref'] = parameters['searchPayref']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReceipts'] !== undefined) {
    queryParameters['search_receipts'] = parameters['searchReceipts']
  }
  if (parameters['searchReceivable'] !== undefined) {
    queryParameters['search_receivable'] = parameters['searchReceivable']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchTempdiscount'] !== undefined) {
    queryParameters['search_tempdiscount'] = parameters['searchTempdiscount']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createCustbill
 * url: createCustbillURL
 * method: createCustbill_TYPE
 * raw_url: createCustbill_RAW_URL
 * @param body - 实体参数
 */
export const createCustbill = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createCustbill_RAW_URL = function() {
  return '/api/custbills'
}
export const createCustbill_TYPE = function() {
  return 'post'
}
export const createCustbillURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: listCustbilLease
 * url: listCustbilLeaseURL
 * method: listCustbilLease_TYPE
 * raw_url: listCustbilLease_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCustid - 查询条件:custid 1否 2是，等于
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listCustbilLease = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills/searchlease'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCustbilLease_RAW_URL = function() {
  return '/api/custbills/searchlease'
}
export const listCustbilLease_TYPE = function() {
  return 'get'
}
export const listCustbilLeaseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills/searchlease'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCustbillById
 * url: loadCustbillByIdURL
 * method: loadCustbillById_TYPE
 * raw_url: loadCustbillById_RAW_URL
 * @param id - ID
 */
export const loadCustbillById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCustbillById_RAW_URL = function() {
  return '/api/custbills/{id}'
}
export const loadCustbillById_TYPE = function() {
  return 'get'
}
export const loadCustbillByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateCustbill
 * url: updateCustbillURL
 * method: updateCustbill_TYPE
 * raw_url: updateCustbill_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateCustbill = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCustbill_RAW_URL = function() {
  return '/api/custbills/{id}'
}
export const updateCustbill_TYPE = function() {
  return 'put'
}
export const updateCustbillURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteCustbillById
 * url: deleteCustbillByIdURL
 * method: deleteCustbillById_TYPE
 * raw_url: deleteCustbillById_RAW_URL
 * @param id - ID
 */
export const deleteCustbillById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/custbills/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCustbillById_RAW_URL = function() {
  return '/api/custbills/{id}'
}
export const deleteCustbillById_TYPE = function() {
  return 'delete'
}
export const deleteCustbillByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/custbills/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listCustomers
* url: listCustomersURL
* method: listCustomers_TYPE
* raw_url: listCustomers_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAcctips - 查询条件:acctips，等于
     * @param searchAge - 查询条件:age，等于
     * @param searchBanlance - 查询条件:banlance，等于
     * @param searchBindPhone - 查询条件:bind_phone，等于
     * @param searchBornDate - 查询条件:born_date，等于
     * @param searchCardNo - 查询条件:card_no，等于
     * @param searchCreateDate - 查询条件:create_date，等于
     * @param searchCustKind - 查询条件:cust_kind，等于
     * @param searchCustName - 查询条件:cust_name，等于
     * @param searchCustPhonetic - 查询条件:cust_phonetic，等于
     * @param searchCustSts - 查询条件:cust_sts，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchFavorFlag - 查询条件:favor_flag，等于
     * @param searchFlag - 查询条件:id，等于
     * @param searchHoldMoney - 查询条件:hold_money，等于
     * @param searchId - 查询条件:id，等于
     * @param searchImp - 查询条件:imp_id，等于
     * @param searchLimitDate - 查询条件:limit_date，等于
     * @param searchMd5Pass - 查询条件:md5pass，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchPaytimes - 查询条件:paytimes，等于
     * @param searchPhoneNum - 查询条件:phone_num，等于
     * @param searchPrintNum - 查询条件:print_num，等于
     * @param searchPsaa - 查询条件:psaa，等于
     * @param searchQcodeRandom - 查询条件:qcode_random，等于
     * @param searchQcodeTime - 查询条件:qcode_time，等于
     * @param searchSex - 查询条件:sex，等于
     * @param searchWxName - 查询条件:wx_name，等于
     * @param searchWxOpen - 查询条件:wx_open_id，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listCustomers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchAge'] !== undefined) {
    queryParameters['search_age'] = parameters['searchAge']
  }
  if (parameters['searchBanlance'] !== undefined) {
    queryParameters['search_banlance'] = parameters['searchBanlance']
  }
  if (parameters['searchBindPhone'] !== undefined) {
    queryParameters['search_bindPhone'] = parameters['searchBindPhone']
  }
  if (parameters['searchBornDate'] !== undefined) {
    queryParameters['search_bornDate'] = parameters['searchBornDate']
  }
  if (parameters['searchCardNo'] !== undefined) {
    queryParameters['search_cardNo'] = parameters['searchCardNo']
  }
  if (parameters['searchCreateDate'] !== undefined) {
    queryParameters['search_createDate'] = parameters['searchCreateDate']
  }
  if (parameters['searchCustKind'] !== undefined) {
    queryParameters['search_custKind'] = parameters['searchCustKind']
  }
  if (parameters['searchCustName'] !== undefined) {
    queryParameters['search_custName'] = parameters['searchCustName']
  }
  if (parameters['searchCustPhonetic'] !== undefined) {
    queryParameters['search_custPhonetic'] = parameters['searchCustPhonetic']
  }
  if (parameters['searchCustSts'] !== undefined) {
    queryParameters['search_custSts'] = parameters['searchCustSts']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorFlag'] !== undefined) {
    queryParameters['search_favorFlag'] = parameters['searchFavorFlag']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchHoldMoney'] !== undefined) {
    queryParameters['search_holdMoney'] = parameters['searchHoldMoney']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchImp'] !== undefined) {
    queryParameters['search_imp'] = parameters['searchImp']
  }
  if (parameters['searchLimitDate'] !== undefined) {
    queryParameters['search_limitDate'] = parameters['searchLimitDate']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPaytimes'] !== undefined) {
    queryParameters['search_paytimes'] = parameters['searchPaytimes']
  }
  if (parameters['searchPhoneNum'] !== undefined) {
    queryParameters['search_phoneNum'] = parameters['searchPhoneNum']
  }
  if (parameters['searchPrintNum'] !== undefined) {
    queryParameters['search_printNum'] = parameters['searchPrintNum']
  }
  if (parameters['searchPsaa'] !== undefined) {
    queryParameters['search_psaa'] = parameters['searchPsaa']
  }
  if (parameters['searchQcodeRandom'] !== undefined) {
    queryParameters['search_qcodeRandom'] = parameters['searchQcodeRandom']
  }
  if (parameters['searchQcodeTime'] !== undefined) {
    queryParameters['search_qcodeTime'] = parameters['searchQcodeTime']
  }
  if (parameters['searchSex'] !== undefined) {
    queryParameters['search_sex'] = parameters['searchSex']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpen'] !== undefined) {
    queryParameters['search_wxOpen'] = parameters['searchWxOpen']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listCustomers_RAW_URL = function() {
  return '/api/customers'
}
export const listCustomers_TYPE = function() {
  return 'get'
}
export const listCustomersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchAge'] !== undefined) {
    queryParameters['search_age'] = parameters['searchAge']
  }
  if (parameters['searchBanlance'] !== undefined) {
    queryParameters['search_banlance'] = parameters['searchBanlance']
  }
  if (parameters['searchBindPhone'] !== undefined) {
    queryParameters['search_bindPhone'] = parameters['searchBindPhone']
  }
  if (parameters['searchBornDate'] !== undefined) {
    queryParameters['search_bornDate'] = parameters['searchBornDate']
  }
  if (parameters['searchCardNo'] !== undefined) {
    queryParameters['search_cardNo'] = parameters['searchCardNo']
  }
  if (parameters['searchCreateDate'] !== undefined) {
    queryParameters['search_createDate'] = parameters['searchCreateDate']
  }
  if (parameters['searchCustKind'] !== undefined) {
    queryParameters['search_custKind'] = parameters['searchCustKind']
  }
  if (parameters['searchCustName'] !== undefined) {
    queryParameters['search_custName'] = parameters['searchCustName']
  }
  if (parameters['searchCustPhonetic'] !== undefined) {
    queryParameters['search_custPhonetic'] = parameters['searchCustPhonetic']
  }
  if (parameters['searchCustSts'] !== undefined) {
    queryParameters['search_custSts'] = parameters['searchCustSts']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorFlag'] !== undefined) {
    queryParameters['search_favorFlag'] = parameters['searchFavorFlag']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchHoldMoney'] !== undefined) {
    queryParameters['search_holdMoney'] = parameters['searchHoldMoney']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchImp'] !== undefined) {
    queryParameters['search_imp'] = parameters['searchImp']
  }
  if (parameters['searchLimitDate'] !== undefined) {
    queryParameters['search_limitDate'] = parameters['searchLimitDate']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPaytimes'] !== undefined) {
    queryParameters['search_paytimes'] = parameters['searchPaytimes']
  }
  if (parameters['searchPhoneNum'] !== undefined) {
    queryParameters['search_phoneNum'] = parameters['searchPhoneNum']
  }
  if (parameters['searchPrintNum'] !== undefined) {
    queryParameters['search_printNum'] = parameters['searchPrintNum']
  }
  if (parameters['searchPsaa'] !== undefined) {
    queryParameters['search_psaa'] = parameters['searchPsaa']
  }
  if (parameters['searchQcodeRandom'] !== undefined) {
    queryParameters['search_qcodeRandom'] = parameters['searchQcodeRandom']
  }
  if (parameters['searchQcodeTime'] !== undefined) {
    queryParameters['search_qcodeTime'] = parameters['searchQcodeTime']
  }
  if (parameters['searchSex'] !== undefined) {
    queryParameters['search_sex'] = parameters['searchSex']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpen'] !== undefined) {
    queryParameters['search_wxOpen'] = parameters['searchWxOpen']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createCustomer
 * url: createCustomerURL
 * method: createCustomer_TYPE
 * raw_url: createCustomer_RAW_URL
 * @param body - 实体参数
 */
export const createCustomer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createCustomer_RAW_URL = function() {
  return '/api/customers'
}
export const createCustomer_TYPE = function() {
  return 'post'
}
export const createCustomerURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCard
 * url: loadCardURL
 * method: loadCard_TYPE
 * raw_url: loadCard_RAW_URL
 */
export const loadCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/card'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCard_RAW_URL = function() {
  return '/api/customers/card'
}
export const loadCard_TYPE = function() {
  return 'get'
}
export const loadCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/card'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateChange
 * url: updateChangeURL
 * method: updateChange_TYPE
 * raw_url: updateChange_RAW_URL
 * @param body - 实体参数
 */
export const updateChange = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/change'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateChange_RAW_URL = function() {
  return '/api/customers/change'
}
export const updateChange_TYPE = function() {
  return 'put'
}
export const updateChangeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/change'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateClose
 * url: updateCloseURL
 * method: updateClose_TYPE
 * raw_url: updateClose_RAW_URL
 * @param body - 实体参数
 */
export const updateClose = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/close'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateClose_RAW_URL = function() {
  return '/api/customers/close'
}
export const updateClose_TYPE = function() {
  return 'put'
}
export const updateCloseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/close'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateLoss
 * url: updateLossURL
 * method: updateLoss_TYPE
 * raw_url: updateLoss_RAW_URL
 * @param body - 实体参数
 */
export const updateLoss = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/loss'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateLoss_RAW_URL = function() {
  return '/api/customers/loss'
}
export const updateLoss_TYPE = function() {
  return 'put'
}
export const updateLossURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/loss'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: searchpass
 * url: searchpassURL
 * method: searchpass_TYPE
 * raw_url: searchpass_RAW_URL
 * @param body - 实体参数
 */
export const searchpass = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/pass'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const searchpass_RAW_URL = function() {
  return '/api/customers/pass'
}
export const searchpass_TYPE = function() {
  return 'post'
}
export const searchpassURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/pass'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReplace
 * url: updateReplaceURL
 * method: updateReplace_TYPE
 * raw_url: updateReplace_RAW_URL
 * @param body - 实体参数
 */
export const updateReplace = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/replace'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateReplace_RAW_URL = function() {
  return '/api/customers/replace'
}
export const updateReplace_TYPE = function() {
  return 'put'
}
export const updateReplaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/replace'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateStore
 * url: updateStoreURL
 * method: updateStore_TYPE
 * raw_url: updateStore_RAW_URL
 * @param body - 实体参数
 */
export const updateStore = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/store'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStore_RAW_URL = function() {
  return '/api/customers/store'
}
export const updateStore_TYPE = function() {
  return 'put'
}
export const updateStoreURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/store'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateCustomer
 * url: updateCustomerURL
 * method: updateCustomer_TYPE
 * raw_url: updateCustomer_RAW_URL
 * @param body - 实体参数
 */
export const updateCustomer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCustomer_RAW_URL = function() {
  return '/api/customers/update'
}
export const updateCustomer_TYPE = function() {
  return 'put'
}
export const updateCustomerURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCustomerById
 * url: loadCustomerByIdURL
 * method: loadCustomerById_TYPE
 * raw_url: loadCustomerById_RAW_URL
 * @param id - ID
 */
export const loadCustomerById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCustomerById_RAW_URL = function() {
  return '/api/customers/{id}'
}
export const loadCustomerById_TYPE = function() {
  return 'get'
}
export const loadCustomerByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteCustomerById
 * url: deleteCustomerByIdURL
 * method: deleteCustomerById_TYPE
 * raw_url: deleteCustomerById_RAW_URL
 * @param id - id
 */
export const deleteCustomerById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/customers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCustomerById_RAW_URL = function() {
  return '/api/customers/{id}'
}
export const deleteCustomerById_TYPE = function() {
  return 'delete'
}
export const deleteCustomerByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/customers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序字段：code,name,description,parent.id,parent.name,organization.id,
organization.name,sortIndex,isEnable,createTime,
成功：code=200，data对象为包含分页信息的部门列表，失败：code!=200
* request: listDepartments
* url: listDepartmentsURL
* method: listDepartments_TYPE
* raw_url: listDepartments_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:部门代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:部门描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchName - 查询条件:部门名称，模糊匹配
     * @param searchOrganizationId - 查询条件:所属组织机构ID，精确匹配
     * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
     * @param searchParentId - 查询条件:上级部门ID，精确匹配
     * @param searchParentName - 查询条件:上级部门名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listDepartments = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDepartments_RAW_URL = function() {
  return '/api/departments'
}
export const listDepartments_TYPE = function() {
  return 'get'
}
export const listDepartmentsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDepartment
 * url: createDepartmentURL
 * method: createDepartment_TYPE
 * raw_url: createDepartment_RAW_URL
 * @param body - 部门实体参数
 */
export const createDepartment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDepartment_RAW_URL = function() {
  return '/api/departments'
}
export const createDepartment_TYPE = function() {
  return 'post'
}
export const createDepartmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含分页信息的组织机构列表，失败：code!=200
 * request: departmentsTree
 * url: departmentsTreeURL
 * method: departmentsTree_TYPE
 * raw_url: departmentsTree_RAW_URL
 * @param searchType - 查询条件:权限类型，精确匹配
 */
export const departmentsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const departmentsTree_RAW_URL = function() {
  return '/api/departments/tree'
}
export const departmentsTree_TYPE = function() {
  return 'get'
}
export const departmentsTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/tree'
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为部门信息，失败：code!=200
 * request: loadDepartmentById
 * url: loadDepartmentByIdURL
 * method: loadDepartmentById_TYPE
 * raw_url: loadDepartmentById_RAW_URL
 * @param id - 部门ID
 */
export const loadDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const loadDepartmentById_TYPE = function() {
  return 'get'
}
export const loadDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDepartment
 * url: updateDepartmentURL
 * method: updateDepartment_TYPE
 * raw_url: updateDepartment_RAW_URL
 * @param body - 部门实体参数
 * @param id - 部门id
 */
export const updateDepartment = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDepartment_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const updateDepartment_TYPE = function() {
  return 'put'
}
export const updateDepartmentURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDepartmentById
 * url: deleteDepartmentByIdURL
 * method: deleteDepartmentById_TYPE
 * raw_url: deleteDepartmentById_RAW_URL
 * @param id - 部门ID
 */
export const deleteDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const deleteDepartmentById_TYPE = function() {
  return 'delete'
}
export const deleteDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDepartmentPatch
 * url: updateDepartmentPatchURL
 * method: updateDepartmentPatch_TYPE
 * raw_url: updateDepartmentPatch_RAW_URL
 * @param body - 部门实体参数
 * @param id - 部门id
 */
export const updateDepartmentPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDepartmentPatch_RAW_URL = function() {
  return '/api/departments/{id}'
}
export const updateDepartmentPatch_TYPE = function() {
  return 'patch'
}
export const updateDepartmentPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=201
 * request: generateApisFromServices
 * url: generateApisFromServicesURL
 * method: generateApisFromServices_TYPE
 * raw_url: generateApisFromServices_RAW_URL
 * @param body - 业务逻辑接口列表
 */
export const generateApisFromServices = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/apis/generateFromServices'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generateApisFromServices_RAW_URL = function() {
  return '/api/develop/generator/api/apis/generateFromServices'
}
export const generateApisFromServices_TYPE = function() {
  return 'post'
}
export const generateApisFromServicesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/apis/generateFromServices'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为数据库Schema信息，失败：code!=200
 * request: getDatabaseSchema
 * url: getDatabaseSchemaURL
 * method: getDatabaseSchema_TYPE
 * raw_url: getDatabaseSchema_RAW_URL
 */
export const getDatabaseSchema = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/database/schema'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDatabaseSchema_RAW_URL = function() {
  return '/api/develop/generator/api/database/schema'
}
export const getDatabaseSchema_TYPE = function() {
  return 'get'
}
export const getDatabaseSchemaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/database/schema'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=201
 * request: generateEntitiesFromTables
 * url: generateEntitiesFromTablesURL
 * method: generateEntitiesFromTables_TYPE
 * raw_url: generateEntitiesFromTables_RAW_URL
 * @param body - 数据库表列表
 */
export const generateEntitiesFromTables = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/entities/generateFromTables'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generateEntitiesFromTables_RAW_URL = function() {
  return '/api/develop/generator/api/entities/generateFromTables'
}
export const generateEntitiesFromTables_TYPE = function() {
  return 'post'
}
export const generateEntitiesFromTablesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/entities/generateFromTables'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=201
 * request: generateRepositoriesFromEntities
 * url: generateRepositoriesFromEntitiesURL
 * method: generateRepositoriesFromEntities_TYPE
 * raw_url: generateRepositoriesFromEntities_RAW_URL
 * @param body - 实体列表
 */
export const generateRepositoriesFromEntities = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/repositories/generateFromEntities'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generateRepositoriesFromEntities_RAW_URL = function() {
  return '/api/develop/generator/api/repositories/generateFromEntities'
}
export const generateRepositoriesFromEntities_TYPE = function() {
  return 'post'
}
export const generateRepositoriesFromEntitiesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/repositories/generateFromEntities'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=201
 * request: generateServicesFromRepositories
 * url: generateServicesFromRepositoriesURL
 * method: generateServicesFromRepositories_TYPE
 * raw_url: generateServicesFromRepositories_RAW_URL
 * @param body - 数据访问接口列表
 */
export const generateServicesFromRepositories = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/services/generateFromRepositories'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generateServicesFromRepositories_RAW_URL = function() {
  return '/api/develop/generator/api/services/generateFromRepositories'
}
export const generateServicesFromRepositories_TYPE = function() {
  return 'post'
}
export const generateServicesFromRepositoriesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/services/generateFromRepositories'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=201
 * request: generateSummaryToFiles
 * url: generateSummaryToFilesURL
 * method: generateSummaryToFiles_TYPE
 * raw_url: generateSummaryToFiles_RAW_URL
 * @param body - 实体、数据访问接口、业务逻辑接口、REST接口汇总信息
 */
export const generateSummaryToFiles = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/develop/generator/api/summary/generateToFiles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const generateSummaryToFiles_RAW_URL = function() {
  return '/api/develop/generator/api/summary/generateToFiles'
}
export const generateSummaryToFiles_TYPE = function() {
  return 'post'
}
export const generateSummaryToFilesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/develop/generator/api/summary/generateToFiles'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序字段：code,name,description,type,sortIndex,isSystem,isEnable,createTime
成功：code=200，data对象为包含分页信息的字典列表，失败：code!=200
* request: listDictionaries
* url: listDictionariesURL
* method: listDictionaries_TYPE
* raw_url: listDictionaries_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:字典代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:字典描述，模糊匹配
     * @param searchFlag - 查询条件:
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchIsSystem - 查询条件:是否是系统预置，，1：是，0：否，精确匹配
     * @param searchName - 查询条件:字典名称，模糊匹配
     * @param searchType - 查询条件:字典类型，精确匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listDictionaries = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaries_RAW_URL = function() {
  return '/api/dictionaries'
}
export const listDictionaries_TYPE = function() {
  return 'get'
}
export const listDictionariesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchFlag'] !== undefined) {
    queryParameters['search_flag'] = parameters['searchFlag']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDictionary
 * url: createDictionaryURL
 * method: createDictionary_TYPE
 * raw_url: createDictionary_RAW_URL
 * @param body - 字典实体参数
 */
export const createDictionary = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDictionary_RAW_URL = function() {
  return '/api/dictionaries'
}
export const createDictionary_TYPE = function() {
  return 'post'
}
export const createDictionaryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDictionaryById
 * url: loadDictionaryByIdURL
 * method: loadDictionaryById_TYPE
 * raw_url: loadDictionaryById_RAW_URL
 * @param id - 字典ID
 */
export const loadDictionaryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDictionaryById_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const loadDictionaryById_TYPE = function() {
  return 'get'
}
export const loadDictionaryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionary
 * url: updateDictionaryURL
 * method: updateDictionary_TYPE
 * raw_url: updateDictionary_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionary = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDictionary_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const updateDictionary_TYPE = function() {
  return 'put'
}
export const updateDictionaryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDictionaryById
 * url: deleteDictionaryByIdURL
 * method: deleteDictionaryById_TYPE
 * raw_url: deleteDictionaryById_RAW_URL
 * @param id - 字典ID
 */
export const deleteDictionaryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDictionaryById_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const deleteDictionaryById_TYPE = function() {
  return 'delete'
}
export const deleteDictionaryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryPatch
 * url: updateDictionaryPatchURL
 * method: updateDictionaryPatch_TYPE
 * raw_url: updateDictionaryPatch_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionaryPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaries/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryPatch_RAW_URL = function() {
  return '/api/dictionaries/{id}'
}
export const updateDictionaryPatch_TYPE = function() {
  return 'patch'
}
export const updateDictionaryPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaries/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：code,name,description,isSystem,createTim
成功：code=200，data对象为包含分页信息的字典类型列表，失败：code!=200
* request: listDictionaryTypes
* url: listDictionaryTypesURL
* method: listDictionaryTypes_TYPE
* raw_url: listDictionaryTypes_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:字典代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:字典描述，模糊匹配
     * @param searchIsSystem - 查询条件:是否是系统预置，，1：是，0：否，精确匹配
     * @param searchName - 查询条件:字典名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listDictionaryTypes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaryTypes_RAW_URL = function() {
  return '/api/dictionaryTypes'
}
export const listDictionaryTypes_TYPE = function() {
  return 'get'
}
export const listDictionaryTypesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDictionaryType
 * url: createDictionaryTypeURL
 * method: createDictionaryType_TYPE
 * raw_url: createDictionaryType_RAW_URL
 * @param body - 字典分类实体参数
 */
export const createDictionaryType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDictionaryType_RAW_URL = function() {
  return '/api/dictionaryTypes'
}
export const createDictionaryType_TYPE = function() {
  return 'post'
}
export const createDictionaryTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含字典类型信息的列表，失败：code!=200
 * request: listDictionaryTypesByCode
 * url: listDictionaryTypesByCodeURL
 * method: listDictionaryTypesByCode_TYPE
 * raw_url: listDictionaryTypesByCode_RAW_URL
 * @param codes - 字典类型代码，逗号分隔
 */
export const listDictionaryTypesByCode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/codes/{codes}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{codes}', `${parameters['codes']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaryTypesByCode_RAW_URL = function() {
  return '/api/dictionaryTypes/codes/{codes}'
}
export const listDictionaryTypesByCode_TYPE = function() {
  return 'get'
}
export const listDictionaryTypesByCodeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/codes/{codes}'
  path = path.replace('{codes}', `${parameters['codes']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDictionaryTypeById
 * url: loadDictionaryTypeByIdURL
 * method: loadDictionaryTypeById_TYPE
 * raw_url: loadDictionaryTypeById_RAW_URL
 * @param id - 字典分类ID
 */
export const loadDictionaryTypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDictionaryTypeById_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const loadDictionaryTypeById_TYPE = function() {
  return 'get'
}
export const loadDictionaryTypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryType
 * url: updateDictionaryTypeURL
 * method: updateDictionaryType_TYPE
 * raw_url: updateDictionaryType_RAW_URL
 * @param body - 字典实体参数
 * @param id - 字典id
 */
export const updateDictionaryType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryType_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const updateDictionaryType_TYPE = function() {
  return 'put'
}
export const updateDictionaryTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDictionaryTypeById
 * url: deleteDictionaryTypeByIdURL
 * method: deleteDictionaryTypeById_TYPE
 * raw_url: deleteDictionaryTypeById_RAW_URL
 * @param id - 字典ID
 */
export const deleteDictionaryTypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDictionaryTypeById_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const deleteDictionaryTypeById_TYPE = function() {
  return 'delete'
}
export const deleteDictionaryTypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDictionaryTypePatch
 * url: updateDictionaryTypePatchURL
 * method: updateDictionaryTypePatch_TYPE
 * raw_url: updateDictionaryTypePatch_RAW_URL
 * @param body - 字典分类实体参数
 * @param id - 字典id
 */
export const updateDictionaryTypePatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDictionaryTypePatch_RAW_URL = function() {
  return '/api/dictionaryTypes/{id}'
}
export const updateDictionaryTypePatch_TYPE = function() {
  return 'patch'
}
export const updateDictionaryTypePatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listDiscounts
* url: listDiscountsURL
* method: listDiscounts_TYPE
* raw_url: listDiscounts_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAddmoney - 查询条件:addmoney，等于
     * @param searchCardcost - 查询条件:cardcost，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchDiscount - 查询条件:discount，等于
     * @param searchDiscountdate - 查询条件:discountdate，等于
     * @param searchDiscountname - 查询条件:discountname，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchPaymoney - 查询条件:paymoney，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listDiscounts = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/discounts'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchCardcost'] !== undefined) {
    queryParameters['search_cardcost'] = parameters['searchCardcost']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchDiscount'] !== undefined) {
    queryParameters['search_discount'] = parameters['searchDiscount']
  }
  if (parameters['searchDiscountdate'] !== undefined) {
    queryParameters['search_discountdate'] = parameters['searchDiscountdate']
  }
  if (parameters['searchDiscountname'] !== undefined) {
    queryParameters['search_discountname'] = parameters['searchDiscountname']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDiscounts_RAW_URL = function() {
  return '/api/discounts'
}
export const listDiscounts_TYPE = function() {
  return 'get'
}
export const listDiscountsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/discounts'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchCardcost'] !== undefined) {
    queryParameters['search_cardcost'] = parameters['searchCardcost']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchDiscount'] !== undefined) {
    queryParameters['search_discount'] = parameters['searchDiscount']
  }
  if (parameters['searchDiscountdate'] !== undefined) {
    queryParameters['search_discountdate'] = parameters['searchDiscountdate']
  }
  if (parameters['searchDiscountname'] !== undefined) {
    queryParameters['search_discountname'] = parameters['searchDiscountname']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDiscount
 * url: createDiscountURL
 * method: createDiscount_TYPE
 * raw_url: createDiscount_RAW_URL
 * @param body - 实体参数
 */
export const createDiscount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/discounts'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDiscount_RAW_URL = function() {
  return '/api/discounts'
}
export const createDiscount_TYPE = function() {
  return 'post'
}
export const createDiscountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/discounts'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadDiscountById
 * url: loadDiscountByIdURL
 * method: loadDiscountById_TYPE
 * raw_url: loadDiscountById_RAW_URL
 * @param id - ID
 */
export const loadDiscountById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/discounts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDiscountById_RAW_URL = function() {
  return '/api/discounts/{id}'
}
export const loadDiscountById_TYPE = function() {
  return 'get'
}
export const loadDiscountByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/discounts/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDiscount
 * url: updateDiscountURL
 * method: updateDiscount_TYPE
 * raw_url: updateDiscount_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateDiscount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/discounts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDiscount_RAW_URL = function() {
  return '/api/discounts/{id}'
}
export const updateDiscount_TYPE = function() {
  return 'put'
}
export const updateDiscountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/discounts/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteDiscountById
 * url: deleteDiscountByIdURL
 * method: deleteDiscountById_TYPE
 * raw_url: deleteDiscountById_RAW_URL
 * @param id - ID
 */
export const deleteDiscountById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/discounts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDiscountById_RAW_URL = function() {
  return '/api/discounts/{id}'
}
export const deleteDiscountById_TYPE = function() {
  return 'delete'
}
export const deleteDiscountByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/discounts/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：code,name,description,level,level.code,level.name,sortIndex,isEnable,createTime
成功：code=200，data对象为包含分页信息的岗位列表，失败：code!=200
* request: listDuties
* url: listDutiesURL
* method: listDuties_TYPE
* raw_url: listDuties_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:岗位代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:岗位描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchIsSystem - 查询条件:是否系统预置，，1：是，0：否，精确匹配
     * @param searchLevel - 查询条件:岗位级别，关联岗位级别字典，精确匹配
     * @param searchLevelName - 查询条件:岗位级别名称，模糊匹配
     * @param searchName - 查询条件:岗位名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listDuties = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDuties_RAW_URL = function() {
  return '/api/duties'
}
export const listDuties_TYPE = function() {
  return 'get'
}
export const listDutiesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createDuty
 * url: createDutyURL
 * method: createDuty_TYPE
 * raw_url: createDuty_RAW_URL
 * @param body - 岗位实体参数
 */
export const createDuty = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createDuty_RAW_URL = function() {
  return '/api/duties'
}
export const createDuty_TYPE = function() {
  return 'post'
}
export const createDutyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadDutyById
 * url: loadDutyByIdURL
 * method: loadDutyById_TYPE
 * raw_url: loadDutyById_RAW_URL
 * @param id - 岗位ID
 */
export const loadDutyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadDutyById_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const loadDutyById_TYPE = function() {
  return 'get'
}
export const loadDutyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDuty
 * url: updateDutyURL
 * method: updateDuty_TYPE
 * raw_url: updateDuty_RAW_URL
 * @param body - 岗位实体参数
 * @param id - 岗位id
 */
export const updateDuty = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateDuty_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const updateDuty_TYPE = function() {
  return 'put'
}
export const updateDutyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteDutyById
 * url: deleteDutyByIdURL
 * method: deleteDutyById_TYPE
 * raw_url: deleteDutyById_RAW_URL
 * @param id - 岗位ID
 */
export const deleteDutyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDutyById_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const deleteDutyById_TYPE = function() {
  return 'delete'
}
export const deleteDutyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateDutyPatch
 * url: updateDutyPatchURL
 * method: updateDutyPatch_TYPE
 * raw_url: updateDutyPatch_RAW_URL
 * @param body - 岗位实体参数
 * @param id - 岗位id
 */
export const updateDutyPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/duties/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateDutyPatch_RAW_URL = function() {
  return '/api/duties/{id}'
}
export const updateDutyPatch_TYPE = function() {
  return 'patch'
}
export const updateDutyPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/duties/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含枚举信息的列表，失败：code!=200
 * request: enumsAll
 * url: enumsAllURL
 * method: enumsAll_TYPE
 * raw_url: enumsAll_RAW_URL
 */
export const enumsAll = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/all'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const enumsAll_RAW_URL = function() {
  return '/api/enums/all'
}
export const enumsAll_TYPE = function() {
  return 'get'
}
export const enumsAllURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/all'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含所有枚举类型信息的列表，失败：code!=200
 * request: listEnumTypes
 * url: listEnumTypesURL
 * method: listEnumTypes_TYPE
 * raw_url: listEnumTypes_RAW_URL
 */
export const listEnumTypes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/types'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listEnumTypes_RAW_URL = function() {
  return '/api/enums/types'
}
export const listEnumTypes_TYPE = function() {
  return 'get'
}
export const listEnumTypesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/types'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含枚举信息的列表，失败：code!=200
 * request: listEnumsByType
 * url: listEnumsByTypeURL
 * method: listEnumsByType_TYPE
 * raw_url: listEnumsByType_RAW_URL
 * @param types - 枚举类型代码，逗号分隔
 */
export const listEnumsByType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/types/{types}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{types}', `${parameters['types']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listEnumsByType_RAW_URL = function() {
  return '/api/enums/types/{types}'
}
export const listEnumsByType_TYPE = function() {
  return 'get'
}
export const listEnumsByTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/types/{types}'
  path = path.replace('{types}', `${parameters['types']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：stringProperty,longProperty,enumProperty,isEnable,createTime
成功：code=200，data对象为包含分页信息的示例列表，失败：code!=200
* request: listExamples
* url: listExamplesURL
* method: listExamples_TYPE
* raw_url: listExamples_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchEnumProperty - 查询条件:枚举属性，0：否，1：是，精确匹配
     * @param searchLongProperty - 查询条件:整形属性，匹配匹配
     * @param searchStringProperty - 查询条件:字符串属性，模糊查询
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listExamples = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchEnumProperty'] !== undefined) {
    queryParameters['search_enumProperty'] = parameters['searchEnumProperty']
  }
  if (parameters['searchLongProperty'] !== undefined) {
    queryParameters['search_longProperty'] = parameters['searchLongProperty']
  }
  if (parameters['searchStringProperty'] !== undefined) {
    queryParameters['search_stringProperty'] = parameters['searchStringProperty']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listExamples_RAW_URL = function() {
  return '/api/examples'
}
export const listExamples_TYPE = function() {
  return 'get'
}
export const listExamplesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchEnumProperty'] !== undefined) {
    queryParameters['search_enumProperty'] = parameters['searchEnumProperty']
  }
  if (parameters['searchLongProperty'] !== undefined) {
    queryParameters['search_longProperty'] = parameters['searchLongProperty']
  }
  if (parameters['searchStringProperty'] !== undefined) {
    queryParameters['search_stringProperty'] = parameters['searchStringProperty']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createExample
 * url: createExampleURL
 * method: createExample_TYPE
 * raw_url: createExample_RAW_URL
 * @param body - 示例实体参数
 */
export const createExample = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createExample_RAW_URL = function() {
  return '/api/examples'
}
export const createExample_TYPE = function() {
  return 'post'
}
export const createExampleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为示例信息，失败：code!=200
 * request: loadExampleById
 * url: loadExampleByIdURL
 * method: loadExampleById_TYPE
 * raw_url: loadExampleById_RAW_URL
 * @param id - 示例ID
 */
export const loadExampleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadExampleById_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const loadExampleById_TYPE = function() {
  return 'get'
}
export const loadExampleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateExample
 * url: updateExampleURL
 * method: updateExample_TYPE
 * raw_url: updateExample_RAW_URL
 * @param body - 示例体参数
 * @param id - 示例id
 */
export const updateExample = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateExample_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const updateExample_TYPE = function() {
  return 'put'
}
export const updateExampleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: deleteExampleById
 * url: deleteExampleByIdURL
 * method: deleteExampleById_TYPE
 * raw_url: deleteExampleById_RAW_URL
 * @param id - 示例ID
 */
export const deleteExampleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/examples/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteExampleById_RAW_URL = function() {
  return '/api/examples/{id}'
}
export const deleteExampleById_TYPE = function() {
  return 'delete'
}
export const deleteExampleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/examples/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: qrcode_1
 * url: qrcode_1URL
 * method: qrcode_1_TYPE
 * raw_url: qrcode_1_RAW_URL
 * @param body - 实体参数
 */
export const qrcode_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/faceCheck/qrCode'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const qrcode_1_RAW_URL = function() {
  return '/api/faceCheck/qrCode'
}
export const qrcode_1_TYPE = function() {
  return 'post'
}
export const qrcode_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/faceCheck/qrCode'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: swimming_1
 * url: swimming_1URL
 * method: swimming_1_TYPE
 * raw_url: swimming_1_RAW_URL
 * @param body - 实体参数
 */
export const swimming_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/faceCheck/swimming'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const swimming_1_RAW_URL = function() {
  return '/api/faceCheck/swimming'
}
export const swimming_1_TYPE = function() {
  return 'post'
}
export const swimming_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/faceCheck/swimming'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoods
* url: listGoodsURL
* method: listGoods_TYPE
* raw_url: listGoods_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchGoodscode - 查询条件:goodscode，等于
     * @param searchGoodskind - 查询条件:goodskind，等于
     * @param searchGoodsmodel - 查询条件:goodsmodel，等于
     * @param searchGoodsname - 查询条件:goodsname，等于
     * @param searchGoodsunit - 查询条件:goodsunit，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoods = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goods'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodscode'] !== undefined) {
    queryParameters['search_goodscode'] = parameters['searchGoodscode']
  }
  if (parameters['searchGoodskind'] !== undefined) {
    queryParameters['search_goodskind'] = parameters['searchGoodskind']
  }
  if (parameters['searchGoodsmodel'] !== undefined) {
    queryParameters['search_goodsmodel'] = parameters['searchGoodsmodel']
  }
  if (parameters['searchGoodsname'] !== undefined) {
    queryParameters['search_goodsname'] = parameters['searchGoodsname']
  }
  if (parameters['searchGoodsunit'] !== undefined) {
    queryParameters['search_goodsunit'] = parameters['searchGoodsunit']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoods_RAW_URL = function() {
  return '/api/goods'
}
export const listGoods_TYPE = function() {
  return 'get'
}
export const listGoodsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goods'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodscode'] !== undefined) {
    queryParameters['search_goodscode'] = parameters['searchGoodscode']
  }
  if (parameters['searchGoodskind'] !== undefined) {
    queryParameters['search_goodskind'] = parameters['searchGoodskind']
  }
  if (parameters['searchGoodsmodel'] !== undefined) {
    queryParameters['search_goodsmodel'] = parameters['searchGoodsmodel']
  }
  if (parameters['searchGoodsname'] !== undefined) {
    queryParameters['search_goodsname'] = parameters['searchGoodsname']
  }
  if (parameters['searchGoodsunit'] !== undefined) {
    queryParameters['search_goodsunit'] = parameters['searchGoodsunit']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoods
 * url: createGoodsURL
 * method: createGoods_TYPE
 * raw_url: createGoods_RAW_URL
 * @param body - 实体参数
 */
export const createGoods = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goods'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoods_RAW_URL = function() {
  return '/api/goods'
}
export const createGoods_TYPE = function() {
  return 'post'
}
export const createGoodsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goods'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsById
 * url: loadGoodsByIdURL
 * method: loadGoodsById_TYPE
 * raw_url: loadGoodsById_RAW_URL
 * @param id - ID
 */
export const loadGoodsById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goods/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsById_RAW_URL = function() {
  return '/api/goods/{id}'
}
export const loadGoodsById_TYPE = function() {
  return 'get'
}
export const loadGoodsByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goods/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoods
 * url: updateGoodsURL
 * method: updateGoods_TYPE
 * raw_url: updateGoods_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoods = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goods/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoods_RAW_URL = function() {
  return '/api/goods/{id}'
}
export const updateGoods_TYPE = function() {
  return 'put'
}
export const updateGoodsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goods/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsById
 * url: deleteGoodsByIdURL
 * method: deleteGoodsById_TYPE
 * raw_url: deleteGoodsById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goods/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsById_RAW_URL = function() {
  return '/api/goods/{id}'
}
export const deleteGoodsById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goods/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoodsAreas
* url: listGoodsAreasURL
* method: listGoodsAreas_TYPE
* raw_url: listGoodsAreas_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAreatype - 查询条件:areatype，等于
     * @param searchCatahour - 查询条件:catahour，等于
     * @param searchCataprice - 查询条件:cataprice，等于
     * @param searchCatatype - 查询条件:catatype，等于
     * @param searchChargesrule - 查询条件:chargesrule，等于
     * @param searchConsumption - 查询条件:consumption，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchHolidaytype - 查询条件:holidaytype，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchStatus - 查询条件:status，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoodsAreas = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsAreas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatahour'] !== undefined) {
    queryParameters['search_catahour'] = parameters['searchCatahour']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchHolidaytype'] !== undefined) {
    queryParameters['search_holidaytype'] = parameters['searchHolidaytype']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoodsAreas_RAW_URL = function() {
  return '/api/goodsAreas'
}
export const listGoodsAreas_TYPE = function() {
  return 'get'
}
export const listGoodsAreasURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsAreas'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatahour'] !== undefined) {
    queryParameters['search_catahour'] = parameters['searchCatahour']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchHolidaytype'] !== undefined) {
    queryParameters['search_holidaytype'] = parameters['searchHolidaytype']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoodsArea
 * url: createGoodsAreaURL
 * method: createGoodsArea_TYPE
 * raw_url: createGoodsArea_RAW_URL
 * @param body - 实体参数
 */
export const createGoodsArea = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsAreas'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoodsArea_RAW_URL = function() {
  return '/api/goodsAreas'
}
export const createGoodsArea_TYPE = function() {
  return 'post'
}
export const createGoodsAreaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsAreas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsAreaById
 * url: loadGoodsAreaByIdURL
 * method: loadGoodsAreaById_TYPE
 * raw_url: loadGoodsAreaById_RAW_URL
 * @param id - ID
 */
export const loadGoodsAreaById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsAreas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsAreaById_RAW_URL = function() {
  return '/api/goodsAreas/{id}'
}
export const loadGoodsAreaById_TYPE = function() {
  return 'get'
}
export const loadGoodsAreaByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsAreas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsArea
 * url: updateGoodsAreaURL
 * method: updateGoodsArea_TYPE
 * raw_url: updateGoodsArea_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsArea = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsAreas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsArea_RAW_URL = function() {
  return '/api/goodsAreas/{id}'
}
export const updateGoodsArea_TYPE = function() {
  return 'put'
}
export const updateGoodsAreaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsAreas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsAreaById
 * url: deleteGoodsAreaByIdURL
 * method: deleteGoodsAreaById_TYPE
 * raw_url: deleteGoodsAreaById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsAreaById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsAreas/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsAreaById_RAW_URL = function() {
  return '/api/goodsAreas/{id}'
}
export const deleteGoodsAreaById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsAreaByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsAreas/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoodsCards
* url: listGoodsCardsURL
* method: listGoodsCards_TYPE
* raw_url: listGoodsCards_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchCatacount - 查询条件:catacount，等于
     * @param searchCataprice - 查询条件:cataprice，等于
     * @param searchCatatype - 查询条件:catatype，等于
     * @param searchConsumption - 查询条件:consumption，等于
     * @param searchDelaydate - 查询条件:delaydate，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchDiscount - 查询条件:discount，等于
     * @param searchDiscountdate - 查询条件:discountdate，等于
     * @param searchDiscountnum - 查询条件:discountnum，等于
     * @param searchDisp - 查询条件:disp，等于
     * @param searchEffectiveType - 查询条件:effective_type，等于
     * @param searchEndtime - 查询条件:endtime，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchHolidytype - 查询条件:holidytype，等于
     * @param searchOverdue - 查询条件:overdue，等于
     * @param searchPreferentialFlag - 查询条件:preferential_flag，等于
     * @param searchStarttime - 查询条件:starttime，等于
     * @param searchStatus - 查询条件:status，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param searchWx - 查询条件:preferential_wx，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoodsCards = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCatacount'] !== undefined) {
    queryParameters['search_catacount'] = parameters['searchCatacount']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchDelaydate'] !== undefined) {
    queryParameters['search_delaydate'] = parameters['searchDelaydate']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchDiscount'] !== undefined) {
    queryParameters['search_discount'] = parameters['searchDiscount']
  }
  if (parameters['searchDiscountdate'] !== undefined) {
    queryParameters['search_discountdate'] = parameters['searchDiscountdate']
  }
  if (parameters['searchDiscountnum'] !== undefined) {
    queryParameters['search_discountnum'] = parameters['searchDiscountnum']
  }
  if (parameters['searchDisp'] !== undefined) {
    queryParameters['search_disp'] = parameters['searchDisp']
  }
  if (parameters['searchEffectiveType'] !== undefined) {
    queryParameters['search_effectiveType'] = parameters['searchEffectiveType']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchOverdue'] !== undefined) {
    queryParameters['search_overdue'] = parameters['searchOverdue']
  }
  if (parameters['searchPreferentialFlag'] !== undefined) {
    queryParameters['search_preferentialFlag'] = parameters['searchPreferentialFlag']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['searchWx'] !== undefined) {
    queryParameters['search_wx'] = parameters['searchWx']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoodsCards_RAW_URL = function() {
  return '/api/goodsCards'
}
export const listGoodsCards_TYPE = function() {
  return 'get'
}
export const listGoodsCardsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsCards'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCatacount'] !== undefined) {
    queryParameters['search_catacount'] = parameters['searchCatacount']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchDelaydate'] !== undefined) {
    queryParameters['search_delaydate'] = parameters['searchDelaydate']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchDiscount'] !== undefined) {
    queryParameters['search_discount'] = parameters['searchDiscount']
  }
  if (parameters['searchDiscountdate'] !== undefined) {
    queryParameters['search_discountdate'] = parameters['searchDiscountdate']
  }
  if (parameters['searchDiscountnum'] !== undefined) {
    queryParameters['search_discountnum'] = parameters['searchDiscountnum']
  }
  if (parameters['searchDisp'] !== undefined) {
    queryParameters['search_disp'] = parameters['searchDisp']
  }
  if (parameters['searchEffectiveType'] !== undefined) {
    queryParameters['search_effectiveType'] = parameters['searchEffectiveType']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchOverdue'] !== undefined) {
    queryParameters['search_overdue'] = parameters['searchOverdue']
  }
  if (parameters['searchPreferentialFlag'] !== undefined) {
    queryParameters['search_preferentialFlag'] = parameters['searchPreferentialFlag']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['searchWx'] !== undefined) {
    queryParameters['search_wx'] = parameters['searchWx']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoodsCard
 * url: createGoodsCardURL
 * method: createGoodsCard_TYPE
 * raw_url: createGoodsCard_RAW_URL
 * @param body - 实体参数
 */
export const createGoodsCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoodsCard_RAW_URL = function() {
  return '/api/goodsCards'
}
export const createGoodsCard_TYPE = function() {
  return 'post'
}
export const createGoodsCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsCards'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsCardById
 * url: loadGoodsCardByIdURL
 * method: loadGoodsCardById_TYPE
 * raw_url: loadGoodsCardById_RAW_URL
 * @param id - ID
 */
export const loadGoodsCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsCardById_RAW_URL = function() {
  return '/api/goodsCards/{id}'
}
export const loadGoodsCardById_TYPE = function() {
  return 'get'
}
export const loadGoodsCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsCard
 * url: updateGoodsCardURL
 * method: updateGoodsCard_TYPE
 * raw_url: updateGoodsCard_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsCard_RAW_URL = function() {
  return '/api/goodsCards/{id}'
}
export const updateGoodsCard_TYPE = function() {
  return 'put'
}
export const updateGoodsCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsCardById
 * url: deleteGoodsCardByIdURL
 * method: deleteGoodsCardById_TYPE
 * raw_url: deleteGoodsCardById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsCardById_RAW_URL = function() {
  return '/api/goodsCards/{id}'
}
export const deleteGoodsCardById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoodsClasses
* url: listGoodsClassesURL
* method: listGoodsClasses_TYPE
* raw_url: listGoodsClasses_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCataprice - 查询条件:cataprice，等于
     * @param searchClassname - 查询条件:classname，等于
     * @param searchClassterm - 查询条件:classterm，等于
     * @param searchConsumption - 查询条件:consumption，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchPeriod - 查询条件:period，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchStatus - 查询条件:status，等于
     * @param searchTeacher - 查询条件:teacher，等于
     * @param searchType - 查询条件:type，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param searchWx - 查询条件:preferential_wx，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoodsClasses = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsClasses'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchClassname'] !== undefined) {
    queryParameters['search_classname'] = parameters['searchClassname']
  }
  if (parameters['searchClassterm'] !== undefined) {
    queryParameters['search_classterm'] = parameters['searchClassterm']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchPeriod'] !== undefined) {
    queryParameters['search_period'] = parameters['searchPeriod']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchTeacher'] !== undefined) {
    queryParameters['search_teacher'] = parameters['searchTeacher']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['searchWx'] !== undefined) {
    queryParameters['search_wx'] = parameters['searchWx']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoodsClasses_RAW_URL = function() {
  return '/api/goodsClasses'
}
export const listGoodsClasses_TYPE = function() {
  return 'get'
}
export const listGoodsClassesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsClasses'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCataprice'] !== undefined) {
    queryParameters['search_cataprice'] = parameters['searchCataprice']
  }
  if (parameters['searchClassname'] !== undefined) {
    queryParameters['search_classname'] = parameters['searchClassname']
  }
  if (parameters['searchClassterm'] !== undefined) {
    queryParameters['search_classterm'] = parameters['searchClassterm']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchPeriod'] !== undefined) {
    queryParameters['search_period'] = parameters['searchPeriod']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchTeacher'] !== undefined) {
    queryParameters['search_teacher'] = parameters['searchTeacher']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['searchWx'] !== undefined) {
    queryParameters['search_wx'] = parameters['searchWx']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoodsClass
 * url: createGoodsClassURL
 * method: createGoodsClass_TYPE
 * raw_url: createGoodsClass_RAW_URL
 * @param body - 实体参数
 */
export const createGoodsClass = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsClasses'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoodsClass_RAW_URL = function() {
  return '/api/goodsClasses'
}
export const createGoodsClass_TYPE = function() {
  return 'post'
}
export const createGoodsClassURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsClasses'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsClassById
 * url: loadGoodsClassByIdURL
 * method: loadGoodsClassById_TYPE
 * raw_url: loadGoodsClassById_RAW_URL
 * @param id - ID
 */
export const loadGoodsClassById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsClasses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsClassById_RAW_URL = function() {
  return '/api/goodsClasses/{id}'
}
export const loadGoodsClassById_TYPE = function() {
  return 'get'
}
export const loadGoodsClassByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsClasses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsClass
 * url: updateGoodsClassURL
 * method: updateGoodsClass_TYPE
 * raw_url: updateGoodsClass_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsClass = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsClasses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsClass_RAW_URL = function() {
  return '/api/goodsClasses/{id}'
}
export const updateGoodsClass_TYPE = function() {
  return 'put'
}
export const updateGoodsClassURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsClasses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsClassById
 * url: deleteGoodsClassByIdURL
 * method: deleteGoodsClassById_TYPE
 * raw_url: deleteGoodsClassById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsClassById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsClasses/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsClassById_RAW_URL = function() {
  return '/api/goodsClasses/{id}'
}
export const deleteGoodsClassById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsClassByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsClasses/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoodsLeases
* url: listGoodsLeasesURL
* method: listGoodsLeases_TYPE
* raw_url: listGoodsLeases_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchLeaseamount - 查询条件:leaseamount，等于
     * @param searchLeasecycle - 查询条件:leasecycle，等于
     * @param searchStatus - 查询条件:status，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoodsLeases = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsLeases'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchLeaseamount'] !== undefined) {
    queryParameters['search_leaseamount'] = parameters['searchLeaseamount']
  }
  if (parameters['searchLeasecycle'] !== undefined) {
    queryParameters['search_leasecycle'] = parameters['searchLeasecycle']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoodsLeases_RAW_URL = function() {
  return '/api/goodsLeases'
}
export const listGoodsLeases_TYPE = function() {
  return 'get'
}
export const listGoodsLeasesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsLeases'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchLeaseamount'] !== undefined) {
    queryParameters['search_leaseamount'] = parameters['searchLeaseamount']
  }
  if (parameters['searchLeasecycle'] !== undefined) {
    queryParameters['search_leasecycle'] = parameters['searchLeasecycle']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoodsLease
 * url: createGoodsLeaseURL
 * method: createGoodsLease_TYPE
 * raw_url: createGoodsLease_RAW_URL
 * @param body - 实体参数
 */
export const createGoodsLease = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsLeases'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoodsLease_RAW_URL = function() {
  return '/api/goodsLeases'
}
export const createGoodsLease_TYPE = function() {
  return 'post'
}
export const createGoodsLeaseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsLeases'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsLeaseById
 * url: loadGoodsLeaseByIdURL
 * method: loadGoodsLeaseById_TYPE
 * raw_url: loadGoodsLeaseById_RAW_URL
 * @param id - ID
 */
export const loadGoodsLeaseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsLeases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsLeaseById_RAW_URL = function() {
  return '/api/goodsLeases/{id}'
}
export const loadGoodsLeaseById_TYPE = function() {
  return 'get'
}
export const loadGoodsLeaseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsLeases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsLease
 * url: updateGoodsLeaseURL
 * method: updateGoodsLease_TYPE
 * raw_url: updateGoodsLease_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsLease = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsLeases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsLease_RAW_URL = function() {
  return '/api/goodsLeases/{id}'
}
export const updateGoodsLease_TYPE = function() {
  return 'put'
}
export const updateGoodsLeaseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsLeases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsLeaseById
 * url: deleteGoodsLeaseByIdURL
 * method: deleteGoodsLeaseById_TYPE
 * raw_url: deleteGoodsLeaseById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsLeaseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsLeases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsLeaseById_RAW_URL = function() {
  return '/api/goodsLeases/{id}'
}
export const deleteGoodsLeaseById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsLeaseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsLeases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listGoodsRetails
* url: listGoodsRetailsURL
* method: listGoodsRetails_TYPE
* raw_url: listGoodsRetails_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchGoodsamount - 查询条件:goodsamount，等于
     * @param searchGoodscount - 查询条件:goodscount，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchStatus - 查询条件:status，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listGoodsRetails = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodsamount'] !== undefined) {
    queryParameters['search_goodsamount'] = parameters['searchGoodsamount']
  }
  if (parameters['searchGoodscount'] !== undefined) {
    queryParameters['search_goodscount'] = parameters['searchGoodscount']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listGoodsRetails_RAW_URL = function() {
  return '/api/goodsRetails'
}
export const listGoodsRetails_TYPE = function() {
  return 'get'
}
export const listGoodsRetailsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodsamount'] !== undefined) {
    queryParameters['search_goodsamount'] = parameters['searchGoodsamount']
  }
  if (parameters['searchGoodscount'] !== undefined) {
    queryParameters['search_goodscount'] = parameters['searchGoodscount']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createGoodsRetail
 * url: createGoodsRetailURL
 * method: createGoodsRetail_TYPE
 * raw_url: createGoodsRetail_RAW_URL
 * @param body - 实体参数
 */
export const createGoodsRetail = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createGoodsRetail_RAW_URL = function() {
  return '/api/goodsRetails'
}
export const createGoodsRetail_TYPE = function() {
  return 'post'
}
export const createGoodsRetailURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsRetailCount
 * url: updateGoodsRetailCountURL
 * method: updateGoodsRetailCount_TYPE
 * raw_url: updateGoodsRetailCount_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsRetailCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails/updateCount'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsRetailCount_RAW_URL = function() {
  return '/api/goodsRetails/updateCount'
}
export const updateGoodsRetailCount_TYPE = function() {
  return 'put'
}
export const updateGoodsRetailCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails/updateCount'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadGoodsRetailById
 * url: loadGoodsRetailByIdURL
 * method: loadGoodsRetailById_TYPE
 * raw_url: loadGoodsRetailById_RAW_URL
 * @param id - ID
 */
export const loadGoodsRetailById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadGoodsRetailById_RAW_URL = function() {
  return '/api/goodsRetails/{id}'
}
export const loadGoodsRetailById_TYPE = function() {
  return 'get'
}
export const loadGoodsRetailByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateGoodsRetail
 * url: updateGoodsRetailURL
 * method: updateGoodsRetail_TYPE
 * raw_url: updateGoodsRetail_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateGoodsRetail = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateGoodsRetail_RAW_URL = function() {
  return '/api/goodsRetails/{id}'
}
export const updateGoodsRetail_TYPE = function() {
  return 'put'
}
export const updateGoodsRetailURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteGoodsRetailById
 * url: deleteGoodsRetailByIdURL
 * method: deleteGoodsRetailById_TYPE
 * raw_url: deleteGoodsRetailById_RAW_URL
 * @param id - ID
 */
export const deleteGoodsRetailById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/goodsRetails/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteGoodsRetailById_RAW_URL = function() {
  return '/api/goodsRetails/{id}'
}
export const deleteGoodsRetailById_TYPE = function() {
  return 'delete'
}
export const deleteGoodsRetailByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/goodsRetails/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listHolidies
* url: listHolidiesURL
* method: listHolidies_TYPE
* raw_url: listHolidies_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchHolidyname - 查询条件:holidyname，等于
     * @param searchHolidytype - 查询条件:holidytype，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchYear - 查询条件:year，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listHolidies = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/holidies'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchHolidyname'] !== undefined) {
    queryParameters['search_holidyname'] = parameters['searchHolidyname']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchYear'] !== undefined) {
    queryParameters['search_year'] = parameters['searchYear']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listHolidies_RAW_URL = function() {
  return '/api/holidies'
}
export const listHolidies_TYPE = function() {
  return 'get'
}
export const listHolidiesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/holidies'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchHolidyname'] !== undefined) {
    queryParameters['search_holidyname'] = parameters['searchHolidyname']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchYear'] !== undefined) {
    queryParameters['search_year'] = parameters['searchYear']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createHolidy
 * url: createHolidyURL
 * method: createHolidy_TYPE
 * raw_url: createHolidy_RAW_URL
 * @param body - 实体参数
 */
export const createHolidy = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/holidies'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createHolidy_RAW_URL = function() {
  return '/api/holidies'
}
export const createHolidy_TYPE = function() {
  return 'post'
}
export const createHolidyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/holidies'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadHolidyById
 * url: loadHolidyByIdURL
 * method: loadHolidyById_TYPE
 * raw_url: loadHolidyById_RAW_URL
 * @param id - ID
 */
export const loadHolidyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/holidies/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadHolidyById_RAW_URL = function() {
  return '/api/holidies/{id}'
}
export const loadHolidyById_TYPE = function() {
  return 'get'
}
export const loadHolidyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/holidies/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateHolidy
 * url: updateHolidyURL
 * method: updateHolidy_TYPE
 * raw_url: updateHolidy_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateHolidy = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/holidies/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateHolidy_RAW_URL = function() {
  return '/api/holidies/{id}'
}
export const updateHolidy_TYPE = function() {
  return 'put'
}
export const updateHolidyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/holidies/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteHolidyById
 * url: deleteHolidyByIdURL
 * method: deleteHolidyById_TYPE
 * raw_url: deleteHolidyById_RAW_URL
 * @param id - ID
 */
export const deleteHolidyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/holidies/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteHolidyById_RAW_URL = function() {
  return '/api/holidies/{id}'
}
export const deleteHolidyById_TYPE = function() {
  return 'delete'
}
export const deleteHolidyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/holidies/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listImpCustomers
* url: listImpCustomersURL
* method: listImpCustomers_TYPE
* raw_url: listImpCustomers_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCard - 查询条件:card，等于
     * @param searchCode - 查询条件:code，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchHall - 查询条件:hall_id，等于
     * @param searchId - 查询条件:id，等于
     * @param searchLimit - 查询条件:limit，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchName - 查询条件:name，等于
     * @param searchPass - 查询条件:pass，等于
     * @param searchPhone - 查询条件:phone，等于
     * @param searchPhonetic - 查询条件:phonetic，等于
     * @param searchStatus - 查询条件:status，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listImpCustomers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCard'] !== undefined) {
    queryParameters['search_card'] = parameters['searchCard']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchHall'] !== undefined) {
    queryParameters['search_hall'] = parameters['searchHall']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchLimit'] !== undefined) {
    queryParameters['search_limit'] = parameters['searchLimit']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPass'] !== undefined) {
    queryParameters['search_pass'] = parameters['searchPass']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchPhonetic'] !== undefined) {
    queryParameters['search_phonetic'] = parameters['searchPhonetic']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listImpCustomers_RAW_URL = function() {
  return '/api/impCustomers'
}
export const listImpCustomers_TYPE = function() {
  return 'get'
}
export const listImpCustomersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCard'] !== undefined) {
    queryParameters['search_card'] = parameters['searchCard']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchHall'] !== undefined) {
    queryParameters['search_hall'] = parameters['searchHall']
  }
  if (parameters['searchId'] !== undefined) {
    queryParameters['search_id'] = parameters['searchId']
  }
  if (parameters['searchLimit'] !== undefined) {
    queryParameters['search_limit'] = parameters['searchLimit']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPass'] !== undefined) {
    queryParameters['search_pass'] = parameters['searchPass']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchPhonetic'] !== undefined) {
    queryParameters['search_phonetic'] = parameters['searchPhonetic']
  }
  if (parameters['searchStatus'] !== undefined) {
    queryParameters['search_status'] = parameters['searchStatus']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createImpCustomer
 * url: createImpCustomerURL
 * method: createImpCustomer_TYPE
 * raw_url: createImpCustomer_RAW_URL
 * @param body - 实体参数
 */
export const createImpCustomer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createImpCustomer_RAW_URL = function() {
  return '/api/impCustomers'
}
export const createImpCustomer_TYPE = function() {
  return 'post'
}
export const createImpCustomerURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: searchpass_1
 * url: searchpass_1URL
 * method: searchpass_1_TYPE
 * raw_url: searchpass_1_RAW_URL
 * @param body - 实体参数
 */
export const searchpass_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers/pass'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const searchpass_1_RAW_URL = function() {
  return '/api/impCustomers/pass'
}
export const searchpass_1_TYPE = function() {
  return 'post'
}
export const searchpass_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers/pass'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadImpCustomerById
 * url: loadImpCustomerByIdURL
 * method: loadImpCustomerById_TYPE
 * raw_url: loadImpCustomerById_RAW_URL
 * @param id - ID
 */
export const loadImpCustomerById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadImpCustomerById_RAW_URL = function() {
  return '/api/impCustomers/{id}'
}
export const loadImpCustomerById_TYPE = function() {
  return 'get'
}
export const loadImpCustomerByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateImpCustomer
 * url: updateImpCustomerURL
 * method: updateImpCustomer_TYPE
 * raw_url: updateImpCustomer_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateImpCustomer = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateImpCustomer_RAW_URL = function() {
  return '/api/impCustomers/{id}'
}
export const updateImpCustomer_TYPE = function() {
  return 'put'
}
export const updateImpCustomerURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteImpCustomerById
 * url: deleteImpCustomerByIdURL
 * method: deleteImpCustomerById_TYPE
 * raw_url: deleteImpCustomerById_RAW_URL
 * @param id - ID
 */
export const deleteImpCustomerById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/impCustomers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteImpCustomerById_RAW_URL = function() {
  return '/api/impCustomers/{id}'
}
export const deleteImpCustomerById_TYPE = function() {
  return 'delete'
}
export const deleteImpCustomerByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/impCustomers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序字段：code,name,url,method,description,parent.id,parent.code,
parent.name,sortIndex,isEnable,createTime
成功：code=200，data对象为包含分页信息的后台接口列表，失败：code!=200
* request: listApis
* url: listApisURL
* method: listApis_TYPE
* raw_url: listApis_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:后台接口代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:后台接口描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchMethod - 查询条件:后台接口请求方式，模糊匹配
     * @param searchName - 查询条件:后台接口名称，模糊匹配
     * @param searchParentCode - 查询条件:上级后台接口代码，模糊匹配
     * @param searchParentId - 查询条件:上级后台接口ID，精确匹配
     * @param searchParentName - 查询条件:上级后台接口名称，模糊匹配
     * @param searchUrl - 查询条件:后台接口地址，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listApis = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMethod'] !== undefined) {
    queryParameters['search_method'] = parameters['searchMethod']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listApis_RAW_URL = function() {
  return '/api/interfaces'
}
export const listApis_TYPE = function() {
  return 'get'
}
export const listApisURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMethod'] !== undefined) {
    queryParameters['search_method'] = parameters['searchMethod']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createApi
 * url: createApiURL
 * method: createApi_TYPE
 * raw_url: createApi_RAW_URL
 * @param body - 后台接口实体参数
 */
export const createApi = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createApi_RAW_URL = function() {
  return '/api/interfaces'
}
export const createApi_TYPE = function() {
  return 'post'
}
export const createApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadApiById
 * url: loadApiByIdURL
 * method: loadApiById_TYPE
 * raw_url: loadApiById_RAW_URL
 * @param id - 后台接口ID
 */
export const loadApiById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadApiById_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const loadApiById_TYPE = function() {
  return 'get'
}
export const loadApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateApi
 * url: updateApiURL
 * method: updateApi_TYPE
 * raw_url: updateApi_RAW_URL
 * @param body - 后台接口实体参数
 * @param id - 后台接口id
 */
export const updateApi = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateApi_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const updateApi_TYPE = function() {
  return 'put'
}
export const updateApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteApiById
 * url: deleteApiByIdURL
 * method: deleteApiById_TYPE
 * raw_url: deleteApiById_RAW_URL
 * @param id - 后台接口ID
 */
export const deleteApiById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiById_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const deleteApiById_TYPE = function() {
  return 'delete'
}
export const deleteApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateApiPatch
 * url: updateApiPatchURL
 * method: updateApiPatch_TYPE
 * raw_url: updateApiPatch_RAW_URL
 * @param body - 后台接口实体参数
 * @param id - 后台接口id
 */
export const updateApiPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/interfaces/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateApiPatch_RAW_URL = function() {
  return '/api/interfaces/{id}'
}
export const updateApiPatch_TYPE = function() {
  return 'patch'
}
export const updateApiPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listLeases
* url: listLeasesURL
* method: listLeases_TYPE
* raw_url: listLeases_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchBillid - 查询条件:billid，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchDamages - 查询条件:damages，等于
     * @param searchFinemoney - 查询条件:finemoney，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchLeasemoney - 查询条件:leasemoney，等于
     * @param searchOutcount - 查询条件:outcount，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchRetcount - 查询条件:retcount，等于
     * @param searchUsetimes - 查询条件:usetimes，等于
     * @param searchVenue - 查询条件:hallid，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listLeases = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDamages'] !== undefined) {
    queryParameters['search_damages'] = parameters['searchDamages']
  }
  if (parameters['searchFinemoney'] !== undefined) {
    queryParameters['search_finemoney'] = parameters['searchFinemoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchLeasemoney'] !== undefined) {
    queryParameters['search_leasemoney'] = parameters['searchLeasemoney']
  }
  if (parameters['searchOutcount'] !== undefined) {
    queryParameters['search_outcount'] = parameters['searchOutcount']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchRetcount'] !== undefined) {
    queryParameters['search_retcount'] = parameters['searchRetcount']
  }
  if (parameters['searchUsetimes'] !== undefined) {
    queryParameters['search_usetimes'] = parameters['searchUsetimes']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listLeases_RAW_URL = function() {
  return '/api/leases'
}
export const listLeases_TYPE = function() {
  return 'get'
}
export const listLeasesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDamages'] !== undefined) {
    queryParameters['search_damages'] = parameters['searchDamages']
  }
  if (parameters['searchFinemoney'] !== undefined) {
    queryParameters['search_finemoney'] = parameters['searchFinemoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchLeasemoney'] !== undefined) {
    queryParameters['search_leasemoney'] = parameters['searchLeasemoney']
  }
  if (parameters['searchOutcount'] !== undefined) {
    queryParameters['search_outcount'] = parameters['searchOutcount']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchRetcount'] !== undefined) {
    queryParameters['search_retcount'] = parameters['searchRetcount']
  }
  if (parameters['searchUsetimes'] !== undefined) {
    queryParameters['search_usetimes'] = parameters['searchUsetimes']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createLease
 * url: createLeaseURL
 * method: createLease_TYPE
 * raw_url: createLease_RAW_URL
 * @param body - 实体参数
 */
export const createLease = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createLease_RAW_URL = function() {
  return '/api/leases'
}
export const createLease_TYPE = function() {
  return 'post'
}
export const createLeaseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: serachLeases
* url: serachLeasesURL
* method: serachLeases_TYPE
* raw_url: serachLeases_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchBillid - 查询条件:billid，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCreateUserId - 查询条件:createUserId，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchDamages - 查询条件:damages，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchFinemoney - 查询条件:finemoney，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchHallid - 查询条件:hallid，等于
     * @param searchLeasemoney - 查询条件:leasemoney，等于
     * @param searchOutcount - 查询条件:outcount，等于
     * @param searchPayway - 查询条件:payway，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchRetcount - 查询条件:retcount，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchUsetimes - 查询条件:usetimes，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const serachLeases = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases/seachlease'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDamages'] !== undefined) {
    queryParameters['search_damages'] = parameters['searchDamages']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchFinemoney'] !== undefined) {
    queryParameters['search_finemoney'] = parameters['searchFinemoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchLeasemoney'] !== undefined) {
    queryParameters['search_leasemoney'] = parameters['searchLeasemoney']
  }
  if (parameters['searchOutcount'] !== undefined) {
    queryParameters['search_outcount'] = parameters['searchOutcount']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchRetcount'] !== undefined) {
    queryParameters['search_retcount'] = parameters['searchRetcount']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchUsetimes'] !== undefined) {
    queryParameters['search_usetimes'] = parameters['searchUsetimes']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const serachLeases_RAW_URL = function() {
  return '/api/leases/seachlease'
}
export const serachLeases_TYPE = function() {
  return 'get'
}
export const serachLeasesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases/seachlease'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDamages'] !== undefined) {
    queryParameters['search_damages'] = parameters['searchDamages']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchFinemoney'] !== undefined) {
    queryParameters['search_finemoney'] = parameters['searchFinemoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchLeasemoney'] !== undefined) {
    queryParameters['search_leasemoney'] = parameters['searchLeasemoney']
  }
  if (parameters['searchOutcount'] !== undefined) {
    queryParameters['search_outcount'] = parameters['searchOutcount']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchRetcount'] !== undefined) {
    queryParameters['search_retcount'] = parameters['searchRetcount']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchUsetimes'] !== undefined) {
    queryParameters['search_usetimes'] = parameters['searchUsetimes']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateLeaseBill
 * url: updateLeaseBillURL
 * method: updateLeaseBill_TYPE
 * raw_url: updateLeaseBill_RAW_URL
 * @param body - 实体参数
 */
export const updateLeaseBill = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases/updateLeaseBill'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateLeaseBill_RAW_URL = function() {
  return '/api/leases/updateLeaseBill'
}
export const updateLeaseBill_TYPE = function() {
  return 'put'
}
export const updateLeaseBillURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases/updateLeaseBill'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadLeaseById
 * url: loadLeaseByIdURL
 * method: loadLeaseById_TYPE
 * raw_url: loadLeaseById_RAW_URL
 * @param id - ID
 */
export const loadLeaseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadLeaseById_RAW_URL = function() {
  return '/api/leases/{id}'
}
export const loadLeaseById_TYPE = function() {
  return 'get'
}
export const loadLeaseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateLease
 * url: updateLeaseURL
 * method: updateLease_TYPE
 * raw_url: updateLease_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateLease = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateLease_RAW_URL = function() {
  return '/api/leases/{id}'
}
export const updateLease_TYPE = function() {
  return 'put'
}
export const updateLeaseURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteLeaseById
 * url: deleteLeaseByIdURL
 * method: deleteLeaseById_TYPE
 * raw_url: deleteLeaseById_RAW_URL
 * @param id - ID
 */
export const deleteLeaseById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/leases/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteLeaseById_RAW_URL = function() {
  return '/api/leases/{id}'
}
export const deleteLeaseById_TYPE = function() {
  return 'delete'
}
export const deleteLeaseByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/leases/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listLockers
* url: listLockersURL
* method: listLockers_TYPE
* raw_url: listLockers_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCardno - 查询条件:会员卡号，等于
     * @param searchCustname - 查询条件:会员姓名，等于
     * @param searchEnddate - 查询条件:截止时间，等于
     * @param searchLockernumber - 查询条件:柜号，等于
     * @param searchLockertype - 查询条件:上柜/下柜，等于
     * @param searchPhonenum - 查询条件:电话，等于
     * @param searchStartdate - 查询条件:开始时间，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listLockers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/lockers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchLockernumber'] !== undefined) {
    queryParameters['search_lockernumber'] = parameters['searchLockernumber']
  }
  if (parameters['searchLockertype'] !== undefined) {
    queryParameters['search_lockertype'] = parameters['searchLockertype']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listLockers_RAW_URL = function() {
  return '/api/lockers'
}
export const listLockers_TYPE = function() {
  return 'get'
}
export const listLockersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/lockers'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchLockernumber'] !== undefined) {
    queryParameters['search_lockernumber'] = parameters['searchLockernumber']
  }
  if (parameters['searchLockertype'] !== undefined) {
    queryParameters['search_lockertype'] = parameters['searchLockertype']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createLockers
 * url: createLockersURL
 * method: createLockers_TYPE
 * raw_url: createLockers_RAW_URL
 * @param body - 实体参数
 */
export const createLockers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/lockers'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createLockers_RAW_URL = function() {
  return '/api/lockers'
}
export const createLockers_TYPE = function() {
  return 'post'
}
export const createLockersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/lockers'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadLockersById
 * url: loadLockersByIdURL
 * method: loadLockersById_TYPE
 * raw_url: loadLockersById_RAW_URL
 * @param id - ID
 */
export const loadLockersById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/lockers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadLockersById_RAW_URL = function() {
  return '/api/lockers/{id}'
}
export const loadLockersById_TYPE = function() {
  return 'get'
}
export const loadLockersByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/lockers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateLockers
 * url: updateLockersURL
 * method: updateLockers_TYPE
 * raw_url: updateLockers_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateLockers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/lockers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateLockers_RAW_URL = function() {
  return '/api/lockers/{id}'
}
export const updateLockers_TYPE = function() {
  return 'put'
}
export const updateLockersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/lockers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteLockersById
 * url: deleteLockersByIdURL
 * method: deleteLockersById_TYPE
 * raw_url: deleteLockersById_RAW_URL
 * @param id - ID
 */
export const deleteLockersById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/lockers/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteLockersById_RAW_URL = function() {
  return '/api/lockers/{id}'
}
export const deleteLockersById_TYPE = function() {
  return 'delete'
}
export const deleteLockersByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/lockers/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: loginNew
 * url: loginNewURL
 * method: loginNew_TYPE
 * raw_url: loginNew_RAW_URL
 * @param password - password
 * @param username - username
 */
export const loginNew = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const loginNew_RAW_URL = function() {
  return '/api/login'
}
export const loginNew_TYPE = function() {
  return 'post'
}
export const loginNewURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/login'
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listLogs
* url: listLogsURL
* method: listLogs_TYPE
* raw_url: listLogs_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAddmoney - 查询条件:addmoney，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchOperationtype - 查询条件:operationtype，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listLogs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/logs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOperationtype'] !== undefined) {
    queryParameters['search_operationtype'] = parameters['searchOperationtype']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listLogs_RAW_URL = function() {
  return '/api/logs'
}
export const listLogs_TYPE = function() {
  return 'get'
}
export const listLogsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/logs'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOperationtype'] !== undefined) {
    queryParameters['search_operationtype'] = parameters['searchOperationtype']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createLog
 * url: createLogURL
 * method: createLog_TYPE
 * raw_url: createLog_RAW_URL
 * @param body - 实体参数
 */
export const createLog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/logs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createLog_RAW_URL = function() {
  return '/api/logs'
}
export const createLog_TYPE = function() {
  return 'post'
}
export const createLogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/logs'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadLogById
 * url: loadLogByIdURL
 * method: loadLogById_TYPE
 * raw_url: loadLogById_RAW_URL
 * @param id - ID
 */
export const loadLogById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/logs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadLogById_RAW_URL = function() {
  return '/api/logs/{id}'
}
export const loadLogById_TYPE = function() {
  return 'get'
}
export const loadLogByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/logs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateLog
 * url: updateLogURL
 * method: updateLog_TYPE
 * raw_url: updateLog_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateLog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/logs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateLog_RAW_URL = function() {
  return '/api/logs/{id}'
}
export const updateLog_TYPE = function() {
  return 'put'
}
export const updateLogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/logs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteLogById
 * url: deleteLogByIdURL
 * method: deleteLogById_TYPE
 * raw_url: deleteLogById_RAW_URL
 * @param id - ID
 */
export const deleteLogById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/logs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteLogById_RAW_URL = function() {
  return '/api/logs/{id}'
}
export const deleteLogById_TYPE = function() {
  return 'delete'
}
export const deleteLogByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/logs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序字段：code,name,description,parent.id,parent.name,sortIndex,isEnable,createTime
成功：code=200，data对象为包含分页信息的组织机构列表，失败：code!=200
* request: listOrganizations
* url: listOrganizationsURL
* method: listOrganizations_TYPE
* raw_url: listOrganizations_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:组织机构代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:组织机构描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchName - 查询条件:组织机构名称，模糊匹配
     * @param searchParentId - 查询条件:级组织机构ID，精确匹配
     * @param searchParentName - 查询条件:上级组织机构名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listOrganizations = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listOrganizations_RAW_URL = function() {
  return '/api/organizations'
}
export const listOrganizations_TYPE = function() {
  return 'get'
}
export const listOrganizationsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createOrganization
 * url: createOrganizationURL
 * method: createOrganization_TYPE
 * raw_url: createOrganization_RAW_URL
 * @param body - 组织机构实体参数
 */
export const createOrganization = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createOrganization_RAW_URL = function() {
  return '/api/organizations'
}
export const createOrganization_TYPE = function() {
  return 'post'
}
export const createOrganizationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含分页信息的组织机构列表，失败：code!=200
 * request: organizationsTree
 * url: organizationsTreeURL
 * method: organizationsTree_TYPE
 * raw_url: organizationsTree_RAW_URL
 * @param searchType - 查询条件:权限类型，精确匹配
 */
export const organizationsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const organizationsTree_RAW_URL = function() {
  return '/api/organizations/tree'
}
export const organizationsTree_TYPE = function() {
  return 'get'
}
export const organizationsTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/tree'
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为组织机构信息，失败：code!=200
 * request: loadOrganizationById
 * url: loadOrganizationByIdURL
 * method: loadOrganizationById_TYPE
 * raw_url: loadOrganizationById_RAW_URL
 * @param id - 组织机构ID
 */
export const loadOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const loadOrganizationById_TYPE = function() {
  return 'get'
}
export const loadOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateOrganization
 * url: updateOrganizationURL
 * method: updateOrganization_TYPE
 * raw_url: updateOrganization_RAW_URL
 * @param body - 组织机构实体参数
 * @param id - 组织机构id
 */
export const updateOrganization = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateOrganization_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const updateOrganization_TYPE = function() {
  return 'put'
}
export const updateOrganizationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: deleteOrganizationById
 * url: deleteOrganizationByIdURL
 * method: deleteOrganizationById_TYPE
 * raw_url: deleteOrganizationById_RAW_URL
 * @param id - 组织机构ID
 */
export const deleteOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const deleteOrganizationById_TYPE = function() {
  return 'delete'
}
export const deleteOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateOrganizationPatch
 * url: updateOrganizationPatchURL
 * method: updateOrganizationPatch_TYPE
 * raw_url: updateOrganizationPatch_RAW_URL
 * @param body - 组织机构实体参数
 * @param id - 组织机构id
 */
export const updateOrganizationPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateOrganizationPatch_RAW_URL = function() {
  return '/api/organizations/{id}'
}
export const updateOrganizationPatch_TYPE = function() {
  return 'patch'
}
export const updateOrganizationPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listPays
* url: listPaysURL
* method: listPays_TYPE
* raw_url: listPays_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAcctips - 查询条件:acctips，等于
     * @param searchBalancemoney - 查询条件:balancemoney，等于
     * @param searchBalancetime - 查询条件:balancetime，等于
     * @param searchBindphone - 查询条件:bindphone，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchClasses - 查询条件:classes，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchDelay - 查询条件:delay，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchElectric - 查询条件:electric，等于
     * @param searchEndtime - 查询条件:endtime，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchMd5Pass - 查询条件:md5pass，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchPassword - 查询条件:password，等于
     * @param searchPayname - 查询条件:payname，等于
     * @param searchPhone - 查询条件:phone，等于
     * @param searchQcoderandom - 查询条件:qcoderandom，等于
     * @param searchQcodetime - 查询条件:qcodetime，等于
     * @param searchStarttime - 查询条件:starttime，等于
     * @param searchUsagemoney - 查询条件:usagemoney，等于
     * @param searchUsagetime - 查询条件:usagetime，等于
     * @param searchWxName - 查询条件:wx_name，等于
     * @param searchWxOpenid - 查询条件:wx_openid，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listPays = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchBalancemoney'] !== undefined) {
    queryParameters['search_balancemoney'] = parameters['searchBalancemoney']
  }
  if (parameters['searchBalancetime'] !== undefined) {
    queryParameters['search_balancetime'] = parameters['searchBalancetime']
  }
  if (parameters['searchBindphone'] !== undefined) {
    queryParameters['search_bindphone'] = parameters['searchBindphone']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchClasses'] !== undefined) {
    queryParameters['search_classes'] = parameters['searchClasses']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDelay'] !== undefined) {
    queryParameters['search_delay'] = parameters['searchDelay']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchElectric'] !== undefined) {
    queryParameters['search_electric'] = parameters['searchElectric']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPassword'] !== undefined) {
    queryParameters['search_password'] = parameters['searchPassword']
  }
  if (parameters['searchPayname'] !== undefined) {
    queryParameters['search_payname'] = parameters['searchPayname']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchQcoderandom'] !== undefined) {
    queryParameters['search_qcoderandom'] = parameters['searchQcoderandom']
  }
  if (parameters['searchQcodetime'] !== undefined) {
    queryParameters['search_qcodetime'] = parameters['searchQcodetime']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchUsagemoney'] !== undefined) {
    queryParameters['search_usagemoney'] = parameters['searchUsagemoney']
  }
  if (parameters['searchUsagetime'] !== undefined) {
    queryParameters['search_usagetime'] = parameters['searchUsagetime']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpenid'] !== undefined) {
    queryParameters['search_wxOpenid'] = parameters['searchWxOpenid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listPays_RAW_URL = function() {
  return '/api/pays'
}
export const listPays_TYPE = function() {
  return 'get'
}
export const listPaysURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchBalancemoney'] !== undefined) {
    queryParameters['search_balancemoney'] = parameters['searchBalancemoney']
  }
  if (parameters['searchBalancetime'] !== undefined) {
    queryParameters['search_balancetime'] = parameters['searchBalancetime']
  }
  if (parameters['searchBindphone'] !== undefined) {
    queryParameters['search_bindphone'] = parameters['searchBindphone']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchClasses'] !== undefined) {
    queryParameters['search_classes'] = parameters['searchClasses']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDelay'] !== undefined) {
    queryParameters['search_delay'] = parameters['searchDelay']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchElectric'] !== undefined) {
    queryParameters['search_electric'] = parameters['searchElectric']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPassword'] !== undefined) {
    queryParameters['search_password'] = parameters['searchPassword']
  }
  if (parameters['searchPayname'] !== undefined) {
    queryParameters['search_payname'] = parameters['searchPayname']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchQcoderandom'] !== undefined) {
    queryParameters['search_qcoderandom'] = parameters['searchQcoderandom']
  }
  if (parameters['searchQcodetime'] !== undefined) {
    queryParameters['search_qcodetime'] = parameters['searchQcodetime']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchUsagemoney'] !== undefined) {
    queryParameters['search_usagemoney'] = parameters['searchUsagemoney']
  }
  if (parameters['searchUsagetime'] !== undefined) {
    queryParameters['search_usagetime'] = parameters['searchUsagetime']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpenid'] !== undefined) {
    queryParameters['search_wxOpenid'] = parameters['searchWxOpenid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createPay
 * url: createPayURL
 * method: createPay_TYPE
 * raw_url: createPay_RAW_URL
 * @param body - 实体参数
 */
export const createPay = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createPay_RAW_URL = function() {
  return '/api/pays'
}
export const createPay_TYPE = function() {
  return 'post'
}
export const createPayURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadCard_1
 * url: loadCard_1URL
 * method: loadCard_1_TYPE
 * raw_url: loadCard_1_RAW_URL
 */
export const loadCard_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/cardno'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadCard_1_RAW_URL = function() {
  return '/api/pays/cardno'
}
export const loadCard_1_TYPE = function() {
  return 'get'
}
export const loadCard_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/cardno'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createPaychild
 * url: createPaychildURL
 * method: createPaychild_TYPE
 * raw_url: createPaychild_RAW_URL
 * @param body - 实体参数
 */
export const createPaychild = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/createchild'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createPaychild_RAW_URL = function() {
  return '/api/pays/createchild'
}
export const createPaychild_TYPE = function() {
  return 'post'
}
export const createPaychildURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/createchild'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: replacePay
 * url: replacePayURL
 * method: replacePay_TYPE
 * raw_url: replacePay_RAW_URL
 * @param body - 实体参数
 */
export const replacePay = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/replacePay'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const replacePay_RAW_URL = function() {
  return '/api/pays/replacePay'
}
export const replacePay_TYPE = function() {
  return 'put'
}
export const replacePayURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/replacePay'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: searchstand
* url: searchstandURL
* method: searchstand_TYPE
* raw_url: searchstand_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAcctips - 查询条件:acctips，等于
     * @param searchBalancemoney - 查询条件:balancemoney，等于
     * @param searchBalancetime - 查询条件:balancetime，等于
     * @param searchBindphone - 查询条件:bindphone，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchClasses - 查询条件:classes，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchDelay - 查询条件:delay，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchElectric - 查询条件:electric，等于
     * @param searchEndtime - 查询条件:endtime，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchMd5Pass - 查询条件:md5pass，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchPassword - 查询条件:password，等于
     * @param searchPayname - 查询条件:payname，等于
     * @param searchPhone - 查询条件:phone，等于
     * @param searchQcoderandom - 查询条件:qcoderandom，等于
     * @param searchQcodetime - 查询条件:qcodetime，等于
     * @param searchStarttime - 查询条件:starttime，等于
     * @param searchUsagemoney - 查询条件:usagemoney，等于
     * @param searchUsagetime - 查询条件:usagetime，等于
     * @param searchWxName - 查询条件:wx_name，等于
     * @param searchWxOpenid - 查询条件:wx_openid，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const searchstand = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/searchstand'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchBalancemoney'] !== undefined) {
    queryParameters['search_balancemoney'] = parameters['searchBalancemoney']
  }
  if (parameters['searchBalancetime'] !== undefined) {
    queryParameters['search_balancetime'] = parameters['searchBalancetime']
  }
  if (parameters['searchBindphone'] !== undefined) {
    queryParameters['search_bindphone'] = parameters['searchBindphone']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchClasses'] !== undefined) {
    queryParameters['search_classes'] = parameters['searchClasses']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDelay'] !== undefined) {
    queryParameters['search_delay'] = parameters['searchDelay']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchElectric'] !== undefined) {
    queryParameters['search_electric'] = parameters['searchElectric']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPassword'] !== undefined) {
    queryParameters['search_password'] = parameters['searchPassword']
  }
  if (parameters['searchPayname'] !== undefined) {
    queryParameters['search_payname'] = parameters['searchPayname']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchQcoderandom'] !== undefined) {
    queryParameters['search_qcoderandom'] = parameters['searchQcoderandom']
  }
  if (parameters['searchQcodetime'] !== undefined) {
    queryParameters['search_qcodetime'] = parameters['searchQcodetime']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchUsagemoney'] !== undefined) {
    queryParameters['search_usagemoney'] = parameters['searchUsagemoney']
  }
  if (parameters['searchUsagetime'] !== undefined) {
    queryParameters['search_usagetime'] = parameters['searchUsagetime']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpenid'] !== undefined) {
    queryParameters['search_wxOpenid'] = parameters['searchWxOpenid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const searchstand_RAW_URL = function() {
  return '/api/pays/searchstand'
}
export const searchstand_TYPE = function() {
  return 'get'
}
export const searchstandURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/searchstand'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAcctips'] !== undefined) {
    queryParameters['search_acctips'] = parameters['searchAcctips']
  }
  if (parameters['searchBalancemoney'] !== undefined) {
    queryParameters['search_balancemoney'] = parameters['searchBalancemoney']
  }
  if (parameters['searchBalancetime'] !== undefined) {
    queryParameters['search_balancetime'] = parameters['searchBalancetime']
  }
  if (parameters['searchBindphone'] !== undefined) {
    queryParameters['search_bindphone'] = parameters['searchBindphone']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchClasses'] !== undefined) {
    queryParameters['search_classes'] = parameters['searchClasses']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDelay'] !== undefined) {
    queryParameters['search_delay'] = parameters['searchDelay']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchElectric'] !== undefined) {
    queryParameters['search_electric'] = parameters['searchElectric']
  }
  if (parameters['searchEndtime'] !== undefined) {
    queryParameters['search_endtime'] = parameters['searchEndtime']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMd5Pass'] !== undefined) {
    queryParameters['search_md5pass'] = parameters['searchMd5Pass']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchPassword'] !== undefined) {
    queryParameters['search_password'] = parameters['searchPassword']
  }
  if (parameters['searchPayname'] !== undefined) {
    queryParameters['search_payname'] = parameters['searchPayname']
  }
  if (parameters['searchPhone'] !== undefined) {
    queryParameters['search_phone'] = parameters['searchPhone']
  }
  if (parameters['searchQcoderandom'] !== undefined) {
    queryParameters['search_qcoderandom'] = parameters['searchQcoderandom']
  }
  if (parameters['searchQcodetime'] !== undefined) {
    queryParameters['search_qcodetime'] = parameters['searchQcodetime']
  }
  if (parameters['searchStarttime'] !== undefined) {
    queryParameters['search_starttime'] = parameters['searchStarttime']
  }
  if (parameters['searchUsagemoney'] !== undefined) {
    queryParameters['search_usagemoney'] = parameters['searchUsagemoney']
  }
  if (parameters['searchUsagetime'] !== undefined) {
    queryParameters['search_usagetime'] = parameters['searchUsagetime']
  }
  if (parameters['searchWxName'] !== undefined) {
    queryParameters['search_wxName'] = parameters['searchWxName']
  }
  if (parameters['searchWxOpenid'] !== undefined) {
    queryParameters['search_wxOpenid'] = parameters['searchWxOpenid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateStandPay
 * url: updateStandPayURL
 * method: updateStandPay_TYPE
 * raw_url: updateStandPay_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateStandPay = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/stand/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStandPay_RAW_URL = function() {
  return '/api/pays/stand/{id}'
}
export const updateStandPay_TYPE = function() {
  return 'put'
}
export const updateStandPayURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/stand/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadPayById
 * url: loadPayByIdURL
 * method: loadPayById_TYPE
 * raw_url: loadPayById_RAW_URL
 * @param id - ID
 */
export const loadPayById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadPayById_RAW_URL = function() {
  return '/api/pays/{id}'
}
export const loadPayById_TYPE = function() {
  return 'get'
}
export const loadPayByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updatePay
 * url: updatePayURL
 * method: updatePay_TYPE
 * raw_url: updatePay_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updatePay = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updatePay_RAW_URL = function() {
  return '/api/pays/{id}'
}
export const updatePay_TYPE = function() {
  return 'put'
}
export const updatePayURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deletePayById
 * url: deletePayByIdURL
 * method: deletePayById_TYPE
 * raw_url: deletePayById_RAW_URL
 * @param id - ID
 */
export const deletePayById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/pays/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePayById_RAW_URL = function() {
  return '/api/pays/{id}'
}
export const deletePayById_TYPE = function() {
  return 'delete'
}
export const deletePayByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/pays/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：type,code,name,url,icon,description,parent.id,parent.code,
parent.name,sortIndex,isEnable,createTime
成功：code=200，data对象为包含分页信息的权限列表，失败：code!=200
* request: listPermissions
* url: listPermissionsURL
* method: listPermissions_TYPE
* raw_url: listPermissions_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:权限代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:权限描述，模糊匹配
     * @param searchIcon - 查询条件:权限图标，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchName - 查询条件:权限名称，模糊匹配
     * @param searchParentCode - 查询条件:上级权限代码，模糊匹配
     * @param searchParentId - 查询条件:上级权限ID，精确匹配
     * @param searchParentName - 查询条件:上级权限名称，模糊匹配
     * @param searchType - 查询条件:权限类型，精确匹配
     * @param searchUrl - 查询条件:权限地址，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listPermissions = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIcon'] !== undefined) {
    queryParameters['search_icon'] = parameters['searchIcon']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listPermissions_RAW_URL = function() {
  return '/api/permissions'
}
export const listPermissions_TYPE = function() {
  return 'get'
}
export const listPermissionsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIcon'] !== undefined) {
    queryParameters['search_icon'] = parameters['searchIcon']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchParentCode'] !== undefined) {
    queryParameters['search_parentCode'] = parameters['searchParentCode']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchUrl'] !== undefined) {
    queryParameters['search_url'] = parameters['searchUrl']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createPermission
 * url: createPermissionURL
 * method: createPermission_TYPE
 * raw_url: createPermission_RAW_URL
 * @param body - 权限实体参数
 */
export const createPermission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createPermission_RAW_URL = function() {
  return '/api/permissions'
}
export const createPermission_TYPE = function() {
  return 'post'
}
export const createPermissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为包含分页信息的权限列表，失败：code!=200
 * request: listPermissionsTree
 * url: listPermissionsTreeURL
 * method: listPermissionsTree_TYPE
 * raw_url: listPermissionsTree_RAW_URL
 * @param searchUserId - 查询条件:用户id
 */
export const listPermissionsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchUserId'] !== undefined) {
    queryParameters['search_userId'] = parameters['searchUserId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listPermissionsTree_RAW_URL = function() {
  return '/api/permissions/tree'
}
export const listPermissionsTree_TYPE = function() {
  return 'get'
}
export const listPermissionsTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/tree'
  if (parameters['searchUserId'] !== undefined) {
    queryParameters['search_userId'] = parameters['searchUserId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadPermissionById
 * url: loadPermissionByIdURL
 * method: loadPermissionById_TYPE
 * raw_url: loadPermissionById_RAW_URL
 * @param id - 权限ID
 */
export const loadPermissionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadPermissionById_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const loadPermissionById_TYPE = function() {
  return 'get'
}
export const loadPermissionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updatePermission
 * url: updatePermissionURL
 * method: updatePermission_TYPE
 * raw_url: updatePermission_RAW_URL
 * @param body - 权限实体参数
 * @param id - 权限id
 */
export const updatePermission = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updatePermission_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const updatePermission_TYPE = function() {
  return 'put'
}
export const updatePermissionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deletePermissionById
 * url: deletePermissionByIdURL
 * method: deletePermissionById_TYPE
 * raw_url: deletePermissionById_RAW_URL
 * @param id - 权限ID
 */
export const deletePermissionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePermissionById_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const deletePermissionById_TYPE = function() {
  return 'delete'
}
export const deletePermissionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updatePermissionPatch
 * url: updatePermissionPatchURL
 * method: updatePermissionPatch_TYPE
 * raw_url: updatePermissionPatch_RAW_URL
 * @param body - 权限实体参数
 * @param id - 权限id
 */
export const updatePermissionPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updatePermissionPatch_RAW_URL = function() {
  return '/api/permissions/{id}'
}
export const updatePermissionPatch_TYPE = function() {
  return 'patch'
}
export const updatePermissionPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/permissions/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为user信息，失败：code!=0
 * request: principal
 * url: principalURL
 * method: principal_TYPE
 * raw_url: principal_RAW_URL
 */
export const principal = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/principal'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const principal_RAW_URL = function() {
  return '/api/principal'
}
export const principal_TYPE = function() {
  return 'get'
}
export const principalURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/principal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listRebateCoupons
* url: listRebateCouponsURL
* method: listRebateCoupons_TYPE
* raw_url: listRebateCoupons_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchNumber - 查询条件:number，等于
     * @param searchRebateid - 查询条件:rebateid，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listRebateCoupons = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebateCoupons'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchNumber'] !== undefined) {
    queryParameters['search_number'] = parameters['searchNumber']
  }
  if (parameters['searchRebateid'] !== undefined) {
    queryParameters['search_rebateid'] = parameters['searchRebateid']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listRebateCoupons_RAW_URL = function() {
  return '/api/rebateCoupons'
}
export const listRebateCoupons_TYPE = function() {
  return 'get'
}
export const listRebateCouponsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebateCoupons'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchNumber'] !== undefined) {
    queryParameters['search_number'] = parameters['searchNumber']
  }
  if (parameters['searchRebateid'] !== undefined) {
    queryParameters['search_rebateid'] = parameters['searchRebateid']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createRebateCoupon
 * url: createRebateCouponURL
 * method: createRebateCoupon_TYPE
 * raw_url: createRebateCoupon_RAW_URL
 * @param body - 实体参数
 */
export const createRebateCoupon = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebateCoupons'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createRebateCoupon_RAW_URL = function() {
  return '/api/rebateCoupons'
}
export const createRebateCoupon_TYPE = function() {
  return 'post'
}
export const createRebateCouponURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebateCoupons'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadRebateCouponById
 * url: loadRebateCouponByIdURL
 * method: loadRebateCouponById_TYPE
 * raw_url: loadRebateCouponById_RAW_URL
 * @param id - ID
 */
export const loadRebateCouponById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebateCoupons/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadRebateCouponById_RAW_URL = function() {
  return '/api/rebateCoupons/{id}'
}
export const loadRebateCouponById_TYPE = function() {
  return 'get'
}
export const loadRebateCouponByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebateCoupons/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRebateCoupon
 * url: updateRebateCouponURL
 * method: updateRebateCoupon_TYPE
 * raw_url: updateRebateCoupon_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateRebateCoupon = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebateCoupons/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRebateCoupon_RAW_URL = function() {
  return '/api/rebateCoupons/{id}'
}
export const updateRebateCoupon_TYPE = function() {
  return 'put'
}
export const updateRebateCouponURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebateCoupons/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteRebateCouponById
 * url: deleteRebateCouponByIdURL
 * method: deleteRebateCouponById_TYPE
 * raw_url: deleteRebateCouponById_RAW_URL
 * @param id - ID
 */
export const deleteRebateCouponById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebateCoupons/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteRebateCouponById_RAW_URL = function() {
  return '/api/rebateCoupons/{id}'
}
export const deleteRebateCouponById_TYPE = function() {
  return 'delete'
}
export const deleteRebateCouponByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebateCoupons/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listRebates
* url: listRebatesURL
* method: listRebates_TYPE
* raw_url: listRebates_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAddmoney - 查询条件:addmoney，等于
     * @param searchDate - 查询条件:date，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchName - 查询条件:name，等于
     * @param searchPaymoney - 查询条件:paymoney，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listRebates = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebates'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchDate'] !== undefined) {
    queryParameters['search_date'] = parameters['searchDate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listRebates_RAW_URL = function() {
  return '/api/rebates'
}
export const listRebates_TYPE = function() {
  return 'get'
}
export const listRebatesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebates'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAddmoney'] !== undefined) {
    queryParameters['search_addmoney'] = parameters['searchAddmoney']
  }
  if (parameters['searchDate'] !== undefined) {
    queryParameters['search_date'] = parameters['searchDate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchPaymoney'] !== undefined) {
    queryParameters['search_paymoney'] = parameters['searchPaymoney']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createRebate
 * url: createRebateURL
 * method: createRebate_TYPE
 * raw_url: createRebate_RAW_URL
 * @param body - 实体参数
 */
export const createRebate = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebates'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createRebate_RAW_URL = function() {
  return '/api/rebates'
}
export const createRebate_TYPE = function() {
  return 'post'
}
export const createRebateURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebates'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadRebateById
 * url: loadRebateByIdURL
 * method: loadRebateById_TYPE
 * raw_url: loadRebateById_RAW_URL
 * @param id - ID
 */
export const loadRebateById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebates/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadRebateById_RAW_URL = function() {
  return '/api/rebates/{id}'
}
export const loadRebateById_TYPE = function() {
  return 'get'
}
export const loadRebateByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebates/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRebate
 * url: updateRebateURL
 * method: updateRebate_TYPE
 * raw_url: updateRebate_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateRebate = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebates/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRebate_RAW_URL = function() {
  return '/api/rebates/{id}'
}
export const updateRebate_TYPE = function() {
  return 'put'
}
export const updateRebateURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebates/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteRebateById
 * url: deleteRebateByIdURL
 * method: deleteRebateById_TYPE
 * raw_url: deleteRebateById_RAW_URL
 * @param id - ID
 */
export const deleteRebateById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/rebates/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteRebateById_RAW_URL = function() {
  return '/api/rebates/{id}'
}
export const deleteRebateById_TYPE = function() {
  return 'delete'
}
export const deleteRebateByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/rebates/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listReceipts
* url: listReceiptsURL
* method: listReceipts_TYPE
* raw_url: listReceipts_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchReceipt - 查询条件:receipt，等于
     * @param searchUserid - 查询条件:userid，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listReceipts = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/receipts'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchReceipt'] !== undefined) {
    queryParameters['search_receipt'] = parameters['searchReceipt']
  }
  if (parameters['searchUserid'] !== undefined) {
    queryParameters['search_userid'] = parameters['searchUserid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listReceipts_RAW_URL = function() {
  return '/api/receipts'
}
export const listReceipts_TYPE = function() {
  return 'get'
}
export const listReceiptsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/receipts'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchReceipt'] !== undefined) {
    queryParameters['search_receipt'] = parameters['searchReceipt']
  }
  if (parameters['searchUserid'] !== undefined) {
    queryParameters['search_userid'] = parameters['searchUserid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createReceipt
 * url: createReceiptURL
 * method: createReceipt_TYPE
 * raw_url: createReceipt_RAW_URL
 * @param body - 实体参数
 */
export const createReceipt = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/receipts'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createReceipt_RAW_URL = function() {
  return '/api/receipts'
}
export const createReceipt_TYPE = function() {
  return 'post'
}
export const createReceiptURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/receipts'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReceipt
 * url: updateReceiptURL
 * method: updateReceipt_TYPE
 * raw_url: updateReceipt_RAW_URL
 * @param body - 实体参数
 */
export const updateReceipt = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/receipts'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateReceipt_RAW_URL = function() {
  return '/api/receipts'
}
export const updateReceipt_TYPE = function() {
  return 'put'
}
export const updateReceiptURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/receipts'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadReceiptById
 * url: loadReceiptByIdURL
 * method: loadReceiptById_TYPE
 * raw_url: loadReceiptById_RAW_URL
 * @param id - ID
 */
export const loadReceiptById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/receipts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReceiptById_RAW_URL = function() {
  return '/api/receipts/{id}'
}
export const loadReceiptById_TYPE = function() {
  return 'get'
}
export const loadReceiptByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/receipts/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteReceiptById
 * url: deleteReceiptByIdURL
 * method: deleteReceiptById_TYPE
 * raw_url: deleteReceiptById_RAW_URL
 * @param id - ID
 */
export const deleteReceiptById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/receipts/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteReceiptById_RAW_URL = function() {
  return '/api/receipts/{id}'
}
export const deleteReceiptById_TYPE = function() {
  return 'delete'
}
export const deleteReceiptByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/receipts/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listRegisterCards
* url: listRegisterCardsURL
* method: listRegisterCards_TYPE
* raw_url: listRegisterCards_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchPriceid - 查询条件:priceid，等于
     * @param searchStatue - 查询条件:statue，等于
     * @param searchTerm - 查询条件:term，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listRegisterCards = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchStatue'] !== undefined) {
    queryParameters['search_statue'] = parameters['searchStatue']
  }
  if (parameters['searchTerm'] !== undefined) {
    queryParameters['search_term'] = parameters['searchTerm']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listRegisterCards_RAW_URL = function() {
  return '/api/registerCards'
}
export const listRegisterCards_TYPE = function() {
  return 'get'
}
export const listRegisterCardsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchStatue'] !== undefined) {
    queryParameters['search_statue'] = parameters['searchStatue']
  }
  if (parameters['searchTerm'] !== undefined) {
    queryParameters['search_term'] = parameters['searchTerm']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createRegisterCard
 * url: createRegisterCardURL
 * method: createRegisterCard_TYPE
 * raw_url: createRegisterCard_RAW_URL
 * @param body - 实体参数
 */
export const createRegisterCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createRegisterCard_RAW_URL = function() {
  return '/api/registerCards'
}
export const createRegisterCard_TYPE = function() {
  return 'post'
}
export const createRegisterCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRegisterCard
 * url: updateRegisterCardURL
 * method: updateRegisterCard_TYPE
 * raw_url: updateRegisterCard_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateRegisterCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRegisterCard_RAW_URL = function() {
  return '/api/registerCards'
}
export const updateRegisterCard_TYPE = function() {
  return 'put'
}
export const updateRegisterCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: refundCard
 * url: refundCardURL
 * method: refundCard_TYPE
 * raw_url: refundCard_RAW_URL
 * @param body - 实体参数
 */
export const refundCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards/refundCard'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const refundCard_RAW_URL = function() {
  return '/api/registerCards/refundCard'
}
export const refundCard_TYPE = function() {
  return 'post'
}
export const refundCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards/refundCard'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadRegisterCardById
 * url: loadRegisterCardByIdURL
 * method: loadRegisterCardById_TYPE
 * raw_url: loadRegisterCardById_RAW_URL
 * @param id - ID
 */
export const loadRegisterCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadRegisterCardById_RAW_URL = function() {
  return '/api/registerCards/{id}'
}
export const loadRegisterCardById_TYPE = function() {
  return 'get'
}
export const loadRegisterCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteRegisterCardById
 * url: deleteRegisterCardByIdURL
 * method: deleteRegisterCardById_TYPE
 * raw_url: deleteRegisterCardById_RAW_URL
 * @param id - ID
 */
export const deleteRegisterCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/registerCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteRegisterCardById_RAW_URL = function() {
  return '/api/registerCards/{id}'
}
export const deleteRegisterCardById_TYPE = function() {
  return 'delete'
}
export const deleteRegisterCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/registerCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：objectType,objectName,stringName1,stringName2,stringName3,longName1,longName2,longName3,doubleName1,doubleName2,doubleName3,dateName1,dateName2,dateName3,isEnable,createTime
成功：code=200，data对象为包含分页信息的保留字段配置列表，失败：code!=200
* request: listReservableConfigs
* url: listReservableConfigsURL
* method: listReservableConfigs_TYPE
* raw_url: listReservableConfigs_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDateName1 - 查询条件:日期字段1名称，模糊匹配
     * @param searchDateName2 - 查询条件:日期字段2名称，模糊匹配
     * @param searchDateName3 - 查询条件:日期字段3名称，模糊匹配
     * @param searchDoubleName1 - 查询条件:小数字段1名称，模糊匹配
     * @param searchDoubleName2 - 查询条件:小数字段2名称，模糊匹配
     * @param searchDoubleName3 - 查询条件:小数字段3名称，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchLongName1 - 查询条件:整型字段1名称，模糊匹配
     * @param searchLongName2 - 查询条件:整型字段2名称，模糊匹配
     * @param searchLongName3 - 查询条件:整型字段3名称，模糊匹配
     * @param searchObjectName - 查询条件:配置对象名称，模糊匹配
     * @param searchObjectType - 查询条件:配置对象类型，模糊匹配
     * @param searchStringName1 - 查询条件:字符字段1名称，模糊匹配
     * @param searchStringName2 - 查询条件:字符字段2名称，模糊匹配
     * @param searchStringName3 - 查询条件:字符字段3名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listReservableConfigs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDateName1'] !== undefined) {
    queryParameters['search_dateName1'] = parameters['searchDateName1']
  }
  if (parameters['searchDateName2'] !== undefined) {
    queryParameters['search_dateName2'] = parameters['searchDateName2']
  }
  if (parameters['searchDateName3'] !== undefined) {
    queryParameters['search_dateName3'] = parameters['searchDateName3']
  }
  if (parameters['searchDoubleName1'] !== undefined) {
    queryParameters['search_doubleName1'] = parameters['searchDoubleName1']
  }
  if (parameters['searchDoubleName2'] !== undefined) {
    queryParameters['search_doubleName2'] = parameters['searchDoubleName2']
  }
  if (parameters['searchDoubleName3'] !== undefined) {
    queryParameters['search_doubleName3'] = parameters['searchDoubleName3']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchLongName1'] !== undefined) {
    queryParameters['search_longName1'] = parameters['searchLongName1']
  }
  if (parameters['searchLongName2'] !== undefined) {
    queryParameters['search_longName2'] = parameters['searchLongName2']
  }
  if (parameters['searchLongName3'] !== undefined) {
    queryParameters['search_longName3'] = parameters['searchLongName3']
  }
  if (parameters['searchObjectName'] !== undefined) {
    queryParameters['search_objectName'] = parameters['searchObjectName']
  }
  if (parameters['searchObjectType'] !== undefined) {
    queryParameters['search_objectType'] = parameters['searchObjectType']
  }
  if (parameters['searchStringName1'] !== undefined) {
    queryParameters['search_stringName1'] = parameters['searchStringName1']
  }
  if (parameters['searchStringName2'] !== undefined) {
    queryParameters['search_stringName2'] = parameters['searchStringName2']
  }
  if (parameters['searchStringName3'] !== undefined) {
    queryParameters['search_stringName3'] = parameters['searchStringName3']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listReservableConfigs_RAW_URL = function() {
  return '/api/reservableConfigs'
}
export const listReservableConfigs_TYPE = function() {
  return 'get'
}
export const listReservableConfigsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDateName1'] !== undefined) {
    queryParameters['search_dateName1'] = parameters['searchDateName1']
  }
  if (parameters['searchDateName2'] !== undefined) {
    queryParameters['search_dateName2'] = parameters['searchDateName2']
  }
  if (parameters['searchDateName3'] !== undefined) {
    queryParameters['search_dateName3'] = parameters['searchDateName3']
  }
  if (parameters['searchDoubleName1'] !== undefined) {
    queryParameters['search_doubleName1'] = parameters['searchDoubleName1']
  }
  if (parameters['searchDoubleName2'] !== undefined) {
    queryParameters['search_doubleName2'] = parameters['searchDoubleName2']
  }
  if (parameters['searchDoubleName3'] !== undefined) {
    queryParameters['search_doubleName3'] = parameters['searchDoubleName3']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchLongName1'] !== undefined) {
    queryParameters['search_longName1'] = parameters['searchLongName1']
  }
  if (parameters['searchLongName2'] !== undefined) {
    queryParameters['search_longName2'] = parameters['searchLongName2']
  }
  if (parameters['searchLongName3'] !== undefined) {
    queryParameters['search_longName3'] = parameters['searchLongName3']
  }
  if (parameters['searchObjectName'] !== undefined) {
    queryParameters['search_objectName'] = parameters['searchObjectName']
  }
  if (parameters['searchObjectType'] !== undefined) {
    queryParameters['search_objectType'] = parameters['searchObjectType']
  }
  if (parameters['searchStringName1'] !== undefined) {
    queryParameters['search_stringName1'] = parameters['searchStringName1']
  }
  if (parameters['searchStringName2'] !== undefined) {
    queryParameters['search_stringName2'] = parameters['searchStringName2']
  }
  if (parameters['searchStringName3'] !== undefined) {
    queryParameters['search_stringName3'] = parameters['searchStringName3']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createReservableConfig
 * url: createReservableConfigURL
 * method: createReservableConfig_TYPE
 * raw_url: createReservableConfig_RAW_URL
 * @param body - 预留字段配置实体参数
 */
export const createReservableConfig = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createReservableConfig_RAW_URL = function() {
  return '/api/reservableConfigs'
}
export const createReservableConfig_TYPE = function() {
  return 'post'
}
export const createReservableConfigURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadReservableConfigByObjectType
 * url: loadReservableConfigByObjectTypeURL
 * method: loadReservableConfigByObjectType_TYPE
 * raw_url: loadReservableConfigByObjectType_RAW_URL
 * @param objectType - 预留字段配置类型
 */
export const loadReservableConfigByObjectType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/objectType/{objectType}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{objectType}', `${parameters['objectType']}`)
  if (parameters['objectType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: objectType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReservableConfigByObjectType_RAW_URL = function() {
  return '/api/reservableConfigs/objectType/{objectType}'
}
export const loadReservableConfigByObjectType_TYPE = function() {
  return 'get'
}
export const loadReservableConfigByObjectTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/objectType/{objectType}'
  path = path.replace('{objectType}', `${parameters['objectType']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadReservableConfigById
 * url: loadReservableConfigByIdURL
 * method: loadReservableConfigById_TYPE
 * raw_url: loadReservableConfigById_RAW_URL
 * @param id - 预留字段配置ID
 */
export const loadReservableConfigById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReservableConfigById_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const loadReservableConfigById_TYPE = function() {
  return 'get'
}
export const loadReservableConfigByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReservableConfig
 * url: updateReservableConfigURL
 * method: updateReservableConfig_TYPE
 * raw_url: updateReservableConfig_RAW_URL
 * @param body - 预留字段配置实体参数
 * @param id - 预留字段配置ID
 */
export const updateReservableConfig = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateReservableConfig_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const updateReservableConfig_TYPE = function() {
  return 'put'
}
export const updateReservableConfigURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为预留字段配置信息，失败：code!=0
 * request: deleteReservableConfigById
 * url: deleteReservableConfigByIdURL
 * method: deleteReservableConfigById_TYPE
 * raw_url: deleteReservableConfigById_RAW_URL
 * @param id - 预留字段配置ID
 */
export const deleteReservableConfigById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteReservableConfigById_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const deleteReservableConfigById_TYPE = function() {
  return 'delete'
}
export const deleteReservableConfigByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReservableConfigPatch
 * url: updateReservableConfigPatchURL
 * method: updateReservableConfigPatch_TYPE
 * raw_url: updateReservableConfigPatch_RAW_URL
 * @param body - 预留字段配置实体参数
 * @param id - 预留字段配置id
 */
export const updateReservableConfigPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reservableConfigs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateReservableConfigPatch_RAW_URL = function() {
  return '/api/reservableConfigs/{id}'
}
export const updateReservableConfigPatch_TYPE = function() {
  return 'patch'
}
export const updateReservableConfigPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reservableConfigs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listReserves
* url: listReservesURL
* method: listReserves_TYPE
* raw_url: listReserves_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchAreas - 查询条件:areas，等于
     * @param searchBillid - 查询条件:billid，等于
     * @param searchBookend - 查询条件:预定结束时间，等于
     * @param searchBookstart - 查询条件:预定开始时间，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCreateUserId - 查询条件:createUserId，等于
     * @param searchCustbanlance - 查询条件:custbanlance，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchDecmoney - 查询条件:decmoney，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchFavorflag - 查询条件:favorflag，等于
     * @param searchFavormoney - 查询条件:favormoney，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchGrandid - 查询条件:grandid，等于
     * @param searchHallid - 查询条件:hallid，等于
     * @param searchLeader - 查询条件:leader，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchOperend - 查询条件:操作结束时间，等于
     * @param searchOperstart - 查询条件:操作开始时间，等于
     * @param searchOrdend - 查询条件:ordend，等于
     * @param searchOrdername - 查询条件:ordername，等于
     * @param searchOrdmins - 查询条件:ordmins，等于
     * @param searchOrdmoney - 查询条件:ordmoney，等于
     * @param searchOrdstart - 查询条件:ordstart，等于
     * @param searchOrdtype - 查询条件:ordtype，等于
     * @param searchOrdway - 查询条件:ordway，等于
     * @param searchOriginid - 查询条件:originid，等于
     * @param searchPayway - 查询条件:支付方式，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchPriceid - 查询条件:priceid，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchReseend - 查询条件:reseend，等于
     * @param searchReserveDate - 查询条件:reserveDate，等于
     * @param searchResestart - 查询条件:resestart，等于
     * @param searchSel - 查询条件:sel，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listReserves = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreas'] !== undefined) {
    queryParameters['search_areas'] = parameters['searchAreas']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchBookend'] !== undefined) {
    queryParameters['search_bookend'] = parameters['searchBookend']
  }
  if (parameters['searchBookstart'] !== undefined) {
    queryParameters['search_bookstart'] = parameters['searchBookstart']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDecmoney'] !== undefined) {
    queryParameters['search_decmoney'] = parameters['searchDecmoney']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorflag'] !== undefined) {
    queryParameters['search_favorflag'] = parameters['searchFavorflag']
  }
  if (parameters['searchFavormoney'] !== undefined) {
    queryParameters['search_favormoney'] = parameters['searchFavormoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchLeader'] !== undefined) {
    queryParameters['search_leader'] = parameters['searchLeader']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOperend'] !== undefined) {
    queryParameters['search_operend'] = parameters['searchOperend']
  }
  if (parameters['searchOperstart'] !== undefined) {
    queryParameters['search_operstart'] = parameters['searchOperstart']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdername'] !== undefined) {
    queryParameters['search_ordername'] = parameters['searchOrdername']
  }
  if (parameters['searchOrdmins'] !== undefined) {
    queryParameters['search_ordmins'] = parameters['searchOrdmins']
  }
  if (parameters['searchOrdmoney'] !== undefined) {
    queryParameters['search_ordmoney'] = parameters['searchOrdmoney']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchOrdtype'] !== undefined) {
    queryParameters['search_ordtype'] = parameters['searchOrdtype']
  }
  if (parameters['searchOrdway'] !== undefined) {
    queryParameters['search_ordway'] = parameters['searchOrdway']
  }
  if (parameters['searchOriginid'] !== undefined) {
    queryParameters['search_originid'] = parameters['searchOriginid']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReseend'] !== undefined) {
    queryParameters['search_reseend'] = parameters['searchReseend']
  }
  if (parameters['searchReserveDate'] !== undefined) {
    queryParameters['search_reserveDate'] = parameters['searchReserveDate']
  }
  if (parameters['searchResestart'] !== undefined) {
    queryParameters['search_resestart'] = parameters['searchResestart']
  }
  if (parameters['searchSel'] !== undefined) {
    queryParameters['search_sel'] = parameters['searchSel']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listReserves_RAW_URL = function() {
  return '/api/reserves'
}
export const listReserves_TYPE = function() {
  return 'get'
}
export const listReservesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchAreas'] !== undefined) {
    queryParameters['search_areas'] = parameters['searchAreas']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchBookend'] !== undefined) {
    queryParameters['search_bookend'] = parameters['searchBookend']
  }
  if (parameters['searchBookstart'] !== undefined) {
    queryParameters['search_bookstart'] = parameters['searchBookstart']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchDecmoney'] !== undefined) {
    queryParameters['search_decmoney'] = parameters['searchDecmoney']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorflag'] !== undefined) {
    queryParameters['search_favorflag'] = parameters['searchFavorflag']
  }
  if (parameters['searchFavormoney'] !== undefined) {
    queryParameters['search_favormoney'] = parameters['searchFavormoney']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchHallid'] !== undefined) {
    queryParameters['search_hallid'] = parameters['searchHallid']
  }
  if (parameters['searchLeader'] !== undefined) {
    queryParameters['search_leader'] = parameters['searchLeader']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchOperend'] !== undefined) {
    queryParameters['search_operend'] = parameters['searchOperend']
  }
  if (parameters['searchOperstart'] !== undefined) {
    queryParameters['search_operstart'] = parameters['searchOperstart']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdername'] !== undefined) {
    queryParameters['search_ordername'] = parameters['searchOrdername']
  }
  if (parameters['searchOrdmins'] !== undefined) {
    queryParameters['search_ordmins'] = parameters['searchOrdmins']
  }
  if (parameters['searchOrdmoney'] !== undefined) {
    queryParameters['search_ordmoney'] = parameters['searchOrdmoney']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchOrdtype'] !== undefined) {
    queryParameters['search_ordtype'] = parameters['searchOrdtype']
  }
  if (parameters['searchOrdway'] !== undefined) {
    queryParameters['search_ordway'] = parameters['searchOrdway']
  }
  if (parameters['searchOriginid'] !== undefined) {
    queryParameters['search_originid'] = parameters['searchOriginid']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReseend'] !== undefined) {
    queryParameters['search_reseend'] = parameters['searchReseend']
  }
  if (parameters['searchReserveDate'] !== undefined) {
    queryParameters['search_reserveDate'] = parameters['searchReserveDate']
  }
  if (parameters['searchResestart'] !== undefined) {
    queryParameters['search_resestart'] = parameters['searchResestart']
  }
  if (parameters['searchSel'] !== undefined) {
    queryParameters['search_sel'] = parameters['searchSel']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createReserve
 * url: createReserveURL
 * method: createReserve_TYPE
 * raw_url: createReserve_RAW_URL
 * @param body - 实体参数
 */
export const createReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createReserve_RAW_URL = function() {
  return '/api/reserves'
}
export const createReserve_TYPE = function() {
  return 'post'
}
export const createReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: areaReserve
* url: areaReserveURL
* method: areaReserve_TYPE
* raw_url: areaReserve_RAW_URL
     * @param searchBill - 查询条件:billid，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCustbanlance - 查询条件:custbanlance，等于
     * @param searchCustomer - 查询条件:customer，等于
     * @param searchDeposit - 查询条件:deposit，等于
     * @param searchFavorflag - 查询条件:favorflag，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchLeader - 查询条件:leader，等于
     * @param searchOrdend - 查询条件:ordend，等于
     * @param searchOrdername - 查询条件:ordername，等于
     * @param searchOrdmins - 查询条件:ordmins，等于
     * @param searchOrdmoney - 查询条件:ordmoney，等于
     * @param searchOrdstart - 查询条件:ordstart，等于
     * @param searchOrdtype - 查询条件:ordtype，等于
     * @param searchOrdway - 查询条件:ordway，等于
     * @param searchOriginid - 查询条件:originid，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchPriceid - 查询条件:priceid，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchReserveDate - 查询条件:reserveDate，等于
     * @param searchSel - 查询条件:sel，等于
     * @param searchVenue - 查询条件:venue，等于
*/
export const areaReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/areaReserve'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchBill'] !== undefined) {
    queryParameters['search_bill'] = parameters['searchBill']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustomer'] !== undefined) {
    queryParameters['search_customer'] = parameters['searchCustomer']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorflag'] !== undefined) {
    queryParameters['search_favorflag'] = parameters['searchFavorflag']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchLeader'] !== undefined) {
    queryParameters['search_leader'] = parameters['searchLeader']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdername'] !== undefined) {
    queryParameters['search_ordername'] = parameters['searchOrdername']
  }
  if (parameters['searchOrdmins'] !== undefined) {
    queryParameters['search_ordmins'] = parameters['searchOrdmins']
  }
  if (parameters['searchOrdmoney'] !== undefined) {
    queryParameters['search_ordmoney'] = parameters['searchOrdmoney']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchOrdtype'] !== undefined) {
    queryParameters['search_ordtype'] = parameters['searchOrdtype']
  }
  if (parameters['searchOrdway'] !== undefined) {
    queryParameters['search_ordway'] = parameters['searchOrdway']
  }
  if (parameters['searchOriginid'] !== undefined) {
    queryParameters['search_originid'] = parameters['searchOriginid']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReserveDate'] !== undefined) {
    queryParameters['search_reserveDate'] = parameters['searchReserveDate']
  }
  if (parameters['searchSel'] !== undefined) {
    queryParameters['search_sel'] = parameters['searchSel']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['searchVenue'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: searchVenue'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const areaReserve_RAW_URL = function() {
  return '/api/reserves/areaReserve'
}
export const areaReserve_TYPE = function() {
  return 'get'
}
export const areaReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/areaReserve'
  if (parameters['searchBill'] !== undefined) {
    queryParameters['search_bill'] = parameters['searchBill']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustomer'] !== undefined) {
    queryParameters['search_customer'] = parameters['searchCustomer']
  }
  if (parameters['searchDeposit'] !== undefined) {
    queryParameters['search_deposit'] = parameters['searchDeposit']
  }
  if (parameters['searchFavorflag'] !== undefined) {
    queryParameters['search_favorflag'] = parameters['searchFavorflag']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchLeader'] !== undefined) {
    queryParameters['search_leader'] = parameters['searchLeader']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdername'] !== undefined) {
    queryParameters['search_ordername'] = parameters['searchOrdername']
  }
  if (parameters['searchOrdmins'] !== undefined) {
    queryParameters['search_ordmins'] = parameters['searchOrdmins']
  }
  if (parameters['searchOrdmoney'] !== undefined) {
    queryParameters['search_ordmoney'] = parameters['searchOrdmoney']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchOrdtype'] !== undefined) {
    queryParameters['search_ordtype'] = parameters['searchOrdtype']
  }
  if (parameters['searchOrdway'] !== undefined) {
    queryParameters['search_ordway'] = parameters['searchOrdway']
  }
  if (parameters['searchOriginid'] !== undefined) {
    queryParameters['search_originid'] = parameters['searchOriginid']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchPriceid'] !== undefined) {
    queryParameters['search_priceid'] = parameters['searchPriceid']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchReserveDate'] !== undefined) {
    queryParameters['search_reserveDate'] = parameters['searchReserveDate']
  }
  if (parameters['searchSel'] !== undefined) {
    queryParameters['search_sel'] = parameters['searchSel']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: cancelReserve
 * url: cancelReserveURL
 * method: cancelReserve_TYPE
 * raw_url: cancelReserve_RAW_URL
 * @param body - 实体参数
 */
export const cancelReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/cancel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const cancelReserve_RAW_URL = function() {
  return '/api/reserves/cancel'
}
export const cancelReserve_TYPE = function() {
  return 'post'
}
export const cancelReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/cancel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: getReserve
* url: getReserveURL
* method: getReserve_TYPE
* raw_url: getReserve_RAW_URL
     * @param searchAreatype - 查询条件:场地类型，等于
     * @param searchCatatype - 查询条件:场地类型，等于
     * @param searchChargesrule - 查询条件:级别类型，等于
     * @param searchGrandid - 查询条件:场地id，等于
     * @param searchOrdend - 查询条件:预约结束时间，等于
     * @param searchOrdstart - 查询条件:预约开始时间，等于
     * @param searchVenue - 查询条件:场馆，等于
*/
export const getReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/getReserve'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchChargesrule'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: searchChargesrule'))
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchGrandid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: searchGrandid'))
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdend'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: searchOrdend'))
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchOrdstart'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: searchOrdstart'))
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getReserve_RAW_URL = function() {
  return '/api/reserves/getReserve'
}
export const getReserve_TYPE = function() {
  return 'get'
}
export const getReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/getReserve'
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: queryReserve
* url: queryReserveURL
* method: queryReserve_TYPE
* raw_url: queryReserve_RAW_URL
     * @param searchAreatype - 查询条件:场地类型，等于
     * @param searchCatatype - 查询条件:场地类型，等于
     * @param searchChargesrule - 查询条件:级别类型，等于
     * @param searchGrandid - 查询条件:场地id，等于
     * @param searchOrdend - 查询条件:预约结束时间，等于
     * @param searchOrdstart - 查询条件:预约开始时间，等于
     * @param searchVenue - 查询条件:场馆，等于
*/
export const queryReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/queryReserve'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryReserve_RAW_URL = function() {
  return '/api/reserves/queryReserve'
}
export const queryReserve_TYPE = function() {
  return 'get'
}
export const queryReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/queryReserve'
  if (parameters['searchAreatype'] !== undefined) {
    queryParameters['search_areatype'] = parameters['searchAreatype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchChargesrule'] !== undefined) {
    queryParameters['search_chargesrule'] = parameters['searchChargesrule']
  }
  if (parameters['searchGrandid'] !== undefined) {
    queryParameters['search_grandid'] = parameters['searchGrandid']
  }
  if (parameters['searchOrdend'] !== undefined) {
    queryParameters['search_ordend'] = parameters['searchOrdend']
  }
  if (parameters['searchOrdstart'] !== undefined) {
    queryParameters['search_ordstart'] = parameters['searchOrdstart']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: toReserve
 * url: toReserveURL
 * method: toReserve_TYPE
 * raw_url: toReserve_RAW_URL
 * @param body - 实体参数
 */
export const toReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/toReserve'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const toReserve_RAW_URL = function() {
  return '/api/reserves/toReserve'
}
export const toReserve_TYPE = function() {
  return 'post'
}
export const toReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/toReserve'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadReserveById
 * url: loadReserveByIdURL
 * method: loadReserveById_TYPE
 * raw_url: loadReserveById_RAW_URL
 * @param id - ID
 */
export const loadReserveById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadReserveById_RAW_URL = function() {
  return '/api/reserves/{id}'
}
export const loadReserveById_TYPE = function() {
  return 'get'
}
export const loadReserveByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateReserve
 * url: updateReserveURL
 * method: updateReserve_TYPE
 * raw_url: updateReserve_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateReserve = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateReserve_RAW_URL = function() {
  return '/api/reserves/{id}'
}
export const updateReserve_TYPE = function() {
  return 'put'
}
export const updateReserveURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteReserveById
 * url: deleteReserveByIdURL
 * method: deleteReserveById_TYPE
 * raw_url: deleteReserveById_RAW_URL
 * @param id - ID
 */
export const deleteReserveById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/reserves/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteReserveById_RAW_URL = function() {
  return '/api/reserves/{id}'
}
export const deleteReserveById_TYPE = function() {
  return 'delete'
}
export const deleteReserveByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/reserves/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：code,name,description,level.code,level.name,isSystem,isEnable,createTime
成功：code=200，data对象为包含分页信息的角色列表，失败：code!=200
* request: listRoles
* url: listRolesURL
* method: listRoles_TYPE
* raw_url: listRoles_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:角色代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:角色描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchIsSystem - 查询条件:是否系统角色，1：是，0：否，精确匹配
     * @param searchLevel - 查询条件:角色级别，对应角色字典，精确匹配
     * @param searchLevelName - 查询条件:角色级别名称，模糊匹配
     * @param searchName - 查询条件:角色名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listRoles = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listRoles_RAW_URL = function() {
  return '/api/roles'
}
export const listRoles_TYPE = function() {
  return 'get'
}
export const listRolesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchIsSystem'] !== undefined) {
    queryParameters['search_isSystem'] = parameters['searchIsSystem']
  }
  if (parameters['searchLevel'] !== undefined) {
    queryParameters['search_level'] = parameters['searchLevel']
  }
  if (parameters['searchLevelName'] !== undefined) {
    queryParameters['search_levelName'] = parameters['searchLevelName']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createRole
 * url: createRoleURL
 * method: createRole_TYPE
 * raw_url: createRole_RAW_URL
 * @param body - 角色实体参数
 */
export const createRole = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createRole_RAW_URL = function() {
  return '/api/roles'
}
export const createRole_TYPE = function() {
  return 'post'
}
export const createRoleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadRoleById
 * url: loadRoleByIdURL
 * method: loadRoleById_TYPE
 * raw_url: loadRoleById_RAW_URL
 * @param id - 角色ID
 */
export const loadRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadRoleById_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const loadRoleById_TYPE = function() {
  return 'get'
}
export const loadRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRole
 * url: updateRoleURL
 * method: updateRole_TYPE
 * raw_url: updateRole_RAW_URL
 * @param body - 角色实体参数
 * @param id - 角色id
 */
export const updateRole = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRole_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const updateRole_TYPE = function() {
  return 'put'
}
export const updateRoleURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteRoleById
 * url: deleteRoleByIdURL
 * method: deleteRoleById_TYPE
 * raw_url: deleteRoleById_RAW_URL
 * @param id - 角色ID
 */
export const deleteRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteRoleById_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const deleteRoleById_TYPE = function() {
  return 'delete'
}
export const deleteRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateRolePatch
 * url: updateRolePatchURL
 * method: updateRolePatch_TYPE
 * raw_url: updateRolePatch_RAW_URL
 * @param body - 角色实体参数
 * @param id - 角色ID
 */
export const updateRolePatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateRolePatch_RAW_URL = function() {
  return '/api/roles/{id}'
}
export const updateRolePatch_TYPE = function() {
  return 'patch'
}
export const updateRolePatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: setPermissions
 * url: setPermissionsURL
 * method: setPermissions_TYPE
 * raw_url: setPermissions_RAW_URL
 * @param body - 权限信息列表
 * @param id - 角色id
 */
export const setPermissions = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}/permissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const setPermissions_RAW_URL = function() {
  return '/api/roles/{id}/permissions'
}
export const setPermissions_TYPE = function() {
  return 'put'
}
export const setPermissionsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}/permissions'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: getScreen
* url: getScreenURL
* method: getScreen_TYPE
* raw_url: getScreen_RAW_URL
     * @param venue - 查询条件:查询场馆，等于
*/
export const getScreen = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/screen'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getScreen_RAW_URL = function() {
  return '/api/screen'
}
export const getScreen_TYPE = function() {
  return 'get'
}
export const getScreenURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/screen'
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listSells
* url: listSellsURL
* method: listSells_TYPE
* raw_url: listSells_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchBillid - 查询条件:billid，等于
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCreateUserId - 查询条件:createUserId，等于
     * @param searchCustbanlance - 查询条件:custbanlance，等于
     * @param searchCustid - 查询条件:custid，等于
     * @param searchCustname - 查询条件:custname，等于
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchMoney - 查询条件:money，等于
     * @param searchPaycount - 查询条件:paycount，等于
     * @param searchPayway - 查询条件:payway，等于
     * @param searchPhonenum - 查询条件:phonenum，等于
     * @param searchProfitmoney - 查询条件:profitmoney，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listSells = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sells'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMoney'] !== undefined) {
    queryParameters['search_money'] = parameters['searchMoney']
  }
  if (parameters['searchPaycount'] !== undefined) {
    queryParameters['search_paycount'] = parameters['searchPaycount']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listSells_RAW_URL = function() {
  return '/api/sells'
}
export const listSells_TYPE = function() {
  return 'get'
}
export const listSellsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sells'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchBillid'] !== undefined) {
    queryParameters['search_billid'] = parameters['searchBillid']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCreateUserId'] !== undefined) {
    queryParameters['search_createUserId'] = parameters['searchCreateUserId']
  }
  if (parameters['searchCustbanlance'] !== undefined) {
    queryParameters['search_custbanlance'] = parameters['searchCustbanlance']
  }
  if (parameters['searchCustid'] !== undefined) {
    queryParameters['search_custid'] = parameters['searchCustid']
  }
  if (parameters['searchCustname'] !== undefined) {
    queryParameters['search_custname'] = parameters['searchCustname']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchMoney'] !== undefined) {
    queryParameters['search_money'] = parameters['searchMoney']
  }
  if (parameters['searchPaycount'] !== undefined) {
    queryParameters['search_paycount'] = parameters['searchPaycount']
  }
  if (parameters['searchPayway'] !== undefined) {
    queryParameters['search_payway'] = parameters['searchPayway']
  }
  if (parameters['searchPhonenum'] !== undefined) {
    queryParameters['search_phonenum'] = parameters['searchPhonenum']
  }
  if (parameters['searchProfitmoney'] !== undefined) {
    queryParameters['search_profitmoney'] = parameters['searchProfitmoney']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createSell
 * url: createSellURL
 * method: createSell_TYPE
 * raw_url: createSell_RAW_URL
 * @param body - 实体参数
 */
export const createSell = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sells'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createSell_RAW_URL = function() {
  return '/api/sells'
}
export const createSell_TYPE = function() {
  return 'post'
}
export const createSellURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sells'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadSellById
 * url: loadSellByIdURL
 * method: loadSellById_TYPE
 * raw_url: loadSellById_RAW_URL
 * @param id - ID
 */
export const loadSellById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sells/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadSellById_RAW_URL = function() {
  return '/api/sells/{id}'
}
export const loadSellById_TYPE = function() {
  return 'get'
}
export const loadSellByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sells/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateSell
 * url: updateSellURL
 * method: updateSell_TYPE
 * raw_url: updateSell_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateSell = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sells/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateSell_RAW_URL = function() {
  return '/api/sells/{id}'
}
export const updateSell_TYPE = function() {
  return 'put'
}
export const updateSellURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sells/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteSellById
 * url: deleteSellByIdURL
 * method: deleteSellById_TYPE
 * raw_url: deleteSellById_RAW_URL
 * @param id - ID
 */
export const deleteSellById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sells/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteSellById_RAW_URL = function() {
  return '/api/sells/{id}'
}
export const deleteSellById_TYPE = function() {
  return 'delete'
}
export const deleteSellByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sells/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: getSound
* url: getSoundURL
* method: getSound_TYPE
* raw_url: getSound_RAW_URL
     * @param venue - 查询条件:查询场馆，等于
*/
export const getSound = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/sound'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getSound_RAW_URL = function() {
  return '/api/sound'
}
export const getSound_TYPE = function() {
  return 'get'
}
export const getSoundURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/sound'
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listStands
* url: listStandsURL
* method: listStands_TYPE
* raw_url: listStands_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchDeferdate - 查询条件:deferdate，等于
     * @param searchNumber - 查询条件:number，等于
     * @param searchPostdate - 查询条件:postdate，等于
     * @param searchStandard - 查询条件:standard，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listStands = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stands'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDeferdate'] !== undefined) {
    queryParameters['search_deferdate'] = parameters['searchDeferdate']
  }
  if (parameters['searchNumber'] !== undefined) {
    queryParameters['search_number'] = parameters['searchNumber']
  }
  if (parameters['searchPostdate'] !== undefined) {
    queryParameters['search_postdate'] = parameters['searchPostdate']
  }
  if (parameters['searchStandard'] !== undefined) {
    queryParameters['search_standard'] = parameters['searchStandard']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listStands_RAW_URL = function() {
  return '/api/stands'
}
export const listStands_TYPE = function() {
  return 'get'
}
export const listStandsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stands'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchDeferdate'] !== undefined) {
    queryParameters['search_deferdate'] = parameters['searchDeferdate']
  }
  if (parameters['searchNumber'] !== undefined) {
    queryParameters['search_number'] = parameters['searchNumber']
  }
  if (parameters['searchPostdate'] !== undefined) {
    queryParameters['search_postdate'] = parameters['searchPostdate']
  }
  if (parameters['searchStandard'] !== undefined) {
    queryParameters['search_standard'] = parameters['searchStandard']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createStand
 * url: createStandURL
 * method: createStand_TYPE
 * raw_url: createStand_RAW_URL
 * @param body - 实体参数
 */
export const createStand = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stands'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createStand_RAW_URL = function() {
  return '/api/stands'
}
export const createStand_TYPE = function() {
  return 'post'
}
export const createStandURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stands'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadStandById
 * url: loadStandByIdURL
 * method: loadStandById_TYPE
 * raw_url: loadStandById_RAW_URL
 * @param id - ID
 */
export const loadStandById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stands/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadStandById_RAW_URL = function() {
  return '/api/stands/{id}'
}
export const loadStandById_TYPE = function() {
  return 'get'
}
export const loadStandByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stands/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateStand
 * url: updateStandURL
 * method: updateStand_TYPE
 * raw_url: updateStand_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateStand = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stands/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStand_RAW_URL = function() {
  return '/api/stands/{id}'
}
export const updateStand_TYPE = function() {
  return 'put'
}
export const updateStandURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stands/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteStandById
 * url: deleteStandByIdURL
 * method: deleteStandById_TYPE
 * raw_url: deleteStandById_RAW_URL
 * @param id - ID
 */
export const deleteStandById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stands/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteStandById_RAW_URL = function() {
  return '/api/stands/{id}'
}
export const deleteStandById_TYPE = function() {
  return 'delete'
}
export const deleteStandByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stands/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listStandtypes
* url: listStandtypesURL
* method: listStandtypes_TYPE
* raw_url: listStandtypes_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCardprice - 查询条件:cardprice，等于
     * @param searchStandid - 查询条件:standid，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listStandtypes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/standtypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardprice'] !== undefined) {
    queryParameters['search_cardprice'] = parameters['searchCardprice']
  }
  if (parameters['searchStandid'] !== undefined) {
    queryParameters['search_standid'] = parameters['searchStandid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listStandtypes_RAW_URL = function() {
  return '/api/standtypes'
}
export const listStandtypes_TYPE = function() {
  return 'get'
}
export const listStandtypesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/standtypes'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardprice'] !== undefined) {
    queryParameters['search_cardprice'] = parameters['searchCardprice']
  }
  if (parameters['searchStandid'] !== undefined) {
    queryParameters['search_standid'] = parameters['searchStandid']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createStandtype
 * url: createStandtypeURL
 * method: createStandtype_TYPE
 * raw_url: createStandtype_RAW_URL
 * @param body - 实体参数
 */
export const createStandtype = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/standtypes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createStandtype_RAW_URL = function() {
  return '/api/standtypes'
}
export const createStandtype_TYPE = function() {
  return 'post'
}
export const createStandtypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/standtypes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadStandtypeById
 * url: loadStandtypeByIdURL
 * method: loadStandtypeById_TYPE
 * raw_url: loadStandtypeById_RAW_URL
 * @param id - ID
 */
export const loadStandtypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/standtypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadStandtypeById_RAW_URL = function() {
  return '/api/standtypes/{id}'
}
export const loadStandtypeById_TYPE = function() {
  return 'get'
}
export const loadStandtypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/standtypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateStandtype
 * url: updateStandtypeURL
 * method: updateStandtype_TYPE
 * raw_url: updateStandtype_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateStandtype = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/standtypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStandtype_RAW_URL = function() {
  return '/api/standtypes/{id}'
}
export const updateStandtype_TYPE = function() {
  return 'put'
}
export const updateStandtypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/standtypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteStandtypeById
 * url: deleteStandtypeByIdURL
 * method: deleteStandtypeById_TYPE
 * raw_url: deleteStandtypeById_RAW_URL
 * @param id - ID
 */
export const deleteStandtypeById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/standtypes/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteStandtypeById_RAW_URL = function() {
  return '/api/standtypes/{id}'
}
export const deleteStandtypeById_TYPE = function() {
  return 'delete'
}
export const deleteStandtypeByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/standtypes/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: checkCardRecord
* url: checkCardRecordURL
* method: checkCardRecord_TYPE
* raw_url: checkCardRecord_RAW_URL
     * @param cardNo - 查询条件:cardNo，等于
     * @param cardType - 查询条件:cardType，等于
     * @param checkBeginTime - 查询条件:checkBeginTime，等于
     * @param checkEndTime - 查询条件:checkEndTime，等于
     * @param consumption - 查询条件:consumption，等于
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param sellBeginTime - 查询条件:sellBeginTime，等于
     * @param sellEndTime - 查询条件:sellEndTime，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const checkCardRecord = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/statistics/checkCardRecord'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['cardNo'] !== undefined) {
    queryParameters['cardNo'] = parameters['cardNo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['checkBeginTime'] !== undefined) {
    queryParameters['checkBeginTime'] = parameters['checkBeginTime']
  }
  if (parameters['checkEndTime'] !== undefined) {
    queryParameters['checkEndTime'] = parameters['checkEndTime']
  }
  if (parameters['consumption'] !== undefined) {
    queryParameters['consumption'] = parameters['consumption']
  }
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['sellBeginTime'] !== undefined) {
    queryParameters['sellBeginTime'] = parameters['sellBeginTime']
  }
  if (parameters['sellEndTime'] !== undefined) {
    queryParameters['sellEndTime'] = parameters['sellEndTime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const checkCardRecord_RAW_URL = function() {
  return '/api/statistics/checkCardRecord'
}
export const checkCardRecord_TYPE = function() {
  return 'get'
}
export const checkCardRecordURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/statistics/checkCardRecord'
  if (parameters['cardNo'] !== undefined) {
    queryParameters['cardNo'] = parameters['cardNo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['checkBeginTime'] !== undefined) {
    queryParameters['checkBeginTime'] = parameters['checkBeginTime']
  }
  if (parameters['checkEndTime'] !== undefined) {
    queryParameters['checkEndTime'] = parameters['checkEndTime']
  }
  if (parameters['consumption'] !== undefined) {
    queryParameters['consumption'] = parameters['consumption']
  }
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['sellBeginTime'] !== undefined) {
    queryParameters['sellBeginTime'] = parameters['sellBeginTime']
  }
  if (parameters['sellEndTime'] !== undefined) {
    queryParameters['sellEndTime'] = parameters['sellEndTime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: countCardStatus
* url: countCardStatusURL
* method: countCardStatus_TYPE
* raw_url: countCardStatus_RAW_URL
     * @param queryDate - 查询条件:queryDate，等于
*/
export const countCardStatus = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/statistics/countCardStatus'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['queryDate'] !== undefined) {
    queryParameters['queryDate'] = parameters['queryDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const countCardStatus_RAW_URL = function() {
  return '/api/statistics/countCardStatus'
}
export const countCardStatus_TYPE = function() {
  return 'get'
}
export const countCardStatusURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/statistics/countCardStatus'
  if (parameters['queryDate'] !== undefined) {
    queryParameters['queryDate'] = parameters['queryDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: sellCardCount
 * url: sellCardCountURL
 * method: sellCardCount_TYPE
 * raw_url: sellCardCount_RAW_URL
 * @param body - 实体参数
 */
export const sellCardCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/statistics/sellCardCount'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const sellCardCount_RAW_URL = function() {
  return '/api/statistics/sellCardCount'
}
export const sellCardCount_TYPE = function() {
  return 'post'
}
export const sellCardCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/statistics/sellCardCount'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: sellMoneyCount
 * url: sellMoneyCountURL
 * method: sellMoneyCount_TYPE
 * raw_url: sellMoneyCount_RAW_URL
 * @param body - 实体参数
 */
export const sellMoneyCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/statistics/sellMoneyCount'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const sellMoneyCount_RAW_URL = function() {
  return '/api/statistics/sellMoneyCount'
}
export const sellMoneyCount_TYPE = function() {
  return 'post'
}
export const sellMoneyCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/statistics/sellMoneyCount'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listStocks
* url: listStocksURL
* method: listStocks_TYPE
* raw_url: listStocks_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchGoodscount - 查询条件:goodscount，等于
     * @param searchGoodsid - 查询条件:goodsid，等于
     * @param searchReason - 查询条件:reason，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listStocks = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stocks'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodscount'] !== undefined) {
    queryParameters['search_goodscount'] = parameters['searchGoodscount']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchReason'] !== undefined) {
    queryParameters['search_reason'] = parameters['searchReason']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listStocks_RAW_URL = function() {
  return '/api/stocks'
}
export const listStocks_TYPE = function() {
  return 'get'
}
export const listStocksURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stocks'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchGoodscount'] !== undefined) {
    queryParameters['search_goodscount'] = parameters['searchGoodscount']
  }
  if (parameters['searchGoodsid'] !== undefined) {
    queryParameters['search_goodsid'] = parameters['searchGoodsid']
  }
  if (parameters['searchReason'] !== undefined) {
    queryParameters['search_reason'] = parameters['searchReason']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createStock
 * url: createStockURL
 * method: createStock_TYPE
 * raw_url: createStock_RAW_URL
 * @param body - 实体参数
 */
export const createStock = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stocks'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createStock_RAW_URL = function() {
  return '/api/stocks'
}
export const createStock_TYPE = function() {
  return 'post'
}
export const createStockURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stocks'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadStockById
 * url: loadStockByIdURL
 * method: loadStockById_TYPE
 * raw_url: loadStockById_RAW_URL
 * @param id - ID
 */
export const loadStockById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadStockById_RAW_URL = function() {
  return '/api/stocks/{id}'
}
export const loadStockById_TYPE = function() {
  return 'get'
}
export const loadStockByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateStock
 * url: updateStockURL
 * method: updateStock_TYPE
 * raw_url: updateStock_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateStock = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStock_RAW_URL = function() {
  return '/api/stocks/{id}'
}
export const updateStock_TYPE = function() {
  return 'put'
}
export const updateStockURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteStockById
 * url: deleteStockByIdURL
 * method: deleteStockById_TYPE
 * raw_url: deleteStockById_RAW_URL
 * @param id - ID
 */
export const deleteStockById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stocks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteStockById_RAW_URL = function() {
  return '/api/stocks/{id}'
}
export const deleteStockById_TYPE = function() {
  return 'delete'
}
export const deleteStockByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stocks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listTickets
* url: listTicketsURL
* method: listTickets_TYPE
* raw_url: listTickets_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchEnd - 查询条件:end，等于
     * @param searchStart - 查询条件:start，等于
     * @param searchTicketnumber - 查询条件:ticketnumber，等于
     * @param searchVenue - 查询条件:venue，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listTickets = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnd'] !== undefined) {
    queryParameters['search_end'] = parameters['searchEnd']
  }
  if (parameters['searchStart'] !== undefined) {
    queryParameters['search_start'] = parameters['searchStart']
  }
  if (parameters['searchTicketnumber'] !== undefined) {
    queryParameters['search_ticketnumber'] = parameters['searchTicketnumber']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listTickets_RAW_URL = function() {
  return '/api/tickets'
}
export const listTickets_TYPE = function() {
  return 'get'
}
export const listTicketsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnd'] !== undefined) {
    queryParameters['search_end'] = parameters['searchEnd']
  }
  if (parameters['searchStart'] !== undefined) {
    queryParameters['search_start'] = parameters['searchStart']
  }
  if (parameters['searchTicketnumber'] !== undefined) {
    queryParameters['search_ticketnumber'] = parameters['searchTicketnumber']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createTicket
 * url: createTicketURL
 * method: createTicket_TYPE
 * raw_url: createTicket_RAW_URL
 * @param body - 实体参数
 */
export const createTicket = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createTicket_RAW_URL = function() {
  return '/api/tickets'
}
export const createTicket_TYPE = function() {
  return 'post'
}
export const createTicketURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: useTicket
 * url: useTicketURL
 * method: useTicket_TYPE
 * raw_url: useTicket_RAW_URL
 * @param code - code
 * @param venue - venue
 */
export const useTicket = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets/useTicket'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters['venue'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: venue'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const useTicket_RAW_URL = function() {
  return '/api/tickets/useTicket'
}
export const useTicket_TYPE = function() {
  return 'get'
}
export const useTicketURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets/useTicket'
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['venue'] !== undefined) {
    queryParameters['venue'] = parameters['venue']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadTicketById
 * url: loadTicketByIdURL
 * method: loadTicketById_TYPE
 * raw_url: loadTicketById_RAW_URL
 * @param id - ID
 */
export const loadTicketById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadTicketById_RAW_URL = function() {
  return '/api/tickets/{id}'
}
export const loadTicketById_TYPE = function() {
  return 'get'
}
export const loadTicketByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateTicket
 * url: updateTicketURL
 * method: updateTicket_TYPE
 * raw_url: updateTicket_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateTicket = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateTicket_RAW_URL = function() {
  return '/api/tickets/{id}'
}
export const updateTicket_TYPE = function() {
  return 'put'
}
export const updateTicketURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteTicketById
 * url: deleteTicketByIdURL
 * method: deleteTicketById_TYPE
 * raw_url: deleteTicketById_RAW_URL
 * @param id - ID
 */
export const deleteTicketById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/tickets/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteTicketById_RAW_URL = function() {
  return '/api/tickets/{id}'
}
export const deleteTicketById_TYPE = function() {
  return 'delete'
}
export const deleteTicketByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/tickets/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listUseCards
* url: listUseCardsURL
* method: listUseCards_TYPE
* raw_url: listUseCards_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCardno - 查询条件:cardno，等于
     * @param searchCardtype - 查询条件:cardtype，等于
     * @param searchCatatype - 查询条件:catatype，等于
     * @param searchConsumption - 查询条件:consumption，等于
     * @param searchGoodid - 查询条件:goodid，等于
     * @param searchHolidytype - 查询条件:holidytype，等于
     * @param searchPersontime - 查询条件:persontime，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listUseCards = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/useCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchPersontime'] !== undefined) {
    queryParameters['search_persontime'] = parameters['searchPersontime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUseCards_RAW_URL = function() {
  return '/api/useCards'
}
export const listUseCards_TYPE = function() {
  return 'get'
}
export const listUseCardsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/useCards'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCardno'] !== undefined) {
    queryParameters['search_cardno'] = parameters['searchCardno']
  }
  if (parameters['searchCardtype'] !== undefined) {
    queryParameters['search_cardtype'] = parameters['searchCardtype']
  }
  if (parameters['searchCatatype'] !== undefined) {
    queryParameters['search_catatype'] = parameters['searchCatatype']
  }
  if (parameters['searchConsumption'] !== undefined) {
    queryParameters['search_consumption'] = parameters['searchConsumption']
  }
  if (parameters['searchGoodid'] !== undefined) {
    queryParameters['search_goodid'] = parameters['searchGoodid']
  }
  if (parameters['searchHolidytype'] !== undefined) {
    queryParameters['search_holidytype'] = parameters['searchHolidytype']
  }
  if (parameters['searchPersontime'] !== undefined) {
    queryParameters['search_persontime'] = parameters['searchPersontime']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createUseCard
 * url: createUseCardURL
 * method: createUseCard_TYPE
 * raw_url: createUseCard_RAW_URL
 * @param body - 实体参数
 */
export const createUseCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/useCards'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUseCard_RAW_URL = function() {
  return '/api/useCards'
}
export const createUseCard_TYPE = function() {
  return 'post'
}
export const createUseCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/useCards'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadUseCardById
 * url: loadUseCardByIdURL
 * method: loadUseCardById_TYPE
 * raw_url: loadUseCardById_RAW_URL
 * @param id - ID
 */
export const loadUseCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/useCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadUseCardById_RAW_URL = function() {
  return '/api/useCards/{id}'
}
export const loadUseCardById_TYPE = function() {
  return 'get'
}
export const loadUseCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/useCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUseCard
 * url: updateUseCardURL
 * method: updateUseCard_TYPE
 * raw_url: updateUseCard_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateUseCard = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/useCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUseCard_RAW_URL = function() {
  return '/api/useCards/{id}'
}
export const updateUseCard_TYPE = function() {
  return 'put'
}
export const updateUseCardURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/useCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteUseCardById
 * url: deleteUseCardByIdURL
 * method: deleteUseCardById_TYPE
 * raw_url: deleteUseCardById_RAW_URL
 * @param id - ID
 */
export const deleteUseCardById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/useCards/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUseCardById_RAW_URL = function() {
  return '/api/useCards/{id}'
}
export const deleteUseCardById_TYPE = function() {
  return 'delete'
}
export const deleteUseCardByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/useCards/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为user信息，失败：code!=0
 * request: userInfo
 * url: userInfoURL
 * method: userInfo_TYPE
 * raw_url: userInfo_RAW_URL
 */
export const userInfo = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const userInfo_RAW_URL = function() {
  return '/api/user'
}
export const userInfo_TYPE = function() {
  return 'get'
}
export const userInfoURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：
成功：code=200，data对象为包含分页信息的列表，失败：code!=200
* request: listUserLogs
* url: listUserLogsURL
* method: listUserLogs_TYPE
* raw_url: listUserLogs_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchEnddate - 查询条件:enddate，等于
     * @param searchMemo - 查询条件:memo，等于
     * @param searchStartdate - 查询条件:startdate，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listUserLogs = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/userLogs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUserLogs_RAW_URL = function() {
  return '/api/userLogs'
}
export const listUserLogs_TYPE = function() {
  return 'get'
}
export const listUserLogsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/userLogs'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchEnddate'] !== undefined) {
    queryParameters['search_enddate'] = parameters['searchEnddate']
  }
  if (parameters['searchMemo'] !== undefined) {
    queryParameters['search_memo'] = parameters['searchMemo']
  }
  if (parameters['searchStartdate'] !== undefined) {
    queryParameters['search_startdate'] = parameters['searchStartdate']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createUserLog
 * url: createUserLogURL
 * method: createUserLog_TYPE
 * raw_url: createUserLog_RAW_URL
 * @param body - 实体参数
 */
export const createUserLog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/userLogs'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUserLog_RAW_URL = function() {
  return '/api/userLogs'
}
export const createUserLog_TYPE = function() {
  return 'post'
}
export const createUserLogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/userLogs'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为信息，失败：code!=0
 * request: loadUserLogById
 * url: loadUserLogByIdURL
 * method: loadUserLogById_TYPE
 * raw_url: loadUserLogById_RAW_URL
 * @param id - ID
 */
export const loadUserLogById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/userLogs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadUserLogById_RAW_URL = function() {
  return '/api/userLogs/{id}'
}
export const loadUserLogById_TYPE = function() {
  return 'get'
}
export const loadUserLogByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/userLogs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUserLog
 * url: updateUserLogURL
 * method: updateUserLog_TYPE
 * raw_url: updateUserLog_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateUserLog = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/userLogs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUserLog_RAW_URL = function() {
  return '/api/userLogs/{id}'
}
export const updateUserLog_TYPE = function() {
  return 'put'
}
export const updateUserLogURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/userLogs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，失败：code!=0
 * request: deleteUserLogById
 * url: deleteUserLogByIdURL
 * method: deleteUserLogById_TYPE
 * raw_url: deleteUserLogById_RAW_URL
 * @param id - ID
 */
export const deleteUserLogById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/userLogs/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUserLogById_RAW_URL = function() {
  return '/api/userLogs/{id}'
}
export const deleteUserLogById_TYPE = function() {
  return 'delete'
}
export const deleteUserLogByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/userLogs/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 排序属性：username,name,gender.code,gender.name,email,mobile,title.code,
title.name,organization.id,organization.name,department.id,
department.name,isEnable,createTime
成功：code=200，data对象为包含分页信息的用户列表，失败：code!=200
* request: listUsers
* url: listUsersURL
* method: listUsers_TYPE
* raw_url: listUsers_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDepartmentId - 查询条件:所属部门ID，精确匹配
     * @param searchDepartmentName - 查询条件:所属部门名称，模糊匹配
     * @param searchEmail - 查询条件:邮箱，模糊匹配
     * @param searchGender - 查询条件:性别代码，对应性别字典，精确匹配
     * @param searchIsEnable - 查询条件:是否启用，0：否，1：是，精确匹配
     * @param searchMobile - 查询条件:手机号码，模糊匹配
     * @param searchName - 查询条件:姓名，模糊查询
     * @param searchOrganizationId - 查询条件:所属组织机构ID，精确匹配
     * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
     * @param searchTitle - 查询条件:岗位代码，对应岗位字典，精确匹配
     * @param searchUsername - 查询条件:用户名称，模糊查询
     * @param searchVenue - 查询条件:所属场馆
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listUsers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDepartmentId'] !== undefined) {
    queryParameters['search_departmentId'] = parameters['searchDepartmentId']
  }
  if (parameters['searchDepartmentName'] !== undefined) {
    queryParameters['search_departmentName'] = parameters['searchDepartmentName']
  }
  if (parameters['searchEmail'] !== undefined) {
    queryParameters['search_email'] = parameters['searchEmail']
  }
  if (parameters['searchGender'] !== undefined) {
    queryParameters['search_gender'] = parameters['searchGender']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMobile'] !== undefined) {
    queryParameters['search_mobile'] = parameters['searchMobile']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsers_RAW_URL = function() {
  return '/api/users'
}
export const listUsers_TYPE = function() {
  return 'get'
}
export const listUsersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCreateDateBegin'] !== undefined) {
    queryParameters['search_createDateBegin'] = parameters['searchCreateDateBegin']
  }
  if (parameters['searchCreateDateEnd'] !== undefined) {
    queryParameters['search_createDateEnd'] = parameters['searchCreateDateEnd']
  }
  if (parameters['searchDepartmentId'] !== undefined) {
    queryParameters['search_departmentId'] = parameters['searchDepartmentId']
  }
  if (parameters['searchDepartmentName'] !== undefined) {
    queryParameters['search_departmentName'] = parameters['searchDepartmentName']
  }
  if (parameters['searchEmail'] !== undefined) {
    queryParameters['search_email'] = parameters['searchEmail']
  }
  if (parameters['searchGender'] !== undefined) {
    queryParameters['search_gender'] = parameters['searchGender']
  }
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchMobile'] !== undefined) {
    queryParameters['search_mobile'] = parameters['searchMobile']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
  }
  if (parameters['searchVenue'] !== undefined) {
    queryParameters['search_venue'] = parameters['searchVenue']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=201，失败：code!=201
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param body - 用户实体参数
 */
export const createUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUser_RAW_URL = function() {
  return '/api/users'
}
export const createUser_TYPE = function() {
  return 'post'
}
export const createUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: loadUserById
 * url: loadUserByIdURL
 * method: loadUserById_TYPE
 * raw_url: loadUserById_RAW_URL
 * @param id - 用户ID
 */
export const loadUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const loadUserById_RAW_URL = function() {
  return '/api/users/{id}'
}
export const loadUserById_TYPE = function() {
  return 'get'
}
export const loadUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param body - 用户实体参数
 * @param id - 用户ID
 */
export const updateUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUser_RAW_URL = function() {
  return '/api/users/{id}'
}
export const updateUser_TYPE = function() {
  return 'put'
}
export const updateUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: deleteUserById
 * url: deleteUserByIdURL
 * method: deleteUserById_TYPE
 * raw_url: deleteUserById_RAW_URL
 * @param id - 用户ID
 */
export const deleteUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUserById_RAW_URL = function() {
  return '/api/users/{id}'
}
export const deleteUserById_TYPE = function() {
  return 'delete'
}
export const deleteUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，失败：code!=200
 * request: updateUserPatch
 * url: updateUserPatchURL
 * method: updateUserPatch_TYPE
 * raw_url: updateUserPatch_RAW_URL
 * @param body - 用户实体参数
 * @param id - 用户ID
 */
export const updateUserPatch = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const updateUserPatch_RAW_URL = function() {
  return '/api/users/{id}'
}
export const updateUserPatch_TYPE = function() {
  return 'patch'
}
export const updateUserPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}