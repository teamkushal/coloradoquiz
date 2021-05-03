import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3119Component } from './test-component3119.component';

describe('TestComponent3119Component', () => {
  let component: TestComponent3119Component;
  let fixture: ComponentFixture<TestComponent3119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
