import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Wordpress } from '../../models/wordpress.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly wpUrl = 'https://www.sagamuunion.org/members/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getWpApi(page = 1, per_page = 10): Observable<HttpResponse<Wordpress[]>> {
    const params = new HttpParams()
      .set('categories', '6')
      .set('_links', '')
      .set('_embed', '')
      .set('page', page.toString())
      .set('per_page', per_page.toString());

    return this.http.get<Wordpress[]>(this.wpUrl, { params, observe: 'response' });
  }
}
