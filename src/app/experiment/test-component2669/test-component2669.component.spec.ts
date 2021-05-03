import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2669Component } from './test-component2669.component';

describe('TestComponent2669Component', () => {
  let component: TestComponent2669Component;
  let fixture: ComponentFixture<TestComponent2669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2669Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
