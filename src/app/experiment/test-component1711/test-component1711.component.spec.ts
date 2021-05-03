import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1711Component } from './test-component1711.component';

describe('TestComponent1711Component', () => {
  let component: TestComponent1711Component;
  let fixture: ComponentFixture<TestComponent1711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1711Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
