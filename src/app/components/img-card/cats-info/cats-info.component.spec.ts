import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInfoComponent } from './cats-info.component';

describe('CatsInfoComponent', () => {
  let component: CatsInfoComponent;
  let fixture: ComponentFixture<CatsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsInfoComponent]
    });
    fixture = TestBed.createComponent(CatsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
