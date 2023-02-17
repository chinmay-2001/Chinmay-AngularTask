import { Component } from '@angular/core';

@Component({
  selector: 'app-tdfragistration',
  templateUrl: './tdfragistration.component.html',
  styleUrls: ['./tdfragistration.component.css']
})
export class TDFRagistrationComponent {
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""
  conformpassword=""
  city:string="";

  onsubmit(){
    console.log('is write')
    console.log(this.firstname)
    console.log(this.lastname)
  }
}
