import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1061Component } from './test-component1061.component';

describe('TestComponent1061Component', () => {
  let component: TestComponent1061Component;
  let fixture: ComponentFixture<TestComponent1061Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1061Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
