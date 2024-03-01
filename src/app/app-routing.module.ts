import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { TeamComponent } from './components/team/team.component';
import { DetectionSolComponent } from './components/detection-sol/detection-sol.component';
import { SignupComponent } from './components/registrations/signup/signup.component';
import { LoginComponent } from './components/registrations/login/login.component';
import { ProfileFallahComponent } from './components/profile-fallah/profile-fallah.component';
import { VenteProduitComponent } from './components/vente-produit/vente-produit.component';
import { AchatByIdComponent } from './components/achat/achat-by-id/achat-by-id.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"shop",component:ShopComponent},
  {path:"team",component:TeamComponent},
  {path:"detection",component:DetectionSolComponent},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"profile",component:ProfileFallahComponent},
{path:"venteProduit",component:VenteProduitComponent},
{path:"shopId/:id",component:AchatByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
