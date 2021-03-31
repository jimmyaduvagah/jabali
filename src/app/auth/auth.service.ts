import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthToken } from "../services/AuthToken";
import { BaseService } from "../services/base_service";
import { HttpSettingsService } from "../services/httpServiceSettings";
import { SessionService } from "../services/SessionService";

@Injectable()

export class AuthService extends BaseService {

    public _basePath = 'api-token-auth/';

    constructor(public http: HttpClient,
                public _httpSettings: HttpSettingsService,
                public _sesstionService: SessionService,
                private _authToken: AuthToken
    ) {
        super(http, _httpSettings);
    }

    

    public login(data: Object){
        return this.http.post(this.getUrl(), data)
    }

    public logout(data: Object) {
        this._authToken.clearToken();
        this._sesstionService.logout();
        return this.http.post(this.getUrl() + 'logout/', data)
    }
}
