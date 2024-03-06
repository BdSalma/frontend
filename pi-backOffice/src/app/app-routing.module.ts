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


import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ListCandidatureComponent } from './list-candidature/list-candidature.component';
import { PostulerComponent } from './postuler/postuler.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NotApprovedComponent } from './not-approved/not-approved.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { IndividualsComponent } from './Users/individuals/individuals.component';
import { AssociationsComponent } from './Users/associations/associations.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboradComponent },
{path:'dashboard',component:DashboradComponent},
{path:'index',component:IndexComponent},
{path:'about',component:AboutUsComponent},
{path:'candidat',component:CandidatureComponent},
{path:'table',component:TableComponent},
{path:'map',component:MapComponent},
{path:'notification',component:NotificationsComponent},
{path:'template',component:TemplateComponent},
{path:'updateC/:id',component:UpdateComponent},
{path:'addInterv/:id',component:InterviewComponent},
{path:'listInterv',component:ListInterviewComponent},
{path:'listCandidat',component:ListCandidatureComponent},
{path:'postuler',component:PostulerComponent},
  { path: '', pathMatch: 'full', component: DashboradComponent },
  { path: 'emailVerification', component: EmailVerificationComponent },
  { path: 'notApproved', component: NotApprovedComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'billing', component: BillingComponent },
  {
    path: 'individuals',
    component: IndividualsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'associations',
    component: AssociationsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'icons', component: IconsComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'rtl', component: RtlComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'virtualReality', component: VirtualRealityComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
