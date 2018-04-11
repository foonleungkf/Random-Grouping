import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

import {HttpModule} from "@angular/http";
import {MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './maincontent/maincontent.component';
import { GroupedMembersComponent } from './grouped-members/grouped-members.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      MainContentComponent,
      GroupedMembersComponent
   ],
   
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      HttpModule,
      MatTableModule,
      MatInputModule
   ],
   
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule { }