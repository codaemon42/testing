import { environment } from './../../environments/environment';


import { take, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MailRes } from './test.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  postFormData(data) {
      let formData = new FormData();
    for( const [key, value] of Object.entries(data)){
        formData.append(key, `${value}`);
    }
    return this.http.post<MailRes>(`${environment.baseUrl}/wp-json/contact-form-7/v1/contact-forms/${environment.contactFormId}/feedback`, formData).pipe(
        take(1),
        tap(res => {
            return res;
        }),
        catchError(err => {
            console.log('error occurred : ', err);
            return err;
        })
    )
  }


}
