import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3242Component } from './test-component3242.component';

describe('TestComponent3242Component', () => {
  let component: TestComponent3242Component;
  let fixture: ComponentFixture<TestComponent3242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
