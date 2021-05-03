import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1477Component } from './test-component1477.component';

describe('TestComponent1477Component', () => {
  let component: TestComponent1477Component;
  let fixture: ComponentFixture<TestComponent1477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1477Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
