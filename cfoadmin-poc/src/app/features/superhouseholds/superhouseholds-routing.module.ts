import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHouseholdComponent } from './components/create-household/create-household.component';
import { SearchHouseholdsComponent } from './components/search-households/search-households.component';

const routes: Routes = [
  { path: 'superhouseholds/search', component: SearchHouseholdsComponent},
  { path: 'superhouseholds/create', component: CreateHouseholdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperhouseholdsRoutingModule { }