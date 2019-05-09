import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
     headers: new HttpHeaders({

    'Content-Type': 'application/json-patch+json' 
  })
}



@Injectable({
  providedIn: 'root'
})

 
export class LoginService {
user: User[];

constructor(private http:HttpClient) { }

authenticateUser(user:User):Observable<User>
{
	 const url = 'https://mercatordcr.azurewebsites.net/api/User/Authenticate'

	return this.http.post<User>(url, user, httpOptions)

}

isAuthenticated()
{
  return !!localStorage.getItem('token')
}
 


}