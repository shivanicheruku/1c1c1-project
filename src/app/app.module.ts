import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import {RouterModule} from '@angular/router';
import { ViewaccountsComponent } from './viewaccounts/viewaccounts.component';
import { StatementsComponent } from './statements/statements.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ViewbalanceComponent,
    ViewaccountsComponent,
    StatementsComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{path: 'view-balance', component: ViewbalanceComponent},
      {path:'view-dashboard',component:DashboardComponent, outlet:'dashboard-route'},
      {path:'view-accounts', component:ViewaccountsComponent},
      {path:'view-statements',component:StatementsComponent},
      {path:'sign-up',component:SignupComponent},
      {path:'log-in',component:LoginComponent},
    {path:'',component:LandingPageComponent},
    {path:'view-home',component:HomeComponent}
  ]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
