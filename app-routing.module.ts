import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAccessGuard } from "./admin-access.guard";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ClassBindComponent } from "./class-bind/class-bind.component";
import { CoursesDetailComponent } from "./courses-detail/courses-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { ReactiveComponent } from "./forms/reactive/reactive.component";
import { TemplateComponent } from "./forms/template/template.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PropBindComponent } from "./prop-bind/prop-bind.component";
import { TwoWayComponent } from "./two-way/two-way.component";

const routes:Routes = [
{path:'',redirectTo:'/two-way-bind',pathMatch:"full"},
{path:'template',component:TemplateComponent},
{path:'admin',component:AdminLoginComponent,
canActivate:[AdminAccessGuard]
},
{path:'reactive',component:ReactiveComponent},
{path:'courses',component:CoursesComponent,
children:[
    {path:'prop',component:PropBindComponent},
    {path:'class',component:ClassBindComponent}
]

},
{path:'courses/:id',component:CoursesDetailComponent},
{ path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
{path:'**',component:PageNotFoundComponent}


]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }