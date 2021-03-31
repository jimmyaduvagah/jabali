import {Injectable, EventEmitter} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {BaseModel} from '../base-model/model';
import { HttpSettingsService } from './httpServiceSettings';


export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;



@Injectable()
export class BaseService {

    public _basePath = '';

    constructor(
        public http: HttpClient,
        public _httpSettings: HttpSettingsService) {
    }

    public getUrl(params?: string) {
        if (typeof params === 'undefined') {
            return this._httpSettings.getBaseUrl() + this._basePath;
        } else {
            return this._httpSettings.getBaseUrl() + params;
        }
    }

    // public getList(params?: Object): Observable<any> {
    //     return this.http.get(this.getUrl())
    // }

    // public get(id): Observable<any> {
    //     return this.http.get(this.getUrl() + id + '/')
    // }

    // // new
    // public post(data): Observable<any> {
    //     return this.http.post(this.getUrl(), data)
    // }

    // // update
    // public put(id, data, params?): Observable<any> {
    //     return this.http.put(this.getUrl() + id + '/', data)
           
    // }

    // public delete(id, params?): Observable<any> {
    //     return this.http.delete(this.getUrl() + id + '/')
    // }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
    }
}
