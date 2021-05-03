import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1301Component } from './test-component1301.component';

describe('TestComponent1301Component', () => {
  let component: TestComponent1301Component;
  let fixture: ComponentFixture<TestComponent1301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
