import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHouseholdsComponent } from './search-households.component';

describe('SearchHouseholdsComponent', () => {
  let component: SearchHouseholdsComponent;
  let fixture: ComponentFixture<SearchHouseholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHouseholdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHouseholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
