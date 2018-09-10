import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitListComponent } from './lit-list.component';

describe('LitListComponent', () => {
  let component: LitListComponent;
  let fixture: ComponentFixture<LitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
