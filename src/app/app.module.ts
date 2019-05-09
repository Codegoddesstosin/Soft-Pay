import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FilterPipe} from './components/company/filter.pipe';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginGuard } from './login.guard';

import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ParentComponent } from './components/parent/parent.component';
import { HelpDeskComponent } from './components/help-desk/help-desk.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    CompanyComponent,
    FilterPipe,
    ViewDetailComponent,
    ParentComponent,
    HelpDeskComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
