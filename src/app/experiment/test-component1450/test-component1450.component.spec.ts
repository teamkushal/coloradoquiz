import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1450Component } from './test-component1450.component';

describe('TestComponent1450Component', () => {
  let component: TestComponent1450Component;
  let fixture: ComponentFixture<TestComponent1450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1450Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
