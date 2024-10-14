import {Observable} from 'rxjs';
import {AxiosPromise, AxiosRequestConfig} from 'axios';
import {AxiosObservable} from './axios-observable.interface';

export function createObservable<T>(promiseFactory: (...args: any[]) => AxiosPromise<T>, ...args: any[]): AxiosObservable<T> {
  let config: AxiosRequestConfig = args[args.length - 1];
  config = config ? {...config} : {};
  args[args.length - 1] = config;

  let abortController: AbortController;
  const hasCancelToken: boolean = !!config.cancelToken;
  const hasSignal: boolean = !!config.signal;
  if (hasCancelToken) {
    console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
  }
  if (hasSignal) {
    console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
  }

  const observable: AxiosObservable<T> = new Observable((subscriber: any) => {

    if (!hasSignal) {
      abortController = new AbortController();
      config.signal = abortController.signal;
    }

    promiseFactory(...args).then(response => {
      subscriber.next(response);
      subscriber.complete();
    })
        .catch(error => subscriber.error(error));
  });

  const _subscribe = observable.subscribe.bind(observable);

  observable.subscribe = (...args2: any[]) => {

    const subscription = _subscribe(...args2);

    const _unsubscribe = subscription.unsubscribe.bind(subscription);

    subscription.unsubscribe = () => {
      if (abortController) {
        abortController.abort();
      }
      _unsubscribe();
    };
    return subscription;
  };

  return observable;

}
