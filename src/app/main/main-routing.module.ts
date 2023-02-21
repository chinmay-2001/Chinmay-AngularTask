import { Directive, NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { TDFRagistrationComponent } from '../Day4/tdfragistration/tdfragistration.component';
import { DirectiveNgforComponent } from '../Day3/directive-ngfor/directive-ngfor.component';
import { DirectiveSwitchComponent } from '../Day3/directive-switch/directive-switch.component';
import { PromisesComponent } from '../Day6/promises/promises.component';
import { ObservableComponent } from '../Day6/observable/observable.component';
import { ObservableTaskComponent } from '../Day6/observable-task/observable-task.component';
import { AppComponent } from '../app.component';
import { Task1DataBindingComponent } from '../Day1/task1-data-binding/task1-data-binding.component';
import { Task2EventBindingComponent } from '../Day1/task2-event-binding/task2-event-binding.component'; 
import { DirectivesComponent } from '../Day3/directives/directives.component';
import { RagistrationComponent } from '../Day4/ragistration/ragistration.component';
import { CurdApplicatonComponent } from '../Day7/curd-applicaton/curd-applicaton.component';
import { ObservableServiceTaskComponent } from '../Day7/observable-service-task/observable-service-task.component';
import { ListCompComponent } from '../Day7/list-comp/list-comp.component';
import { UpdateComponent } from '../Day7/update/update.component';
import { CounterComponent } from '../Day8/counter/counter.component';
import { ProductListComponent } from '../Day8/Task-NgRxEffectDemo/product-list/product-list.component';
import { RxjsTaskComponent } from '../Day6/rxjs-task/rxjs-task.component';
const routes: Routes = [ 
    {path:"home", component:DirectiveNgforComponent}, 
    {path:"contactus", component:DirectiveSwitchComponent} ,
    {path:"Form", component:TDFRagistrationComponent},
    {path:"promise", component:PromisesComponent},
    {path:"observer", component:ObservableComponent},
    {path:"observableTask", component:ObservableTaskComponent},
    {path:"D1Task1", component:Task1DataBindingComponent},
    {path:"D1Task2", component:Task2EventBindingComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"reactiveform",component:RagistrationComponent},
    {path:"curdapplications",component:CurdApplicatonComponent},
    {path:"listcomp",component:ListCompComponent},
    {path:"of",component:ObservableServiceTaskComponent},
    {path:'app-update',component:UpdateComponent},
    {path:'counter',component:CounterComponent},
    {path:'product',component:ProductListComponent},
    {path:'rxjstask',component:RxjsTaskComponent}
    // {path: '', redirectTo: '/Form', pathMatch: 'full'},
 ];
 

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
 })

 export class AppRoutingModule { }
 
