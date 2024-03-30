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

import { UpdateComponent } from './candidature/update.component';
import { InterviewComponent } from './interview/interview.component';
import { ListInterviewComponent } from './interview/list-interview/list-interview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { NotApprovedComponent } from './not-approved/not-approved.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AssociationsComponent } from './Users/associations/associations.component';
import { IndividualsComponent } from './Users/individuals/individuals.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { OffersComponent } from './offers/offers.component';
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
import { RequestsIndexComponent } from './requests-index/requests-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevisBySocietyComponent } from './devis-by-society/devis-by-society.component';
import { MyInvoicesComponent } from './my-invoices/my-invoices.component';
import { ForumComponent } from './ForumComponenets/forum/forum.component';
import { AddForumComponent } from './ForumComponenets/add-forum/add-forum.component';
import { PacksListComponent } from './PackComponents/packs-list/packs-list.component';
import { AddPackComponent } from './PackComponents/add-pack/add-pack.component';
import { AddStandComponent } from './StandComponents/add-stand/add-stand.component';
import { StandListComponent } from './StandComponents/stand-list/stand-list.component';
import { EditPackComponent } from './PackComponents/edit-pack/edit-pack.component';
import { EditStandComponent } from './StandComponents/edit-stand/edit-stand.component';
import { EditForumComponent } from './ForumComponenets/edit-forum/edit-forum.component';
import { ForumPacksComponent } from './PackComponents/forum-packs/forum-packs.component';
import { ReservationPackComponent } from './PackComponents/reservation-pack/reservation-pack.component';
import { AllRequestsIndexComponent } from './all-requests-index/all-requests-index.component';
import { OldRequestsComponent } from './old-requests/old-requests.component';
import { OldInvoicesComponent } from './old-invoices/old-invoices.component';
import { MyOldInvoicesComponent } from './my-old-invoices/my-old-invoices.component';
import { OldDevisBySocietyComponent } from './old-devis-by-society/old-devis-by-society.component';

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
        RequestsComponent,
        AddRequestComponent,
        InvoicesComponent,
        AddInvoiceComponent,
        DevisComponent,
        AddDevisComponent,
        UpdateInvoiceComponent,
        UpdateDevisComponent,
        UpdateRequestComponent,
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
        RequestsIndexComponent,
        DevisBySocietyComponent,
        MyInvoicesComponent,
        ForumComponent,
        AddForumComponent,
        PacksListComponent,
        AddPackComponent,
        AddStandComponent,
        StandListComponent,
        EditPackComponent,
        EditStandComponent,
        EditForumComponent,
        ForumPacksComponent,
        ReservationPackComponent,
        AboutUsComponent,
    ListCandidatureComponent,
    PostulerComponent,
    AboutUsComponent,
    IndexOffersComponent,
    PageOffersComponent,
    ListOffersComponent,
    FeedBackComponent,
    AllRequestsIndexComponent,
    OldRequestsComponent,
    OldInvoicesComponent,
    MyOldInvoicesComponent,
    OldDevisBySocietyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            tapToDismiss: true,
            closeButton: true,
            preventDuplicates: true,
            progressBar: true,
            disableTimeOut: false,
            positionClass: 'toast-top-right',
        }),

    ],
    providers: [Authentication],
    bootstrap: [AppComponent]
})
export class AppModule { }
