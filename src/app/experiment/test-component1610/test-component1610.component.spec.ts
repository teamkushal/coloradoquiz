import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1610Component } from './test-component1610.component';

describe('TestComponent1610Component', () => {
  let component: TestComponent1610Component;
  let fixture: ComponentFixture<TestComponent1610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
