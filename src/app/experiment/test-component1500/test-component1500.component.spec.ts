import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1500Component } from './test-component1500.component';

describe('TestComponent1500Component', () => {
  let component: TestComponent1500Component;
  let fixture: ComponentFixture<TestComponent1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
