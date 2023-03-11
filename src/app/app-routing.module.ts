import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadComponent } from './lead/lead.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path:'' ,component:MainContentComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'addemployees',component:AddemployeesComponent},
  {path:'lead',component:LeadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
