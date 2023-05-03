import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { SuperHouseholdMocks } from '../../models/superhousehold.mocks';
import { SuperHouseHoldModel } from '../../models/superhousehold.model';

@Component({
  selector: 'app-search-households',
  templateUrl: './search-households.component.html',
  styleUrls: ['./search-households.component.css']
})
export class SearchHouseholdsComponent {

  superHouseholds:SuperHouseHoldModel[] = SuperHouseholdMocks.TEST_OBJ_ARRAY;
  superHouseholdsDataSource = new MatTableDataSource(this.superHouseholds);
  displayedColumns = ['displayName', 'id', 'editLink'];

  @ViewChild(MatSort, { static: true }) matSort: MatSort = new MatSort();

  ngAfterViewInit(): void {
      this.superHouseholdsDataSource.sort = this.matSort;
  }
  
  createSuperHousehold() {
    console.log('createSuperHousehold()');
  }
}
