import { AxiosPromise } from 'axios'
import { from } from 'rxjs'
import { IAxiosObservable } from './axios-observable.interface'

export const promiseToObservable = <T = any>(
  promise: AxiosPromise<T>
): IAxiosObservable<T> => {
  return from(promise)
}
