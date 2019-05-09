import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({

    'Content-Type': 'application/json-patch+json' 
  })
}


@Injectable({
  providedIn: 'root'
})

export class ViewDetailService {




  

constructor(private http:HttpClient,
  private route: ActivatedRoute
) { }
   



    getCompany<Data>(id: number ):Observable<Company[]> {
      const CompanyUrl:string = `https://mercatordcr.azurewebsites.net/api/Company/${id}`;
      const url = `${CompanyUrl}/?id=${id}`;
    return this.http.get<Company[]>(`${CompanyUrl}`)
   
  }


 



}