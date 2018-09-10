import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitDetailComponent } from './lit-detail.component';

describe('LitDetailComponent', () => {
  let component: LitDetailComponent;
  let fixture: ComponentFixture<LitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
