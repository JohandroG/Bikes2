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


  constructor(private _HttpService: UserService) { }

  ngOnInit(): void {
  }

}
