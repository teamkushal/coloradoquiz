import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3545Component } from './test-component3545.component';

describe('TestComponent3545Component', () => {
  let component: TestComponent3545Component;
  let fixture: ComponentFixture<TestComponent3545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3545Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
