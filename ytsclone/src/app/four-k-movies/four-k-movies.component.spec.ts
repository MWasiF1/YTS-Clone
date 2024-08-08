import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourKMoviesComponent } from './four-k-movies.component';

describe('FourKMoviesComponent', () => {
  let component: FourKMoviesComponent;
  let fixture: ComponentFixture<FourKMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourKMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourKMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
