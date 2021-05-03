import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3004Component } from './test-component3004.component';

describe('TestComponent3004Component', () => {
  let component: TestComponent3004Component;
  let fixture: ComponentFixture<TestComponent3004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
