import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedserviceService} from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  id:any;
  data:any;
  constructor(
    private route:ActivatedRoute,
    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
   
    this.getTechnology();
  }
  getTechnology(){
    this.SharedserviceService.getTechnology(this.id).subscribe(data=>
      {
        this.data=data;
        console.log(data);
      }
    )
  }

}
