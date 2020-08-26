import fetch from 'dva/fetch';

function parseJSON(response: any): any {
  return response.json();
}

type IError = {
  response?: any;
} & Error;

function checkStatus(response: any): IError {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error: IError = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url: string, options: any): any {
  // @ts-ignore
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => err);
}
