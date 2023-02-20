import { Component, OnInit } from '@angular/core';
import { employee } from '../curd-applicaton/Employee';
import { EserviceService } from 'src/app/eservice.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit{
  constructor(private eservice:EserviceService,private route:Router) {
  }
  emp:employee[]=[];
  ngOnInit(): void {
    this.eservice.FetchEmployee().subscribe(data=> this.emp=data );
    // console.log(this.eservice.getData())
    // this.emp=this.eservice.getData();
    // console.log(this.emp);
  }

  update(e:number){
    console.log("reached here")
      this.route.navigate(['app-update'])
  }
  del(id:number){
    this.eservice.DeleteEmployee(id);
    this.route.navigate(['listcomp'])
  }
}


