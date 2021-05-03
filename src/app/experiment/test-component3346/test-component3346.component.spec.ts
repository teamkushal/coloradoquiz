import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3346Component } from './test-component3346.component';

describe('TestComponent3346Component', () => {
  let component: TestComponent3346Component;
  let fixture: ComponentFixture<TestComponent3346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
