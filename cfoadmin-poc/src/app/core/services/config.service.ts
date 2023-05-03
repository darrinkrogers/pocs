import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from 'src/app/core/models/config.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public configModel$ = this.http.get<ConfigModel>('./assets/config.json').pipe(shareReplay(1));

    constructor(public http: HttpClient) {}
}
