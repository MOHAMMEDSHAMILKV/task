import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
data:any
// data1:any
id:any
user:any
dob:any
gender:any
contactno:any
showinput=false  
editedItem: any = {}; 
// Save: any;
  constructor(private Rt:Router){}
navigateTo(route:any){
  this.Rt.navigate([`/${route}`])
}
ngOnInit(): void {
  this.data =JSON.parse(localStorage.getItem('data')||'')
}

// for deleating user
  onDelete(index: number){
    this.data.splice(index, 1);

  }

  onEdit(item: number){
    // console.log(item);
    
    // Set editedItem to a copy of the item being edited
    this.editedItem = Object.assign({}, item);
    // Show the edit form
    this.showinput = true;
    
  }
  cancelEdit() {
    // Reset the editedItem and showinput flags
    this.editedItem = null;
    this.showinput = false;
  }
  submitEditForm() {
   // Find the index of the edited item in the data array
   var index = this.data.findIndex((item: { id: any; }) => item.id == this.editedItem.id);
   // Update the item in the data array
   this.data[index] = this.editedItem;
   // Update the data in localStorage
   this.editedItem=localStorage.setItem('data', JSON.stringify(this.data));
 
  console.log("qqqq", this.editedItem);
   // Reset the editedItem and showinput flags
   this.editedItem = {};
   this.showinput = false;
  }
  
  
  logout(){
    alert("are you sure to logout")
    localStorage.removeItem("username")
    localStorage.clear()
    this.Rt.navigateByUrl('')

  }
}
