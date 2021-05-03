import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3098Component } from './test-component3098.component';

describe('TestComponent3098Component', () => {
  let component: TestComponent3098Component;
  let fixture: ComponentFixture<TestComponent3098Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3098Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
