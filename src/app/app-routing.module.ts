import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { CattlemarketsComponent } from './cattlemarkets/cattlemarkets.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { FeedsComponent } from './feeds/feeds.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PostComponent } from './post/post.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "post", component: PostComponent},
  {path: "disease", component: DiseasesComponent},
  {path: "vet", component: VeterinarianComponent},
  {path: "feed", component: FeedsComponent},
  {path: "market", component: CattlemarketsComponent},
  {path: "breed", component: BreedsComponent},
  {path: "medicine", component: MedicineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
