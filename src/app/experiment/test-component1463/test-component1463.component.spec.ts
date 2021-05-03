import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1463Component } from './test-component1463.component';

describe('TestComponent1463Component', () => {
  let component: TestComponent1463Component;
  let fixture: ComponentFixture<TestComponent1463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1463Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
