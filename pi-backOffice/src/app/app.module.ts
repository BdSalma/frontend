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
import { CandidatureComponent } from './candidature/candidature.component';
import { MapComponent } from './map/map.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RtlComponent } from './rtl/rtl.component';
import { TemplateComponent } from './template/template.component';
import { TypographyComponent } from './typography/typography.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateComponent } from './candidature/update.component';
import { InterviewComponent } from './interview/interview.component';
import { ListInterviewComponent } from './interview/list-interview/list-interview.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NotApprovedComponent } from './not-approved/not-approved.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AssociationsComponent } from './Users/associations/associations.component';
import { IndividualsComponent } from './Users/individuals/individuals.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { OffersComponent } from './offers/offers.component';
import { HttpClientModule } from '@angular/common/http';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import { OfferBySocietyComponent } from './offer-by-society/offer-by-society.component';
import { IndexComponent } from './index/index.component';
import { NavbarIndexComponent } from './navbar-index/navbar-index.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListCandidatureComponent } from './list-candidature/list-candidature.component';
import { PostulerComponent } from './postuler/postuler.component';
import { Authentication } from './services/authentication.service';
import { IndexOffersComponent } from './index-offers/index-offers.component';
import { PageOffersComponent } from './page-offers/page-offers.component';
import { ListOffersComponent } from './list-offers/list-offers.component';
import { NgModule } from '@angular/core';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UserLitComponent } from './user-lit/user-lit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EditSposorComponent } from './edit-sposor/edit-sposor.component';
import { UserService } from './service/user-service.service';
import { DetailCandidatComponent } from './detail-candidat/detail-candidat.component';
import { UpdateInterviewComponent } from './interview/update-interview/update-interview.component';
import { InterviewValiderComponent } from './interview/interview-valider/interview-valider.component';

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
    CandidatureComponent,
    MapComponent,
    NotificationsComponent,
    RtlComponent,
    TemplateComponent,
    TypographyComponent,
    VirtualRealityComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CandidatureComponent,
    UpdateComponent,
    InterviewComponent,
    ListInterviewComponent,
    ReclamationComponent,
    NotFoundComponent,
    EmailVerificationComponent,
    NotApprovedComponent,
    UpdateProfileComponent,
    AssociationsComponent,
    IndividualsComponent,
    UserDetailsComponent,
    OffersComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    DetailOfferComponent,
    OfferBySocietyComponent,
    IndexComponent,
    FooterIndexComponent,
    NavbarIndexComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    ListCandidatureComponent,
    PostulerComponent,
    AboutUsComponent,
    IndexOffersComponent,
    PageOffersComponent,
    ListOffersComponent,
    FeedBackComponent,
    UserLitComponent,
    UserFormComponent,
    EditSposorComponent,
    DetailCandidatComponent,
    UpdateInterviewComponent,
    InterviewValiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      tapToDismiss:true,
      closeButton:true,
      preventDuplicates:true,
      progressBar:true,
      disableTimeOut:false,
      positionClass: 'toast-top-right',
    }),

  ],
  providers: [Authentication,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
