import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent774Component } from './test-component774.component';

describe('TestComponent774Component', () => {
  let component: TestComponent774Component;
  let fixture: ComponentFixture<TestComponent774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent774Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
