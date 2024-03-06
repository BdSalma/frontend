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
import { RequestsComponent } from './requests/requests.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { DevisComponent } from './devis/devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RequestsIndexComponent } from './requests-index/requests-index.component';
import { DevisBySocietyComponent } from './devis-by-society/devis-by-society.component';
import { MyInvoicesComponent } from './my-invoices/my-invoices.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AssociationsComponent } from './Users/associations/associations.component';
import { IndividualsComponent } from './Users/individuals/individuals.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { NotApprovedComponent } from './not-approved/not-approved.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboradComponent },
  { path: 'supplyrequests', component: RequestsComponent },
  { path: 'addRequest', component: AddRequestComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'addInvoice/:requestId', component: AddInvoiceComponent },
  { path: 'devis/:requestId', component: DevisComponent },
  { path: 'devis', component: DevisBySocietyComponent },
  { path: 'addDevis', component: AddDevisComponent },
  { path: 'editInvoice/:id', component: UpdateInvoiceComponent },
  { path: 'editDevis/:id', component: UpdateDevisComponent },
  { path: 'editRequest/:id', component: UpdateRequestComponent },
  { path: 'createDevisAndAssignToRequest/:requestId', component: AddDevisComponent },
  { path: 'supply-requests', component: RequestsIndexComponent },
  { path: 'my-invoices/:societyId', component: MyInvoicesComponent },
  { path: 'emailVerification', component: EmailVerificationComponent },
  { path: 'notApproved', component: NotApprovedComponent },
  { path: 'dashboard', component: DashboradComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'dashboard', component: DashboradComponent },
  { path: 'index', component: IndexComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
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
  { path: 'table', component: TableComponent },
  { path: 'map', component: MapComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'rtl', component: RtlComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'virtualReality', component: VirtualRealityComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
