import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1675Component } from './test-component1675.component';

describe('TestComponent1675Component', () => {
  let component: TestComponent1675Component;
  let fixture: ComponentFixture<TestComponent1675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1675Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
