import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1114Component } from './test-component1114.component';

describe('TestComponent1114Component', () => {
  let component: TestComponent1114Component;
  let fixture: ComponentFixture<TestComponent1114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
