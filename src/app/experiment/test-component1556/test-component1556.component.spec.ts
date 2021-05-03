import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1556Component } from './test-component1556.component';

describe('TestComponent1556Component', () => {
  let component: TestComponent1556Component;
  let fixture: ComponentFixture<TestComponent1556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1556Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
