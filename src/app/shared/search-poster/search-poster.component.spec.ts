import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPosterComponent } from './search-poster.component';

describe('SearchPosterComponent', () => {
  let component: SearchPosterComponent;
  let fixture: ComponentFixture<SearchPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
