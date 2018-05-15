import { ContactService } from './contact/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap';

import { ReCaptchaModule } from 'angular2-recaptcha';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule,
         MatCardModule,
         MatChipsModule,
         MatFormFieldModule,
         MatInputModule,
         MatSnackBarModule,
         MatTooltipModule,
         MatGridListModule,
         MatProgressBarModule,
         MatProgressSpinnerModule
        } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HandsOnComponent } from './hands-on/hands-on.component';
import { ProjectsComponent } from './hands-on/projects/projects.component';
import { SkillsComponent } from './hands-on/skills/skills.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    OrganizationsComponent,
    ContactComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HandsOnComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
      { path: 'hands-on', component: HandsOnComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent}
    ]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReCaptchaModule,
    FormsModule,
    HttpClientModule,

    TabsModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
