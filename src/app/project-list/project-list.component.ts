import { Component, OnInit } from '@angular/core';
import { Project } from '../model/ProjectValues.model';
import { SharedserviceService } from '../sharedservices/sharedservice.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  servicedata : any;
  values = new  Project();
  data:any;
  projectarray=[];
  title='Submit';
  activeIndex=-1;

  constructor(private SharedserviceService:SharedserviceService) { }

  ngOnInit() {
    this.getData();
  }
  getData()
  {
    this.SharedserviceService.getdata().subscribe(data=>
      {
        this.data=data;
       // console.log(this.data);
      }

    )
  }

  onsubmit()
  {
    if(this.activeIndex==-1){
      this.SharedserviceService.createData(this.values).subscribe(data=>
        {
          console.log(this.data);
          this.getData();
          
        }
  
      )
     
    }
    else{
      this.SharedserviceService.updateData(this.values).subscribe(data=>
        {
          this.getData();
        
        }
  
      )
      //this.projectarray.splice(this.activeIndex,1,this.values);
    }

    this.values = new Project;
    this.title = 'Submit';
    this.activeIndex=-1;
  }


  delete(obj)
  {
    console.log("Delete obj-->",obj);
   
   this.SharedserviceService.deleteData(obj).subscribe(data=>
    {
      this.getData();
    });
   
  }
  edit(obj,index)
  {
    console.log("obj-->",obj)  
    this.title='Update'
    this.values.projectName=obj.projectName;
    this.values.description=obj.description;
    this.values.technology=obj.technology;
    this.values.team=obj.team;
    this.values.Project_id=obj.Project_id;
   
      this.activeIndex=index;
  }

  


}
