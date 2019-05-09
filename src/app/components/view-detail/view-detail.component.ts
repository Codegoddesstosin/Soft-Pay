import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../company';
import { ActivatedRoute } from '@angular/router';
import { ViewDetailService } from '../../services/viewdetail.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

company: Company[];

  constructor( private route: ActivatedRoute,
  private ViewDetailService: ViewDetailService,
  private location: Location) { }

  ngOnInit() {
      
    const id = +this.route.snapshot.paramMap.get('id');
    
  }


  getCompany(id){
    
    this.ViewDetailService.getCompany(id).subscribe(Company => {
    this.company = Company

  }


      );
  }

}
