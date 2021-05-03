import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1302Component } from './test-component1302.component';

describe('TestComponent1302Component', () => {
  let component: TestComponent1302Component;
  let fixture: ComponentFixture<TestComponent1302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
