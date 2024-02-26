import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import { OfferBySocietyComponent } from './offer-by-society/offer-by-society.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { IndexComponent } from './index/index.component';
import { NavbarIndexComponent } from './navbar-index/navbar-index.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInIndexComponent } from './sign-in-index/sign-in-index.component';
import { SignUpIndexComponent } from './sign-up-index/sign-up-index.component';

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
    AddOfferComponent,
    UpdateOfferComponent,
    DetailOfferComponent,
    OfferBySocietyComponent,
    IndexComponent,
    NavIndexComponent,
    FooterIndexComponent,
    NavbarIndexComponent,
    FooterIndexComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    SignInIndexComponent,
    SignUpIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
