import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyModels } from './company-models';
@Injectable({
  providedIn: 'root'
  
})
export class CompanyApiService {
  find(id: String) {
    throw new Error('Method not implemented.');
  }
  
  

  private baseUrl = 'http://localhost:8080/api/post';
  private baseUrl1 = 'http://localhost:3000/employee';
  comUrl="http://localhost:8080/api"

  
  constructor( private http:HttpClient) { }

  postEmp(comAndemp: any): Observable<any> {
    return this.http.post<any>(this.baseUrl1, comAndemp);
  }

  getEmp():Observable<any>{
    return this.http.get<any>(this.baseUrl1);
}

deleteEmp(id:any):Observable<any>{
  return this.http.delete<any>('http://localhost:8080/api/remove/'+id);
}






postCom(data: any): Observable<any> {
  return this.http.post<any>(this.baseUrl, data);
}

getCom():Observable<any>{
   return this.http.get<any>(this.comUrl+'/all');
 
}

deleteCom(id:String):Observable<any>{
return this.http.delete<any>(this.baseUrl +'/'+id);
}

getbyid(id:String){
  return this.http.get<any>(this.comUrl+'/id/'+id);
}

updatecom(id:String,item:any){
  return this.http.put<any>(this.comUrl+'/update/'+id,item);
}

}