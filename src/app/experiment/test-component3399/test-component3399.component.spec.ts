import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3399Component } from './test-component3399.component';

describe('TestComponent3399Component', () => {
  let component: TestComponent3399Component;
  let fixture: ComponentFixture<TestComponent3399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3399Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
