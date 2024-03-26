import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './acount/profile/profile.component';
import { SignInComponent } from './acount/sign-in/sign-in.component';
import { SignUpComponent } from './acount/sign-up/sign-up.component';
import { CandidatureComponent } from './candidature management/candidature/candidature.component';
import { RequestsComponent } from './requests management/requests/requests.component';
import { AddRequestComponent } from './requests management/add-request/add-request.component';
import { InvoicesComponent } from './invoices management/invoices/invoices.component';
import { AddInvoiceComponent } from './invoices management/add-invoice/add-invoice.component';
import { DevisComponent } from './devis management/devis/devis.component';
import { AddDevisComponent } from './devis management/add-devis/add-devis.component';
import { UpdateInvoiceComponent } from './invoices management/update-invoice/update-invoice.component';
import { UpdateDevisComponent } from './invoices management/update-devis/update-devis.component';
import { UpdateRequestComponent } from './requests management/update-request/update-request.component';
import { IndexComponent } from './screens/index/index.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { RequestsIndexComponent } from './requests management/requests-index/requests-index.component';
import { DevisBySocietyComponent } from './devis management/devis-by-society/devis-by-society.component';
import { MyInvoicesComponent } from './invoices management/my-invoices/my-invoices.component';
import { UpdateProfileComponent } from './acount/update-profile/update-profile.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NotFoundComponent } from './globals/not-found/not-found.component';
import { AssociationsComponent } from './Users/associations/associations.component';
import { IndividualsComponent } from './Users/individuals/individuals.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { NotApprovedComponent } from './globals/not-approved/not-approved.component';
import { EmailVerificationComponent } from './globals/email-verification/email-verification.component';
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

import { UpdateComponent } from './candidature management/candidature/update.component';
import { InterviewComponent } from './interview/interview.component';
import { ListInterviewComponent } from './interview/list-interview/list-interview.component';

import { ListCandidatureComponent } from './candidature management/list-candidature/list-candidature.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ReclamationComponent } from './reclamation management/reclamation/reclamation.component';

import { OffersComponent } from './offers management/offers/offers.component';
import { AddOfferComponent } from './offers management/add-offer/add-offer.component';
import { UpdateOfferComponent } from './offers management/update-offer/update-offer.component';
import { DetailOfferComponent } from './offers management/detail-offer/detail-offer.component';
import { OfferBySocietyComponent } from './offers management/offer-by-society/offer-by-society.component';

import { IndexOffersComponent } from './offers management/index-offers/index-offers.component';
import { PageOffersComponent } from './offers management/page-offers/page-offers.component';
import { ListOffersComponent } from './offers management/list-offers/list-offers.component';

import { FeedBackComponent } from './reclamation management/feed-back/feed-back.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './screens/dashborad/dashborad.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { UpdatePassowrdComponent } from './acount/update-passowrd/update-passowrd.component';
import { ResetPassowrdComponent } from './acount/reset-passowrd/reset-passowrd.component';
import { FavoriteComponent } from './reclamation management/favorite/favorite.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'moreOffers', component: PageOffersComponent },
  { path: 'offersIndex', component: IndexOffersComponent },
  { path: 'offre', component: OffersComponent },
  {
    path: 'offerBySociety',
    component: OfferBySocietyComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'DetailOffre/:id', component: DetailOfferComponent },
  { path: 'editOffer/:id', component: UpdateOfferComponent },
  { path: 'feed/favorite', component: FavoriteComponent },

  { path: 'addOffer', component: AddOfferComponent },
  {
    path: 'dashboard',
    component: DashboradComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'candidat/:id', component: CandidatureComponent },
  { path: 'updateC/:id', component: UpdateComponent },
  { path: 'addInterv/:id', component: InterviewComponent },
  { path: 'listInterv', component: ListInterviewComponent },
  {
    path: 'listCandidat',
    component: ListCandidatureComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'postuler/:id', component: PostulerComponent },
  {
    path: 'supplyrequests',
    component: RequestsComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'addRequest', component: AddRequestComponent },
  { path: 'supply-requests', component: RequestsIndexComponent },
  {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'my-invoices/:societyId', component: MyInvoicesComponent },
  { path: 'addInvoice/:requestId', component: AddInvoiceComponent },
  { path: 'devis/:requestId', component: DevisComponent },
  {
    path: 'devis',
    component: DevisBySocietyComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'addDevis', component: AddDevisComponent },
  { path: 'editInvoice/:id', component: UpdateInvoiceComponent },
  { path: 'editDevis/:id', component: UpdateDevisComponent },
  { path: 'editRequest/:id', component: UpdateRequestComponent },
  {
    path: 'createDevisAndAssignToRequest/:requestId',
    component: AddDevisComponent,
  },
  {
    path: 'reclamation',
    component: ReclamationComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'feed', component: FeedBackComponent },
  {
    path: 'forumList',
    component: ForumComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'addForum', component: AddForumComponent },
  { path: 'editForum/:id', component: EditForumComponent },
  { path: 'packForum', component: ForumPacksComponent },
  {
    path: 'packList',
    component: PacksListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'standList',
    component: StandListComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'addStand', component: AddStandComponent },
  { path: 'addPack', component: AddPackComponent },
  { path: 'editPack/:id', component: EditPackComponent },
  { path: 'editStand/:id', component: EditStandComponent },
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
  {
    path: 'update-password',
    component: UpdatePassowrdComponent,
    // canActivate: [AuthGuardGuard],
  },
  {
    path: 'forget-password',
    component: ResetPassowrdComponent,
    // canActivate: [AuthGuardGuard],
  },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'emailVerification', component: EmailVerificationComponent },
  { path: 'notApproved', component: NotApprovedComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
