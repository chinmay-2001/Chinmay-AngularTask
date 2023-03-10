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


  emplist: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/empDetail').subscribe(ev => this.emplist = ev)
  }

  fetch() {
    this.http.get('http://localhost:3000/api/empDetail').subscribe(ev => this.emplist = ev)
  }
  deleteEmployee(id: number) {

    this.http.delete(`http://localhost:3000/api/deleteEmployee/${id}`).subscribe(ev => console.log(ev))
    this.fetch()
  }
  creatEmp() {

    this.http.post('http://localhost:3000/api/createEmployee', { empName: this.empName, phoneNo: this.phoneNo, email: this.email }).subscribe(ev => console.log(ev))
    this.fetch()
  }

  updateempName: string = ""
  updatephoneNo: number = 0
  updateemail: string = ""

  obj: any

  setObj(emp: any) {
    this.obj = emp
  }

  updateEmp() {

    this.http.put(`http://localhost:3000/api/updateEmployee/${this.obj._id}`, { empName: this.updateempName, phoneNo: this.updatephoneNo, email: this.updateemail }).subscribe(ev => console.log(ev))
    this.fetch()
  }
}
