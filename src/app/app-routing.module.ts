import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent }   from './components/admin/admin.component';

import { LoginComponent }   from './components/login/login.component';

import { CompanyComponent }   from './components/company/company.component';

import { HelpDeskComponent }   from './components/help-desk/help-desk.component'

import { HeroesComponent }      from './components/heroes/heroes.component';

import { ViewDetailComponent }  from './components/view-detail/view-detail.component';

import { ParentComponent }  from './components/parent/parent.component';


const routes: Routes = [

  { path: '', redirectTo:'login', pathMatch: 'full'},

   { path: 'new', component: HelpDeskComponent },
 
  { path: 'login', component: LoginComponent },
   
  {path: 'overview', component: ParentComponent,

  children: [
    
    { path: 'admin', component: AdminComponent },

    { path: 'company', component: CompanyComponent},
   
    { path: 'login', component: LoginComponent },
    
  ]},



{ path: 'detail/:id', component: ViewDetailComponent },


{ path: 'new', component: HelpDeskComponent }

]



@NgModule({

   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})

export class AppRoutingModule { }
