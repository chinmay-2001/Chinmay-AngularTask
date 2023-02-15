import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { TDFRagistrationComponent } from '../Day4/tdfragistration/tdfragistration.component';
import { DirectiveNgforComponent } from '../directive-ngfor/directive-ngfor.component';
import { DirectiveSwitchComponent } from '../directive-switch/directive-switch.component';
import { PromisesComponent } from '../Day6/promises/promises.component';
const routes: Routes = [ 
    {path:"home", component:DirectiveNgforComponent}, 
    {path:"contactus", component:DirectiveSwitchComponent} ,
    {path:"Form", component:TDFRagistrationComponent},
    {path:"promise", component:PromisesComponent}
 ];
 

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
 })

 export class AppRoutingModule { }
 
