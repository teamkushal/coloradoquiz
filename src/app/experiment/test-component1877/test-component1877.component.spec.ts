import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1877Component } from './test-component1877.component';

describe('TestComponent1877Component', () => {
  let component: TestComponent1877Component;
  let fixture: ComponentFixture<TestComponent1877Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1877Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
