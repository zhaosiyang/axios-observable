import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';

export type AxiosObservable<T> = Observable<AxiosResponse<T>>
