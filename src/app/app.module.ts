import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { IdeaSubmitComponent } from './idea-submit/idea-submit.component';
import { SolutionSubmitComponent } from './solution-submit/solution-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    IdeaSubmitComponent,
    SolutionSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
