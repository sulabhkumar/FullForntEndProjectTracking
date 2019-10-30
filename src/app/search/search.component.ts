import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedserviceService} from '../sharedservices/sharedservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
id:any;
data:any;

  constructor(
    private route:ActivatedRoute,
    private SharedserviceService:SharedserviceService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
   
    this.getOne();
  }

  getOne(){
    this.SharedserviceService.getOne(this.id).subscribe(data=>
      {
        this.data=data;
        console.log(data);
      }
    )
  }

}
