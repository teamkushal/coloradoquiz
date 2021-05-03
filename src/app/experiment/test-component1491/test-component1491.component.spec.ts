import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1491Component } from './test-component1491.component';

describe('TestComponent1491Component', () => {
  let component: TestComponent1491Component;
  let fixture: ComponentFixture<TestComponent1491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1491Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
