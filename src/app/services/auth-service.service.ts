import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environements/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                          'Authorization': 'Bearer ${accessToken}'



})

};
const httppp = {
  headers: new HttpHeaders({

    'Authorization': 'Bearer ${accessToken}'   })

};

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  login_Falleh(username: string, password: string): Observable<any> {
    return this.http.post(environment.api +'/falleh/login/', {
      username,
      password
    }, httpOptions);
  }


  register_falleh(formData: any): Observable<Object> {
    return this.http.post(environment.api+'/falleh/register/',formData);
   }


  logout(): Observable<any> {
    return this.http.get(environment.api + '/logout/') as Observable<any>;
  }






  sendSMs_code_falleh_to_mail(emailData: any): Observable<any> {
    return this.http.post(environment.api + '/mail_account_verification_code/', emailData);
  }



  sendSMsResetPassword(emailData: any): Observable<any> {
    return this.http.post(environment.api + '/smsRestPassword/', emailData);
  }


  UpdateCode(vpt: any,codesms: string): Observable<any> {
    return this.http.put(environment.api + '/editcode/' + vpt+"/", {
      codesms,
    }, httpOptions);
  }

}
