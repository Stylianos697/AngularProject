// src/app/wiki-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiApiService {
  private apiUrl = 'https://www.mediawiki.org/wiki/API:Main_page';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    const params = new HttpParams()
      .set('action', 'query')
      .set('list', 'search')
      .set('format', 'json')
      .set('srsearch', query)
      .set('origin', '*');

    return this.http.get(this.apiUrl, { params });
  }
}
