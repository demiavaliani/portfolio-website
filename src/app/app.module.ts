import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioServicesComponent } from './portfolio-services/portfolio-services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomePageComponent, AboutMeComponent, PortfolioServicesComponent, ProjectsComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
