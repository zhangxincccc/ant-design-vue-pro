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
    queryUrl = url + '?' + qs.stringify(queryParameters, {
      arrayFormat: 'repeat'
    })
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