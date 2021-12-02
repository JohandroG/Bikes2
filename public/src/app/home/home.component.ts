import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

id:any = "";
firstname:any = "";
lastname:any = "";
email:any = "";

  constructor(private _router:Router,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadsessioninfo();
  }

loadsessioninfo():void{



const userFirstname = sessionStorage.getItem('userFirstname');
const userID = sessionStorage.getItem('userID');
const userLastname = sessionStorage.getItem('userLastname');
const userEmail = sessionStorage.getItem('userEmail');

if (!userFirstname){
  this._router.navigate( ['/'] );
}

this.id = userID
this.firstname = userFirstname
this.lastname = userLastname
this.email = userEmail
}

logout():void{
  sessionStorage.clear();
  this._router.navigate( ['/'] );
}

}
