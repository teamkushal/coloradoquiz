import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3584Component } from './test-component3584.component';

describe('TestComponent3584Component', () => {
  let component: TestComponent3584Component;
  let fixture: ComponentFixture<TestComponent3584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3584Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
