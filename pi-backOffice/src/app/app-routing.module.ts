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
import { CandidatureComponent} from './candidature/candidature.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { UpdateComponent } from './candidature/update.component';
import { InterviewComponent } from './interview/interview.component';
import { ListInterviewComponent } from './interview/list-interview/list-interview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboradComponent },
{path:'dashboard',component:DashboradComponent},
{path:'billing',component:BillingComponent},
{path:'profile',component:ProfileComponent},
{path:'icons',component:IconsComponent},
{path:'candidat',component:CandidatureComponent},
{path:'signIn',component:SignInComponent},
{path:'signUp',component:SignUpComponent},
{path:'table',component:TableComponent},
{path:'map',component:MapComponent},
{path:'notification',component:NotificationsComponent},
{path:'rtl',component:RtlComponent},
{path:'template',component:TemplateComponent},
{path:'typography',component:TypographyComponent},
{path:'virtualReality',component:VirtualRealityComponent},
{path:'updateC/:id',component:UpdateComponent},
{path:'addInterv/:id',component:InterviewComponent},
{path:'listInterv',component:ListInterviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
