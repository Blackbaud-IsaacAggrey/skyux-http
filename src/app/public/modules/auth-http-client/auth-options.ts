import {
  HttpHeaders,
  HttpParams
} from '@angular/common/http';

import {
  HttpObserve
} from '@angular/common/http/src/client';

import {
  SKY_AUTH_PARAM_AUTH,
  SKY_AUTH_PARAM_PERMISSION_SCOPE
} from './auth-interceptor-params';

/**
 * Provides the standard options expected by Angular's HttpClient methods along with
 * additional options for making requests to services protected by Blackbaud ID.
 * @param options
 */
export function skyAuthHttpOptions(options?: {
  body?: any,
  headers?: HttpHeaders,
  observe?: HttpObserve,
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean
}): any {
  options = options || {};
  options.params = options.params || new HttpParams();

  options.params = options.params.set(SKY_AUTH_PARAM_AUTH, 'true');

  if (options.permissionScope) {
    options.params = options.params.set(SKY_AUTH_PARAM_PERMISSION_SCOPE, options.permissionScope);
  }

  delete options.permissionScope;

  return options;
}

/**
 * Provides the standard options expected by Angular's HttpClient methods along with
 * additional options for making requests to services protected by Blackbaud ID and
 * ensures that the subsequent call to `HttpClient` returns the generic type passed
 * to it by enforcing a `responseType` of `'json'`.
 * @param options
 */
export function skyAuthHttpJsonOptions(options?: {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType?: 'json',
  withCredentials?: boolean
}): {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType?: 'json',
  withCredentials?: boolean
} {
  options = options || {};

  options.observe = 'body';
  options.responseType = 'json';

  return skyAuthHttpOptions(options);
}

/**
 * Provides the standard options expected by Angular's HttpClient methods along with
 * additional options for making requests to services protected by Blackbaud ID and
 * ensures that the subsequent call to `HttpClient` returns the generic type passed
 * to it by enforcing a `responseType` of `'text'`.
 * @param options
 */
export function skyAuthHttpTextOptions(options?: {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType?: 'text',
  withCredentials?: boolean
}): {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType: 'text',
  withCredentials?: boolean
} {
  options = options || {};

  options.observe = 'body';
  options.responseType = 'text';

  return skyAuthHttpOptions(options);
}

/**
 * Provides the standard options expected by Angular's HttpClient methods along with
 * additional options for making requests to services protected by Blackbaud ID and
 * ensures that the subsequent call to `HttpClient` returns the generic type passed
 * to it by enforcing a `responseType` of `'blob'`.
 * @param options
 */
export function skyAuthHttpBlobOptions(options?: {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType?: 'blob',
  withCredentials?: boolean
}): {
  body?: any,
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  permissionScope?: string,
  responseType: 'blob',
  withCredentials?: boolean
} {
  options = options || {};

  options.observe = 'body';
  options.responseType = 'blob';

  return skyAuthHttpOptions(options);
}
