import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../company';


const httpOptions = {
  headers: new HttpHeaders({

    'Content-Type': 'application/json' 
  })
}



@Injectable({
  providedIn: 'root'
})

export class AdminService {

 CompanyUrl:string = 'https://mercatordcr.azurewebsites.net/api/Company/GetAll';

  constructor(private http:HttpClient) { }


    getCompany():Observable<Company[]> {
    return this.http.get<Company[]>(`${this.CompanyUrl}`)

  }




}
