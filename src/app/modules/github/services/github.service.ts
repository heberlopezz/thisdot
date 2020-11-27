import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Response } from '../interfaces/response.interface';
import { User } from '../interfaces/user.interface';
import { keysToCamel } from '../utils/toCamelCase';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  uriApi = environment.uriApi;

  constructor(private httpClient: HttpClient) {}

  search(param: string): Observable<Response<User>> {
    const params = new HttpParams().set('q', param);
    return this.httpClient
      .get<Response<User>>(this.uriApi + '/search/users', {
        params,
      })
      .pipe(
        map((response) => {
          const res = {
            ...response,
            items: response.items.map((item) => keysToCamel(item) as User),
          };
          return res;
        })
      );
  }
}
