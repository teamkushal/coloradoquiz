import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1682Component } from './test-component1682.component';

describe('TestComponent1682Component', () => {
  let component: TestComponent1682Component;
  let fixture: ComponentFixture<TestComponent1682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1682Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
