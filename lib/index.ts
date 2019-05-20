import axios, {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {AxiosObservable} from './axios-observable.interface';
import {createColdObservableFromHotPromise} from './create-cold-observable-from-hot-promise';

class Axios {

  static defaults: AxiosRequestConfig = axios.defaults;
  static interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } = axios.interceptors;

  constructor(private axiosInstance: AxiosInstance) {
  }

  get defaults() {
    return this.axiosInstance.defaults;
  }

  static request<T = any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise(axios.request, config)
  }

  static get<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.get, url, config);
  }

  static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.post, url, data, config);
  }

  static put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.put, url, data, config);
  }

  static patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.patch, url, data, config);
  }

  static delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.delete, url, config);
  }

  static head<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(axios.head, url, config);
  }

  static create(config: AxiosRequestConfig): Axios {
    return new Axios(axios.create(config));
  }

  request<T = any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise(this.axiosInstance.request, config);
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.get, url, config);
  }

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.head, url, config);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.post, url, data, config);
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.put, url, data, config);
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.patch, url, data, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createColdObservableFromHotPromise<T>(this.axiosInstance.delete, url, config);
  }
}

export default Axios;
export {Axios};
