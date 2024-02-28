import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';import { DashboradComponent } from './dashborad/dashborad.component';
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
import { OffersComponent } from './offers/offers.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import { OfferBySocietyComponent } from './offer-by-society/offer-by-society.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInIndexComponent } from './sign-in-index/sign-in-index.component';
import { SignUpIndexComponent } from './sign-up-index/sign-up-index.component';
import { IndexOffersComponent } from './index-offers/index-offers.component';
import { PageOffersComponent } from './page-offers/page-offers.component';
const routes: Routes = [
{path:'',component:IndexComponent},
{path:'moreOffers',component:PageOffersComponent},
{path:'offersIndex',component:IndexOffersComponent},
{path:'offre',component:OffersComponent},
{path:'offerBySociety',component:OfferBySocietyComponent},
{path:'DetailOffre/:id',component:DetailOfferComponent},
{path:'editOffer/:id',component:UpdateOfferComponent},
{path:'addOffer',component:AddOfferComponent},
{path:'dashboard',component:DashboradComponent},
{path:'index',component:IndexComponent},
{path:'contact',component:ContactUsComponent},
{path:'about',component:AboutUsComponent},
{path:'billing',component:BillingComponent},
{path:'profile',component:ProfileComponent},
{path:'icons',component:IconsComponent},
{path:'signIn',component:SignInComponent},
{path:'signInindex',component:SignInIndexComponent},
{path:'signUpindex',component:SignUpIndexComponent},
{path:'signUp',component:SignUpComponent},
{path:'table',component:TableComponent},
{path:'map',component:MapComponent},
{path:'notification',component:NotificationsComponent},
{path:'rtl',component:RtlComponent},
{path:'template',component:TemplateComponent},
{path:'typography',component:TypographyComponent},
{path:'virtualReality',component:VirtualRealityComponent},

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
