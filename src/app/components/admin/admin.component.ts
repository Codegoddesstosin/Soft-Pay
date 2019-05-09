import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../company';
import { AdminService } from '../../services/admin.service';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
company: Company[];
companylength;
companylocation;


constructor(private adminService:AdminService,
            private companyService:CompanyService
) { }

  ngOnInit() {

     this.adminService.getCompany().subscribe(Company => {
     this.company = Company;
     this.companylength = Company.length

  
  	 });


    

  }

  getTotalLocation() {
   this.adminService.getCompany().subscribe
   (Company=>{
    
   })
   
      

  }


  

}
