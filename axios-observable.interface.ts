import {AxiosResponse} from "axios";
import {Observable} from "rxjs/index";

export interface AxiosObservable<T> extends Observable<AxiosResponse<T>> {}