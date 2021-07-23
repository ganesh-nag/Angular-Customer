import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse,   } from '@angular/common/http';
import {User} from './user.model';
import { Customer } from './customer.model';
import { text } from '@angular/core/src/render3';


@Injectable()  
export class UserLoginService{
constructor(private http:HttpClient){}
//private userUrl = 'http://localhost:8090/customer';
private userUrl = '/customer';
 
public login(_user:User){
    alert('in User service ' + this.userUrl + '/' +_user.customerName);
    alert(_user.name + _user.password + _user.customerName);
    const headers = new HttpHeaders(_user ? {
        Authorization: 'Basic ' + btoa(_user.name + ':' + _user.password)
      } : {});
  alert('Authorization: Basic ' + btoa(_user.name + ':' + _user.password));
      return this.http.get<User>(this.userUrl + '/' +_user.customerName, {headers:headers});
}


public createCustomer(_customer:Customer){

    alert('in createCustomer - service method');
    alert(_customer.name + _customer.age);
    return this.http.post(this.userUrl, _customer,{responseType: 'text' as 'json' });
}

}