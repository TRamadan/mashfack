import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appLanguage: any;
  appCountry: any;
  //here is the url to the user fuctionalities
  public apiurl = "http://al-eyada.com/api/v1/user/";

  public apiurl2 = "http://al-eyada.com/api/v1/";

  isLoggined: boolean = false;

  //here is the url needed to the other functionalities
  // token: any = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc"
  id: any; name: any; phone: any; gender: any; email: any;
  avatar: any; age: any; height: any; weight: any; diseases: any; first_name: any;
  last_name: any; token: any;
  data: any[];
  password: any;



  constructor(public http: HttpClient) {
    console.log("hello , from user service")
  }

  //here is the login function for the user
  Login(userlogin: any): Observable<any> {
    return this.http.post(`${this.apiurl}login`, userlogin);
  }

  //here is the registeration function for the user 
  Registeration(user_register): Observable<any> {
    return this.http.post(`${this.apiurl}register`, user_register)
  }

  //here is a function needed for update user profile entities
  UpdateProfile(updateuserdata): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.token
    };
    let config = {
      'headers': headers,
    };
    console.log(this.token);
    //"http://al-eyada.com/api/v1/user/update"
    return this.http.post(`${this.apiurl}update`, updateuserdata, config);
  }


  //here is the function needed in  forgot password operation 
  SendEmailCode(x: any): Observable<any> {
    console.log(this.email)
    return this.http.get(`${this.apiurl2}create?email=` + x);
  }

  //here is a function needed to proceed the forgotpassword operation 
  //this.apiurl + 'reset?email=' + email + '&token=' + token + '&password=' + password + "&password_confirmation=" + password_confirmation
  Forgotpasswordproceed(x: any, y: any, z: any, l: any): Observable<any> {
    return this.http.get(`${this.apiurl2}reset?email=` + x + '&token=' + y + '&password=' + z + '&password_confirmation=' + l);
  }

  header() {
    const headers = {
      "Accept": "application/json",
      'Authorization': "Bearer " + this.token,
    };
    let config = {
      'headers': headers,
    };
    console.log("here is from header funcion", this.token)
    return config;
  }

  //here is the function needed for social login as facebook and gmail
  socialLogin(x: any): Observable<any> {
    const headers = {
      'X-App-Locale': this.appLanguage = "ar",
      'X-App-country': this.appCountry = "410"
    };
    let config = {
      'headers': headers,
    };
    // alert(JSON.stringify(config));
    return this.http.post(`${this.apiurl}google_login`, x, config);
  }

  setProfileData(x: any) {
    this.name = x.name;
    this.phone = x.phone;
    this.gender = x.gender;
    this.email = x.email;
    this.token = x.token;
    this.avatar = x.avatar;
    this.age = x.age;
    this.diseases = x.diseases;
    this.id = x.user_id;
  }

  //here is the function needed to get all notifications
  notifications(): Observable<any> {
    let url = "http://al-eyada.com/api/v1/notification/user";
    return this.http.get(url, this.header());
  }

  //here is the function needed to the rest of forms 
  SendFormVariable(Data: any): Observable<any> {
    let url = "http://al-eyada.com/api/v1/form";
    return this.http.post(url, Data, this.header());
  }





}
