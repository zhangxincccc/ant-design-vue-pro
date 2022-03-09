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
  config = Object.assign({
    arrayFormat: 'repeat'
  }, config);
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters, config)
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
* request: listApplications
* url: listApplicationsURL
* method: listApplications_TYPE
* raw_url: listApplications_RAW_URL
     * @param pageNumber - 分页号码,从0开始
     * @param pageSize - 分页大小
     * @param searchCode - 查询条件:应用代码，精准匹配
     * @param searchName - 查询条件:应用名称，模糊匹配
     * @param sort - 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
*/
export const listApplications = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications'
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
export const listApplications_RAW_URL = function() {
  return '/api/applications'
}
export const listApplications_TYPE = function() {
  return 'get'
}
export const listApplicationsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications'
  if (parameters['pageNumber'] !== undefined) {
    queryParameters['pageNumber'] = parameters['pageNumber']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
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
 * request: createApplication
 * url: createApplicationURL
 * method: createApplication_TYPE
 * raw_url: createApplication_RAW_URL
 * @param body - 实体参数
 */
export const createApplication = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications'
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
export const createApplication_RAW_URL = function() {
  return '/api/applications'
}
export const createApplication_TYPE = function() {
  return 'post'
}
export const createApplicationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications'
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
成功：code=200，data对象为列表，失败：code!=200
* request: listAllApplications
* url: listAllApplicationsURL
* method: listAllApplications_TYPE
* raw_url: listAllApplications_RAW_URL
     * @param searchCode - 查询条件:应用代码，精准匹配
     * @param searchName - 查询条件:应用名称，模糊匹配
*/
export const listAllApplications = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications/all'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAllApplications_RAW_URL = function() {
  return '/api/applications/all'
}
export const listAllApplications_TYPE = function() {
  return 'get'
}
export const listAllApplicationsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications/all'
  if (parameters['searchCode'] !== undefined) {
    queryParameters['search_code'] = parameters['searchCode']
  }
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
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
 * request: loadApplicationById
 * url: loadApplicationByIdURL
 * method: loadApplicationById_TYPE
 * raw_url: loadApplicationById_RAW_URL
 * @param id - ID
 */
export const loadApplicationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications/{id}'
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
export const loadApplicationById_RAW_URL = function() {
  return '/api/applications/{id}'
}
export const loadApplicationById_TYPE = function() {
  return 'get'
}
export const loadApplicationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications/{id}'
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
 * request: updateApplication
 * url: updateApplicationURL
 * method: updateApplication_TYPE
 * raw_url: updateApplication_RAW_URL
 * @param body - 实体参数
 * @param id - ID
 */
export const updateApplication = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications/{id}'
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
export const updateApplication_RAW_URL = function() {
  return '/api/applications/{id}'
}
export const updateApplication_TYPE = function() {
  return 'put'
}
export const updateApplicationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications/{id}'
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
 * request: deleteApplicationById
 * url: deleteApplicationByIdURL
 * method: deleteApplicationById_TYPE
 * raw_url: deleteApplicationById_RAW_URL
 * @param id - ID
 */
export const deleteApplicationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/applications/{id}'
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
export const deleteApplicationById_RAW_URL = function() {
  return '/api/applications/{id}'
}
export const deleteApplicationById_TYPE = function() {
  return 'delete'
}
export const deleteApplicationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/applications/{id}'
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
     * @param searchOrganizationIds - 查询条件:所属组织机构ID数组，精确匹配
     * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
     * @param searchParentId - 查询条件:上级部门ID，精确匹配
     * @param searchParentIds - 查询条件:上级部门ID数组，精确匹配
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
  if (parameters['searchOrganizationIds'] !== undefined) {
    queryParameters['search_organizationIds'] = parameters['searchOrganizationIds']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentIds'] !== undefined) {
    queryParameters['search_parentIds'] = parameters['searchParentIds']
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
  if (parameters['searchOrganizationIds'] !== undefined) {
    queryParameters['search_organizationIds'] = parameters['searchOrganizationIds']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchParentId'] !== undefined) {
    queryParameters['search_parentId'] = parameters['searchParentId']
  }
  if (parameters['searchParentIds'] !== undefined) {
    queryParameters['search_parentIds'] = parameters['searchParentIds']
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
 * @param searchName - 查询条件:部门名称，精确匹配
 * @param searchOrganizationId - 查询条件:组织机构id，精确匹配
 */
export const departmentsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
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
  if (parameters['searchName'] !== undefined) {
    queryParameters['search_name'] = parameters['searchName']
  }
  if (parameters['searchOrganizationId'] !== undefined) {
    queryParameters['search_organizationId'] = parameters['searchOrganizationId']
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
 * 成功：code=200，失败：code!=200
 * request: disableDepartmentById
 * url: disableDepartmentByIdURL
 * method: disableDepartmentById_TYPE
 * raw_url: disableDepartmentById_RAW_URL
 * @param id - 部门id
 */
export const disableDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}/disable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const disableDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}/disable'
}
export const disableDepartmentById_TYPE = function() {
  return 'put'
}
export const disableDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}/disable'
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
 * request: enableDepartmentById
 * url: enableDepartmentByIdURL
 * method: enableDepartmentById_TYPE
 * raw_url: enableDepartmentById_RAW_URL
 * @param id - 部门id
 */
export const enableDepartmentById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/departments/{id}/enable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const enableDepartmentById_RAW_URL = function() {
  return '/api/departments/{id}/enable'
}
export const enableDepartmentById_TYPE = function() {
  return 'put'
}
export const enableDepartmentByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/departments/{id}/enable'
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
 * 成功：code=200，data对象为包含字典类型条目信息的列表，失败：code!=200
 * request: listDictionaryTypeItemsByCode
 * url: listDictionaryTypeItemsByCodeURL
 * method: listDictionaryTypeItemsByCode_TYPE
 * raw_url: listDictionaryTypeItemsByCode_RAW_URL
 * @param code - 字典类型代码，逗号分隔
 */
export const listDictionaryTypeItemsByCode = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/dictionaryTypes/{code}/items'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{code}', `${parameters['code']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDictionaryTypeItemsByCode_RAW_URL = function() {
  return '/api/dictionaryTypes/{code}/items'
}
export const listDictionaryTypeItemsByCode_TYPE = function() {
  return 'get'
}
export const listDictionaryTypeItemsByCodeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/dictionaryTypes/{code}/items'
  path = path.replace('{code}', `${parameters['code']}`)
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
 * 成功：code=200，data对象为包含枚举信息的列表，失败：code!=200
 * request: listEnumItemsByType
 * url: listEnumItemsByTypeURL
 * method: listEnumItemsByType_TYPE
 * raw_url: listEnumItemsByType_RAW_URL
 * @param type - 枚举类型代码
 */
export const listEnumItemsByType = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/enums/{type}/items'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listEnumItemsByType_RAW_URL = function() {
  return '/api/enums/{type}/items'
}
export const listEnumItemsByType_TYPE = function() {
  return 'get'
}
export const listEnumItemsByTypeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/enums/{type}/items'
  path = path.replace('{type}', `${parameters['type']}`)
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
  let path = '/api/interfaces/tree'
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
  return '/api/interfaces/tree'
}
export const apiTree_TYPE = function() {
  return 'get'
}
export const apiTreeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/interfaces/tree'
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
     * @param searchParentId - 查询条件:上级组织机构ID，精确匹配
     * @param searchParentIds - 查询条件:上级组织机构ID数组，精确匹配
     * @param searchParentName - 查询条件:上级组织机构名称，模糊匹配
     * @param searchSpecificCode - 查询条件:组织机构代码，精确匹配
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
  if (parameters['searchParentIds'] !== undefined) {
    queryParameters['search_parentIds'] = parameters['searchParentIds']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchSpecificCode'] !== undefined) {
    queryParameters['search_specificCode'] = parameters['searchSpecificCode']
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
  if (parameters['searchParentIds'] !== undefined) {
    queryParameters['search_parentIds'] = parameters['searchParentIds']
  }
  if (parameters['searchParentName'] !== undefined) {
    queryParameters['search_parentName'] = parameters['searchParentName']
  }
  if (parameters['searchSpecificCode'] !== undefined) {
    queryParameters['search_specificCode'] = parameters['searchSpecificCode']
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
 */
export const organizationsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/tree'
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
 * 成功：code=200，失败：code!=200
 * request: disableOrganizationById
 * url: disableOrganizationByIdURL
 * method: disableOrganizationById_TYPE
 * raw_url: disableOrganizationById_RAW_URL
 * @param id - 组织机构id
 */
export const disableOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}/disable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const disableOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}/disable'
}
export const disableOrganizationById_TYPE = function() {
  return 'put'
}
export const disableOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}/disable'
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
 * request: enableOrganizationById
 * url: enableOrganizationByIdURL
 * method: enableOrganizationById_TYPE
 * raw_url: enableOrganizationById_RAW_URL
 * @param id - 组织机构id
 */
export const enableOrganizationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/organizations/{id}/enable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const enableOrganizationById_RAW_URL = function() {
  return '/api/organizations/{id}/enable'
}
export const enableOrganizationById_TYPE = function() {
  return 'put'
}
export const enableOrganizationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/organizations/{id}/enable'
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
     * @param searchApplicationId - 查询条件:应用id，精确匹配
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
 * @param searchApplicationId - 查询条件:应用id，精确匹配
 * @param searchType - 查询条件:权限类型，精确匹配
 * @param searchTypes - 查询条件:权限类型，精确匹配
 */
export const listPermissionsTree = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/permissions/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchTypes'] !== undefined) {
    queryParameters['search_types'] = parameters['searchTypes']
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
  }
  if (parameters['searchType'] !== undefined) {
    queryParameters['search_type'] = parameters['searchType']
  }
  if (parameters['searchTypes'] !== undefined) {
    queryParameters['search_types'] = parameters['searchTypes']
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
  let path = '/api/resources'
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
  return '/api/resources'
}
export const listResources_TYPE = function() {
  return 'get'
}
export const listResourcesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources'
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
  let path = '/api/resources'
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
  return '/api/resources'
}
export const createResource_TYPE = function() {
  return 'post'
}
export const createResourceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 成功：code=200，data对象为资源列表，失败：code!=200
 * request: listAllResources
 * url: listAllResourcesURL
 * method: listAllResources_TYPE
 * raw_url: listAllResources_RAW_URL
 * @param searchCode - 查询条件:资源代码，等于
 * @param searchDescription - 查询条件:资源描述，等于
 * @param searchName - 查询条件:资源名称，模糊匹配
 * @param searchService - 查询条件:资源ID，等于
 * @param searchSortIndex - 查询条件:排序索引，等于
 * @param searchType - 查询条件:资源类型，1：Spring Cloud资源，2：HTTP资源，等于
 * @param searchUrl - 查询条件:URL地址，等于
 */
export const listAllResources = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/resources/all'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAllResources_RAW_URL = function() {
  return '/api/resources/all'
}
export const listAllResources_TYPE = function() {
  return 'get'
}
export const listAllResourcesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources/all'
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
  let path = '/api/resources/{id}'
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
  return '/api/resources/{id}'
}
export const loadResourceById_TYPE = function() {
  return 'get'
}
export const loadResourceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources/{id}'
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
  let path = '/api/resources/{id}'
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
  return '/api/resources/{id}'
}
export const updateResource_TYPE = function() {
  return 'put'
}
export const updateResourceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources/{id}'
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
  let path = '/api/resources/{id}'
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
  return '/api/resources/{id}'
}
export const deleteResourceById_TYPE = function() {
  return 'delete'
}
export const deleteResourceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/resources/{id}'
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
     * @param searchApplicationId - 查询条件:应用id，精准匹配
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
* 排序属性：code,name,description,level.code,level.name,isSystem,isEnable,createTime
成功：code=200，data对象为角色列表，失败：code!=200
* request: listAllRoles
* url: listAllRolesURL
* method: listAllRoles_TYPE
* raw_url: listAllRoles_RAW_URL
     * @param searchApplicationId - 查询条件:应用id，精准匹配
     * @param searchCode - 查询条件:角色代码，模糊匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDescription - 查询条件:角色描述，模糊匹配
     * @param searchIsEnable - 查询条件:是否可用，，1：是，0：否，精确匹配
     * @param searchIsSystem - 查询条件:是否系统角色，1：是，0：否，精确匹配
     * @param searchLevel - 查询条件:角色级别，对应角色字典，精确匹配
     * @param searchLevelName - 查询条件:角色级别名称，模糊匹配
     * @param searchName - 查询条件:角色名称，模糊匹配
*/
export const listAllRoles = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/all'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listAllRoles_RAW_URL = function() {
  return '/api/roles/all'
}
export const listAllRoles_TYPE = function() {
  return 'get'
}
export const listAllRolesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/all'
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
 * request: disableRoleById
 * url: disableRoleByIdURL
 * method: disableRoleById_TYPE
 * raw_url: disableRoleById_RAW_URL
 * @param id - 角色id
 */
export const disableRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}/disable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const disableRoleById_RAW_URL = function() {
  return '/api/roles/{id}/disable'
}
export const disableRoleById_TYPE = function() {
  return 'put'
}
export const disableRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}/disable'
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
 * request: enableRoleById
 * url: enableRoleByIdURL
 * method: enableRoleById_TYPE
 * raw_url: enableRoleById_RAW_URL
 * @param id - 角色id
 */
export const enableRoleById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/roles/{id}/enable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const enableRoleById_RAW_URL = function() {
  return '/api/roles/{id}/enable'
}
export const enableRoleById_TYPE = function() {
  return 'put'
}
export const enableRoleByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/roles/{id}/enable'
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
 * 成功：code=200，失败：code!=200
 * request: userChangePassword
 * url: userChangePasswordURL
 * method: userChangePassword_TYPE
 * raw_url: userChangePassword_RAW_URL
 * @param body - 用户修改密码视图实体
 */
export const userChangePassword = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/user/change-password'
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
export const userChangePassword_RAW_URL = function() {
  return '/api/user/change-password'
}
export const userChangePassword_TYPE = function() {
  return 'put'
}
export const userChangePasswordURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/user/change-password'
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
     * @param searchApplicationId - 查询条件:应用id，精确匹配
     * @param searchCreateDateBegin - 查询条件:创建日期起，格式yyyy-mm-dd
     * @param searchCreateDateEnd - 查询条件:创建日期止，格式yyyy-mm-dd
     * @param searchDepartmentId - 查询条件:所属部门ID，精确匹配
     * @param searchDepartmentIds - 查询条件:所属部门ID数组，精确匹配
     * @param searchDepartmentName - 查询条件:所属部门名称，模糊匹配
     * @param searchEmail - 查询条件:邮箱，模糊匹配
     * @param searchGender - 查询条件:性别代码，对应性别字典，精确匹配
     * @param searchIsEnable - 查询条件:是否启用，0：否，1：是，精确匹配
     * @param searchMobile - 查询条件:手机号码，模糊匹配
     * @param searchName - 查询条件:姓名，模糊查询
     * @param searchOrganizationId - 查询条件:所属组织机构ID，精确匹配
     * @param searchOrganizationIds - 查询条件:所属组织机构ID数组，精确匹配
     * @param searchOrganizationName - 查询条件:所属组织机构名称，模糊匹配
     * @param searchRoleId - 查询条件:角色id，精确匹配
     * @param searchTitle - 查询条件:岗位代码，对应岗位字典，精确匹配
     * @param searchUsername - 查询条件:用户名称，模糊查询
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
  if (parameters['searchDepartmentIds'] !== undefined) {
    queryParameters['search_departmentIds'] = parameters['searchDepartmentIds']
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
  if (parameters['searchOrganizationIds'] !== undefined) {
    queryParameters['search_organizationIds'] = parameters['searchOrganizationIds']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchRoleId'] !== undefined) {
    queryParameters['search_roleId'] = parameters['searchRoleId']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
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
  if (parameters['searchApplicationId'] !== undefined) {
    queryParameters['search_applicationId'] = parameters['searchApplicationId']
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
  if (parameters['searchDepartmentIds'] !== undefined) {
    queryParameters['search_departmentIds'] = parameters['searchDepartmentIds']
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
  if (parameters['searchOrganizationIds'] !== undefined) {
    queryParameters['search_organizationIds'] = parameters['searchOrganizationIds']
  }
  if (parameters['searchOrganizationName'] !== undefined) {
    queryParameters['search_organizationName'] = parameters['searchOrganizationName']
  }
  if (parameters['searchRoleId'] !== undefined) {
    queryParameters['search_roleId'] = parameters['searchRoleId']
  }
  if (parameters['searchTitle'] !== undefined) {
    queryParameters['search_title'] = parameters['searchTitle']
  }
  if (parameters['searchUsername'] !== undefined) {
    queryParameters['search_username'] = parameters['searchUsername']
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
 * request: batchDeleteUserByIds
 * url: batchDeleteUserByIdsURL
 * method: batchDeleteUserByIds_TYPE
 * raw_url: batchDeleteUserByIds_RAW_URL
 * @param body - 用户id数组
 */
export const batchDeleteUserByIds = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/batch-delete'
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
export const batchDeleteUserByIds_RAW_URL = function() {
  return '/api/users/batch-delete'
}
export const batchDeleteUserByIds_TYPE = function() {
  return 'post'
}
export const batchDeleteUserByIdsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/batch-delete'
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
 * request: batchDisableUserByIds
 * url: batchDisableUserByIdsURL
 * method: batchDisableUserByIds_TYPE
 * raw_url: batchDisableUserByIds_RAW_URL
 * @param body - 用户id数组
 */
export const batchDisableUserByIds = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/batch-disable'
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
export const batchDisableUserByIds_RAW_URL = function() {
  return '/api/users/batch-disable'
}
export const batchDisableUserByIds_TYPE = function() {
  return 'put'
}
export const batchDisableUserByIdsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/batch-disable'
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
 * request: batchEnableUserByIds
 * url: batchEnableUserByIdsURL
 * method: batchEnableUserByIds_TYPE
 * raw_url: batchEnableUserByIds_RAW_URL
 * @param body - 用户id数组
 */
export const batchEnableUserByIds = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/batch-enable'
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
export const batchEnableUserByIds_RAW_URL = function() {
  return '/api/users/batch-enable'
}
export const batchEnableUserByIds_TYPE = function() {
  return 'put'
}
export const batchEnableUserByIdsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/batch-enable'
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
/**
 * 成功：code=0，data对象为结果数据，失败：code!=0
 * request: disableUserById
 * url: disableUserByIdURL
 * method: disableUserById_TYPE
 * raw_url: disableUserById_RAW_URL
 * @param id - 用户ID
 */
export const disableUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}/disable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const disableUserById_RAW_URL = function() {
  return '/api/users/{id}/disable'
}
export const disableUserById_TYPE = function() {
  return 'put'
}
export const disableUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}/disable'
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
 * request: enableUserById
 * url: enableUserByIdURL
 * method: enableUserById_TYPE
 * raw_url: enableUserById_RAW_URL
 * @param id - 用户ID
 */
export const enableUserById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}/enable'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const enableUserById_RAW_URL = function() {
  return '/api/users/{id}/enable'
}
export const enableUserById_TYPE = function() {
  return 'put'
}
export const enableUserByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}/enable'
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
 * 成功：code=200，data对象为结果数据，失败：code!=0
 * request: resetUserPasswordById
 * url: resetUserPasswordByIdURL
 * method: resetUserPasswordById_TYPE
 * raw_url: resetUserPasswordById_RAW_URL
 * @param id - 用户ID
 */
export const resetUserPasswordById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/users/{id}/reset-password'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const resetUserPasswordById_RAW_URL = function() {
  return '/api/users/{id}/reset-password'
}
export const resetUserPasswordById_TYPE = function() {
  return 'put'
}
export const resetUserPasswordByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/users/{id}/reset-password'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}