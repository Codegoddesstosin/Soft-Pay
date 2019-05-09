import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../company';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({

    'Content-Type': 'application/json' 
  })
}



@Injectable({
  providedIn: 'root'
})

export class CompanyService {

 CompanyUrl:string = 'https://mercatordcr.azurewebsites.net/api/Company/GetAll';

  constructor(private http:HttpClient) { }


    getCompany():Observable<Company[]> {
    return this.http.get<Company[]>(`${this.CompanyUrl}`)

  }


  searchCompanies(term): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Company[]>(`${this.CompanyUrl}/?name=${term}`)
    
  }
 




  }



