import pathToRgx from 'path-to-regexp';

import apis from './apis';

import xFetch from './service';

type APIS = typeof apis;

type ApiCollection = {
  [P in keyof APIS]: {
    [F in keyof APIS[P]]: (data?: any) => Promise<any>;
  };
};

const apiCollection: ApiCollection = {} as ApiCollection;

function pathRgxToUrl(path: string, data: any): string {
  if (!data) {
    return path;
  }
  const toPath = pathToRgx.compile(path);
  // compile '/:id => /1212'
  return toPath(data);
}

const apiValues = Object.values(apis);

// 包一层业务名称
Object.keys(apis).map((domain, index) => {
  const vals = apiValues[index];

  apiCollection[domain] = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in vals) {
    if (Object.prototype.hasOwnProperty.call(vals, key)) {
      apiCollection[domain][key] = (data: any): any => {
        const api = vals[key];
        const params = {
          url: pathRgxToUrl(api.url, data),
          method: api.method,
          options: api.options,
          data,
        };
        return xFetch(params);
      };
    }
  }
  return apiCollection;
});

export default apiCollection;
