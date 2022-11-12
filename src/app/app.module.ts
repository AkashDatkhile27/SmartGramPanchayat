import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SchemeComponent } from './scheme/scheme.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { CheckboxModule } from 'angular-bootstrap-md';
import {  WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SLoginComponent } from './slogin/slogin.component';
import { ScheckStatusComponent } from './scheck-status/scheck-status.component';
import { SchemenavComponent } from './schemenav/schemenav.component';
import { SapplicationformComponent } from './sapplicationform/sapplicationform.component';
import { AboutModule } from './about/about.module';
import { ComplaintModule } from './complaint/complaint.module';
import{AngularFireModule}from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    SchemeComponent,
    routingComponents,
    SLoginComponent,
    ScheckStatusComponent,
    SchemenavComponent,
    SapplicationformComponent,
    VerifyEmailComponent,
    ForgotpassComponent,
    StudentComponent,
    

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatAutocompleteModule,MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatRadioModule,
    MatGridListModule,
    MdbAccordionModule,
    CheckboxModule,
    WavesModule, 
    ButtonsModule,
    InputsModule, 
    IconsModule, 
    CardsModule, 
    FormsModule, 
    ReactiveFormsModule,
    AboutModule,
    ComplaintModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
