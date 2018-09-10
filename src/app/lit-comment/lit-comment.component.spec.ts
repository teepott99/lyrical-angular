import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitCommentComponent } from './lit-comment.component';

describe('LitCommentComponent', () => {
  let component: LitCommentComponent;
  let fixture: ComponentFixture<LitCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
