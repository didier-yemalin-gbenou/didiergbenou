import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    OrganizationsComponent,
    WishlistComponent,
    ContactComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
