import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1323Component } from './test-component1323.component';

describe('TestComponent1323Component', () => {
  let component: TestComponent1323Component;
  let fixture: ComponentFixture<TestComponent1323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1323Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
