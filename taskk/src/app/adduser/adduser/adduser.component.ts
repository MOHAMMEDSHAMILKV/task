import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
id:any
user:any
dob:any
gender:any
contactno:any
  data:any=[]
  
constructor(private Rt:Router){}
navigateTo(route:any){
  this.Rt.navigate([`/${route}`])
}



submit(){
  this.data =JSON.parse(localStorage.getItem('data')||'[]')

  this.data.push({
    'id':this.id,
    'username':this.user,
    'dob':this.dob,
    'gender':this.gender,
    'contactno':this.contactno,
  })
  localStorage.setItem('data', JSON.stringify(this.data));
  alert("form submitted successfully")
    this.Rt.navigateByUrl('dashboard');

 
}

}
