/**
 * 登录相关接口
 */
import qs from 'qs';
import { request, getDomain } from '@/api';

export const loginByUsername = (username, password) => {
  const data = {
    username: username,
    password: password,
    grant_type: 'password',
    client_id: process.env.VUE_APP_CLIENT_ID,
    client_secret: process.env.VUE_APP_CLIENT_SECRET
  };
  let body;
  return request('post', getDomain() + process.env.VUE_APP_TOKEN_URL, body, data, {});
};

export const logout = token => {
  const data = {
    access_token: token,
    client_id: process.env.VUE_APP_CLIENT_ID,
    client_secret: process.env.VUE_APP_CLIENT_SECRET
  };
  let body;
  return request('delete', getDomain() + process.env.VUE_APP_TOKEN_URL, body, data, {});
};

/**
 * 授权码模式注册客户端登录方法
 */
export const clientAuthorize = () => {
  const data = {
    client_id: process.env.VUE_APP_CLIENT_ID,
    redirect_uri: getRedirectUri(),
    response_type: 'code'
  };
  window.location.href =
    process.env.VUE_APP_AUTHORIZATION_URI + process.env.VUE_APP_AUTHORIZATION_AUTHORIZE_URL + '?' + qs.stringify(data);
};

/**
 * 根据授权码获取token
 * @param {string} code 授权码
 * @returns token请求
 */
export const loginByAuthorizationCode = code => {
  const data = {
    grant_type: 'authorization_code',
    client_id: process.env.VUE_APP_CLIENT_ID,
    client_secret: process.env.VUE_APP_CLIENT_SECRET,
    redirect_uri: getRedirectUri(),
    code: code
  };
  return request('post', process.env.VUE_APP_TOKEN_URL, null, data, {});
};

/**
 * 获取授权码模式回调地址
 * @returns 授权码模式回调地址
 */
function getRedirectUri() {
  console.log('环境变量', process.env.VUE_APP_AUTHORIZATION_REDIRECT_URI);
  return process.env.VUE_APP_AUTHORIZATION_REDIRECT_URI || window.location.origin + '/user/login';
}
