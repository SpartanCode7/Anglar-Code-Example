import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  constructor( private http: HttpClient ) { }

  config = "";

  cateUrl = "http://localhost:5000/categories";

  getCates() {
      return this.http.get(this.cateUrl);
  }

  data:any;

  addCates(data: any) {
      return this.http.post(this.cateUrl, data);
  }

}
