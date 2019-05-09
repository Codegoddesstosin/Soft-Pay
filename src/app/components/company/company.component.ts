import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../company';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute,  ParamMap } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
company: Company[];
companylength;


constructor(private companyService:CompanyService,
  private router: Router,
  private route:ActivatedRoute

) { }

  ngOnInit() {

     this.companyService.getCompany().subscribe(Company => {

     this.company = Company;
     this.companylength = Company.length;
  
  	 });


    

  }


}
