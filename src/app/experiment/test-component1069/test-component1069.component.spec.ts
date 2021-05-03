import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1069Component } from './test-component1069.component';

describe('TestComponent1069Component', () => {
  let component: TestComponent1069Component;
  let fixture: ComponentFixture<TestComponent1069Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1069Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
