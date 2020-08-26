/* tslint:disable */
export const serializeArray = (name: string, valueArr: any): string => {
  const newName = `${name}=`;
  const res: string[] = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of,no-plusplus
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] !== '') {
      res.push(newName + encodeURIComponent(valueArr[i]));
    }
  }
  return res.join('&');
};

export const serializeQuery = (param: any): string => {
  const p: string[] = [];
  Object.keys(param).forEach(k => {
    const v = param[k];
    if (v !== '') {
      p.push(v instanceof Array ? serializeArray(k, v) : `${k}=${encodeURIComponent(v)}`);
    }
  });
  return p.join('&');
};

const curryMethod = (type: any) =>
  // options -> micro 微服务扩展名
  // @ts-ignore
  (url: string, options?, loading?): any => ({
    url,
    method: type,
    options,
    loading: loading || false,
  });

export const POST = curryMethod('POST');
export const GET = curryMethod('GET');
export const PUT = curryMethod('PUT');
export const PATCH = curryMethod('PATCH');
export const DELETE = curryMethod('DELETE');
export const micro = process.env.REACT_APP_API_SERVER_MAIN_PREFIX; // 微服务主站接口地址
