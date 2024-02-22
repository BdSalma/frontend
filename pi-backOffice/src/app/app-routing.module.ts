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
import { ForumComponent } from './ForumComponenets/forum/forum.component';
import { AddForumComponent } from './ForumComponenets/add-forum/add-forum.component';
import { AboutComponent } from './FrontOffice/about/about.component';
import { StandListComponent } from './StandComponents/stand-list/stand-list.component';
import { PacksListComponent } from './PackComponents/packs-list/packs-list.component';
import { AddStandComponent } from './StandComponents/add-stand/add-stand.component';
import { AddPackComponent } from './PackComponents/add-pack/add-pack.component';
import { EditPackComponent } from './PackComponents/edit-pack/edit-pack.component';
import { EditStandComponent } from './StandComponents/edit-stand/edit-stand.component';
import { EditForumComponent } from './ForumComponenets/edit-forum/edit-forum.component';
const routes: Routes = [
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
{path:'forumList',component:ForumComponent},
{path:'addForum',component:AddForumComponent},
{path:'about',component:AboutComponent},
{path:'standList',component:StandListComponent},
{path:'packList',component:PacksListComponent},
{path:'addStand',component:AddStandComponent},
{path:'addPack',component:AddPackComponent},
{path: 'editPack/:id', component: EditPackComponent },
{path: 'editStand/:id', component: EditStandComponent },
{path: 'editForum/:id', component: EditForumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
