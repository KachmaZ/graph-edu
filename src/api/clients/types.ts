import type { OutgoingHttpHeader } from 'node:http';

export interface EduHttpClientOptions {
  httpProvider: any;
  baseURL: string;
}

export interface EduRequestOptions {
  headers?: {
    [header: string]: OutgoingHttpHeader;
  };
  method?: 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE';
  data?: any;
}
