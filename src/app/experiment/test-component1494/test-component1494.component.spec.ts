import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1494Component } from './test-component1494.component';

describe('TestComponent1494Component', () => {
  let component: TestComponent1494Component;
  let fixture: ComponentFixture<TestComponent1494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1494Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
