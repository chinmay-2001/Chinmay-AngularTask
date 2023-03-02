import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  empName: string = ""
  phoneNo: number = 0
  email: string = ""
  empid: string = ""

  EmployeeDetail = new FormGroup({
    empid: new FormControl(),
    empName: new FormControl(),
    phoneNo: new FormControl(),
    email: new FormControl(),
  })
  emplist: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/empDetail').subscribe(ev => this.emplist = ev)
  }

  deleteEmployee(id: number) {

    this.http.delete(`http://localhost:3000/api/deleteEmployee/${id}`).subscribe(ev => console.log(ev))
  }
  creatEmp() {
    console.log("here")
    this.http.post('http://localhost:3000/api/createEmployee', { empName: this.empName, phoneNo: this.phoneNo, email: this.email }).subscribe(ev => console.log(ev))
  }

  updateempName: string = ""
  updatephoneNo: number = 0
  updateemail: string = ""

  obj: any

  setObj(emp: any) {
    this.obj = emp
  }

  updateEmp() {
    console.log("empname:", this.updateempName)
    this.http.put(`http://localhost:3000/api/updateEmployee/${this.obj._id}`, { empName: this.updateempName, phoneNo: this.updatephoneNo, email: this.updateemail }).subscribe(ev => console.log(ev))
  }
}
