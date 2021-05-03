import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2299Component } from './test-component2299.component';

describe('TestComponent2299Component', () => {
  let component: TestComponent2299Component;
  let fixture: ComponentFixture<TestComponent2299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
