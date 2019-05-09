import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  ParamMap } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }



  showadmin(){
    this.router.navigate(['admin'], {relativeTo: this.route});
  }

  showcompany(){
     this.router.navigate(['company'], {relativeTo: this.route});
  }

  logout()
  {
    this.router.navigate(['login'], {relativeTo: this.route});
  }
}
