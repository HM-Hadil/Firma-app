import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ShopComponent } from './components/shop/shop.component';
import { TeamComponent } from './components/team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { DetectionSolComponent } from './components/detection-sol/detection-sol.component';
import { SignupComponent } from './components/registrations/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/registrations/login/login.component'; // Import ReactiveFormsModule
import { RouterModule } from '@angular/router';
import { ProfileFallahComponent } from './components/profile-fallah/profile-fallah.component';
import { VenteProduitComponent } from './components/vente-produit/vente-produit.component';
import { ListeVenteComponent } from './components/vente/liste-vente/liste-vente.component';
import { ListAchatsComponent } from './components/achat/list-achats/list-achats.component';
import { AchatByIdComponent } from './components/achat/achat-by-id/achat-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    TeamComponent,
    DetectionSolComponent,
    SignupComponent,
    LoginComponent,
    ProfileFallahComponent,
    VenteProduitComponent,
    ListeVenteComponent,
    ListAchatsComponent,
    AchatByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
