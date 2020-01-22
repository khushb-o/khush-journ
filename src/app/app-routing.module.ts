import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { IdeaSubmitComponent } from './idea-submit/idea-submit.component';
import { SolutionSubmitComponent } from './solution-submit/solution-submit.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'idea',  component: IdeaSubmitComponent },
  {
    path: 'solution',
    component: SolutionSubmitComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/LoginpageComponent',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
