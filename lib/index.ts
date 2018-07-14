import {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from 'axios';
import {AxiosObservable} from "./axios-observable.interface";
import {promiseToObservable} from "./promise-to-observable";

export class Axios {

  constructor(private axiosInstance: AxiosInstance) {
  }

  static defaults: AxiosRequestConfig = axios.defaults;
  static interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } = axios.interceptors;

  static request<T=any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.request(...arguments));
  }

  static get<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.get(...arguments));
  }

  static post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.post(...arguments));
  }

  static put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.put(...arguments));
  }

  static patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.patch(...arguments));
  }

  static delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.delete(...arguments));
  }

  static head<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.head(...arguments));
  }

  static create(config: AxiosRequestConfig): Axios {
    return new Axios(axios.create(config));
  }

  request<T=any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.request(...arguments));
  }

  // TODO verify config undefined
  get<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.get(...arguments));
  }

  head<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.head(...arguments));
  }

  post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.post(...arguments));
  }

  put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.put(...arguments));
  }

  patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.patch(...arguments));
  }

  delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.delete(...arguments));
  }

  get defaults() {
    return this.axiosInstance.defaults;
  }
}