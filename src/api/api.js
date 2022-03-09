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
 * 成功：code=200，data对象为包含分页信息的网关路由列表，失败：code!=200
 * request: listGatewayRoutes
 * url: listGatewayRoutesURL
 * method: listGatewayRoutes_TYPE
 * raw_url: listGatewayRoutes_RAW_URL
 * @param pageNumber - 分页号码,从0开始
 * @param pageSize - 分页大小
 * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
 * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
 * @param searchIsEnable - 查询条件:是否启用，0：否，1：是，精确匹配
 * @param searchName - 查询条件:姓名，模糊查询
 * @param searchResourceId - 查询条件:资源id，精确匹配
 * @param searchUri - 查询条件:资源标识符，模糊查询
 * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
 */
export const listGatewayRoutes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/gateway-routes'
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
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchResourceId'] !== undefined) {
    queryParameters['search_resourceId'] = parameters['searchResourceId']
  }
  if (parameters['searchUri'] !== undefined) {
    queryParameters['search_uri'] = parameters['searchUri']
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
export const listGatewayRoutes_RAW_URL = function() {
  return '/gateway/api/gateway-routes'
}
export const listGatewayRoutes_TYPE = function() {
  return 'get'
}
export const listGatewayRoutesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/gateway-routes'
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
  if (parameters['searchIsEnable'] !== undefined) {
    queryParameters['search_isEnable'] = parameters['searchIsEnable']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchResourceId'] !== undefined) {
    queryParameters['search_resourceId'] = parameters['searchResourceId']
  }
  if (parameters['searchUri'] !== undefined) {
    queryParameters['search_uri'] = parameters['searchUri']
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
 * request: createGatewayRoute
 * url: createGatewayRouteURL
 * method: createGatewayRoute_TYPE
 * raw_url: createGatewayRoute_RAW_URL
 * @param body - 网关路由实体参数
 */
export const createGatewayRoute = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/gateway-routes'
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
export const createGatewayRoute_RAW_URL = function() {
  return '/gateway/api/gateway-routes'
}
export const createGatewayRoute_TYPE = function() {
  return 'post'
}
export const createGatewayRouteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/gateway-routes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=0，data对象为网关路由数据，失败：code!=0
 * request: loadGatewayRouteById
 * url: loadGatewayRouteByIdURL
 * method: loadGatewayRouteById_TYPE
 * raw_url: loadGatewayRouteById_RAW_URL
 * @param id - 网关路由id
 */
export const loadGatewayRouteById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/gateway-routes/{id}'
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
export const loadGatewayRouteById_RAW_URL = function() {
  return '/gateway/api/gateway-routes/{id}'
}
export const loadGatewayRouteById_TYPE = function() {
  return 'get'
}
export const loadGatewayRouteByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/gateway-routes/{id}'
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
 * request: updateGatewayRoute
 * url: updateGatewayRouteURL
 * method: updateGatewayRoute_TYPE
 * raw_url: updateGatewayRoute_RAW_URL
 * @param body - 网关路由实体参数
 * @param id - 网关路由id
 */
export const updateGatewayRoute = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/gateway-routes/{id}'
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
export const updateGatewayRoute_RAW_URL = function() {
  return '/gateway/api/gateway-routes/{id}'
}
export const updateGatewayRoute_TYPE = function() {
  return 'put'
}
export const updateGatewayRouteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/gateway-routes/{id}'
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
 * request: deleteGatewayRouteById
 * url: deleteGatewayRouteByIdURL
 * method: deleteGatewayRouteById_TYPE
 * raw_url: deleteGatewayRouteById_RAW_URL
 * @param id - 网关路由id
 */
export const deleteGatewayRouteById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/gateway-routes/{id}'
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
export const deleteGatewayRouteById_RAW_URL = function() {
  return '/gateway/api/gateway-routes/{id}'
}
export const deleteGatewayRouteById_TYPE = function() {
  return 'delete'
}
export const deleteGatewayRouteByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/gateway-routes/{id}'
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
  let path = '/gateway/api/interfaces'
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
  return '/gateway/api/interfaces'
}
export const listApis_TYPE = function() {
  return 'get'
}
export const listApisURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces'
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
  let path = '/gateway/api/interfaces'
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
  return '/gateway/api/interfaces'
}
export const createApi_TYPE = function() {
  return 'post'
}
export const createApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为接口树形结构，失败：code!=200
 * request: apiTree
 * url: apiTreeURL
 * method: apiTree_TYPE
 * raw_url: apiTree_RAW_URL
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
 */
export const apiTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/interfaces/tree'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const apiTree_RAW_URL = function() {
  return '/gateway/api/interfaces/tree'
}
export const apiTree_TYPE = function() {
  return 'get'
}
export const apiTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces/tree'
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
  let path = '/gateway/api/interfaces/{id}'
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
  return '/gateway/api/interfaces/{id}'
}
export const loadApiById_TYPE = function() {
  return 'get'
}
export const loadApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces/{id}'
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
  let path = '/gateway/api/interfaces/{id}'
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
  return '/gateway/api/interfaces/{id}'
}
export const updateApi_TYPE = function() {
  return 'put'
}
export const updateApiURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces/{id}'
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
  let path = '/gateway/api/interfaces/{id}'
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
  return '/gateway/api/interfaces/{id}'
}
export const deleteApiById_TYPE = function() {
  return 'delete'
}
export const deleteApiByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces/{id}'
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
  let path = '/gateway/api/interfaces/{id}'
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
  return '/gateway/api/interfaces/{id}'
}
export const updateApiPatch_TYPE = function() {
  return 'patch'
}
export const updateApiPatchURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/interfaces/{id}'
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
* request: listResources
* url: listResourcesURL
* method: listResources_TYPE
* raw_url: listResources_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:资源代码，等于
     * @param searchDescription - 查询条件:资源描述，等于
     * @param searchName - 查询条件:资源名称，等于
     * @param searchService - 查询条件:资源ID，等于
     * @param searchSortIndex - 查询条件:排序索引，等于
     * @param searchType - 查询条件:资源类型，1：Spring Cloud资源，2：HTTP资源，等于
     * @param searchUrl - 查询条件:URL地址，等于
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listResources = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/resources'
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
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchService'] !== undefined) {
    queryParameters['search_service'] = parameters['searchService']
  }
  if (parameters['searchSortIndex'] !== undefined) {
    queryParameters['search_sortIndex'] = parameters['searchSortIndex']
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
export const listResources_RAW_URL = function() {
  return '/gateway/api/resources'
}
export const listResources_TYPE = function() {
  return 'get'
}
export const listResourcesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/resources'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchDescription'] !== undefined) {
    queryParameters['search_description'] = parameters['searchDescription']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchService'] !== undefined) {
    queryParameters['search_service'] = parameters['searchService']
  }
  if (parameters['searchSortIndex'] !== undefined) {
    queryParameters['search_sortIndex'] = parameters['searchSortIndex']
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
 * request: createResource
 * url: createResourceURL
 * method: createResource_TYPE
 * raw_url: createResource_RAW_URL
 * @param body - 实体参数
 */
export const createResource = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/resources'
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
export const createResource_RAW_URL = function() {
  return '/gateway/api/resources'
}
export const createResource_TYPE = function() {
  return 'post'
}
export const createResourceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/resources'
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
 * request: loadResourceById
 * url: loadResourceByIdURL
 * method: loadResourceById_TYPE
 * raw_url: loadResourceById_RAW_URL
 * @param id - ID
 */
export const loadResourceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/resources/{id}'
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
export const loadResourceById_RAW_URL = function() {
  return '/gateway/api/resources/{id}'
}
export const loadResourceById_TYPE = function() {
  return 'get'
}
export const loadResourceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/resources/{id}'
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
 * request: updateResource
 * url: updateResourceURL
 * method: updateResource_TYPE
 * raw_url: updateResource_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateResource = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/resources/{id}'
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
export const updateResource_RAW_URL = function() {
  return '/gateway/api/resources/{id}'
}
export const updateResource_TYPE = function() {
  return 'put'
}
export const updateResourceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/resources/{id}'
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
 * request: deleteResourceById
 * url: deleteResourceByIdURL
 * method: deleteResourceById_TYPE
 * raw_url: deleteResourceById_RAW_URL
 * @param id - ID
 */
export const deleteResourceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/gateway/api/resources/{id}'
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
export const deleteResourceById_RAW_URL = function() {
  return '/gateway/api/resources/{id}'
}
export const deleteResourceById_TYPE = function() {
  return 'delete'
}
export const deleteResourceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/gateway/api/resources/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}