/**
 * 登录相关接口
 */
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
