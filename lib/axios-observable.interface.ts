import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';

export interface AxiosObservable<T> extends Observable<AxiosResponse<T>> {
}
