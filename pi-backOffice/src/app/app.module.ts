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
import { ForumComponent } from './ForumComponenets/forum/forum.component';
import { AddForumComponent } from './ForumComponenets/add-forum/add-forum.component';
import { ForumServiceComponent } from './Service/forum-service/forum-service.component';
import { PackServiceComponent } from './Service/pack-service/pack-service.component';
import { StandServiceComponent } from './Service/stand-service/stand-service.component';
import { AboutComponent } from './FrontOffice/about/about.component';
import { BlogSingleComponent } from './FrontOffice/blog-single/blog-single.component';
import { BlogComponent } from './FrontOffice/blog/blog.component';
import { ContactComponent } from './FrontOffice/contact/contact.component';
import { IndexComponent } from './FrontOffice/index/index.component';
import { ScheduleComponent } from './FrontOffice/schedule/schedule.component';
import { SpeakersComponent } from './FrontOffice/speakers/speakers.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { NavbarFrontComponent } from './FrontOffice/navbar-front/navbar-front.component';

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
    ForumComponent,
    AddForumComponent,
    ForumServiceComponent,
    PackServiceComponent,
    StandServiceComponent,
    AboutComponent,
    BlogSingleComponent,
    BlogComponent,
    ContactComponent,
    IndexComponent,
    ScheduleComponent,
    SpeakersComponent,
    FooterFrontComponent,
    NavbarFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
