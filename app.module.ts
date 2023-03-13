import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NamesComponent } from './Dependency/names/names.component';
import { PricesComponent } from './Dependency/prices/prices.component';
import { C1Component } from './Behaviour_Subject/c1/c1.component';
import { C2Component } from './Behaviour_Subject/c2/c2.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { ReactiveBuilderComponent } from './forms/reactive-builder/reactive-builder.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from  '@angular/common/http';
import { ApiDataComponent } from './api-data/api-data.component';
import { ParentCycleComponent } from './life-cycle/parent-cycle/parent-cycle.component';
import { ChildCycleComponent } from './life-cycle/child-cycle/child-cycle.component';
import { DocheckComponent } from './life-cycle/docheck/docheck.component';
import { ContentProjComponent } from './projection/content-proj/content-proj.component';
import { ParentContentComponent } from './projection/parent-content/parent-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassBindComponent,
    PropBindComponent,
    StyleBindComponent,
    TwoWayComponent,
    ParentComponent,
    ChildComponent,
    NamesComponent,
    PricesComponent,
    C1Component,
    C2Component,
    TemplateComponent,
    ReactiveComponent,
    ReactiveBuilderComponent,
    CoursesComponent,
    CoursesDetailComponent,
    PageNotFoundComponent,
    AdminLoginComponent,
    ApiDataComponent,
    ParentCycleComponent,
    ChildCycleComponent,
    DocheckComponent,
    ContentProjComponent,
    ParentContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
