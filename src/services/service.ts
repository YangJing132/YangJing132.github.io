import xFetch from 'superagent';
import { stringify } from 'querystring';

/**
 * API path prefix
 * TODO: restore before publish!!!
 * @constant
 * @type {string}
 * @default "/api"
 */
const server = process.env.API_SERVER || '/api';
function resolveUrl(path: string, micro = server): string {
  const url: string = `${micro}${path}`;
  return url;
}

// TODO 跳转到登录
function jumpToLogin() {
  const queryString = stringify({
    redirectUrl: process.env.REACT_APP_HOME_URL,
  });
  window.location.href = `${process.env.REACT_APP_HOME_URL}/api/login?${queryString}`;
}

function handleError(res: { body: string; statusCode: number }) {
  let data;
  let error = null;

  if (!res || !res.body) {
    return new Error('网络异常，请检查您的网络设置');
  }

  // 401跳到登录页面
  if (res.statusCode === 401) {
    jumpToLogin();
    return '';
  }

  if (typeof res.body === 'object') {
    data = res.body;
  } else {
    try {
      data = JSON.parse(res.body);
    } catch (ex) {
      return new Error(res.statusCode === 500 ? '服务器异常，请稍后再试' : '网络异常，请稍后再试');
    }
  }

  error = new Error(data.message || '服务器异常，请稍后再试!');
  // @ts-ignore
  error.code = data.code;
  // @ts-ignore
  error.data = data.data || data.message;

  return error;
}
// @ts-ignore
function api(fn) {
  // @ts-ignore
  return function(params) {
    const req = fn(params);

    return new Promise((res, rej) => {
      // @ts-ignore
      req.end((err, result) => {
        if (result.headers['content-type'].indexOf('application/octet-stream') !== -1) {
          res(result.body);
        } else if (err || !result.body.success) {
          rej(handleError(result));
        } else {
          const data = result.body.data !== null ? result.body.data : '';
          res(data);
        }
      });
    });
  };
}
// @ts-ignore
export const request = (method, url, data, options: any = {}) => {
  // options.micro 微服务扩展前缀
  const req = xFetch(method, resolveUrl(url, options.micro));

  // 设置request头请求
  if (options.headers) {
    // eslint-disable-next-line
    Object.keys(options.headers).map((key): void => {
      if (key === 'responseType') {
        req.responseType(options.headers[key]);
      } else {
        req.set(key, options.headers[key]);
      }
    });
  }

  if (data) {
    if (options.needQuery === true || method === 'GET') {
      req.query(data);
    } else {
      req.send(data);
    }
  }
  return req;
};

// @ts-ignore
export default api(({ method, url, data, options }) => request(method, url, data, options));
