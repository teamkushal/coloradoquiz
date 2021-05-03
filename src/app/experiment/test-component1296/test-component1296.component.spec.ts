import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1296Component } from './test-component1296.component';

describe('TestComponent1296Component', () => {
  let component: TestComponent1296Component;
  let fixture: ComponentFixture<TestComponent1296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
