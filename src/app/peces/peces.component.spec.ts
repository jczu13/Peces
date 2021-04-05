import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecesComponent } from './peces.component';

describe('PecesComponent', () => {
  let component: PecesComponent;
  let fixture: ComponentFixture<PecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
