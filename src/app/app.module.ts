import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';

import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './Day3/directives/directives.component';
import { DirectiveNgforComponent } from './Day3/directive-ngfor/directive-ngfor.component';
import { DirectiveSwitchComponent } from './Day3/directive-switch/directive-switch.component';
import { ChangetextDirective } from './changetext.directive';
import { ButtonDirective } from './Day3/button.directive';
import { Task1Component } from './Day3/task1/task1.component';
import { Task2Component } from './Day3/task2/task2.component';
import { Task2directiveDirective } from './Day3/task2directive.directive';
import { Task3Component } from './Day3/task3/task3.component';
import { Task3directiveDirective } from './Day3/task3directive.directive';
import { MyFormComponent } from './Day4/my-form/my-form.component';
import { RagistrationComponent } from './Day4/ragistration/ragistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TDFRagistrationComponent } from './Day4/tdfragistration/tdfragistration.component';
import { DateserviceService } from './dateservice.service';
import { BookComponentComponent } from './Day5/book-component/book-component.component';
import { DataSharingStudentChildToParentComponent } from './Day5/data-sharing-student-child-to-parent/data-sharing-student-child-to-parent.component';
import { CourseListComponent } from './Day5/course-list/course-list.component';
import { CourseListOutputComponent } from './Day5/course-list-output/course-list-output.component';
import { AppRoutingModule } from './main/main-routing.module';
import { PromisesComponent } from './Day6/promises/promises.component';
import { HttpClientModule } from "@angular/common/http";
import { ObservableComponent } from './Day6/observable/observable.component';
import { ObservableTaskComponent } from './Day6/observable-task/observable-task.component';
import { Task1DataBindingComponent } from './Day1/task1-data-binding/task1-data-binding.component';
import { Task2EventBindingComponent } from './Day1/task2-event-binding/task2-event-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DirectivesComponent,
    DirectiveNgforComponent,
    DirectiveSwitchComponent,
    ChangetextDirective,
    ButtonDirective,
    Task1Component,
    Task2Component,
    Task2directiveDirective,
    Task3Component,
    Task3directiveDirective,
    MyFormComponent,
    RagistrationComponent,
    TDFRagistrationComponent,
    BookComponentComponent,
    DataSharingStudentChildToParentComponent,
    CourseListComponent,
    CourseListOutputComponent,
    PromisesComponent,
    ObservableComponent,
    ObservableTaskComponent,
    Task1DataBindingComponent,
    Task2EventBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
