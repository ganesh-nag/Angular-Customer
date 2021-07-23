import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Customer} from './customer.model';
import {UserLoginService} from './userLogin.service';

@Component({
    selector: 'create-page',
      templateUrl: './create.component.html'
      
    })

    export class CreateCustomerComponent{
        customer:Customer = new Customer();
        constructor(private router:Router, private userLoginService:UserLoginService){}

        result:any;
        errorMessage:any;
        createCustomer():void{
            alert('in createCustomer component');
            this.userLoginService.createCustomer(this.customer)
            .subscribe(data => {
                this.result = data;
                //console.log('test' + this.result);
                alert(this.result);
    
            },error =>  this.errorMessage = <any>error)
        }
    }