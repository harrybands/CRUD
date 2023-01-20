import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {config, Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { };

  getEmployeesList(data?: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL +"getData/test?name=" + data);
  }

//   rearrangingEmployeesOrderList(data?: any) Observable<Employee[]> {
//     return this.httpClient.get<Employee[]>(this.baseURL + getData/sorting);
// }

  createEmployee(data: any) {
    return this.httpClient.post(this.baseURL + "getData/add", data);
  }

  updateEmployee(employee:any) {
    console.log(employee,'phuasdasd');
    return this.httpClient.post(this.baseURL + "getData/update", employee);
  }
    // return this.httpClient.put(this.baseURL+ "getData/update", employee, httpOptions);

  deleteEmployee(id: any): Observable<Employee[]> {
    console.log(id, 'attempting to delete')
    return this.httpClient.delete<Employee[]>(this.baseURL + "getData/delete?id=" + id);
  }
}


// createEmployee(data: any) {
//   let headers = new HttpHeaders();
//   headers.append("Access-Control-Allow-Origin", "*")
//   headers.append("Access-Control-Allow-Origin", "http://localhost:8080/getData/add")
//   headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
//   headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
//   return this.httpClient.post(this.baseURL + "getData/add", data,{
//    headers:headers
//   });
// }
