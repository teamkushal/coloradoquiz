import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1095Component } from './test-component1095.component';

describe('TestComponent1095Component', () => {
  let component: TestComponent1095Component;
  let fixture: ComponentFixture<TestComponent1095Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1095Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
