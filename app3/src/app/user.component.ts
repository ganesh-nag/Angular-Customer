import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from './user.model';
import {UserLoginService} from './userLogin.service';


@Component({
    selector: 'login-page',
      templateUrl: './user.component.html'
      
    })

export class UserLoginComponent{
    user:User = new User();
    constructor(private router:Router, private userLoginService:UserLoginService){}

    result:any;
    errorMessage:any;
    login():void{
        alert('in login component');
        this.userLoginService.login(this.user)
        .subscribe(data => {
            this.result = data;
            //console.log(this.result);
            alert(this.result);

        },error =>  this.errorMessage = <any>error)
    }
    
}