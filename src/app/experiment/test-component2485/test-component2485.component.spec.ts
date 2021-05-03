import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2485Component } from './test-component2485.component';

describe('TestComponent2485Component', () => {
  let component: TestComponent2485Component;
  let fixture: ComponentFixture<TestComponent2485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2485Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
