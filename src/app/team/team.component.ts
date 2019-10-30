import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedserviceService} from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  id:any;
  data:any;
  constructor(
    private route:ActivatedRoute,
    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
   
    this.getTeam();
  }

  getTeam(){
    this.SharedserviceService.getTeam(this.id).subscribe(data=>
      {
        this.data=data;
        console.log(data);
      }
    )
  }
  }

