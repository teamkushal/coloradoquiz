import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1560Component } from './test-component1560.component';

describe('TestComponent1560Component', () => {
  let component: TestComponent1560Component;
  let fixture: ComponentFixture<TestComponent1560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1560Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
