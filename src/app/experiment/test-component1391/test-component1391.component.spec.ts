import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1391Component } from './test-component1391.component';

describe('TestComponent1391Component', () => {
  let component: TestComponent1391Component;
  let fixture: ComponentFixture<TestComponent1391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
