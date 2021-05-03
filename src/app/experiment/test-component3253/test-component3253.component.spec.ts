import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3253Component } from './test-component3253.component';

describe('TestComponent3253Component', () => {
  let component: TestComponent3253Component;
  let fixture: ComponentFixture<TestComponent3253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
