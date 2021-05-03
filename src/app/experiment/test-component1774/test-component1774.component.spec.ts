import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1774Component } from './test-component1774.component';

describe('TestComponent1774Component', () => {
  let component: TestComponent1774Component;
  let fixture: ComponentFixture<TestComponent1774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1774Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
