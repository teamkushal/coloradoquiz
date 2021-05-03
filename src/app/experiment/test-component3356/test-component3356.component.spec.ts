import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3356Component } from './test-component3356.component';

describe('TestComponent3356Component', () => {
  let component: TestComponent3356Component;
  let fixture: ComponentFixture<TestComponent3356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
