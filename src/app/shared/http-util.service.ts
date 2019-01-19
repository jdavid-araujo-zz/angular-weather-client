import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  base_api_weather: string;

  constructor(private http: HttpClient) {
    this.base_api_weather = environment.base_api_weather;
   }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, */*'
    };
    return new HttpHeaders(headersConfig);
  }

  post(path: string, body: Object = {} ): Observable<any> {
    return this.http.post(
      this.base_api_weather + path,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      this.base_api_weather + path,
      {
        params: params
      })
  }
}
