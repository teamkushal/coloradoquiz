import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1592Component } from './test-component1592.component';

describe('TestComponent1592Component', () => {
  let component: TestComponent1592Component;
  let fixture: ComponentFixture<TestComponent1592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1592Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
