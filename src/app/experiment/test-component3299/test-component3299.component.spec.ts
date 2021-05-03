import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3299Component } from './test-component3299.component';

describe('TestComponent3299Component', () => {
  let component: TestComponent3299Component;
  let fixture: ComponentFixture<TestComponent3299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
