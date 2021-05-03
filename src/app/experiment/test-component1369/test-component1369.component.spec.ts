import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1369Component } from './test-component1369.component';

describe('TestComponent1369Component', () => {
  let component: TestComponent1369Component;
  let fixture: ComponentFixture<TestComponent1369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
