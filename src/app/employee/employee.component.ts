import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedserviceService} from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:any;
  data:any;
  constructor(
    private route:ActivatedRoute,
    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
   
    this.getEmployee();
  }

  getEmployee(){
    this.SharedserviceService.getEmployee(this.id).subscribe(data=>
      {
        this.data=data;
        console.log(data);
      }
    )
  
  }

}
