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
import { HttpClientModule } from '@angular/common/http';
import { PacksListComponent } from './PackComponents/packs-list/packs-list.component';
import { AddPackComponent } from './PackComponents/add-pack/add-pack.component';
import { AddStandComponent } from './StandComponents/add-stand/add-stand.component';
import { StandListComponent } from './StandComponents/stand-list/stand-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPackComponent } from './PackComponents/edit-pack/edit-pack.component';
import { EditStandComponent } from './StandComponents/edit-stand/edit-stand.component';
import { EditForumComponent } from './ForumComponenets/edit-forum/edit-forum.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForumPacksComponent } from './forum-packs/forum-packs.component';

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
    PacksListComponent,
    AddPackComponent,
    AddStandComponent,
    StandListComponent,
    EditPackComponent,
    EditStandComponent,
    EditForumComponent,
    PopUpComponent,
    ForumPacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
