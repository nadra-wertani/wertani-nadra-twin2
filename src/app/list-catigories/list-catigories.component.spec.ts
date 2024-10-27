import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatigoriesComponent } from './list-catigories.component';

describe('ListCatigoriesComponent', () => {
  let component: ListCatigoriesComponent;
  let fixture: ComponentFixture<ListCatigoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCatigoriesComponent]
    });
    fixture = TestBed.createComponent(ListCatigoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
