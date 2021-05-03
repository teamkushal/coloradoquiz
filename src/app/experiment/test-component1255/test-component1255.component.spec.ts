import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1255Component } from './test-component1255.component';

describe('TestComponent1255Component', () => {
  let component: TestComponent1255Component;
  let fixture: ComponentFixture<TestComponent1255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
