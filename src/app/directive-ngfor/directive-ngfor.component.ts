import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})

export class DirectiveNgforComponent {
  courses: any[] = [
    	    { id: 1, name: "TypeScript" },
    	    { id: 2, name: "Angular" },
    	    { id: 3, name: "Node JS" },
    	    { id: 1, name: "TypeScript" }
    	  ];
    
}
