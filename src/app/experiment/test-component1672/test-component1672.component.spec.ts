import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1672Component } from './test-component1672.component';

describe('TestComponent1672Component', () => {
  let component: TestComponent1672Component;
  let fixture: ComponentFixture<TestComponent1672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1672Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
