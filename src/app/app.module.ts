import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioSecionComponent } from './portfolio-secion/portfolio-secion.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { FooterComponent } from './footer/footer.component';
import { MoreComponent } from './more/more.component';
import { AboutDetailsComponent } from './about-details/about-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    AboutMeComponent,
  
    HomeComponent,
    ProjectsComponent,
    PortfolioSecionComponent,
    PortfolioHeaderComponent,
    PortfolioProjectComponent,
    FooterComponent,
    MoreComponent,
    AboutDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
