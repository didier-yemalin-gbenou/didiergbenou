import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor( private _http: HttpClient ) {}

  validateCaptcha(response: string){

    const data = JSON.stringify({'response': response});

    return this._http.post('/api/captcha', data, this._httpOptions);

  }

  sendEmail(form_data: NgForm){

    return this._http.post('/api/contact', JSON.stringify(form_data), this._httpOptions)
              .pipe(map(resp => resp['value']));
  }

}
