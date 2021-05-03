import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3409Component } from './test-component3409.component';

describe('TestComponent3409Component', () => {
  let component: TestComponent3409Component;
  let fixture: ComponentFixture<TestComponent3409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
