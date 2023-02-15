import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
    constructor(private httpClient:HttpClient){}
    output:string='';
    dic={}
    API_KEY="e40d07f00b094602953cc3bf8537477e"
    ngOnInit(){
      console.log("Angular 10 Promises")
      this.fetchData().then((data) => {
        console.log(typeof(data))
        console.log("data" ,JSON.stringify(data))
        this.output=JSON.stringify(data);
        this.dic=JSON.parse(JSON.stringify(data));
      }
      )
      .catch((err) => {
        console.log("Error",err);
      })
    }
    fetchData(){
      return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`).toPromise();
    }
}
