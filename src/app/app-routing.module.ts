import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TeamComponent } from './team/team.component';
import { EmployeeComponent } from './employee/employee.component';
import { TechnologyComponent } from './technology/technology.component';


const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'search/:id',component:SearchComponent},
  {path:'team/:id',component:TeamComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {path:'technology/:id',component:TechnologyComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
