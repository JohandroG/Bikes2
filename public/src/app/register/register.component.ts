import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user-m/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser:any = {
    firstname : "",
    lastname : "",
    email : "",
    password : ""
  }

  confpassword:any = ""

//!Validations side-------------------------------------------------------------------------
  isValid:Boolean = true;

  errors:any = {
    firstnamelen : "",
    lastnamelen : "",
  }
//!Validations side-------------------------------------------------------------------------


  constructor(private _HttpService: UserService) { }

  ngOnInit(): void {
  }

  register(event:any):void{

//?Validations side-------------------------------------------------------------------------

  this.errors = {
    firstnamelen : "",
    lastnamelen : "",
  }

  if(this.newUser.firstname.length < 3){
    this.isValid = false;
    this.errors.firstnamelen = "You need at least 3 characters"
  }
  if(this.newUser.lastname.length < 3){
    this.isValid = false;
    this.errors.lastnamelen = "You need at least 3 characters"
  }

//?Validations side-------------------------------------------------------------------------


    if(this.isValid){
      if(this.newUser.password === this.confpassword){
        this._HttpService.createNewUser(this.newUser)
        .subscribe((data:any)=>{
          console.log(data);
        })
      }
      else{
        console.log("mamaste");
        this.confpassword = 12345
      }
    }
    else{
      console.log("Cagaste");
      
    }
  }
}
