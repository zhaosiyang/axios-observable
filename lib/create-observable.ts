import {Observable} from 'rxjs';
import axios, {AxiosPromise, AxiosRequestConfig, CancelTokenSource} from 'axios';
import {AxiosObservable} from './axios-observable.interface';

export function createObservable<T>(promiseFactory: (...args: any[]) => AxiosPromise<T>, ...args: any[]): AxiosObservable<T> {
  let config: AxiosRequestConfig = args[args.length - 1];
  config = config ? {...config} : {};
  args[args.length - 1] = config;

  let cancelSource: CancelTokenSource;
  const hasCancelToken: boolean = !!config.cancelToken;
  if (hasCancelToken) {
    console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
  }

  const observable: AxiosObservable<T> = new Observable((subscriber: any) => {

    if (!hasCancelToken) {
      cancelSource = axios.CancelToken.source();
      config.cancelToken = cancelSource.token;
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
      if (cancelSource) {
        cancelSource.cancel();
      }
      _unsubscribe();
    };
    return subscription;
  };

  return observable;

}
