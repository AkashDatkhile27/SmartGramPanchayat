import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SchemeComponent } from './scheme/scheme.component';
import { HomeComponent } from './home/home.component';
import { SRgisterComponent } from './srgister/srgister.component';
import { SLoginComponent } from './slogin/slogin.component';
import { ScheckStatusComponent } from './scheck-status/scheck-status.component';
import { SapplicationformComponent } from './sapplicationform/sapplicationform.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { ComplaintboxComponent } from './complaint/complaintbox/complaintbox.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SchemelistComponent } from './dashboard/schemelist/schemelist.component';
import { AdminloginComponent } from './dashboard/adminlogin/adminlogin.component';
import { ComplaintlistComponent } from './dashboard/complaintlist/complaintlist.component';



const routes: Routes = [
  {  path: '',redirectTo:'Home',pathMatch:'full'},
  {  path: 'Home',component: HomeComponent},
  { path: 'Gallery', component: GalleryComponent },
 { path: 'Scheme', component: SchemeComponent },
 { path: 'SchemeRegister', component: SRgisterComponent },
  {path:'SLogin',component:SLoginComponent},
  {path:'schemecheckStatus',component:ScheckStatusComponent},
  {path:'SApplication',component:SapplicationformComponent},
  {path:'About',component:AboutusComponent},
  {path:'complaint',component:ComplaintboxComponent},
  { path: 'forgotpass', component:ForgotpassComponent },
  { path: 'varify-email', component:VerifyEmailComponent },
  { path: 'Admin', component: AdminloginComponent },
  { path: 'complaintlist', component: ComplaintlistComponent },
  { path: 'schemelist', component: SchemelistComponent }


// { path: 'aboutus', component: DummyComponent },
// { path: 'signup', component: DummyComponent },
// ];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SRgisterComponent,SLoginComponent,ScheckStatusComponent]