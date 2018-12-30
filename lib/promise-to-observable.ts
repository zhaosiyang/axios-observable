import {AxiosPromise, AxiosResponse} from "axios";
import {from, Observer} from "rxjs/index";
import {AxiosObservable} from "./axios-observable.interface";

export const promiseToObservable = <T = any>(promise: AxiosPromise<T>): AxiosObservable<T> => {
  return from(promise);
};
