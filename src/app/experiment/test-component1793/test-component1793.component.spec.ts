import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1793Component } from './test-component1793.component';

describe('TestComponent1793Component', () => {
  let component: TestComponent1793Component;
  let fixture: ComponentFixture<TestComponent1793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1793Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
