import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ProfComponent } from './prof/prof.component';

import { DhbwService } from './dhbw.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ DhbwService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
