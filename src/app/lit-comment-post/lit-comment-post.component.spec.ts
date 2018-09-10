import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitCommentPostComponent } from './lit-comment-post.component';

describe('LitCommentPostComponent', () => {
  let component: LitCommentPostComponent;
  let fixture: ComponentFixture<LitCommentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitCommentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitCommentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
