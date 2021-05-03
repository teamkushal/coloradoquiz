import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3325Component } from './test-component3325.component';

describe('TestComponent3325Component', () => {
  let component: TestComponent3325Component;
  let fixture: ComponentFixture<TestComponent3325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
