import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1824Component } from './test-component1824.component';

describe('TestComponent1824Component', () => {
  let component: TestComponent1824Component;
  let fixture: ComponentFixture<TestComponent1824Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1824Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
