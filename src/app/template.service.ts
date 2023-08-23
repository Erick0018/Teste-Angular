import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Templates } from './models/Template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private url = "http://localhost:3000/template";
 
  constructor(private _httpClient: HttpClient) {  }

  getTemplate(): Observable<Templates[]> {
    return this._httpClient.get<Templates[]>(this.url);
  }

}
