import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './landing/landing/landing.component';
import { AllMessagesComponent } from './messages/all-messages/all-messages.component';
import { CreateMessageComponent } from './messages/create-message/create-message.component';
import { MyMessagesComponent } from './messages/my-messages/my-messages.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create-message',
        component: CreateMessageComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'my-messages',
        component: MyMessagesComponent,
        canActivateChild: [AuthGuard],
      },

      {
        path: 'all-messages',
        component: AllMessagesComponent,
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
