import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1670Component } from './test-component1670.component';

describe('TestComponent1670Component', () => {
  let component: TestComponent1670Component;
  let fixture: ComponentFixture<TestComponent1670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1670Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
