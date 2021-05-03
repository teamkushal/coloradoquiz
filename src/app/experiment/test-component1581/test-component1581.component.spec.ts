import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1581Component } from './test-component1581.component';

describe('TestComponent1581Component', () => {
  let component: TestComponent1581Component;
  let fixture: ComponentFixture<TestComponent1581Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1581Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
