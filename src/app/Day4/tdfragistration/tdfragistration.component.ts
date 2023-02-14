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
  conformPassword=""

  onsubmit(){
    console.log('is write')
  }
}
