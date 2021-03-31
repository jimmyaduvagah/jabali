import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from './SettingsService';
import { AuthToken } from './AuthToken';
import { Router } from '@angular/router';
import { Teacher } from '../base-model/model';

@Injectable()
export class SessionService {

    public authStatus: EventEmitter<any> = new EventEmitter();
    public user: Teacher;
    public userObservable: EventEmitter<any> = new EventEmitter();

    private _basePath = 'api-token-auth/';
    private _apiVersion = '1';


    constructor(private _settings: SettingsService,
                private _authToken: AuthToken,
                private _router: Router
    ) {
    }

    public getToken() {
        return this._authToken.getToken();
    }

    public logout() {
        let toReturn = this._authToken.clearToken();
        this.actionLoggedOut();
        return toReturn;
    }

    public actionLoggedIn() {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/dashboard']);
    }

    public actionLoggedOut() {
        this.authStatus.emit({
            'authenticated': this.isLoggedIn()
        });
        this._router.navigate(['/']);
    }

    public isLoggedIn(): boolean {
        if (this.getToken() != null) {
            return true;
        } else {
            return false;
        }
    }

    public setUser(user: Teacher) {
        this.user = user;
        if (user !== null) {
            this.userObservable.emit(user);
        }
    }
}
