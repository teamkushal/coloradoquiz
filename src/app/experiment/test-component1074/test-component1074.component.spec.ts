import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1074Component } from './test-component1074.component';

describe('TestComponent1074Component', () => {
  let component: TestComponent1074Component;
  let fixture: ComponentFixture<TestComponent1074Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1074Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
