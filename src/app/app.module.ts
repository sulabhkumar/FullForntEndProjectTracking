import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedserviceService } from './sharedservices/sharedservice.service';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { TeamComponent } from './team/team.component';
import { EmployeeComponent } from './employee/employee.component';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    SearchComponent,
    TeamComponent,
    EmployeeComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
