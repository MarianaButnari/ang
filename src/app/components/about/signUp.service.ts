import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface SignUpResponseData {
kind: string;
idToken : string;
email : string;
refreshToken : string;
expiresIn : string;
localId: string;
}


@Injectable({providedIn:'root'})
export class SignUpService {
  constructor(private http: HttpClient) {}

signUp(email: string , password : string){
    return this.http.post<SignUpResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaf1rZhwWJMNO6oKKDg_tJ8dvGQ7uoS7U' ,
      {
        email:email ,
        password: password ,
        returnSecureToken: true
      }
      );
  }

}
