import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryService } from './category.service';
import { Config } from './app.constants';
import { Method } from './app.methods';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ListComponent,
    HomeComponent,
    DetailComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CategoryService,Config,Method],
  bootstrap: [AppComponent]
})
export class AppModule { }
