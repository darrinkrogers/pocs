import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { SuperhouseholdsRoutingModule } from './superhouseholds-routing.module';
import { SearchHouseholdsComponent } from './components/search-households/search-households.component';
import { CreateHouseholdComponent } from './components/create-household/create-household.component';

@NgModule({
  declarations: [
    SearchHouseholdsComponent,
    CreateHouseholdComponent
  ],
  imports: [
    CommonModule,
    SuperhouseholdsRoutingModule,
    FormsModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ]
})
export class SuperhouseholdsModule { }
