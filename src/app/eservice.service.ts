import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { employee } from './Day7/curd-applicaton/Employee';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class EserviceService {

  constructor(private http:HttpClient) {

   }
   
  data:employee[]=[] ;
  fetched:boolean=false;  
  FetchEmployee():Observable<employee[]>{
    // this.http.get<employee[]>('assets/employee.json').subscribe((response)=>{
      
    //   // this.data=response;
    //     if(!this.fetched){
    //       this.convert(response)
    //       console.log(response)
    //       console.log(this.data)
    //       this.fetched=true;
    //   }
    // })
    return this.http.get<employee[]>('assets/employee.json');
    
  }
  convert(response:any){
    for(let o of response){
      this.data.push(new employee(o.id,o.name))
    }
  }
  getData():employee[]{
    return this.data;
  }

  AddEmployee(e:employee) : Observable<employee>{
    // this.data.push(e);
    console.log(e);
    return this.http.post<employee>('assets/employees',e,httpOptions)
  }
  
  DeleteEmployee(id:number){
    console.log("Delete employee")
    let foundIndex:number=-1;
   for(let i=0;i<this.data.length;i++){
      let e=this.data[i];
      if(id==e.id){
        foundIndex=i ;
        break;
      }
  }
  this.data.splice(foundIndex,1);
  }
  UpdateEmployee(id:number,emp:employee):void{
    // console.log("emp:"+emp)
    // this.data=this.data.map(e=>{
    //   if(e.id===id){
    //     return emp;
    //   }
    //   else{
    //     return e;
    //   }
    // })
    for(let i=0;i<this.data.length;i++){
      let e=this.data[i];
      console.log(e)
      console.log("id:",id)
      // console.log("emp:",emp)
      if(id==e.id){
        console.log(emp.name);
        this.data.splice(i,1);  
        this.data.push(emp);
        console.log(e.name);
        break;
      }
  }
  }
}
