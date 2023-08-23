import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { MuralTemplateComponent } from './mural-template/mural-template.component'
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { CaliforniaComponent } from './california/california.component';

const routes: Routes = [
  {path: 'mural', component: MuralTemplateComponent},
  {path: 'menu', component: MenuTemplateComponent },
  {path: 'california', component: CaliforniaComponent},
  {path: '', redirectTo:'/menu', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
