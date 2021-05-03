import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1072Component } from './test-component1072.component';

describe('TestComponent1072Component', () => {
  let component: TestComponent1072Component;
  let fixture: ComponentFixture<TestComponent1072Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1072Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
