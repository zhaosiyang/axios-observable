import {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from 'axios';
import {AxiosObservable} from "./axios-observable.interface";
import {promiseToObservable} from "./promise-to-observable";

class Axios {

  constructor(private axiosInstance: AxiosInstance) {
  }

  static defaults: AxiosRequestConfig = axios.defaults;
  static interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } = axios.interceptors;

  static request<T=any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.request(config));
  }

  static get<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.get(url, config));
  }

  static post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.post(url, data, config));
  }

  static put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.put(url, data, config));
  }

  static patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.patch(url, data, config));
  }

  static delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.delete(url, config));
  }

  static head<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(axios.head(url, config));
  }

  static create(config: AxiosRequestConfig): Axios {
    return new Axios(axios.create(config));
  }

  request<T=any>(config: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.request(config));
  }

  get<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.get(url, config));
  }

  head<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.head(url, config));
  }

  post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.post(url, data, config));
  }

  put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.put(url, data, config));
  }

  patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.patch(url, data, config));
  }

  delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return promiseToObservable(this.axiosInstance.delete(url, config));
  }

  get defaults() {
    return this.axiosInstance.defaults;
  }
}

export default Axios;
export {Axios};