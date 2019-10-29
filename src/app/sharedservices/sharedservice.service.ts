import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  dataarray=[];
    constructor(private http:HttpClient) { }
  
     getdata()
     {
       return this.http.get('http://localhost:8080/Demo/webresources/inventory').pipe(map(res=>
        {
          return res
        }
        )
       )
     }
  


createData(info)
{
  return this.http.post('http://localhost:8080/Demo/webresources/insert',info).pipe(map(res=>
      {
        return res
      }
      )
  )
}
  
  deleteData(obj)
  {
    console.log("debug-->",obj)
    return this.http.delete('http://localhost:8080/Demo/webresources/delete/'+obj.Project_id).pipe(map(res=>
    {
      return res
    }
    )
   )
 }
  
  updateData(info)
  {
    return this.http.put('http://localhost:8080/Demo/webresources/update',info).pipe(map(res=>
        {
          return res
        }

        )
    )
  }
}  