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
import {OffersComponent} from './offers/offers.component';
import { RequestsComponent } from './requests/requests.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { DevisComponent } from './devis/devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboradComponent },
{path:'dashboard',component:DashboradComponent},
{path:'billing',component:BillingComponent},
{path:'profile',component:ProfileComponent},
{path:'icons',component:IconsComponent},
{path:'signIn',component:SignInComponent},
{path:'signUp',component:SignUpComponent},
{path:'table',component:TableComponent},
{path:'map',component:MapComponent},
{path:'notification',component:NotificationsComponent},
{path:'rtl',component:RtlComponent},
{path:'template',component:TemplateComponent},
{path:'typography',component:TypographyComponent},
{path:'virtualReality',component:VirtualRealityComponent},
{path:'offers',component:OffersComponent},
{path:'supplyrequests',component:RequestsComponent},
{path:'addRequest',component:AddRequestComponent},
{path:'invoices',component:InvoicesComponent},
{path:'addInvoice',component:AddInvoiceComponent},
{path:'devis',component:DevisComponent},
{path:'addDevis',component:AddDevisComponent},
{path:'editInvoice/:id',component:UpdateInvoiceComponent},
{path:'editDevis/:id',component:UpdateDevisComponent},
{path:'editRequest/:id',component:UpdateRequestComponent},
{ path: 'add-devis/:requestId', component: AddDevisComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
