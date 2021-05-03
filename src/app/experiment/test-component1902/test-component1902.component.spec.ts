import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1902Component } from './test-component1902.component';

describe('TestComponent1902Component', () => {
  let component: TestComponent1902Component;
  let fixture: ComponentFixture<TestComponent1902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1902Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
