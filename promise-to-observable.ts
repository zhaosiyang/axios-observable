import {AxiosPromise, AxiosResponse} from "axios";
import {Observable, Observer} from "rxjs/index";
import {AxiosObservable} from "./axios-observable.interface";

export const promiseToObservable = <T = any>(promise: AxiosPromise<T>): AxiosObservable<T> => {
  return Observable.create((observer: Observer) => {
    return promise
      .then((response: AxiosResponse<T>) => {
        observer.next(response);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      })
  })
};