import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { TDFRagistrationComponent } from '../Day4/tdfragistration/tdfragistration.component';
import { DirectiveNgforComponent } from '../directive-ngfor/directive-ngfor.component';
import { DirectiveSwitchComponent } from '../directive-switch/directive-switch.component';
import { PromisesComponent } from '../Day6/promises/promises.component';
import { ObservableComponent } from '../Day6/observable/observable.component';
import { ObservableTaskComponent } from '../Day6/observable-task/observable-task.component';
import { AppComponent } from '../app.component';
import { Task1DataBindingComponent } from '../Day1/task1-data-binding/task1-data-binding.component';
import { Task2EventBindingComponent } from '../Day1/task2-event-binding/task2-event-binding.component'; 
const routes: Routes = [ 
    {path:"home", component:DirectiveNgforComponent}, 
    {path:"contactus", component:DirectiveSwitchComponent} ,
    {path:"Form", component:TDFRagistrationComponent},
    {path:"promise", component:PromisesComponent},
    {path:"observer", component:ObservableComponent},
    {path:"observableTask", component:ObservableTaskComponent},
    {path:"D1Task1", component:Task1DataBindingComponent},
    {path:"D1Task2", component:Task2EventBindingComponent}
 ];
 

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
 })

 export class AppRoutingModule { }
 
