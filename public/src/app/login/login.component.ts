import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-m/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo:any = {
    email : "",
    password : ""
  }


//*Validations side-------------------------------------------------------------------------
isValid:Boolean = true;

errors:any = {
  wrongpass : "",
  noexits : "",
  empty: ""
}
//*Validations side-------------------------------------------------------------------------


  constructor(private _HttpService: UserService) { }

  ngOnInit(): void {
  }

  loginProcess(event:any):void{

//!Validations side-------------------------------------------------------------------------
this.isValid = true;

this.errors = {
  others : "",
  empty: ""
}

if(this.loginInfo.email.length == 0 ||
  this.loginInfo.password.length == 0){
    this.isValid = false;
    this.errors.empty = "You leaved an empty space"
  }


//!Validations side-------------------------------------------------------------------------


    if(this.isValid){
      this._HttpService.login(this.loginInfo)
    .subscribe((data:any) =>{
      console.log("success");
    },
    (error:any)=>{
      this.errors.others = error.statusText
    })
    }
    else{
      console.log("Sorry");
    }
    
    
  }

}
