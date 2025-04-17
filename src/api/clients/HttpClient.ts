import type { EduRequestOptions, EduHttpClientOptions } from './types';

export class HttpClient {
  httpProvider: any;
  baseUrl: string;

  constructor(options: EduHttpClientOptions) {
    if (!options.baseURL) {
      throw Error('[HttpClient]: Base url is empty');
    }
    this.httpProvider = options.httpProvider;
    this.baseUrl = options.baseURL;
  }
  // constructor(options: EduHttpClientOptions) {
  //   if (!options.baseURL) {
  //     throw Error('[HttpClient]: Base url is empty');
  //   }
  //   this.httpProvider = options.httpProvider;
  //   this.baseUrl = options.baseURL;
  // }

  buildRequest(options: EduRequestOptions = {}) {
    let headers = {
      'Content-Type': 'application/json',
    };
    if (options.headers) {
      headers = {
        ...headers,
        ...options.headers,
      };
    }

    return {
      baseUrl: this.baseUrl,
      headers,
      ...options,
    };
  }
  checkPath(path: string) {
    if (!path.startsWith('/')) {
      throw Error(`Путь должен начинаться с /: ${path}`);
    }
  }

  async get(path: string, options?: EduRequestOptions) {
    this.checkPath(path);
    return this.httpProvider.get(path, this.buildRequest(options));
  }

  async post(path: string, options: EduRequestOptions) {
    this.checkPath(path);
    return this.httpProvider.post(path, this.buildRequest(options));
  }

  async put(path: string, options: EduRequestOptions) {
    this.checkPath(path);
    return this.httpProvider.put(path, this.buildRequest(options));
  }

  async remove(path: string, options: EduRequestOptions) {
    this.checkPath(path);
    return this.httpProvider.delete(path, this.buildRequest(options));
  }
}
