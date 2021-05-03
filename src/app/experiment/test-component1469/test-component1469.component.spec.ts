import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1469Component } from './test-component1469.component';

describe('TestComponent1469Component', () => {
  let component: TestComponent1469Component;
  let fixture: ComponentFixture<TestComponent1469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1469Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
