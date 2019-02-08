import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'

export interface IAxiosObservable<T> extends Observable<AxiosResponse<T>> {}
