import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CandidatureComponent } from './candidature/candidature.component';
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
import { ForumComponent } from './ForumComponenets/forum/forum.component';
import { AddForumComponent } from './ForumComponenets/add-forum/add-forum.component';
import { StandListComponent } from './StandComponents/stand-list/stand-list.component';
import { PacksListComponent } from './PackComponents/packs-list/packs-list.component';
import { AddStandComponent } from './StandComponents/add-stand/add-stand.component';
import { AddPackComponent } from './PackComponents/add-pack/add-pack.component';
import { EditPackComponent } from './PackComponents/edit-pack/edit-pack.component';
import { EditStandComponent } from './StandComponents/edit-stand/edit-stand.component';
import { EditForumComponent } from './ForumComponenets/edit-forum/edit-forum.component';
import { ForumPacksComponent } from './PackComponents/forum-packs/forum-packs.component';
import { ReservationPackComponent } from './PackComponents/reservation-pack/reservation-pack.component';


import { UpdateComponent } from './candidature/update.component';
import { InterviewComponent } from './interview/interview.component';
import { ListInterviewComponent } from './interview/list-interview/list-interview.component';


import { ListCandidatureComponent } from './list-candidature/list-candidature.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


import { OffersComponent } from './offers/offers.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import { OfferBySocietyComponent } from './offer-by-society/offer-by-society.component';

import { IndexOffersComponent } from './index-offers/index-offers.component';
import { PageOffersComponent } from './page-offers/page-offers.component';
import { ListOffersComponent } from './list-offers/list-offers.component';

import { FeedBackComponent } from './feed-back/feed-back.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'moreOffers', component: PageOffersComponent },
  { path: 'offersIndex', component: IndexOffersComponent },
  { path: 'offre', component: OffersComponent },
  { path: 'offerBySociety', component: OfferBySocietyComponent },
  { path: 'DetailOffre/:id', component: DetailOfferComponent },
  { path: 'editOffer/:id', component: UpdateOfferComponent },
  { path: 'addOffer', component: AddOfferComponent },
  { path: 'dashboard', component: DashboradComponent },
  { path: 'index', component: IndexComponent },
  { path: 'candidat/:id', component: CandidatureComponent },
  { path: 'table', component: TableComponent },
  { path: 'map', component: MapComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'updateC/:id', component: UpdateComponent },
  { path: 'addInterv/:id', component: InterviewComponent },
  { path: 'listInterv', component: ListInterviewComponent },
  { path: 'listCandidat', component: ListCandidatureComponent},
  { path: 'postuler/:id', component: PostulerComponent },
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
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'feed', component: FeedBackComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'forumList', component: ForumComponent },
  { path: 'addForum', component: AddForumComponent },
  { path: 'standList', component: StandListComponent },
  { path: 'packList', component: PacksListComponent },
  { path: 'addStand', component: AddStandComponent },
  { path: 'addPack', component: AddPackComponent },
  { path: 'editPack/:id', component: EditPackComponent },
  { path: 'editStand/:id', component: EditStandComponent },
  { path: 'editForum/:id', component: EditForumComponent },
  { path: 'packForum', component: ForumPacksComponent },
  { path: 'reservationPack/:typePack', component: ReservationPackComponent },
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
