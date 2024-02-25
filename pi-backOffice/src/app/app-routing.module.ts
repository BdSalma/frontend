import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { IconsComponent } from './icons/icons.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RtlComponent } from './rtl/rtl.component';
import { TemplateComponent } from './template/template.component';
import { TypographyComponent } from './typography/typography.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInIndexComponent } from './sign-in-index/sign-in-index.component';
import { SignUpIndexComponent } from './sign-up-index/sign-up-index.component';
const routes: Routes = [
{path:'dashboard',component:DashboradComponent},
{path:'index',component:IndexComponent},
{path:'contact',component:ContactUsComponent},
{path:'about',component:AboutUsComponent},
{path:'billing',component:BillingComponent},
{path:'profile',component:ProfileComponent},
{path:'icons',component:IconsComponent},
{path:'signIn',component:SignInComponent},
{path:'signInindex',component:SignInIndexComponent},
{path:'signUpindex',component:SignUpIndexComponent},
{path:'signUp',component:SignUpComponent},
{path:'table',component:TableComponent},
{path:'map',component:MapComponent},
{path:'notification',component:NotificationsComponent},
{path:'rtl',component:RtlComponent},
{path:'template',component:TemplateComponent},
{path:'typography',component:TypographyComponent},
{path:'virtualReality',component:VirtualRealityComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
