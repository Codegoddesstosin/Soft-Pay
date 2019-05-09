import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


constructor(private loginservice:LoginService,
              private router:Router,
) {}

  ngOnInit() {

  }

loginUser(email, pass)

{
  let authtoken = "trhtyevgeuuoosgthwuioosfqywiopepeyueoppdxpd";
  let user = {
    identifier: email,
    password: pass

 }
   
  this.loginservice.authenticateUser(user)
   .subscribe(
   res => (
    this.router.navigateByUrl('overview/admin'),
    localStorage.setItem('token', authtoken),
    err => (console.log(err))
   )
   
  )
     
    
}


 


}
