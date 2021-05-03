import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1669Component } from './test-component1669.component';

describe('TestComponent1669Component', () => {
  let component: TestComponent1669Component;
  let fixture: ComponentFixture<TestComponent1669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1669Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
