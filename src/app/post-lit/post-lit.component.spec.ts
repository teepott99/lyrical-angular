import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLitComponent } from './post-lit.component';

describe('PostLitComponent', () => {
  let component: PostLitComponent;
  let fixture: ComponentFixture<PostLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
