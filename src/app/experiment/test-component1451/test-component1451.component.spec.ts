import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1451Component } from './test-component1451.component';

describe('TestComponent1451Component', () => {
  let component: TestComponent1451Component;
  let fixture: ComponentFixture<TestComponent1451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1451Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
