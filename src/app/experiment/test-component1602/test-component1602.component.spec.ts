import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1602Component } from './test-component1602.component';

describe('TestComponent1602Component', () => {
  let component: TestComponent1602Component;
  let fixture: ComponentFixture<TestComponent1602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1602Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
