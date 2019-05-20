import {Observable} from 'rxjs';
import {AxiosPromise} from 'axios';
import {AxiosObservable} from './axios-observable.interface';

export function createColdObservableFromHotPromise<T>(promiseFactory: (...args: any[]) => AxiosPromise<T>, ...args: any[]): AxiosObservable<T> {
  return new Observable(subscriber => {
    promiseFactory(...args).then(response => {
      subscriber.next(response);
      subscriber.complete();
    })
      .catch(error => subscriber.error(error));
  });
}
