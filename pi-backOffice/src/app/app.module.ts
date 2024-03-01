import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OffersComponent } from './offers/offers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsComponent } from './requests/requests.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { DevisComponent } from './devis/devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { UpdateRequestComponent } from './update-request/update-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    BillingComponent,
    ProfileComponent,
    IconsComponent,
    SignInComponent,
    SignUpComponent,
    TableComponent,
    MapComponent,
    NotificationsComponent,
    RtlComponent,
    TemplateComponent,
    TypographyComponent,
    VirtualRealityComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    OffersComponent,
    RequestsComponent,
    AddRequestComponent,
    InvoicesComponent,
    AddInvoiceComponent,
    DevisComponent,
    AddDevisComponent,
    UpdateInvoiceComponent,
    UpdateDevisComponent,
    UpdateRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
