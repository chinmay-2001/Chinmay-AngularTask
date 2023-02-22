import { Component } from '@angular/core';
import { groupBy, mergeMap, Observable, of, toArray } from 'rxjs';
import { product } from './products';
import { map, filter, interval, range, concat, take ,reduce} from 'rxjs';

@Component({
  selector: 'app-rxjs-task',
  templateUrl: './rxjs-task.component.html',
  styleUrls: ['./rxjs-task.component.css']
})

export class RxjsTaskComponent {
  // product:Observable<product[]>
  constructor() {
    this.getProd()
  }
  // product: any;
  productNameList: any[] = [];
  productlist: any[] = []
  punecandidated: any[] = []

  technologylist: any = { "Angular": 0, "Java": 0, "React": 0 }
  sortcandidate: product[] = []
  freshercandidate: any = []
  getProd() {
    let products = of({ pName: "televison", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 },
      { pName: "washing machine", price: 37999 },
      { pName: "dish washer", price: 52499 })

    // 1.Diplay in Angular component only names of Products in a tabular format.
    products.pipe(map((state) => state.pName)).subscribe(ev => this.productNameList.push(ev))
    
    //2.Display sum of price  all products whose price is  >30000
    products.pipe(filter((state) => state.price > 30000)).subscribe(ev => this.productlist.push(ev))

    // Task 2:

    let candidates = of({ name: "Ramesh", technology: "Java", city: "Pune", experience: 5 },
      { name: "Ram", technology: "Angular", city: "Mumbai", experience: 3 },
      { name: "Raj", technology: "React", city: "Banglore", experience: 2 },
      { name: "Smith", technology: "Java", city: "Pune", experience: 5 },
      { name: "John", technology: "Java", city: "Hyderabad", experience: 0 },
      { name: "Sita", technology: "React", city: "Chennai", experience: 1 },
      { name: "Arun", technology: "Angular", city: "Hyderabad", experience: 4 },
      { name: "Krish", technology: "React", city: "Chennai", experience: 5 },
      { name: "Teja", technology: "Java", city: "Pune", experience: 0 })

    // 1.display only List of Pune Candidates
    candidates.pipe(filter((state) => state.city === 'Pune')).subscribe(ev => this.punecandidated.push(ev))
    
    // 2.display candidate count by Technical Expertise.
    class tech{
      technology:number=0
    }
    // candidates.pipe(groupBy(p=>p.technology),mergeMap(group$=>group$.pipe(reduce((acc,curr) =>  [...acc,curr],[]))))
    // candidates.pipe<product>(mergeMap(toArray()))

    candidates.pipe(map((technology) => technology)).subscribe(ev => { this.technologylist[ev.technology.toString()] = this.technologylist[ev.technology.toString()] + 1 })

    // 5.dsiplay  list of fresher candidates
    candidates.pipe(filter(x => x.experience === 0)).subscribe(ev => this.freshercandidate.push(ev))



    let student = of([{ name: "Ramesh", technology: "Java", city: "Pune", experience: 5 },
    { name: "Ram", technology: "Angular", city: "Mumbai", experience: 3 },
    { name: "Raj", technology: "React", city: "Banglore", experience: 2 },
    { name: "Smith", technology: "Java", city: "Pune", experience: 5 },
    { name: "John", technology: "Java", city: "Hyderabad", experience: 0 },
    { name: "Sita", technology: "React", city: "Chennai", experience: 1 },
    { name: "Arun", technology: "Angular", city: "Hyderabad", experience: 4 },
    { name: "Krish", technology: "React", city: "Chennai", experience: 5 },
    { name: "Teja", technology: "Java", city: "Pune", experience: 0 }])


    // 3.listing candidates with highest experience
    student.pipe(map(ev => ev.sort((a, b) => a.experience > b.experience ? -1 : 1))).subscribe(ev => this.sortcandidate = ev)

    // 6.display the list in ascending order of experience
    student.pipe(map(ev => ev.sort((a, b) => a.experience > b.experience ? 1 : -1))).subscribe(ev => this.sortcandidate = ev)


  }
}
