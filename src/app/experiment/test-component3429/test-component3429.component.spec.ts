import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3429Component } from './test-component3429.component';

describe('TestComponent3429Component', () => {
  let component: TestComponent3429Component;
  let fixture: ComponentFixture<TestComponent3429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3429Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
