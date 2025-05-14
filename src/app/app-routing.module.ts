import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';

//l'ordre intervient dans le route
const routes: Routes = [
  {
    path:'create' ,
    pathMatch:'full',
    redirectTo:'login',
  },
  {
  path:'' ,
  //c pour le securite matching complé de route
  pathMatch:'full',
  component:LoginComponent,
},
{
  path:'create' ,
  pathMatch:'full',
  component:MemberFormComponent,
},
{
  path:'edit/:id' ,
  pathMatch:'full',
  component:MemberFormComponent,
},
{
  path:'dashboard' ,
  pathMatch:'full',
  component:DashboardComponent,
},
{
  path:'tools' ,
  pathMatch:'full',
  component:ToolsComponent,
},
{
  path:'events' ,
  pathMatch:'full',
  component:EventsComponent,
},
{
  path:'articles' ,
  pathMatch:'full',
  component:ArticleComponent,
},

{
  path:'login' ,
  pathMatch:'full',
  component:LoginComponent,
},
{
  path:'**' ,
  component:MemberComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
