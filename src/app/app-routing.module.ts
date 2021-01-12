import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioServicesComponent } from './portfolio-services/portfolio-services.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'portfolio-services', component: PortfolioServicesComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      // onSameUrlNavigation to specify what should happen if same link is clicked
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
