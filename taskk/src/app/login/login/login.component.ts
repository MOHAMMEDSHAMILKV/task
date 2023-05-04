import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 database=[{username:"shamil",password:1111,}]

constructor(private Rt:Router){}
navigateTo(route:any){
  this.Rt.navigate([`/${route}`])
}

username:any
password:any

login(){
var Database=this.database
var username=this.username
var password=this.password


if(Database[0].username==username && Database[0].password==password){
  localStorage.setItem("username", JSON.stringify(Database[0].username))
  alert("Login successfull")
  this.Rt.navigateByUrl('dashboard')
}else{
  alert("Invalid username or password")
}
}

}
