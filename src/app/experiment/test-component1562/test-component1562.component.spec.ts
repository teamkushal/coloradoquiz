import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1562Component } from './test-component1562.component';

describe('TestComponent1562Component', () => {
  let component: TestComponent1562Component;
  let fixture: ComponentFixture<TestComponent1562Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1562Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
