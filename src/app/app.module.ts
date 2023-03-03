import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DiseasesComponent } from './diseases/diseases.component';
import { FeedsComponent } from './feeds/feeds.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';
import { CattlemarketsComponent } from './cattlemarkets/cattlemarkets.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BreedsComponent } from './breeds/breeds.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    DiseasesComponent,
    FeedsComponent,
    HeaderComponent,
    FooterComponent,
    VeterinarianComponent,
    CattlemarketsComponent,
    MedicineComponent,
    BreedsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
    // RouterModule.forRoot([
    //   // {path: "", component: HomeComponent},
    //   // {path: "post", component: PostComponent},
    //   // {path: "disease", component: DiseasesComponent},
    //   // {path: "vet", component: VeterinarianComponent},
    //   // {path: "feed", component: FeedsComponent},
    //   // {path: "market", component: CattlemarketsComponent},
    //   // {path: "breed", component: BreedsComponent},
    //   // {path: "medicine", component: MedicineComponent}
    // ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
