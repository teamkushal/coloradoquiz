import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent506Component } from './test-component506.component';

describe('TestComponent506Component', () => {
  let component: TestComponent506Component;
  let fixture: ComponentFixture<TestComponent506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent506Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
